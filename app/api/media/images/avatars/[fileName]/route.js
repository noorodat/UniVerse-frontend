import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const PFP_STORAGE_PATH = 'media/images/avatars';

export async function GET(req, { params }) {
    const { fileName } = params;

    try {
        const filePath = path.join(process.cwd(), PFP_STORAGE_PATH, fileName);

        // Check if the file exists
        if (!fs.existsSync(filePath)) {
            return NextResponse.json({ error: 'File not found' }, { status: 404 });
        }

        const fileBuffer = fs.readFileSync(filePath);
        const fileExtension = path.extname(fileName).slice(1);
        const contentType = fileExtension === 'jpg' || fileExtension === 'jpeg' ? 'image/jpeg' : 'image/png';

        return new NextResponse(fileBuffer, {
            headers: {
                'Content-Type': contentType,
            },
        });
    } catch (error) {
        console.error('Error serving file:', error);
        return NextResponse.json({ error: 'Error serving file' }, { status: 500 });
    }
}
