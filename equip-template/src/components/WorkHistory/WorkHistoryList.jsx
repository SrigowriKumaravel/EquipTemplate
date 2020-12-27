import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap'
import data from '../DataPart/WorkBoardData.json'
import { FaRegEdit } from 'react-icons/fa'
import { AiFillFileText, AiOutlineFieldTime } from 'react-icons/ai'
import { RiSuitcaseFill } from 'react-icons/ri'

class WorkHistoryList extends Component {
    render() {
        const newData = data;
        return (
            <>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Assigned To</th>
                            <th>Assigned InPatient</th>
                            <th>Requested By</th>
                            <th>Requesting Facility</th>
                            <th>Diagnosis</th>
                            <th>Status</th>
                            <th>Created On</th>
                            <th>Next Followup</th>
                            <th>Last Updated On</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    {
                        newData.map((listData) =>

                            <tbody >
                                <tr key={listData.id}>
                                    <td key="name">{listData.title}</td>
                                    <td key="age">{listData.assignedTo}</td>
                                    <td key="chroncond">{listData.assignedPatient}</td>
                                    <td key="payor">{listData.requestedBy}</td>
                                    <td key="opportunities">{listData.requestingFacility}</td>
                                    <td key="phone">{listData.diagnosis}</td>
                                    <td key="lastVisit">{listData.status}</td>
                                    <td key="payor">{listData.createdOn}</td>
                                    <td key="opportunities">{listData.nextFollowUp}</td>
                                    <td key="phone">{listData.lastUpdatedOn}</td>
                                    <td colSpan={4}>
                                        <FaRegEdit />
                                        <AiFillFileText />
                                        <AiOutlineFieldTime />
                                        <RiSuitcaseFill /></td>
                                </tr>
                            </tbody>)
                    }

                </Table>
            </>
        );
    }
}

export default WorkHistoryList;