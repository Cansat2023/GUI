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

function RealChart(props) {
  const canvas = useRef(null);
  const [counter, setCounter] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [range, setRange] = useState(10);

  // Dummy data to be looped
  const data = [
    57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87, 53.73,
    56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 60.18, 61.31, 63.25, 65.91, 64.44,
    65.97, 62.27, 60.96, 59.34, 55.07, 59.85, 53.79, 51.92, 50.95, 49.65, 48.09,
    49.81, 47.85, 49.52, 50.21, 52.22, 54.42, 53.42, 50.91, 58.52, 53.37, 57.58,
    59.09, 59.36, 58.71, 59.42, 55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94,
    55.82, 53.94, 52.65, 50.25,
  ];

  const [slicedData, setSlicedData] = useState(data.slice(0, range));

  // Generate fake dates from now to back in time
  const generateDates = () => {
    const now = new Date();
    const dates = [];
    data.forEach((v, i) => {
      dates.push(new Date(now - 2000 - i * 2000));
    });
    return dates;
  };

  const [slicedLabels, setSlicedLabels] = useState(
    generateDates().slice(0, range).reverse()
  );

  // Fake update every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, [counter]);

  // Loop through data array and update
  useEffect(() => {
    setIncrement(increment + 1);
    if (increment + range < data.length) {
      setSlicedData(([x, ...slicedData]) => [
        ...slicedData,
        data[increment + range],
      ]);
    } else {
      setIncrement(0);
      setRange(0);
    }
    setSlicedLabels(([x, ...slicedLabels]) => [...slicedLabels, new Date()]);
    return () => setIncrement(0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [counter]);
  


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
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, rgba0);   
    gradient.addColorStop(1, rgba1);
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: slicedLabels,
        datasets: [
          {
            backgroundColor: gradient,
            fill: 'origin',
            borderWidth: 1.5,
            borderColor: stroke,
            spanGaps: true,
            data: slicedData,
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
          },
        },
        animation: false,

      },
    });
    return () => chart.destroy();
  }, [slicedData]);

  return (
    <div className="">
      <canvas ref={canvas} height={130}></canvas>
    </div>
  );
}

export default RealChart;
