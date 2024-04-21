import { useState } from "react";


interface Decrypt {
    (input: string, key: string): string;
}
interface Encrypt {
    (input: string, key: string): string;
}

export default function HomePage({decrypt, encrypt}: {decrypt: Decrypt, encrypt: Encrypt}) {
    const [input, setInput] = useState('');
    const [key, setKey] = useState('');
    const [isEncrypt, setIsEncrypt] = useState(true);
    const [result, setResult] = useState('')

    const btnMsg = isEncrypt ? 'Encrypt' : 'Decrypt';

    const handleInputEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setInput(evt.target.value)
    }
    
    const handleKeyEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setKey(evt.target.value)
    }
    const handleBtnClick = ()=> {
        console.log('el estado es:', isEncrypt)
        if(isEncrypt) {
            setResult(encrypt(input, key));
            setIsEncrypt(false)
        } else {
            setResult(decrypt(result, key));
            setIsEncrypt(true)
        }
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
                    placeholder={`The resulted message is: ${result}`}
                 />
                </div>

                <button onClick={handleBtnClick} id="encrypt">{btnMsg}</button>
            </div>
            
        </>
    )
}