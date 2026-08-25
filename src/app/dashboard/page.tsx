"use client";

import { useSession } from "next-auth/react";
import ClientPortal from "@/components/Portal/client";
import EmployeePortal from "@/components/Portal/employee";

export default function DashboardPage() {
  const { data: session } = useSession();
  const userRole = session?.user?.role;

  if (userRole === "employee") {
    return <EmployeePortal />;
  }

  return <ClientPortal />;
}
