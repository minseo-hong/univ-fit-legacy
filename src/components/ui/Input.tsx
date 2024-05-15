interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = (props: InputProps) => {
  return (
    <input
      className="text-md-200 rounded-lg border border-gray-15 bg-gray-00 px-4 py-3 text-gray-80 outline-none placeholder:text-gray-30"
      {...props}
    />
  );
};

export default Input;
