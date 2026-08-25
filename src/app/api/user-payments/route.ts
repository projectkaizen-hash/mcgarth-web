import { NextRequest, NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";
import { sanityServerClient } from "@/lib/sanity-server";

const userPaymentsQuery = `
  *[_type == "payment" && client._ref == $clientId] {
    _id,
    _createdAt,
    totalPrice,
    "project": project-> {
      _id,
      title
    },
    instalments[] {
      _key,
      amount,
      dueAt,
      paidAt,
      status,
      notes
    }
  }
`;

export async function GET(req: NextRequest) {
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const clientId = token.id as string;

  if (!clientId) {
    return NextResponse.json([]);
  }

  const payments = await sanityServerClient.fetch(userPaymentsQuery, { clientId });
  return NextResponse.json(payments);
}
