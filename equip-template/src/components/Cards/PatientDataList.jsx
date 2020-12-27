import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap'
import data from '../DataPart/DashboardData.json'

class PatientDataList extends Component {
    render() {
        const newData = data;
        return (
            <>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Chronic Conditions</th>
                            <th>Payer</th>
                            <th>Opportunities</th>
                            <th>Phone</th>
                            <th>Last Visit</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        newData.map((listData, index) =>

                            <tbody >
                                <tr key={listData.id}>
                                    <td key="name">{listData.name}</td>
                                    <td key="age">{listData.age}</td>
                                    <td key="chroncond">{listData.chronicConditions}</td>
                                    <td key="payor">{listData.payer}</td>
                                    <td key="opportunities">{listData.opportunities}</td>
                                    <td key="phone">{listData.phone}</td>
                                    <td key="lastVisit">{listData.lastVisit}</td>
                                    <td><Button className="btn btn-primary">CarePlan</Button></td>
                                </tr>
                            </tbody>)
                    }

                </Table>
            </>
        );
    }
}

export default PatientDataList;