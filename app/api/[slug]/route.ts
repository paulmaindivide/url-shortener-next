import { NextResponse } from 'next/server';

const urlDatabase: { [key: string]: string } = {};

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const originalUrl = urlDatabase[slug];

  if (originalUrl) {
    return NextResponse.redirect(originalUrl, 301);
  } else {
    return NextResponse.json({ error: 'URL not found' }, { status: 404 });
  }
}

// End