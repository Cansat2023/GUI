import React, { useRef, useEffect } from "react";
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

function RealChart(type, subtype, color) {
  const canvas = useRef(null);

  let data = [3, null, 2, 3, 9, 3, 4, 2, 3, 9];
  let labels = ["10:34:23", "10:34:24", "10:34:25", "10:34:26", "10:34:27", "10:34:23", "10:34:24", "10:34:25", "10:34:26", "10:34:27"];


  useEffect(() => {
    const ctx = canvas.current.getContext("2d");
    if (!ctx) {
      return;
    }
    var gradient = ctx.createLinearGradient(0, 0, 0, 100);
    gradient.addColorStop(0, 'rgba(248,222,189,1)');   
    gradient.addColorStop(1, 'rgba(251,235,214,0)');
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
            borderColor: "#F3A53F",
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
  }, [data]);

  return (
    <div className="flex-grow">
      <canvas ref={canvas} height={100}></canvas>
    </div>
  );
}

export default RealChart;
