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
import 'chartjs-adapter-moment';
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

function RealChartB(props) {
  const canvas = useRef(null);
  const [slicedData, setSlicedData] = useState(new Array(5).fill(null));

  // generate fake data
  const generateData = () => {
    const data = new Array(5).fill(null);
    data.forEach((v, i) => {
      data[i] = Math.random() * 100;
    });
    return data;
  };
  let datar = generateData();
  let datap = generateData();
  let datay = generateData();
  // generate fake data
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    datar.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };
  let labels = generateDates().slice(0, 5).reverse();
   

  let rgba0 = ['rgba(248,222,189,1)', 'rgba(218,129,132,1)', 'rgba(208,251,255,1)'];
  let rgba1 = ['rgba(251,235,214,0)', 'rgba(202,107,110,0)', 'rgba(221,242,244,0)'];
  let stroke = ["#F3A53F", "#CA6B6E", "#478F96"];

  useEffect(() => {
    return
  }, [])

  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradientr = ctx.createLinearGradient(0, 0, 0, 100);
    gradientr.addColorStop(0, rgba1[0]);   
    gradientr.addColorStop(1, rgba1[0]);
    var gradientp = ctx.createLinearGradient(0, 0, 0, 100);
    gradientp.addColorStop(0, rgba1[1]);   
    gradientp.addColorStop(1, rgba1[1]);
    var gradienty = ctx.createLinearGradient(0, 0, 0, 100);
    gradienty.addColorStop(0, rgba1[2]);   
    gradienty.addColorStop(1, rgba1[2]);

    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [
          {
            backgroundColor: gradientr,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[0],
            spanGaps: true,
            data: datar,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            backgroundColor: gradientp,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[1],
            spanGaps: true,
            data: datap,
            pointRadius: 0,
            pointHitRadius: 20,
            cubicInterpolationMode: 'monotone',
            tension: 0.4,
          },
          {
            backgroundColor: gradienty,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke[2],
            spanGaps: true,
            data: datay,
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
            type: 'time',
            time: {
              parser: 'hh:mm:ss',
              unit: 'second',
              tooltipFormat: 'MMM DD, H:mm:ss a',
              displayFormats: {
                second: 'mm:ss',
              },
            },
            ticks: {
              autoSkipPadding: 0,
              maxRotation: 40,
            },
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
      <canvas ref={canvas} height={130}></canvas>
    </div>
  );
}

export default RealChartB;
