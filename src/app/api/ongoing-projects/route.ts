export const revalidate = 60; // cache public JSON for 60s

import { NextResponse } from 'next/server';
import { sanityClient, ongoingProjectsQuery } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await sanityClient.fetch(ongoingProjectsQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching ongoing projects:', error);
    return NextResponse.json({ error: 'Failed to fetch ongoing projects' }, { status: 500 });
  }
}
