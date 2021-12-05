import React,{useState} from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import { Bar,Pie } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

function ChartBox({type,elements}) {

      const [chartType,setChartType] = useState(type)
      const [chartElements,setChartElements] = useState(elements)

      const handleChange = (e) => {setChartType(e.target.value)}

      console.log(chartType,chartElements)
      const labels = chartElements.map((e,i)=>"Element"+i)
      const colors = chartElements.map(e=>{
        const r = Math.floor(Math.random() * 255);
        const g = Math.floor(Math.random() * 255);
        const b = Math.floor(Math.random() * 255);
        return "rgb(" + r + "," + g + "," + b + ")";
    }) 
      const data = chartType==='Bar'?{
        labels,        
        datasets: [
          {
            data: chartElements,
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
          },
        ],
      }:{
        labels,        
        datasets: [
          {
            data: chartElements,
            backgroundColor: colors,
            borderColor: colors,
            borderWidth: 1,
          },
        ],
      };
    
    
    
    return (
    <div>
        <div>
            {chartType==='Bar'?<Bar data={data}/>:<Pie data = {data}/>}
            {/*chart library use*/}
        </div>
        </div>
    )
}

export default ChartBox