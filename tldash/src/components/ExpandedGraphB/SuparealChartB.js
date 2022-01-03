import React, { useRef, useEffect, useState } from "react";
import 'chartjs-adapter-moment';
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

function SuparealChartB(props) {
  const canvas = useRef(null);
  const [slicedData, setSlicedData] = useState(new Array(5).fill(null));

  let datar = [5, 2, null, null, null, null];
  let datap = [10, 4, null, null, null, null];
  let datay = [11, 3, null, null, null, null];
  let labels = [Date.now(), Date.now()+1];
   
  let stroke = ["#F3A53F", "#CA6B6E", "#478F96"];


  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            fill: 'none',
            borderWidth: 1.5,
            borderColor: stroke[0],
            spanGaps: true,
            data: datar,
            pointRadius: 3,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            fill: 'none',
            borderWidth: 1.5,
            borderColor: stroke[1],
            spanGaps: true,
            data: datap,
            pointRadius: 3,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            fill: 'none',
            borderWidth: 1.5,
            borderColor: stroke[2],
            spanGaps: true,
            data: datay,
            pointRadius: 3,
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
            display: true,
          },
        },
        scales: {
          x: {
            type: 'time',
            grid: {
                drawBorder: false,
              },
          },
          y: {
            grid: {
                drawBorder: false,
              },
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
      <canvas ref={canvas} height={300}></canvas>
    </div>
  );
}

export default SuparealChartB;
