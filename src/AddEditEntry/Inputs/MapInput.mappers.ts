import { MapDetails } from "./MapDetails";

export const setMapName = (map: string, mapDetails: MapDetails, setMapDetails: (value: MapDetails) => void) => {
    setMapDetails({...mapDetails, map});
};

export const setIsFreeMap = (isFreeMapOfTheWeek: boolean, mapDetails: MapDetails, setMapDetails: (value: MapDetails) => void) => {
    setMapDetails({...mapDetails, isFreeMapOfTheWeek});
};