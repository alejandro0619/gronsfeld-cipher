import { mapToNumbers } from "./mapping";
import { mapLettersToPosition } from "./mapAlphabet";
import TABLE from "./table";

export function decryptMessage(input: string, key: string): string {

    let originalMessage: string = "";


    const inputWithKey = mapToNumbers(input, key);

    const table: string[][] = TABLE.split('\n').map(line => line.split(' ').filter(char => char !== ''));

    inputWithKey.forEach(pair => {
        const letter = pair[0];
        const key = pair[1];
        const row = table[key];
        const column = row.reduce((acc, curr, index) => {
            if (curr == letter) {
                return index;
            }  else {
                return acc;
            }
        }, -1);
        
        const entry = [...mapLettersToPosition().entries()].find(([_, value]) => value === column + 1)?.[0];
                    // one liners goes vrr
                    // Create an array with the entries from the map, then find the value and return it's key
        originalMessage += entry;
        return originalMessage;
    })

    return originalMessage;
}