import React from "react";
import {useRef,useEffect } from "react";
import {Chart} from 'chart.js';
import { Container, Form, Row, Col, Card } from "react-bootstrap";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, Title,CategoryScale,LinearScale } from "chart.js";
import { Doughnut, Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title);

function InputForm() {

    const data = {
        title: 'Mortality',
        labels: [
            'Mortality'
        ],
        datasets: [{
            data: [45,55],
            backgroundColor: [
                'blue',
                '#808080'
            ],
            hoverOffset: 4
        }]
        ,
        options: {
            chartId:"circle"
        }
    };

    const data2 = {
        datasets: [{
            label: 'My First Dataset',
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
            ],
            borderColor: [
                'rgb(255, 99, 132)',
                'rgb(255, 159, 64)',
                'rgb(255, 205, 86)',
                'rgb(75, 192, 192)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
            ],
            borderWidth: 1
        }]
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Bar Chart',
          },
        },
      };

    return (
        <>
            <h1>Graphs</h1>
            <br></br>
            <Container>
                <Card>
                    <br></br>
                    <Form className="p-2 mx-2">
                        <Form.Group as={Row}>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="1"
                                    name="1"
                                    id="1"
                                />
                            </Col>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="2"
                                    name="2"
                                    id="2"
                                />
                            </Col>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="3"
                                    name="3"
                                    id="3"
                                />
                            </Col>
                            <Col sm={2}>
                                <Form.Check
                                    type="radio"
                                    label="4"
                                    name="4"
                                    id="4"
                                />
                            </Col>
                        </Form.Group>
                    </Form>
                   <div className="d-flex justify-content-center">
                   <div as={Row} style={{ height: '25rem', width: '25rem' }} >
                        <MyDoughnutChart data={data}/>
                    </div>
                   </div>
                    <div as={Row} className="p-2">
                        <MyBarChart options={options}/>
                    </div>
                </Card>
            </Container>
        </>

    );
}

function MyDoughnutChart({ data }) {

    const chartRef = useRef(null);

    useEffect(() => {
        //Chart.register
        //this plugin  should not effect other charts

        if(chartRef.current){
            
            Chart.register({
                id: 'customPluginName',
                beforeDraw: (chart) => {
                    console.log(chart)
                    if(chart.id === 2){
                    var width = chart.width,
                        height = chart.height,
                        ctx = chart.ctx;
    
                    ctx.restore();
                    var fontSize = (height / 114).toFixed(2);
                    ctx.font = fontSize + "em sans-serif";
                    ctx.textBaseline = "middle";
    
                    var text = "50%",
                        textX = Math.round((width - ctx.measureText(text).width) / 2),
                        textY = height / 2;
    
                    ctx.fillText(text, textX, textY);
                    ctx.save();
                }
            }
            });
        }
    }, [chartRef]);

    return <Doughnut ref={chartRef} data={data} id="circle"/>;
}

function MyBarChart() {
    const data = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'My First dataset',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderColor: 'rgba(255,99,132,1)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgba(255,99,132,0.4)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: [65, 59, 80, 81, 56, 55, 40]
            }
        ]
    };
    return <Bar data={data} />;
}

export default InputForm;