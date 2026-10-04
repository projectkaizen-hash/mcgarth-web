export const revalidate = 60; // cache public JSON for 60s

import { NextResponse } from 'next/server';
import { sanityClient, jobVacanciesQuery } from '@/lib/sanity';

export async function GET() {
  try {
    const data = await sanityClient.fetch(jobVacanciesQuery);
    return NextResponse.json(data);
  } catch (error) {
    console.error('Error fetching job vacancies:', error);
    return NextResponse.json({ error: 'Failed to fetch job vacancies' }, { status: 500 });
  }
}
