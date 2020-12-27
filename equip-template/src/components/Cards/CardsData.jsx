import React from 'react';
import CardList from './CardList'
import './CardsData.css'

function CardsData(props) {
    return (
        <div className="container">
            <h4 style={{ textAlign: 'left' }}>Dashboard</h4>
            <div className="card-deck">
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">Wellness Visit</small></p>
                    </div>
                </div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text" style={{ color: '#6c9fd5' }}>
                            <span className="cardText">High Blood Pressure</span>
                        </p>
                    </div>
                </div>
                <div className="w-100 d-none d-sm-block d-md-none"></div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">HA1c Control</small></p>
                    </div>
                </div>
                <div className="w-100 d-none d-md-block d-lg-none"></div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">Tobacco Use Screening</small></p>
                    </div>
                </div>
                <div className="w-100 d-none d-sm-block d-md-none"></div>
                <div className="w-100 d-none d-lg-block d-xl-none"></div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">Chronic Care Manag</small></p>
                    </div>
                </div>
                <div className="w-100 d-none d-md-block d-lg-none"></div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">TCM services</small></p>
                    </div>
                </div>
                <div className="w-100 d-none d-md-block d-lg-none"></div>
                <div className="card mb-4">
                    <div className="card-body">
                        <p className="card-text">
                            <CardList />
                        </p>
                        <p className="card-text"><small className="cardText">BMI Control for Age</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardsData;