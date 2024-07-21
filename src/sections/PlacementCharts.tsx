import {
    secondPlaceMockdata,
    thirdPlaceMockdata,
} from "../ChartData/MyChart.mockdata";
import { PieChart } from "../charts/PieChart";

export interface PlacementChartsProps {
    placementData: any;
}

export const PlacementCharts: React.FC<PlacementChartsProps> = (props) => {
    const { placementData } = props;

    return (
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                alignItems: "center",
                width: "100%",
                height: "100%",
            }}
        >
            {/* <PieChart label={"Wins"} data={placementData} />
            <PieChart label={"2nd Place"} data={placementData} />
            <PieChart label={"3rd Place (Loser)"} data={placementData} /> */}
            <PieChart label={"Wins"} data={placementData} />
            <PieChart label={"2nd Place"} data={secondPlaceMockdata} />
            <PieChart label={"3rd Place (Loser)"} data={thirdPlaceMockdata} />
        </div>
    );
};
