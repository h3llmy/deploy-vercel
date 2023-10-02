import { ChangeEvent, FC } from "react";

interface ILanguageInputProps {
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const InputLanguage: FC<ILanguageInputProps> = ({ onChange }) => {
  return (
    <>
      <img src={"/language.png"} alt="" />
      <select
        name="language"
        onChange={onChange}
        style={{ background: "transparent" }}
      >
        <option value="Bahasa Indonesia">{`Bahasa Indonesia (INA)`}</option>
        <option value="Inggris">{`Bahasa inggris (INA)`}</option>
      </select>
    </>
  );
};

export default InputLanguage;
