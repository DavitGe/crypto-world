import React from "react";

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const TextInput: React.FC<TextInputProps> = ({ ...rest }) => {
  return <input {...rest} />;
};

export default TextInput;
