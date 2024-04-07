import { mapToNumbers } from "./mapping";
import { generateTable } from "./tableReader";
import { mapLettersToPosition } from "./mapAlphabet";

export function encryptMessage(input: string): string {
    let encryptedInput = "";

    const inputWithKey = mapToNumbers(input, "1235")
    const table = generateTable("./table.txt");

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