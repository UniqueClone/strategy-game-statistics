import { MapDetails } from "./MapDetails";

/**
 * Sets the map name in the map details object.
 * 
 * @param name - The new map name.
 * @param mapDetails - The current map details object.
 * @param setMapDetails - The function to update the map details object.
 * @returns void
 */
export const setMapName = (name: string, mapDetails: MapDetails, setMapDetails: (value: MapDetails) => void) => {
    setMapDetails({...mapDetails, name});
};

/**
 * Sets the value of `isFreeMapOfTheWeek` in the `mapDetails` object and updates it using the `setMapDetails` function.
 * 
 * @param isFreeMapOfTheWeek - The new value for `isFreeMapOfTheWeek`.
 * @param mapDetails - The current map details object.
 * @param setMapDetails - The function to update the map details object.
 */
export const setIsFreeMap = (isFreeMapOfTheWeek: boolean, mapDetails: MapDetails, setMapDetails: (value: MapDetails) => void) => {
    setMapDetails({...mapDetails, isFreeMapOfTheWeek});
};