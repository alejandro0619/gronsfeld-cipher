import { useState } from "react";
import Input from "./Input";

interface Decrypt {
  (input: string, key: string): string;
}
interface Encrypt {
  (input: string, key: string): string;
}

export default function HomePage({
  decrypt,
  encrypt,
}: {
  decrypt: Decrypt;
  encrypt: Encrypt;
}) {
  const [input, setInput] = useState("");
  const [key, setKey] = useState("");
  const [isEncrypt, setIsEncrypt] = useState(true);
  const [result, setResult] = useState("");
  
  const [isReady, setIsReady] = useState(false);

  const btnMsg = isEncrypt ? "Encrypt" : "Decrypt";
  let btnStyleClass = isReady ? "ready" : "notReady";

  const handleInputEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setInput(evt.target.value);
  };

  const handleKeyEvent = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setKey(evt.target.value);
  };

  const handleBtnClick = () => {
    if (isEncrypt) {
      setResult(encrypt(input, key));
      setIsEncrypt(!isEncrypt);
    } else {
      setResult(decrypt(result, key));
    setIsEncrypt(!isEncrypt);
    }
  };

  return (
    <>
    <h1 className="title"> Gronsfeld algorithm</h1>
      <div className="main-container">
        <div>
          <Input
            idStyle="input"
            classStyle="main-container-textbox"
            placeholder="Enter text to encrypt"
            inputEvent={handleInputEvent}
          ></Input>

          <Input
            classStyle="main-container-textbox"
            idStyle="key"
            typeOfInput="number"
            placeholder="Enter key"
            inputEvent={handleKeyEvent}
          />

          <Input
            classStyle="main-container-textbox"
            isDisable={true}
            idStyle="result"
            placeholder={
              result
                ? `The resulted message is: ${result}`
                : "No text to encrypt was provided"
            }
          />
        </div>

        <button
          onMouseEnter={() => (input ? setIsReady(true) : setIsReady(false))}
          onClick={handleBtnClick}
          className={btnStyleClass}
          id="encrypt"
        >
          {btnMsg}
        </button>
      </div>
    </>
  );
}
