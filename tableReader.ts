import * as fs from 'fs';

export function generateTable(filePath: string): string[][] {
    // Read the content of the file
    const content = fs.readFileSync(filePath, 'utf-8');

    // Split the content by lines
    const lines = content.trim().split('\n');

    // Parse each line into an array of letters
    const multiArray: string[][] = lines.map(line => line.trim().split(' '));

    return multiArray;
}