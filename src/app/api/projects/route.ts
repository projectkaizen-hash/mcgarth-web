export const revalidate = 60; // cache public JSON for 60s

import { NextResponse } from 'next/server';
import { sanityClient, projectsSummaryQuery } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await sanityClient.fetch(projectsSummaryQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
