import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


export default function Chart({data,dataKey}) {
  return (
    <ResponsiveContainer width="100%" aspect={4 / 1}>
      <LineChart data={data}>
        <CartesianGrid stroke="#dddddd" strokeDasharray="8 8"/>
        <XAxis dataKey="name" stroke="#5550bd" />
        <Line type="monotone" dataKey={dataKey} stroke="#5550bd" />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
}
