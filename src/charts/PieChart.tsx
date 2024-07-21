import { Chart } from "react-google-charts";

interface PieChartProps {
    label: string;
    data: any;
}

export const PieChart: React.FC<PieChartProps> = (props: PieChartProps) => {
    const { data, label } = props;

    return (
        // <div style={{ width: "33%", height: "33%" }}>
        <Chart
            chartType="PieChart"
            data={data}
            width={"400px"}
            height={"400px"}
            legendToggle
            options={{
                title: label,
                titleTextStyle: {
                    fontSize: 24,
                },
                legend: {
                    position: "bottom",
                    textStyle: {
                        // fontSize: 18,
                    },
                },
            }}
        />
        // </div>
    );
};
