import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface GameDateInputProps {
    datePlayed: Date;
    setDatePlayed: (date: Date) => void;
}

export const GameDateInput: React.FC<GameDateInputProps> = (props) => {
    const { datePlayed, setDatePlayed } = props;

    return (
        <fieldset className="border border-gray-300 p-4 rounded">
            <label className="flex flex-col">
                <span className="mb-1">Date Played:</span>
                <DatePicker
                    selected={datePlayed}
                    onChange={(date: Date) => setDatePlayed(date)}
                    className="border border-gray-300 px-2 py-1 rounded"
                />
            </label>
        </fieldset>
    );
};
