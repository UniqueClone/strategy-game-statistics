import { TextInputProps } from "./TextInputProps";

/**
 * A text input component.
 * @param props - The input component props.
 * @returns The rendered text input element.
 */
export const TextInput: React.FC<TextInputProps> = (props) => {
    const { value, onChange, className } = props;

    return (
        <input
            className={className || "border border-gray-300 px-2 py-1 rounded"}
            onChange={(event) => onChange(event.target.value)}
            type="text"
            value={value}
        />
    );
};
