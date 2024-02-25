import { setIsFreeMap, setMapName } from "./MapInput.mappers";
import { MapDetails } from "./MapDetails";
import { TextInput } from "./TextInput";

interface MapInputProps {
    mapDetails: MapDetails;
    setMapDetails: (value: MapDetails) => void;
}

export const MapInput: React.FC<MapInputProps> = (props: MapInputProps) => {
    const { mapDetails, setMapDetails } = props;

    return (
        <fieldset className="border border-gray-300 p-4 rounded">
            <label className="flex flex-col">
                <span className="mb-1">Map:</span>
                <TextInput
                    value={mapDetails.map}
                    onChange={(value: string) =>
                        setMapName(value, mapDetails, setMapDetails)
                    }
                />
            </label>

            <label className="flex items-center mt-4">
                <input
                    type="checkbox"
                    checked={mapDetails.isFreeMapOfTheWeek}
                    onChange={() =>
                        setIsFreeMap(
                            !mapDetails.isFreeMapOfTheWeek,
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
