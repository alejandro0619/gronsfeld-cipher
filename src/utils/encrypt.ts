import { mapToNumbers } from "./mapping";
import { mapLettersToPosition } from "./mapAlphabet";
import TABLE from "./table";

export function encryptMessage(input: string): string {
    let encryptedInput = "";

    const inputWithKey = mapToNumbers(input, "1235")
    const table: string[][] = TABLE.split('\n').map(line => line.split(' ').filter(char => char !== ''));
    console.log(table)
    inputWithKey.forEach(pair => {
        const letter = pair[0];
        const key = pair[1];
        const row = table[key];
        const column = mapLettersToPosition().get(letter[0]);
        if(column) {
            encryptedInput += row[column - 1];
        }
    })

    return encryptedInput;
}