import React, { useEffect, useState } from "react";
import Plotly from "plotly.js-gl3d-dist-min";
import createPlotlyComponent from "react-plotly.js/factory";
const Plot = createPlotlyComponent(Plotly);

function SupatdChart() {
    // Dummy data to be looped
    const datal = [
        57.81, 57.75, 55.48, 54.28, 53.14, 52.25, 51.04, 52.49, 55.49, 56.87,
        53.73, 56.42, 58.06, 55.62, 58.16, 55.22, 58.67, 59.34, 55.07, 59.85,
        53.79, 51.92, 50.95, 49.65, 48.09, 49.81, 47.85, 49.52, 50.21, 52.22,
        54.42, 53.42, 50.91, 58.52, 53.37, 57.58, 59.09, 59.36, 58.71, 59.42,
        55.93, 57.71, 50.62, 56.28, 57.37, 53.08, 55.94, 55.82, 53.94, 52.65,
        50.25,
    ];

    //generate random data for all 3 axes
    const [data, setData] = useState({
        datax: [],
        datay: [],
        dataz: [],
        labels: [],
    });
    // const [datay, setDatay] = useState([]);
    // const [dataz, setDataz] = useState([]);
    const [range, setRange] = useState(5);
    const [rev, setRev] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setRev(rev + 1);
        }, 2000);
        return () => clearInterval(interval);
    }, [rev]);
    useEffect(() => {
        let randomIndex = Math.floor(Math.random() * datal.length);
        setData({
            datax: data.datax
                .concat(datal[Math.floor(Math.random() * datal.length)])
                .slice(-range),
            datay: data.datay
                .concat(datal[Math.floor(Math.random() * datal.length)])
                .slice(-range),
            dataz: data.dataz
                .concat(datal[Math.floor(Math.random() * datal.length)])
                .slice(-range),
            labels: data.labels.concat(+new Date()),
        });
    }, [rev]);
    const l = {
        uirevision: "0",
        width: "100%",
        datarevision: rev,
        margin: {
            l: 0,
            r: 0,
            b: 0,
            t: 0,
        },
        // set range of x,y,z to 0 to 60
        scene: {
            xaxis: {
                range: [0, 60],
            },
            yaxis: {
                range: [0, 60],
            },
            zaxis: {
                range: [0, 60],
            },
        },
    }
    return (
        <div>
            <Plot
                data={[
                    {
                        type: "scatter3d",
                        mode: "line",
                        marker: {
                            color: data.labels,
                            colorscale: "Viridis",
                        },
                        x: data.datax,
                        y: data.datay,
                        z: data.dataz,
                        color: data.labels,
                        opacity: 1,
                        line: {
                            width: 6,
                            reversescale: false,
                        },
                    },
                ]}
                onUpdate={(data) => console.log(data)}
                revision={rev}
                layout={l}
                config={{
                    displaylogo: false,
                    displayModeBar: true,
                }}
            />
        </div>
    );
}

export default SupatdChart;
