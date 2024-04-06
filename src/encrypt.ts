import { mapToNumbers } from "./mapping";
import { generateTable } from "./tableReader";
import { mapLettersToPosition } from "./mapAlphabet";

export function encryptMessage(input: string): String {
    let encryptedInput = "";

    const inputWithKey = mapToNumbers(input, "1235")
    const table = generateTable("./table.txt");

    inputWithKey.forEach(pair => {
        const letter = pair[0];
        const key = pair[1];
        const column = table[key];
        const row = mapLettersToPosition().get(letter[0]);
        if(row) {
            encryptedInput += column[row - 1];
        }
        

    })

    return encryptedInput;
}