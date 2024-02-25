import { TextInputProps } from "./TextInputProps";

/**
 * A text input component.
 * @param props - The input component props.
 * @returns The rendered text input element.
 */
export const TextInput: React.FC<TextInputProps> = (props) => {
    const { value, onChange } = props;

    return (
        <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
        />
    );
};
