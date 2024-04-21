export function mapToNumbers(inputString: string, key: string): [string, number][]{
    // Convert the input string to uppercase
    inputString = inputString.replaceAll(' ', '').toUpperCase();
    const keys: number[] = key.split('').map(digit => parseInt(digit));

    const mapping: [string, number][] = [];
    
    // Iterate over each character in the input string
    inputString.split('').forEach((char: string, index: number) => {
        const pair: [string, number] = [ char, keys[index % keys.length]];
        mapping.push(pair);
    });
    
    return mapping;
}
