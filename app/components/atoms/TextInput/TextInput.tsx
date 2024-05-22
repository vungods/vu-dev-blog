import { ChangeEvent, KeyboardEvent } from "react";

type TextInputProps = {
  name?: string;
  id?: string;
  type?: string;
  className?: string;
  value?: string;
  autoComplete?: string;
  required?: boolean;
  placeHolder?: string;
  readOnly?: boolean;
  accept?: string;
  messages?: string;
  handleChange?(event: ChangeEvent<HTMLInputElement>): void;
  handleKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void;
};
const TextInput = ({
  id,
  type,
  name,
  className,
  autoComplete,
  required,
  placeHolder,
  readOnly,
  handleChange,
  handleKeyDown,
  value,
  messages,
  accept,
}: TextInputProps) => {
  return (
    <>
      <input
        id={id}
        type={type}
        name={name}
        value={value}
        readOnly={readOnly}
        className={`border border-gray-300 py-2 px-2
          focus:outline-none focus:border-purple-900 focus:ring-1 focus:ring-purple-900
          rounded-3xl shadow-md ${className}`}
        autoComplete={autoComplete}
        required={required}
        placeholder={placeHolder}
        onKeyDown={handleKeyDown}
        onChange={handleChange}
        accept={accept}
      />
      <span className="text-red-400">{messages}</span>
    </>
  );
};
export default TextInput;
