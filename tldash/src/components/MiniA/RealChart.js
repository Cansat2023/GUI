import React, { useRef, useEffect, useState } from "react";
import {
  Chart,
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale,
} from "chart.js";
Chart.register(
  LineController,
  LineElement,
  Filler,
  PointElement,
  LinearScale,
  TimeScale,
  Tooltip,
  CategoryScale
);

function RealChart(props) {
  const canvas = useRef(null);
  const [slicedData, setSlicedData] = useState(new Array(5).fill(null));

  let data = [5, 2, null, null, null, null];
  let labels = ["10:34:23", "10:34:24"];
  let rgba0;
  let rgba1;
  let stroke;
  switch(props.color){
    case 0:
      rgba0 = 'rgba(248,222,189,1)'
      rgba1 = 'rgba(251,235,214,0)'
      stroke = "#F3A53F"
      break;
    case 1:
      rgba0 = 'rgba(218,129,132,1)'
      rgba1 = 'rgba(202,107,110,0)'
      stroke = "#CA6B6E"
      break;
    case 2:
      rgba0 = 'rgba(208,251,255,1)'
      rgba1 = 'rgba(221,242,244,0)'
      stroke = "#478F96"
      break;
    default:
  }

  useEffect(() => {
    return
  }, [])

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, rgba0);   
    gradient.addColorStop(1, rgba1);
    console.log(data, labels);
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: gradient,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke,
            spanGaps: true,
            data: data,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false,
          },
        },
        scales: {
          x: {
            display: false,
          },
          y: {
            display: false,
            suggestedMin: 0,
            suggestedMax: 10,
          },
        },
        animation: false,
        resizeDelay: 200,
      },
    });
    return () => chart.destroy();
  }, [slicedData]);

  return (
    <div className="flex-grow">
      <canvas ref={canvas} height={100}></canvas>
    </div>
  );
}

export default RealChart;
