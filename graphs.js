
// Graphs, to use, copy code under render() method, then place the variable into {} inside of a JSX element under return() to render the graph

// Example:  <div> { BarChart } </div> 

 import { Chart, Axis, Series, Tooltip, Pie, Line, Cursor, Bar } from "react-charts";

const BarChart = (
    <Chart data={[
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]} >
      <Axis primary type="ordinal" position="left" />
      <Axis type="linear" stacked position="bottom" />
      <Series type={Bar} />
      <Cursor primary />
      <Cursor />
      <Tooltip />
    </Chart>
    );



 const LineChart = (
    <Chart data={[
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]} >
      <Axis primary type="time" position="bottom" />
      <Axis type="linear" position="left" />
      <Series type={Line} />
      <Cursor primary />
      <Cursor />
      <Tooltip />
    </Chart>
    );




const PieChart = (
  <Chart 
    data={[
      {
        label: "Series 1",
        data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
      },
      {
        label: "Series 2",
        data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
      }
    ]} 
  >
    <Axis type="pie" />
  <Series type={Pie}  showPoints={true} />
  <Tooltip />
  </Chart>
);