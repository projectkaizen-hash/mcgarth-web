export function getProjectArticleClass(order: number, total: number): string {
  const position = order % 4
  const isFirst = order === 1
  const isSecond = order === 2
  const isOrphanLast = position === 0 && order === total

  const base = 'c-project-card relative false block col-span-4'

  switch (position) {
    case 1:
      return `${base} xl:col-span-6 mt-[104px] xl:mt-[240px]${isFirst ? ' mt-0! xl:mt-0!' : ''}`
    case 2:
      return `${base} xl:col-span-4 xl:col-start-9 mt-[104px] xl:mt-[240px]${isSecond ? ' mt-[104px]! xl:mt-0!' : ''}`
    case 3:
      return `${base} mt-[104px] xl:col-span-4 xl:col-start-7 xl:mt-[240px]`
    case 0:
      return `${base}${isOrphanLast ? ' mt-[104px]' : ''} xl:col-span-6 xl:col-start-4 xl:mt-[240px]`
    default:
      return `${base} xl:col-span-6 mt-[104px] xl:mt-[240px]`
  }
}

/**
 * The status section a project belongs to (ongoing / upcoming / completed).
 * Detail pages number projects within this section so each section counts
 * 01..N individually instead of against the global list. Projects without
 * a status fall back to the full list.
 */
export function getProjectSection<T extends { status?: string }>(
  project: T,
  allProjects: T[],
): T[] {
  if (!project.status) return allProjects;
  const section = allProjects.filter((p) => p.status === project.status);
  return section.length > 0 ? section : allProjects;
}
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Formats a location string into only the area name (e.g. "Gulshan", "Dhanmondi", "Uttara")
 * stripping street/plot/house/sector numbers as well as the city name ("Dhaka", etc.).
 */
export function formatProjectArea(location?: string | null): string {
  if (!location) return '';
  const parts = location
    .split(',')
    .map((part) => part.trim())
    .filter(
      (part) =>
        part.length > 0 &&
        !/^\d+$/.test(part) &&
        !/^(plot|road|house|holding|flat|apt|block|sector)\s*#?[a-z0-9]+/i.test(part) &&
        !/^(dhaka|chattogram|chittagong|sylhet|bangladesh)(\s*[-–]?\s*\d+)?$/i.test(part),
    );

  if (parts.length === 0) {
    const fallback = location
      .split(',')
      .map((p) => p.trim())
      .filter((p) => !/^\d+$/.test(p) && !/^(dhaka|bangladesh)/i.test(p));
    return fallback[0] || location.trim();
  }
  return parts[0];
}

/**
 * Calculates a structured countdown { years, months, days, isPast } to a target date.
 */
export function calculateDateCountdown(
  targetDateStr?: string | null,
  now = new Date(),
): { years: number; months: number; days: number; isPast: boolean } | null {
  if (!targetDateStr) return null;

  const trimmed = String(targetDateStr).trim();
  let target: Date;
  if (/^\d{4}$/.test(trimmed)) {
    target = new Date(parseInt(trimmed, 10), 11, 31, 23, 59, 59);
  } else {
    target = new Date(trimmed);
  }

  if (isNaN(target.getTime())) return null;

  if (target.getTime() <= now.getTime()) {
    return { years: 0, months: 0, days: 0, isPast: true };
  }

  let years = target.getFullYear() - now.getFullYear();
  let months = target.getMonth() - now.getMonth();
  let days = target.getDate() - now.getDate();

  if (days < 0) {
    months -= 1;
    const prevMonthDays = new Date(target.getFullYear(), target.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years -= 1;
    months += 12;
  }

  return {
    years: Math.max(0, years),
    months: Math.max(0, months),
    days: Math.max(0, days),
    isPast: false,
  };
}

/**
 * Formats a target date as a countdown timer string: "1Y:9M:18D"
 */
export function formatCountdownTimer(targetDateStr?: string | null, now = new Date()): string {
  const cd = calculateDateCountdown(targetDateStr, now);
  if (!cd) return '';
  if (cd.isPast) return '0Y:0M:0D';
  return `${cd.years}Y:${cd.months}M:${cd.days}D`;
}

export interface ProjectTimeline {
  label: 'Handover' | 'Completed' | 'Starting';
  value: string;
}

/**
 * Determines timeline label and value based on project status:
 * - Completed: "Completed" <-justify-between-> year
 * - Upcoming: "Starting" <-justify-between-> countdown (1Y:9M:18D)
 * - Ongoing/Default: "Handover" <-justify-between-> countdown (1Y:9M:18D)
 */
export function getProjectTimeline(project: {
  status?: string | null;
  year?: number | null;
  startDate?: string | null;
  handOverDate?: string | null;
  deadline?: string | null;
}): ProjectTimeline {
  const status = project.status?.toLowerCase().trim();

  // 1. Completed
  const isCompletedStatus = status === 'completed';
  const handoverCd = calculateDateCountdown(project.handOverDate);
  const isHandoverPast = handoverCd?.isPast === true;

  if (isCompletedStatus || (isHandoverPast && status !== 'active' && status !== 'pending')) {
    const yearVal = project.year
      ? String(project.year)
      : project.handOverDate
        ? String(new Date(project.handOverDate).getFullYear())
        : 'Completed';
    return {
      label: 'Completed',
      value: yearVal,
    };
  }

  // 2. Upcoming
  const isUpcoming = status === 'pending' || status === 'upcoming';
  if (isUpcoming) {
    const target = project.startDate || project.handOverDate || (project.year ? `${project.year}-01-01` : null);
    const countdown = formatCountdownTimer(target);
    return {
      label: 'Starting',
      value: countdown || (project.year ? String(project.year) : 'TBD'),
    };
  }

  // 3. Ongoing / Handover (default)
  const target = project.handOverDate || project.deadline || (project.year ? `${project.year}-12-31` : null);
  const countdown = formatCountdownTimer(target);

  return {
    label: 'Handover',
    value: countdown || (project.year ? String(project.year) : 'Ongoing'),
  };
}

/**
 * Backward compatibility helper for formatHandoverCountdown.
 */
export function formatHandoverCountdown(dateStr?: string | null): string {
  if (!dateStr) return '';
  const cd = calculateDateCountdown(dateStr);
  if (!cd || cd.isPast) return 'Completed';
  return formatCountdownTimer(dateStr);
}
