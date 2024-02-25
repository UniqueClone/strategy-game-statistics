import React from "react";
import { MapDetails } from "./Inputs/MapDetails";

/**
 * Function to get the options for a select input
 * @param options - The list of options
 * @returns - The list of options as JSX
 */
export const getSelectOptions: React.FC<string[]> = (options: string[]) => {
    return (
        <>
            {options.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}

            <option key="Other" value="Other">
                Other
            </option>
        </>
    );
};

/**
 * Function to determine if the "Other" option should be shown.
 * @param winner - The current winner value
 * @param players - The list of players
 * @returns - A boolean indicating if the "Other" option should be shown
 */
export const shouldShowOther = (winner: string) => {
    return winner === "Other";
};

export const setMapName = (
    map: string,
    mapDetails: MapDetails,
    setMapDetails: (value: React.SetStateAction<MapDetails>) => void
) => {
    setMapDetails({ ...mapDetails, map });
};

export const setIsFreeMap = (
    isFreeMapOfTheWeek: boolean,
    mapDetails: MapDetails,
    setMapDetails: (value: React.SetStateAction<MapDetails>) => void
) => {
    setMapDetails({ ...mapDetails, isFreeMapOfTheWeek });
};
