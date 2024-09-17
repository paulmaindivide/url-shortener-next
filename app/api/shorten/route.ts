import { NextResponse } from 'next/server';
import { nanoid } from 'nanoid';

const urlDatabase: { [key: string]: string } = {};

export async function POST(request: Request) {
  const { url } = await request.json();

  if (!url || !isValidUrl(url)) {
    return NextResponse.json({ error: 'Invalid URL' }, { status: 400 });
  }

  const slug = nanoid(6);
  urlDatabase[slug] = url;

  const shortenedUrl = `${process.env.BASE_URL}/${slug}`;
  return NextResponse.json({ shortUrl: shortenedUrl });
}

function isValidUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}