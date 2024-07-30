import { PieChart } from "@fluentui/react-charting";

interface PieChartProps {
    label: string;
    data: any;
}

export const PieChartRENAME: React.FC<PieChartProps> = (props: PieChartProps) => {
    const { data, label } = props;

    const points = [
        { y: 50, x: 'ABCD' },
        { y: 25, x: 'EFGH' },
        { y: 25, x: 'IJKL' },
      ];

    return (
        <PieChart data={points}
        height={300}
        width={300}
         />
    );
};
