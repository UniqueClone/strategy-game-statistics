import { setIsFreeMap, setMapName } from "./MapInput.mappers";
import { MapDetails } from "./MapDetails";
import { TextInput } from "./TextInput";

/**
 * The props for the MapInput component.
 */
interface MapInputProps {
    /**
     * The details of the map that was played.
     */
    mapDetails: MapDetails;

    /**
     * A function to update the map details object.
     * @param value - The new map details object.
     */
    setMapDetails: (value: MapDetails) => void;
}

/**
 * The component to input the details of the map that was played.
 * @param props - The props for the MapInput component.
 * @returns The MapInput component.
 */
export const MapInput: React.FC<MapInputProps> = (props: MapInputProps) => {
    const { mapDetails, setMapDetails } = props;

    return (
        <fieldset className="border border-gray-300 p-4 rounded">
            <label className="flex flex-col">
                <span className="mb-1">Map:</span>
                <TextInput
                    value={mapDetails.name}
                    onChange={(value: string) =>
                        setMapName(value, mapDetails, setMapDetails)
                    }
                />
            </label>

            <label className="flex items-center mt-4">
                <input
                    type="checkbox"
                    checked={mapDetails.isFreeMapOfTheWeek}
                    onChange={(value) =>
                        setIsFreeMap(
                            value.target.checked,
                            mapDetails,
                            setMapDetails
                        )
                    }
                    className="mr-2"
                />
                <span>Was this the free map of the week?</span>
            </label>
        </fieldset>
    );
};
