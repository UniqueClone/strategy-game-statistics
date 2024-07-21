import Chart from "react-google-charts";

interface GamesPlayedProps {
    gamesPlayed: any;
}

export const GamesPlayed: React.FC<GamesPlayedProps> = (props) => {
    const { gamesPlayed } = props;

    return (
        // <div
        //     style={{
        //         display: "flex",
        //         flexDirection: "row",
        //         justifyContent: "space-around",
        //         alignItems: "center",
        //         width: "100%",
        //         height: "100%",
        //     }}
        // >
        <Chart
            chartType="Calendar"
            data={gamesPlayed}
            // width={"100%"}
            height={"1000px"}
            legendToggle
            options={{
                title: "Games Played",
                titleTextStyle: {
                    fontSize: 24,
                },
                legend: {
                    position: "bottom",
                    textStyle: {
                        // fontSize: 18,
                    },
                },
                calendar: {
                    cellSize: 20,
                },
                colorAxis: {
                    minValue: 0,
                    colors: ["#FFFFFF", "FF0000"],
                },
                noDataPattern: {
                    backgroundColor: "white",
                    color: "lightblue",
                },
            }}
        />
        // </div>
    );
};
