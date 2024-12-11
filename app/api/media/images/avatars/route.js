import fs from 'fs';
import path from 'path';
import { NextResponse } from 'next/server';

const PFP_STORAGE_PATH = 'public/images/avatars';

export async function POST(req) {
    try {
        const { imageBlob, fileName } = await req.json();

        // Decode the base64-encoded image
        const base64Data = imageBlob.replace(/^data:image\/\w+;base64,/, '');
        const buffer = Buffer.from(base64Data, 'base64');

        // Define the storage path
        const filePath = path.join(process.cwd(), PFP_STORAGE_PATH, fileName);

        // Ensure the directory exists
        fs.mkdirSync(path.dirname(filePath), { recursive: true });

        // Check if the file already exists and remove it
        if (fs.existsSync(filePath)) {
            fs.unlinkSync(filePath);
        }

        // Save the file
        fs.writeFileSync(filePath, buffer);

        // Return the saved image's API-accessible path
        const apiPath = `/api/avatars/${fileName}`;
        return NextResponse.json({ success: true, path: apiPath });
    } catch (error) {
        console.error('Error saving image:', error);
        return NextResponse.json({ success: false, message: 'Error saving image.' }, { status: 500 });
    }
}
