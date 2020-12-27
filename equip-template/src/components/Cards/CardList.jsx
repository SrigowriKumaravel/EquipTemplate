import React from 'react';
import { Doughnut } from 'react-chartjs-2'

function CardList() {
    const data = {
        datasets: [
            {

                label: "Completed",
                fill: true,
                lineTension: 0.1,
                backgroundColor: "#ea9927",
                borderColor: "#ea9927",
                data: [50, 20]
            }
        ],

    }

    return (
        <div className="container">
            <div className="mr-auto">
            </div>
            <div className="row">
                <Doughnut data={data} width={150} height={150} />
            </div>
        </div>
    )
}
export default CardList