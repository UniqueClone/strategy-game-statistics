import React, { useState } from "react";
import DatePicker, { registerLocale } from "react-datepicker";
import en from "date-fns/locale/en-IE";
import "react-datepicker/dist/react-datepicker.css";

interface InputProps {
    value: string;
    onChange: (value: string) => void;
    onBlur?: (value: string) => void;
}

interface SelectProps extends InputProps {
    options: string[];
}

const TextInput: React.FC<InputProps> = ({ value, onChange }) => {
    return (
        <input
            type="text"
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="border border-gray-300 px-2 py-1 rounded"
        />
    );
};

const SelectInput: React.FC<SelectProps> = ({ value, onChange, options }) => {
    return (
        <select
            value={value}
            onChange={(event) => onChange(event.target.value)}
            className="border border-gray-300 px-2 py-
        1 rounded"
        >
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}

            <option key="Other" value="Other">
                Other
            </option>
        </select>
    );
};

/**
 * Function to determine if the "Other" option should be shown.
 * @param winner - The current winner value
 * @param players - The list of players
 * @returns - A boolean indicating if the "Other" option should be shown
 */
const shouldShowOther = (winner: string) => {
    return winner === "Other";
};

export const AddEditEntry = () => {
    const [winner, setWinner] = useState("");
    const [otherWinner, setOtherWinner] = useState("");
    const [map, setMap] = useState("");
    const [datePlayed, setDatePlayed] = useState<Date | null>(new Date());

    const players = ["Player 1", "Player 2", "Player 3", "Player 4"];

    registerLocale("en", en);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        // Handle form submission logic here
        if (winner === "Other") {
            console.log(otherWinner, map, datePlayed);
            return;
        } else {
            console.log(winner, map, datePlayed);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold mb-4 text-center">
                New Game Entry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <label className="flex flex-col">
                    <span className="mb-1">Winner:</span>
                    <SelectInput
                        options={players}
                        value={winner}
                        onChange={setWinner}
                    />
                </label>

                {shouldShowOther(winner) && (
                    <label className="flex flex-col">
                        <span className="mb-1">Other Winner:</span>
                        <TextInput
                            value={otherWinner}
                            onChange={setOtherWinner}
                        />
                    </label>
                )}

                <label className="flex flex-col">
                    <span className="mb-1">Map:</span>
                    <TextInput value={map} onChange={setMap} />
                </label>

                <label className="flex flex-col">
                    <span className="mb-1">Date Played:</span>
                    <DatePicker
                        selected={datePlayed}
                        onChange={(date: Date | null) => setDatePlayed(date)}
                        className="border border-gray-300 px-2 py-1 rounded"
                    />
                </label>

                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default AddEditEntry;
