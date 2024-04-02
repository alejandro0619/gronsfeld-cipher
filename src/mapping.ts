export function mapToNumbers(inputString: String, key: String): (String | number)[][] {
    // Convert the input string to uppercase
    inputString = inputString.replaceAll(' ', '').toUpperCase();
    let keys: number[] = key.split('').map(digit => parseInt(digit));

    const mapping: (String | number)[][] = [];
    
    // Iterate over each character in the input string
    inputString.split('').forEach((char: String, index: number) => {
        const currentKey = keys[index % keys.length];
        mapping.push([char, currentKey]);
    });
    
    return mapping;
}