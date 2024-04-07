import { encryptMessage } from "./encrypt";
import { decryptMessage } from "./decrypt";
let encrypted = encryptMessage("hola mundo");

console.log(encrypted);
let decrypted = decryptMessage(encrypted);

console.log(decrypted)