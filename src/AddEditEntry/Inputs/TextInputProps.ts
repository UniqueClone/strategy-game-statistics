/**
 * Represents the props for a text input component.
 */
export interface TextInputProps {
    /**
     * The current value of the text input.
     */
    value: string;
    /**
     * A callback function that is called when the value of the text input changes.
     * @param value - The new value of the text input.
     */
    onChange: (value: string) => void;
    /**
     * An optional callback function that is called when the text input loses focus.
     * @param value - The current value of the text input.
     */
    onBlur?: (value: string) => void;
}
