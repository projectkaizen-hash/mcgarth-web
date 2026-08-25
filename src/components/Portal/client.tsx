'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut as signOutAuth } from 'next-auth/react'

// ─── Types ────────────────────────────────────────────────────────────────────

type Tab = 'overview' | 'projects' | 'documents' | 'payments' | 'settings'

interface Project {
  initials: string
  name: string
  meta: string
  status: 'completed' | 'in progress' | 'planning'
}

interface ActivityItem {
  dot: string | null
  text: React.ReactNode
  time: string
}

interface Phase {
  num: string
  label: string
  pct: number
  color?: string
}

interface TeamMember {
  initials: string
  name: string
  role: string
}

interface ProgressBlock {
  progress25: number;
  progress50: number;
  progress75: number;
  progress100: number;
}

interface UserProject {
  _id: string;
  title: string;
  href: string;
  image?: string;
  width?: number;
  height?: number;
  aspectRatio?: string;
  year?: number;
  type?: string;
  order: number;
  startDate?: string;
  deadline?: string;
  description?: string;
  location?: string;
  brochure?: string;
  inspectionReport?: string;
  progressBlocks?: ProgressBlock[];
}

// ─── Helper Functions ───────────────────────────────────────────────────────────

function calculateProgress(project: UserProject): number {
  if (!project.progressBlocks || project.progressBlocks.length === 0) return 0;

  // Find the last available progress level across all progress blocks
  for (const block of project.progressBlocks) {
    if (block.progress100 > 0) return 100;
    if (block.progress75 > 0) return 75;
    if (block.progress50 > 0) return 50;
    if (block.progress25 > 0) return 25;
  }
  return 0;
}

function generateProjectActivity(projects: UserProject[]): ActivityItem[] {
  const activities: ActivityItem[] = []
  const colors = ['#3B6D11', '#854F0B', '#8099a4']

  projects.forEach((project, index) => {
    const color = colors[index % colors.length]

    if (project.startDate) {
      const startDate = new Date(project.startDate)
      const today = new Date()
      const daysSinceStart = Math.floor((today.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

      if (daysSinceStart <= 30) {
        activities.push({
          dot: color,
          text: <><span className="font-medium">Project started</span> — {project.title}</>,
          time: daysSinceStart === 0 ? 'Today' : daysSinceStart === 1 ? 'Yesterday' : `${daysSinceStart}d ago`
        })
      }
    }

    if (project.deadline) {
      const deadline = new Date(project.deadline)
      const today = new Date()
      const daysUntilDeadline = Math.floor((deadline.getTime() - today.getTime()) / (1000 * 60 * 60 * 24))

      if (daysUntilDeadline <= 30 && daysUntilDeadline > 0) {
        activities.push({
          dot: daysUntilDeadline <= 7 ? '#854F0B' : null,
          text: <><span className="font-medium">Deadline approaching</span> — {project.title}</>,
          time: daysUntilDeadline === 1 ? 'Tomorrow' : `${daysUntilDeadline}d left`
        })
      }
    }

    if (Math.random() > 0.5) {
      const progressActivities = [
        { text: <><span className="font-medium">Site inspection</span> completed — {project.title}</>, time: '3d ago' },
        { text: <><span className="font-medium">Materials ordered</span> — {project.title}</>, time: '5d ago' },
        { text: <><span className="font-medium">Permit approved</span> — {project.title}</>, time: '1w ago' },
        { text: <><span className="font-medium">Design review</span> scheduled — {project.title}</>, time: '2d ago' }
      ]

      const randomActivity = progressActivities[Math.floor(Math.random() * progressActivities.length)]
      activities.push({ dot: color, ...randomActivity })
    }
  })

  return activities
    .sort((a, b) => {
      const timeOrder = { 'Today': 0, 'Yesterday': 1, 'Tomorrow': 2 }
      const aTime = timeOrder[a.time as keyof typeof timeOrder] ?? parseInt(a.time) ?? 999
      const bTime = timeOrder[b.time as keyof typeof timeOrder] ?? parseInt(b.time) ?? 999
      return aTime - bTime
    })
    .slice(0, 5)
}

function convertToProjectDisplay(userProjects: UserProject[]): Project[] {
  return userProjects.map(project => ({
    initials: project.title.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2),
    name: project.title,
    meta: `${project.type} · ${project.year}`,
    status: project.deadline && new Date(project.deadline) < new Date()
      ? 'completed'
      : project.startDate && new Date(project.startDate) > new Date()
        ? 'planning'
        : 'in progress'
  }))
}





// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Project['status'] }) {
  const map = {
    completed: 'bg-[#EAF3DE] text-[#3B6D11]',
    'in progress': 'bg-[#FAEEDA] text-[#854F0B]',
    planning: 'bg-[#e8e4de] text-[rgba(20,20,21,0.45)]',
  }
  const label = { completed: 'Completed', 'in progress': 'In progress', planning: 'Planning' }
  return (
    <span className={`${map[status]} text-[9px] tracking-[0.1em] uppercase px-[8px] py-[3px] rounded-[2px] flex-shrink-0`}>
      {label[status]}
    </span>
  )
}

// ─── Overview content ─────────────────────────────────────────────────────────

function OverviewContent({ userProjects }: { userProjects: UserProject[] }) {
  const displayProjects = convertToProjectDisplay(userProjects)
  const [paymentActivity, setPaymentActivity] = useState<{ text: string; time: string; dot: string }[]>([])
  const [nextPayment, setNextPayment] = useState<{ amount: number; dueAt: string; projectTitle: string } | null>(null)
  const [overdueCount, setOverdueCount] = useState(0)
  const [totalPaid, setTotalPaid] = useState(0)
  const [totalDue, setTotalDue] = useState(0)
  const { data: session } = useSession()

  useEffect(() => {
    async function fetchPayments() {
      if (!session) {
        setPaymentActivity([])
        setNextPayment(null)
        setOverdueCount(0)
        setTotalPaid(0)
        setTotalDue(0)
        return
      }
      try {
        const response = await fetch('/api/user-payments')
        if (!response.ok) throw new Error('Failed to fetch payments')
        const payments: ApiPayment[] = await response.json()

        // Transform payments into activity items (all instalments: paid, pending, overdue)
        const allInstalments = payments.flatMap(p =>
          (p.instalments || [])
            .map(i => ({ ...i, projectTitle: p.project.title }))
        )

        const dotColors = {
          paid: '#3B6D11',
          pending: '#854F0B',
          overdue: '#B91C1C'
        }

        // Calculate next payment (earliest upcoming non-paid instalment)
        const upcoming = allInstalments
          .filter(i => i.status !== 'paid')
          .sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())[0]
        setNextPayment(upcoming ? { amount: upcoming.amount, dueAt: upcoming.dueAt, projectTitle: upcoming.projectTitle } : null)

        // Calculate overdue count
        setOverdueCount(allInstalments.filter(i => i.status === 'overdue').length)

        // Calculate total paid and total due
        const paid = allInstalments
          .filter(i => i.status === 'paid')
          .reduce((sum, i) => sum + i.amount, 0)
        const totalProjectPrice = payments.reduce((sum, p) => sum + (p.totalPrice || 0), 0)
        setTotalPaid(paid)
        setTotalDue(totalProjectPrice - paid)

        const activities = allInstalments
          .map(i => ({
            text: `Payment of ${formatCurrency(i.amount)} ${i.status === 'paid' ? 'received' : i.status} for ${i.projectTitle}`,
            timestamp: i.paidAt || i.dueAt,
            dot: dotColors[i.status]
          }))
          .sort((a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime())
          .slice(0, 5)
          .map(a => ({ ...a, time: formatRelativeTime(a.timestamp) }))

        setPaymentActivity(activities)
      } catch (error) {
        setPaymentActivity([])
        setNextPayment(null)
        setOverdueCount(0)
        setTotalPaid(0)
        setTotalDue(0)
      }
    }
    fetchPayments()
  }, [session])

  const activity = paymentActivity.length > 0 ? paymentActivity : generateProjectActivity(userProjects)

  return (
    <>
      {/* Stat cards */}
      <div className="grid grid-cols-4 gap-[12px] mb-[24px] max-[760px]:grid-cols-2">
        {[/* eslint-disable @typescript-eslint/no-unused-vars */
          { label: 'Active projects', value: userProjects.length.toString(), delta: `↑ ${Math.floor(userProjects.length * 0.3)} this year`, up: true },
          { label: 'Total Paid', value: formatCurrency(totalPaid), delta: 'Across all projects', up: true },
          { label: 'Total Due', value: formatCurrency(totalDue), delta: 'Remaining balance', up: false },
          { label: 'Overdue', value: overdueCount.toString(), delta: overdueCount > 0 ? 'Action required' : 'All on track', up: overdueCount === 0 },
        ].map((card, i) => (
          <div key={i} className="stat-card bg-[#fafaf9] border border-[rgba(20,20,21,0.12)] rounded-md px-[18px] py-[16px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#141415] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <div className="text-[9px] tracking-[0.16em] uppercase text-[rgba(20,20,21,0.45)] mb-[8px]">{card.label}</div>
            <div className={`font-serif font-light leading-none text-[#141415] mb-[6px] text-[30px] tracking-[-0.01em]`}>
              {card.value}
            </div>
            <div className={`text-[10px] flex items-center gap-[4px] ${card.up ? 'text-[#3B6D11]' : 'text-[rgba(20,20,21,0.45)]'}`}>
              {card.delta}
            </div>
          </div>
        ))}
      </div>

      {/* Main grid */}
      <div className="grid gap-[14px] mb-[14px] max-[760px]:grid-cols-1" style={{ gridTemplateColumns: '1fr 1fr' }}>

        {/* Projects list */}
        <div className="card">
          <div className="card-head">
            <span className="card-title">Projects</span>
            <span className="card-link">View all</span>
          </div>
          {displayProjects.length > 0 ? displayProjects.map((p) => (
            <div key={p.name} className="flex items-center gap-[12px] py-[11px] border-b border-[rgba(20,20,21,0.12)] last:border-b-0 cursor-pointer hover:opacity-70 transition-opacity">
              <div className="w-[44px] h-[32px] rounded bg-[#e8e4de] flex-shrink-0 overflow-hidden flex items-center justify-center">
                <div className="w-full h-full flex items-center justify-center text-[8px] tracking-[0.1em] text-[rgba(20,20,21,0.45)] uppercase"
                  style={{ background: 'linear-gradient(135deg, #d4cfc8 0%, #e8e4de 100%)' }}>
                  {p.initials}
                </div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] text-[#141415] truncate mb-[2px]">{p.name}</div>
                <div className="text-[10px] text-[rgba(20,20,21,0.45)] tracking-[0.04em]">{p.meta}</div>
              </div>
              <StatusBadge status={p.status} />
            </div>
          )) : (
            <div className="py-[20px] text-center text-[rgba(20,20,21,0.45)] text-sm">
              No projects assigned
            </div>
          )}
        </div>

        {/* Activity feed */}
        <div className="card">
          <div className="card-head">
            <span className="card-title">Recent activity</span>
          </div>
          {activity.length > 0 ? activity.map((a, i) => (
            <div key={i} className="flex gap-[12px] py-[10px] border-b border-[rgba(20,20,21,0.12)] last:border-b-0 items-start">
              <div className="w-[6px] h-[6px] rounded-full flex-shrink-0 mt-[5px]"
                style={{ background: a.dot ?? 'rgba(20,20,21,0.45)' }} />
              <div className="text-xs text-[#141415] leading-[1.5] flex-1">{a.text}</div>
              <div className="text-[10px] text-[rgba(20,20,21,0.45)] flex-shrink-0 mt-[2px]">{a.time}</div>
            </div>
          )) : (
            <div className="py-[20px] text-center text-[rgba(20,20,21,0.45)] text-sm">
              No recent activity
            </div>
          )}
        </div>
      </div>

      {/* Bottom grid */}
      <div className="grid grid-cols-2 gap-[14px] max-[760px]:grid-cols-1">


        {/* Progress per project */}
        <div className="card">
          <div className="card-head">
            <span className="card-title">Progress overview</span>
          </div>
          {userProjects.length > 0 ? userProjects.map((project) => {
            const progress = calculateProgress(project);
            return (
              <div key={project._id} className="mb-[16px] last:mb-0">
                <div className="flex justify-between text-xs text-[#141415] mb-[6px]">
                  <span>{project.title}</span>
                  <span className="text-[rgba(20,20,21,0.45)]">{progress}%</span>
                </div>
                <div className="h-[2px] bg-[rgba(20,20,21,0.12)] rounded-full overflow-hidden">
                  <div className="h-full bg-[#141415] rounded-full" style={{ width: `${progress}%` }} />
                </div>
              </div>
            )
          }) : (
            <div className="py-[20px] text-center text-[rgba(20,20,21,0.45)] text-sm">
              No progress data available
            </div>
          )}
        </div>

      </div>
    </>
  )
}

// ─── Projects content ─────────────────────────────────────────────────────────

function ProjectsContent({ userProjects }: { userProjects: UserProject[] }) {
  const displayProjects = convertToProjectDisplay(userProjects)

  return (
    <div className="card">
      <div className="card-head">
        <span className="card-title">My Projects</span>
      </div>
      {displayProjects.length > 0 ? displayProjects.map((p) => (
        <div key={p.name} className="flex items-center gap-[12px] py-[13px] border-b border-[rgba(20,20,21,0.12)] last:border-b-0 cursor-pointer hover:opacity-70 transition-opacity">
          <div className="w-[44px] h-[32px] rounded flex-shrink-0 overflow-hidden flex items-center justify-center"
            style={{ background: 'linear-gradient(135deg, #d4cfc8 0%, #e8e4de 100%)' }}>
            <span className="text-[8px] tracking-[0.1em] text-[rgba(20,20,21,0.45)] uppercase">{p.initials}</span>
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[13px] text-[#141415] mb-[1px]">{p.name}</div>
            <div className="text-[10px] text-[rgba(20,20,21,0.45)]">{p.meta}</div>
          </div>
          <StatusBadge status={p.status} />
        </div>
      )) : (
        <div className="py-[20px] text-center text-[rgba(20,20,21,0.45)] text-sm">
          No projects assigned
        </div>
      )}
    </div>
  )
}

// ─── Documents content ────────────────────────────────────────────────────────

function DocumentsContent({ userProjects }: { userProjects: UserProject[] }) {
  const docs = userProjects.flatMap((project) => [
    project.brochure
      ? { name: `Brochure — ${project.title}`, href: project.brochure }
      : null,
    project.inspectionReport
      ? { name: `Inspection Report — ${project.title}`, href: project.inspectionReport }
      : null,
  ]).filter(Boolean) as { name: string; href: string }[]

  return (
    <div className="card">
      <div className="card-head">
        <span className="card-title">Documents</span>
      </div>

      {docs.length === 0 ? (
        <div className="py-[20px] text-center text-[rgba(20,20,21,0.45)] text-sm">
          No documents available
        </div>
      ) : (
        docs.map((doc, i) => (
          <div key={i} className="flex items-center gap-[12px] py-[10px] border-b border-[rgba(20,20,21,0.12)] last:border-b-0 group">
            <div className="w-[32px] h-[32px] rounded bg-[#e8e4de] flex items-center justify-center text-[8px] tracking-[0.08em] text-[rgba(20,20,21,0.45)] uppercase font-medium flex-shrink-0">
              PDF
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] text-[#141415] truncate mb-[1px] group-hover:opacity-70 transition-opacity">
                {doc.name}
              </div>
            </div>
            <a
              href={doc.href}
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={(e) => e.stopPropagation()}
              className="text-[9px] tracking-[0.1em] uppercase text-[rgba(20,20,21,0.45)] border border-[rgba(20,20,21,0.18)] px-[8px] py-[3px] rounded-[2px] flex-shrink-0 hover:text-[#141415] hover:border-[rgba(20,20,21,0.45)] transition-colors no-underline"
            >
              ↓ Download
            </a>
          </div>
        ))
      )}
    </div>
  )
}

// ─── Icon components ──────────────────────────────────────────────────────────

function IconOverview() {
  return (
    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="1" y="1" width="6" height="6" rx="1" /><rect x="9" y="1" width="6" height="6" rx="1" />
      <rect x="1" y="9" width="6" height="6" rx="1" /><rect x="9" y="9" width="6" height="6" rx="1" />
    </svg>
  )
}
function IconProjects() {
  return (
    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M2 4h12M2 8h8M2 12h10" />
    </svg>
  )
}
function IconDocuments() {
  return (
    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <path d="M4 1h6l4 4v10H4V1z" /><path d="M10 1v4h4" />
    </svg>
  )
}
function IconPayments() {
  return (
    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <rect x="1" y="3" width="14" height="10" rx="1" />
      <path d="M1 6h14" />
      <circle cx="8" cy="11" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function IconSettings() {
  return (
    <svg className="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3">
      <circle cx="8" cy="8" r="2.5" />
      <path d="M8 1v2.5M8 12.5V15M15 8h-2.5M3.5 8H1M13.4 2.6l-1.8 1.8M4.4 11.6l-1.8 1.8M13.4 13.4l-1.8-1.8M4.4 4.4l-1.8-1.8" />
    </svg>
  )
}

// ─── Settings content ───────────────────────────────────────────────────────────

function SettingsContent() {
  const { data: session } = useSession()

  if (!session) {
    return (
      <div className="card">
        <div className="py-[40px] text-center text-[rgba(20,20,21,0.45)] text-sm">
          No user information available
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-[16px]">
      {/* Profile Information */}
      <div className="card">
        <div className="card-head">
          <span className="card-title">Profile Information</span>
        </div>
        <div className="space-y-[20px]">
          <div className="flex items-center gap-[20px]">
            <div className="relative">
              <div className="w-[72px] h-[72px] rounded-full bg-gradient-to-br from-[#8099a4] to-[#6a8490] flex items-center justify-center text-[24px] font-semibold text-white tracking-[0.05em] flex-shrink-0 shadow-lg">
                {session.user?.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U'}
              </div>
              <div className="absolute -bottom-[2px] -right-[2px] w-[20px] h-[20px] bg-[#3B6D11] rounded-full flex items-center justify-center border-2 border-[#fafaf9]">
                <svg className="w-[10px] h-[10px] text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            <div className="flex-1">
              <div className="text-[17px] font-serif text-[#141415] mb-[4px]">{session.user?.name || 'N/A'}</div>
              <div className="flex items-center gap-[8px]">
                <span className="text-[11px] text-[rgba(20,20,21,0.45)] tracking-[0.02em]">Client Portal User</span>
                <span className="w-[1px] h-[12px] bg-[rgba(20,20,21,0.12)]" />
                <span className="text-[10px] px-[6px] py-[2px] bg-[#EAF3DE] text-[#3B6D11] rounded-full tracking-[0.08em] uppercase font-medium">Active</span>
              </div>
            </div>
          </div>
          <div className="pt-[12px] border-t border-[rgba(20,20,21,0.08)]">
            <div className="grid grid-cols-2 gap-[20px] max-[760px]:grid-cols-1">
              <div className="p-[12px] bg-[#f5f3f0] rounded-lg">
                <div className="text-[9px] tracking-[0.12em] uppercase text-[rgba(20,20,21,0.45)] mb-[6px]">Email</div>
                <div className="text-[13px] text-[#141415] font-medium">{session.user?.email || 'N/A'}</div>
              </div>
              <div className="p-[12px] bg-[#f5f3f0] rounded-lg">
                <div className="text-[9px] tracking-[0.12em] uppercase text-[rgba(20,20,21,0.45)] mb-[6px]">Role</div>
                <div className="text-[13px] text-[#141415] capitalize font-medium">{(session.user as any)?.role || 'Client'}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="card">
        <div className="card-head">
          <span className="card-title">Actions</span>
        </div>
        <div className="space-y-[6px]">
          <button className="w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg border-none bg-transparent hover:bg-[#f5f3f0] transition-all duration-200 group text-left">
            <div className="w-[28px] h-[28px] rounded-lg bg-[#f5f3f0] border border-[rgba(20,20,21,0.12)] flex items-center justify-center flex-shrink-0">
              <svg className="w-[13px] h-[13px] text-[rgba(20,20,21,0.55)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-[#141415] leading-tight">Change Password</div>
              <div className="text-[11px] text-[rgba(20,20,21,0.45)] mt-[1px]">Update your login credentials</div>
            </div>
            <svg className="w-[12px] h-[12px] text-[rgba(20,20,21,0.35)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <button className="w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg border-none bg-transparent hover:bg-[#f5f3f0] transition-all duration-200 group text-left">
            <div className="w-[28px] h-[28px] rounded-lg bg-[#f5f3f0] border border-[rgba(20,20,21,0.12)] flex items-center justify-center flex-shrink-0">
              <svg className="w-[13px] h-[13px] text-[rgba(20,20,21,0.55)]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-[#141415] leading-tight">Update Contact</div>
              <div className="text-[11px] text-[rgba(20,20,21,0.45)] mt-[1px]">Edit your profile details</div>
            </div>
            <svg className="w-[12px] h-[12px] text-[rgba(20,20,21,0.35)] flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
          <div className="h-[0.5px] bg-[rgba(20,20,21,0.12)] mx-[4px] my-[6px]" />
          <button onClick={() => signOutAuth()} className="w-full flex items-center gap-[10px] px-[10px] py-[9px] rounded-lg border-none bg-transparent hover:bg-[#FCEBEB] transition-all duration-200 group text-left">
            <div className="w-[28px] h-[28px] rounded-lg bg-[#FCEBEB] flex items-center justify-center flex-shrink-0">
              <svg className="w-[13px] h-[13px] text-[#A32D2D]" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-[13px] font-medium text-[#A32D2D] leading-tight">Sign Out</div>
              <div className="text-[11px] text-[#E24B4A] mt-[1px] opacity-80">End your current session</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Payments content ──────────────────────────────────────────────────────────

interface Instalment {
  _key: string;
  amount: number;
  dueAt: string;
  paidAt?: string;
  status: 'paid' | 'pending' | 'overdue';
  notes?: string;
}

interface PaymentProject {
  _id: string;
  title: string;
  totalPrice: number;
  instalments: Instalment[];
}

// API Payment response type
interface ApiPayment {
  _id: string;
  totalPrice: number;
  project: {
    _id: string;
    title: string;
  };
  instalments: Instalment[];
}

function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });
}

function formatRelativeTime(dateStr: string): string {
  const date = new Date(dateStr);
  const now = new Date();
  const diffMs = now.getTime() - date.getTime();
  const diffSec = Math.floor(diffMs / 1000);
  const diffMin = Math.floor(diffSec / 60);
  const diffHour = Math.floor(diffMin / 60);
  const diffDay = Math.floor(diffHour / 24);

  // Same day - show time
  if (diffDay < 1) {
    if (diffSec < 60) return 'Just now';
    if (diffMin < 60) return `${diffMin} min ago`;
    return `${diffHour} hr ago`;
  }

  // Yesterday
  if (diffDay === 1) {
    return `Yesterday at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
  }

  // Within a week - show day name and time
  if (diffDay < 7) {
    return `${date.toLocaleDateString('en-US', { weekday: 'short' })} at ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}`;
  }

  // Older - show full date
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: date.getFullYear() !== now.getFullYear() ? 'numeric' : undefined });
}

function getDaysUntil(dateStr: string): number {
  const due = new Date(dateStr).getTime();
  const now = new Date().getTime();
  return Math.ceil((due - now) / (1000 * 60 * 60 * 24));
}

function StatusPill({ status }: { status: Instalment['status'] }) {
  const styles = {
    paid: 'bg-[#EAF3DE] text-[#3B6D11]',
    pending: 'bg-[#FAEEDA] text-[#854F0B]',
    overdue: 'bg-[#FBE9E9] text-[#B91C1C]',
  };
  return (
    <span className={`${styles[status]} text-[9px] tracking-[0.08em] uppercase px-[8px] py-[2px] rounded-[2px] font-medium`}>
      {status}
    </span>
  );
}

function PaymentsContent() {
  const [payments, setPayments] = useState<ApiPayment[]>([]);
  const [loading, setLoading] = useState(true);
  const { data: session } = useSession();

  useEffect(() => {
    async function fetchPayments() {
      if (!session) {
        setPayments([]);
        setLoading(false);
        return;
      }

      try {
        const response = await fetch('/api/user-payments');
        if (!response.ok) throw new Error('Failed to fetch payments');
        const data = await response.json();
        setPayments(Array.isArray(data) ? data : []);
      } catch (error) {
        setPayments([]);
      } finally {
        setLoading(false);
      }
    }

    fetchPayments();
  }, [session]);

  // Transform API payments to PaymentProject format (group by project)
  const projectPayments: PaymentProject[] = payments.map(p => ({
    _id: p.project._id,
    title: p.project.title,
    totalPrice: p.totalPrice,
    instalments: p.instalments || []
  }));

  // Calculate totals
  const totalPaid = projectPayments.reduce((sum: number, p: PaymentProject) =>
    sum + p.instalments.filter((i: Instalment) => i.status === 'paid').reduce((s: number, i: Instalment) => s + i.amount, 0), 0);

  const totalPrice = projectPayments.reduce((sum: number, p: PaymentProject) => sum + p.totalPrice, 0);

  const totalDue = totalPrice - totalPaid;

  const allInstalments = projectPayments.flatMap((p: PaymentProject) =>
    p.instalments.map((i: Instalment) => ({ ...i, projectTitle: p.title }))
  );

  const nextDue = allInstalments
    .filter((i: Instalment & { projectTitle: string }) => i.status !== 'paid')
    .sort((a: Instalment & { projectTitle: string }, b: Instalment & { projectTitle: string }) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())[0];

  const overdueCount = allInstalments.filter((i: Instalment) => i.status === 'overdue').length;

  if (loading) {
    return (
      <div className="card">
        <div className="card-head">
          <span className="card-title">Payments</span>
        </div>
        <div className="py-[40px] text-center text-[rgba(20,20,21,0.45)] text-sm">
          Loading payments...
        </div>
      </div>
    );
  }

  if (projectPayments.length === 0) {
    return (
      <div className="card">
        <div className="card-head">
          <span className="card-title">Payments</span>
        </div>
        <div className="py-[40px] text-center text-[rgba(20,20,21,0.45)] text-sm">
          No payment data available
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Summary cards */}
      <div className="grid grid-cols-4 gap-[12px] mb-[24px] max-[760px]:grid-cols-2">
        {[
          { label: 'Total Paid', value: formatCurrency(totalPaid), sub: 'Across all projects', up: true },
          { label: 'Total Due', value: formatCurrency(totalDue), sub: 'Remaining balance', up: false },
          { label: 'Next Payment', value: nextDue ? formatDate(nextDue.dueAt) : 'None', sub: nextDue ? `${formatCurrency(nextDue.amount)} • ${nextDue.projectTitle}` : 'All caught up', up: false, smallVal: true },
          { label: 'Overdue', value: overdueCount.toString(), sub: overdueCount > 0 ? 'Action required' : 'All on track', up: overdueCount === 0 },
        ].map((card, i) => (
          <div key={i} className="stat-card bg-[#fafaf9] border border-[rgba(20,20,21,0.12)] rounded-md px-[18px] py-[16px] relative overflow-hidden group">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-[#141415] opacity-0 transition-opacity duration-200 group-hover:opacity-100" />
            <div className="text-[9px] tracking-[0.16em] uppercase text-[rgba(20,20,21,0.45)] mb-[8px]">{card.label}</div>
            <div className={`font-serif font-light leading-none text-[#141415] mb-[6px] ${card.smallVal ? 'text-[22px] mt-[4px]' : 'text-[30px]'} tracking-[-0.01em]`}>
              {card.value}
            </div>
            <div className={`text-[10px] flex items-center gap-[4px] ${card.up ? 'text-[#3B6D11]' : 'text-[rgba(20,20,21,0.45)]'}`}>
              {card.sub}
            </div>
          </div>
        ))}
      </div>

      {/* Project payment cards */}
      <div className="grid gap-[14px]">
        {projectPayments.map((project: PaymentProject) => {
          const paidAmount = project.instalments
            .filter((i: Instalment) => i.status === 'paid')
            .reduce((sum: number, i: Instalment) => sum + i.amount, 0);
          const totalAmount = project.totalPrice;
          const progressPercent = totalAmount > 0 ? Math.round((paidAmount / totalAmount) * 100) : 0;
          const paidCount = project.instalments.filter((i: Instalment) => i.status === 'paid').length;

          return (
            <div key={project._id} className="card">
              <div className="card-head">
                <div className="flex items-center gap-[12px]">
                  <span className="card-title">{project.title}</span>
                  <span className="text-[10px] text-[rgba(20,20,21,0.45)] tracking-[0.02em]">
                    {paidCount}/{project.instalments.length} paid
                  </span>
                </div>
                <span className="text-[13px] font-serif text-[#141415]">{formatCurrency(paidAmount)} / {formatCurrency(totalAmount)}</span>
              </div>

              {/* Progress bar */}
              <div className="mb-[20px]">
                <div className="h-[3px] bg-[rgba(20,20,21,0.08)] rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#3B6D11] rounded-full transition-all duration-500"
                    style={{ width: `${progressPercent}%` }}
                  />
                </div>
              </div>

              {/* Instalment list */}
              <div className="space-y-[12px]">
                {project.instalments.map((instalment: Instalment) => {
                  const daysUntil = getDaysUntil(instalment.dueAt);
                  return (
                    <div key={instalment._key} className="flex items-center justify-between py-[8px] border-b border-[rgba(20,20,21,0.06)] last:border-b-0">
                      <div className="flex items-center gap-[12px]">
                        <div className={`w-[8px] h-[8px] rounded-full ${instalment.status === 'paid' ? 'bg-[#3B6D11]' :
                            instalment.status === 'overdue' ? 'bg-[#B91C1C]' :
                              'bg-[#854F0B]'
                          }`} />
                        <div>
                          <div className="text-[13px] text-[#141415]">{formatCurrency(instalment.amount)}</div>
                          <div className="text-[10px] text-[rgba(20,20,21,0.45)] mt-[1px]">
                            {instalment.notes || 'Payment installment'}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-[12px]">
                        <div className="text-right">
                          <div className="text-[12px] text-[#141415]">{formatDate(instalment.dueAt)}</div>
                          <div className={`text-[9px] mt-[1px] ${instalment.status === 'overdue' ? 'text-[#B91C1C]' :
                              instalment.status === 'paid' ? 'text-[#3B6D11]' :
                                daysUntil <= 7 ? 'text-[#854F0B]' : 'text-[rgba(20,20,21,0.45)]'
                            }`}>
                            {instalment.status === 'paid'
                              ? `Paid ${instalment.paidAt ? formatDate(instalment.paidAt) : formatDate(instalment.dueAt)}`
                              : daysUntil < 0
                                ? `${Math.abs(daysUntil)} days overdue`
                                : daysUntil === 0
                                  ? 'Due today'
                                  : daysUntil === 1
                                    ? 'Due tomorrow'
                                    : `Due in ${daysUntil} days`
                            }
                          </div>
                        </div>
                        <StatusPill status={instalment.status} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ─── Main component ───────────────────────────────────────────────────────────

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState<Tab>('overview')
  const { data: session } = useSession()
  const [userProjects, setUserProjects] = useState<UserProject[]>([])
  const [projectsLoading, setProjectsLoading] = useState(true)

  useEffect(() => {
    async function fetchProjects() {
      if (!session) {
        setUserProjects([])
        setProjectsLoading(false)
        return
      }

      try {
        const response = await fetch('/api/user-projects')
        if (!response.ok) throw new Error('Failed to fetch projects')
        const projects = await response.json()
        setUserProjects(Array.isArray(projects) ? projects : [])
      } catch (error) {
        setUserProjects([])
      } finally {
        setProjectsLoading(false)
      }
    }
    fetchProjects();
  }, [session]);

  const tabLabel: Record<Tab, string> = {
    overview: 'Overview',
    projects: 'My Projects',
    documents: 'Documents',
    payments: 'Payments',
    settings: 'Settings'
  };

  const navItems: { id: Tab; label: string; icon: React.ReactNode; badge?: number }[] = [
    { id: 'overview', label: 'Overview', icon: <IconOverview />, badge: 3 },
    { id: 'projects', label: 'My Projects', icon: <IconProjects />, badge: userProjects.length || undefined },
    { id: 'documents', label: 'Documents', icon: <IconDocuments />, badge: userProjects.flatMap(p => [p.brochure, p.inspectionReport]).filter(Boolean).length || undefined },
    { id: 'payments', label: 'Payments', icon: <IconPayments /> },
    { id: 'settings', label: 'Settings', icon: <IconSettings /> },
  ];

  return (
    <>
      <style>{`
        :root {
          --ink: #141415;
          --ink-soft: rgba(20,20,21,0.45);
          --ink-faint: rgba(20,20,21,0.12);
          --powder: #e8e4de;
          --powder-mid: #d4cfc8;
          --cream: #f5f3f0;
          --accent: #8099a4;
          --white: #fafaf9;
          --font-serif: "GT America", sans-serif;
          --font-sans: "GT America", sans-serif;
        }

        .dash-shell { font-family: var(--font-sans); }
        .font-serif { font-family: var(--font-serif) !important; }

        .nav-icon {
          width: 14px; height: 14px;
          opacity: 0.7;
          flex-shrink: 0;
        }
        .nav-item-active .nav-icon { opacity: 1; }

        .card {
          background: var(--white);
          border: 1px solid var(--ink-faint);
          border-radius: 6px;
          padding: 20px 22px;
        }
        .card-head {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin-bottom: 18px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--ink-faint);
        }
        .card-title {
          font-family: var(--font-serif);
          font-size: 15px;
          font-weight: 400;
          letter-spacing: 0.02em;
          color: var(--ink);
        }
        .card-link {
          font-size: 9px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: var(--ink-soft);
          cursor: pointer;
          border-bottom: 1px solid var(--ink-faint);
          padding-bottom: 1px;
          transition: color 0.18s;
        }
        .card-link:hover { color: var(--ink); }
      `}</style>

      <div className="dash-shell flex h-screen bg-[#f5f3f0]">
        <aside className="w-[220px] h-screen fixed top-0 left-0 bg-[#141415] text-[#fafaf9] flex flex-col flex-shrink-0 z-10 max-[768px]:w-[64px]">

          {/* Logo */}
          <div className="px-[22px] py-[20px] border-b border-white/[0.08] max-[768px]:px-[20px] max-[768px]:py-[16px]">
            <svg viewBox="0 0 376 57" fill="white" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto opacity-[0.92]">
              <path d="M1.70214 38.2985L1.77951 16.0933C1.77951 9.80049 1.36687 5.00354 0.541591 1.70241V0.928711H15.6288L27.5438 38.3758H27.6211L39.6135 0.928711H54.778V1.70241C53.9012 5.00354 53.4628 9.80049 53.4628 16.0933V38.2985C53.4628 43.3017 54.0301 48.7692 55.1649 54.7009V55.4746H42.7857V54.7009C43.9204 48.7692 44.4878 43.276 44.4878 38.2211V14.2364H44.4104L31.6444 50.3682H23.2884L10.7544 14.2364H10.6771V38.1437C10.6771 43.3533 11.2445 48.8724 12.3792 54.7009V55.4746H0V54.7009C1.13476 48.8724 1.70214 43.4049 1.70214 38.2985Z" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M332.022 16.867V40.9291C332.022 45.4165 332.616 50.0072 333.802 54.7009V55.4746H320.494V54.7009C321.732 50.1619 322.351 45.5713 322.351 40.9291V32.8826H300.61V40.9291C300.61 45.4165 301.203 50.0072 302.39 54.7009V55.4746H289.082V54.7009C290.32 50.1619 290.939 45.5713 290.939 40.9291V16.7896C290.939 11.4768 290.32 6.44778 289.082 1.70241V0.928711H302.39V1.70241C301.203 6.60252 300.61 11.6574 300.61 16.867V23.985H322.351V16.7896C322.351 11.4768 321.732 6.44778 320.494 1.70241V0.928711H333.802V1.70241C332.616 6.60252 332.022 11.6574 332.022 16.867Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M269.473 16.867V40.9291C269.473 45.4165 270.066 50.0072 271.253 54.7009V55.4746H257.945V54.7009C259.183 50.1619 259.802 45.5713 259.802 40.9291V16.7896C259.802 15.0359 259.725 13.3079 259.57 11.6058H258.255C257.068 11.6058 255.83 11.6574 254.541 11.7605C253.303 11.8637 251.859 12.0184 250.208 12.2247C248.609 12.4311 247.397 12.5858 246.572 12.689V11.9153L248.738 0.928711H280.15L282.394 11.9153V12.689C281.672 12.6374 279.918 12.4569 277.133 12.1474C274.348 11.7863 272.207 11.6058 270.711 11.6058H269.628C269.525 13.9785 269.473 15.7322 269.473 16.867Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M201.78 40.6188L215.707 0.850586H224.14L238.144 40.6188C239.743 45.261 241.935 49.9548 244.721 54.7002V55.4739H230.252C230.355 51.3475 230.02 47.6337 229.246 44.3326H210.678C209.852 47.5821 209.491 51.2959 209.594 55.4739H195.204V54.7002C197.937 49.8517 200.13 45.1579 201.78 40.6188ZM219.807 16.0151L213.386 35.7445H226.539L220.272 16.0151H219.807Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M145.69 42.5533V53.5399C141.151 55.4484 136.096 56.4026 130.526 56.4026C122.324 56.4026 115.954 53.9525 111.415 49.0524C106.928 44.1007 104.684 37.1374 104.684 28.1625C104.684 19.2391 106.876 12.3274 111.261 7.42731C115.696 2.5272 121.912 0.0771484 129.907 0.0771484C134.858 0.0771484 139.243 1.05717 143.06 3.01721L145.69 14.0038V14.7775C140.687 12.3532 135.581 11.1411 130.371 11.1411C125.11 11.1411 121.138 12.6627 118.456 15.7059C115.774 18.6976 114.433 22.7982 114.433 28.0078C114.433 33.4752 115.825 37.7564 118.611 40.8512C121.396 43.946 125.187 45.4934 129.984 45.4934C132.666 45.4934 134.652 45.0808 135.942 44.2555V41.7796C135.942 37.0343 135.348 32.4694 134.162 28.0851V27.3114H147.547V28.0851C146.309 32.8821 145.69 37.7048 145.69 42.5533Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M84.8921 0C89.2764 0 93.1965 0.82528 96.6524 2.47584L99.2056 13.8492V14.623C94.9244 12.2503 90.5401 11.0639 86.0527 11.0639C83.4736 11.0639 81.2041 11.5797 79.2441 12.6113C77.3356 13.5913 75.8656 14.9324 74.834 16.6346C73.854 18.3367 73.1318 20.142 72.6676 22.0505C72.2034 23.9074 71.9713 25.919 71.9713 28.0854C71.9713 30.1486 72.1776 32.1344 72.5902 34.0428C73.0545 35.8997 73.7766 37.7308 74.7566 39.5361C75.7882 41.2898 77.2582 42.7083 79.1667 43.7915C81.1268 44.8231 83.4221 45.3389 86.0527 45.3389C90.9528 45.3389 95.8013 44.0752 100.598 41.5478V42.3215L98.7414 53.0759C94.6149 55.2938 89.9985 56.4028 84.8921 56.4028C78.0319 56.4028 72.5387 53.8754 68.4123 48.8205C64.2859 43.7141 62.2227 36.8282 62.2227 28.1627C62.2227 19.4457 64.2859 12.5855 68.4123 7.58227C72.5387 2.52742 78.0319 0 84.8921 0Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M1.70214 38.2985L1.77951 16.0933C1.77951 9.80049 1.36687 5.00354 0.541591 1.70241V0.928711H15.6288L27.5438 38.3758H27.6211L39.6135 0.928711H54.778V1.70241C53.9012 5.00354 53.4628 9.80049 53.4628 16.0933V38.2985C53.4628 43.3017 54.0301 48.7692 55.1649 54.7009V55.4746H42.7857V54.7009C43.9204 48.7692 44.4878 43.276 44.4878 38.2211V14.2364H44.4104L31.6444 50.3682H23.2884L10.7544 14.2364H10.6771V38.1437C10.6771 43.3533 11.2445 48.8724 12.3792 54.7009V55.4746H0V54.7009C1.13476 48.8724 1.70214 43.4049 1.70214 38.2985Z" fill="currentColor" />
              <path className="c-logo-text-only__path max-[768px]:hidden" d="M366.019 39.6909C366.019 38.2466 365.555 37.0603 364.627 36.1318C363.75 35.1518 362.589 34.4039 361.145 33.8881C359.752 33.3723 358.179 32.8823 356.425 32.4181C354.723 31.9023 352.995 31.2833 351.242 30.5612C349.539 29.8391 347.966 28.9364 346.522 27.8532C345.129 26.7185 343.969 25.1453 343.04 23.1337C342.163 21.0705 341.725 18.6204 341.725 15.7835C341.725 5.26117 347.76 0 359.83 0C364.627 0 368.83 0.747911 372.441 2.24373L374.375 13.0755V13.8492C369.578 11.8892 365.013 10.9092 360.681 10.9092C354.697 10.9092 351.706 12.7661 351.706 16.4798C351.706 17.7693 352.144 18.8525 353.021 19.7294C353.95 20.6062 355.11 21.3026 356.503 21.8184C357.947 22.3342 359.52 22.8242 361.222 23.2884C362.976 23.701 364.704 24.2684 366.406 24.9905C368.16 25.7127 369.733 26.6153 371.126 27.6985C372.57 28.7301 373.73 30.2259 374.607 32.186C375.536 34.146 376 36.4671 376 39.1493C376 45.3905 374.272 49.8521 370.816 52.5343C367.36 55.1649 362.847 56.4802 357.276 56.4802C351.654 56.4802 346.806 55.4744 342.731 53.4627L340.719 42.6309V41.8572C345.877 44.3331 351.087 45.571 356.348 45.571C362.796 45.571 366.019 43.611 366.019 39.6909Z" fill="currentColor" />
            </svg>
          </div>

          {/* Navigation label */}
          <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 px-[22px] pt-[20px] pb-[8px] max-[768px]:hidden">Navigation</div>

          {/* Nav items */}
          <nav className="flex-1 px-[12px]">
            {navItems.map((item) => {
              const isActive = activeTab === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`
                    flex items-center gap-[10px] w-full text-left px-[10px] py-[9px] rounded-md mb-[2px]
                    text-[13px] font-normal tracking-[0.01em] border-0 transition-all duration-[180ms]
                    max-[768px]:justify-center max-[768px]:gap-0
                    ${isActive
                      ? 'nav-item-active bg-white/10 text-white'
                      : 'text-white/55 hover:bg-white/[0.06] hover:text-white/85'
                    }
                  `}
                  title={item.label}
                >
                  {item.icon}
                  <span className="max-[768px]:hidden">{item.label}</span>
                  {item.badge !== undefined && (
                    <span className={`ml-auto text-[10px] px-[6px] py-[1px] rounded-full tabular-nums max-[768px]:hidden
                      ${isActive ? 'bg-[rgba(128,153,164,0.4)] text-white' : 'bg-white/[0.12] text-white/70'}`}>
                      {item.badge}
                    </span>
                  )}
                </button>
              )
            })}
          </nav>

          {/* Active projects */}
          <div className="px-[12px] pb-[12px] border-t border-white/[0.06] pt-[4px] max-[768px]:hidden">
            <div className="text-[9px] tracking-[0.18em] uppercase text-white/35 px-[10px] pt-[14px] pb-[8px]">Active Projects</div>
            {projectsLoading ? (
              <div className="px-[10px] py-[7px] text-xs text-white/40 tracking-[0.01em]">
                Loading projects...
              </div>
            ) : userProjects.length > 0 ? (
              userProjects.map((project) => {
                const colors = ['#3B6D11', '#854F0B', 'rgba(255,255,255,0.25)', '#8099a4']
                const colorIndex = (project.order || 0) % colors.length
                return (
                  <div key={project._id} className="flex items-center gap-[8px] px-[10px] py-[7px] text-xs text-white/40 cursor-pointer rounded hover:text-white/75 transition-colors tracking-[0.01em]">
                    <span className="w-[5px] h-[5px] rounded-full flex-shrink-0" style={{ background: colors[colorIndex] }} />
                    {project.title}
                  </div>
                )
              })
            ) : (
              <div className="px-[10px] py-[7px] text-xs text-white/40 tracking-[0.01em]">
                No projects assigned
              </div>
            )}
          </div>

          {/* User */}
          {session && (
            <div className="px-[22px] py-[14px] border-t border-white/[0.08] flex items-center gap-[10px] max-[768px]:justify-center max-[768px]:px-[12px]">
              <div className="w-[28px] h-[28px] rounded-full bg-[#8099a4] flex items-center justify-center text-[10px] font-medium text-white tracking-[0.05em] flex-shrink-0">
                {session.user?.name?.split(' ').map((n: string) => n[0]).join('').toUpperCase() || 'U'}
              </div>
              <div className="max-[768px]:hidden">
                <div className="text-xs text-white/70">{session.user?.name}</div>
                <div className="text-[10px] text-white/35 mt-[1px] tracking-[0.02em]">Client Portal</div>
              </div>
            </div>
          )}
        </aside>

        {/* ── Main area ── */}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden ml-[220px] max-[768px]:ml-[64px]" style={{ height: '100vh' }}>

          {/* Topbar */}
          <header className="h-[52px] bg-[#fafaf9] border-b border-[rgba(20,20,21,0.12)] flex items-center px-[28px] gap-[16px] flex-shrink-0">
            <span className="font-serif text-[20px] font-normal tracking-[0.01em] text-[#141415] flex-1">
              {tabLabel[activeTab]}
            </span>
            <button className="font-sans text-[11px] tracking-[0.1em] uppercase bg-[#141415] text-[#fafaf9] border-0 rounded px-[14px] py-[7px] cursor-pointer hover:opacity-80 transition-opacity">
              Contact team
            </button>
          </header>

          {/* Content */}
          <main className="flex-1 px-[28px] py-[24px] overflow-y-auto" style={{ height: 0 }}>
            {activeTab === 'overview' && <OverviewContent userProjects={userProjects} />}
            {activeTab === 'projects' && <ProjectsContent userProjects={userProjects} />}
            {activeTab === 'documents' && <DocumentsContent userProjects={userProjects} />}
            {activeTab === 'payments' && <PaymentsContent />}
            {activeTab === 'settings' && <SettingsContent />}
          </main>
        </div>
      </div>
    </>
  )
}