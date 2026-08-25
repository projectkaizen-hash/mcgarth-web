import { NextResponse } from 'next/server';
import { sanityClient, projectsQuery } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await sanityClient.fetch(projectsQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}
