import { NextRequest, NextResponse } from 'next/server';
import { askWorldCup } from '@/lib/ai/anthropic';

export const runtime = 'nodejs';
export const maxDuration = 30;

interface RequestBody {
  question?: unknown;
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as RequestBody;

    if (!body.question || typeof body.question !== 'string') {
      return NextResponse.json(
        { error: 'A question string is required.' },
        { status: 400 },
      );
    }

    const question = body.question.trim();
    if (question.length === 0) {
      return NextResponse.json(
        { error: 'Question cannot be empty.' },
        { status: 400 },
      );
    }
    if (question.length > 500) {
      return NextResponse.json(
        { error: 'Question is too long (max 500 characters).' },
        { status: 400 },
      );
    }

    if (!process.env.ANTHROPIC_API_KEY) {
      return NextResponse.json(
        { error: 'AI features are not configured. Add ANTHROPIC_API_KEY to your .env.local file.' },
        { status: 503 },
      );
    }

    const response = await askWorldCup(question);
    return NextResponse.json({ answer: response.answer });
  } catch (err) {
    console.error('[/api/ask]', err);
    return NextResponse.json(
      { error: 'Failed to generate a response. Please try again.' },
      { status: 500 },
    );
  }
}
