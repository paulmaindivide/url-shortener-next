import { NextResponse } from 'next/server';

let urlDatabase: { [key: string]: string } = {
  // In a real application, you'd store these in a database
  // For testing, you can add entries here
  'bIRLqL': 'https://almapay.com',
};

export async function GET(request: Request, { params }: { params: { slug: string } }) {
  const { slug } = params;

  const originalUrl = urlDatabase[slug];

  if (originalUrl) {
    return NextResponse.redirect(originalUrl, 301);
  } else {
    return NextResponse.json({ error: 'URL not found' }, { status: 404 });
  }
}