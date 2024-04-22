export default function Input({
  idStyle,
  classStyle,
  placeholder,
  inputEvent,
  isDisable = false,
  typeOfInput = "text",
}: {
  idStyle: string;
  classStyle: string;
  placeholder: string;
  inputEvent?: (evt: React.ChangeEvent<HTMLInputElement>) => void;
  isDisable?: boolean,
  typeOfInput?: string;
}) {
    
  return (
    <input
      className={classStyle}
      type={typeOfInput}
      id={idStyle}
      placeholder={placeholder}
      disabled= {isDisable}
      onChange={inputEvent}
    />
  );
}
