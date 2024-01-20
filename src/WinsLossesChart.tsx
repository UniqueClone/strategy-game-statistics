import {
    Chart as ChartJS,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale,
    Title,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { mockdata } from "./ChartData/MyChart.mockdata";

export const WinsLossesChart: React.FC = () => {
    ChartJS.register(
        CategoryScale,
        LinearScale,
        BarElement,
        Title,
        Tooltip,
        Legend
    );

    return (
        <Bar
            data={mockdata}
            options={{ maintainAspectRatio: false, responsive: true }}
        />
    );
};
