import { useState } from "react";


interface Decrypt {
    (input: string, key: string): string;
}
interface Encrypt {
    (input: string, key: string): string;
}

export default function HomePage({decrypt, encrypt}: {decrypt: Decrypt, encrypt: Encrypt}) {
    const [input, setInput] = useState('');
    const [keys, setKeys] = useState('');

    const handleInputEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInput(evt.target.value)
    }
    const handleKeyEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setKeys(evt.target.value)
    }
    const handleEncrypt = () => {
        const encryptedValue = encrypt(input, keys);
        console.log(encryptedValue)
    }

    const handleDecrypt = () => {
        const decryptedValue = decrypt(input, keys);
        console.log(decryptedValue)
    }

    return (
        <>
            <div className="main-container">
                <div>
                <input 
                    className="main-container-textbox" 
                    type="text" id="input" 
                    placeholder="Enter text to encrypt or decrypt"
                    onChange={handleInputEvent}
                />
                <input 
                    className="main-container-textbox" 
                    type="text" 
                    id="key" 
                    placeholder="Enter key"
                    onChange={handleKeyEvent} 
                />

                <input 
                    className="main-container-textbox" 
                    disabled={true} 
                    type="text" 
                    id="result" 
                    placeholder="The result is:"
                 />
                </div>

                <button onClick={handleEncrypt} id="encrypt">Encrypt</button>
                <button onClick={handleDecrypt} id="Decrypt">Decrypt</button>
            </div>
            
        </>
    )
}