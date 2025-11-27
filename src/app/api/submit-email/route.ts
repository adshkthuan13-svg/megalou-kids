import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const { email } = await request.json();

        // Validate email
        if (!email || !email.includes('@')) {
            return NextResponse.json(
                { success: false, error: 'Invalid email' },
                { status: 400 }
            );
        }

        // Send to Google Apps Script
        const GOOGLE_SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL;

        if (!GOOGLE_SCRIPT_URL) {
            console.error('GOOGLE_SCRIPT_URL not configured');
            return NextResponse.json(
                { success: false, error: 'Server configuration error' },
                { status: 500 }
            );
        }

        const response = await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email }),
        });

        const result = await response.json();

        if (result.success) {
            return NextResponse.json({ success: true });
        } else {
            throw new Error(result.error || 'Failed to save email');
        }

    } catch (error) {
        console.error('Error saving email:', error);
        return NextResponse.json(
            { success: false, error: 'Failed to save email' },
            { status: 500 }
        );
    }
}
