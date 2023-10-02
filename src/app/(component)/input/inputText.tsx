import { ChangeEvent, FC } from "react";

interface ITextInputProps {
  label: string;
  value?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputText: FC<ITextInputProps> = ({ label, value, onChange }) => {
  return (
    <>
      <label
        style={{
          fontFamily: "Montserrat",
          fontWeight: 500,
          lineHeight: "39px",
          letterSpacing: "0em",
          textAlign: "left",
          color: "#082846",
        }}
      >
        {label}
      </label>
      <input
        className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
        type="text"
        id={label}
        value={value}
        onChange={onChange}
      />
    </>
  );
};

export default InputText;
