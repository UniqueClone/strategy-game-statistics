import "./App.css";
import {
    firstPlaceMockdata,
    gamesPlayedMockdata,
} from "./ChartData/MyChart.mockdata";
import { PlacementCharts } from "./sections/PlacementCharts";
// import { GamesPlayed } from "./sections/GamesPlayed";

function App() {
    return (
        <div>
            {/* <PlacementsBarChart /> */}
            <PlacementCharts placementData={firstPlaceMockdata} />
            {/* <GamesPlayed gamesPlayed={gamesPlayedMockdata} /> */}
            {/* {<AddEditEntry />} */}
        </div>
    );
}

export default App;
