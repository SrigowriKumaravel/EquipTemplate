import React from 'react';
import '../Sidebar/Sidebar.scss';
import Toolbar from '../Toolbar/Toolbar';
import CardsData from '../Cards/CardsData';
import { FaUserAlt, FaRegAddressCard } from 'react-icons/fa';
import { AiOutlineDashboard, AiFillPieChart } from 'react-icons/ai'
import { RiSuitcase2Fill, RiSuitcase3Fill, RiBookletLine, RiSuitcase2Line } from 'react-icons/ri'
import { HiDocumentReport } from 'react-icons/hi'
import { GrMail } from 'react-icons/gr'
import Footer from '../Footer/Footer';
import PatientsListCard from '../Cards/PatientsListCard'
import PatientDataList from '../Cards/PatientDataList';
import WorkHistoryList from '../WorkHistory/WorkHistoryList';


class Sidebar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            leftOpen: true,
            rightOpen: true,
        }
    }

    toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
    }
    render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';

        return (
            <div id='layout'>
                <div id='left' className={leftOpen} >
                    <div className='icon'
                        onClick={this.toggleSidebar} >
                        &equiv;
                    </div>
                    <div className={`sidebar ${leftOpen}`} >
                        <div className='header'>
                            <h3 className='title'>
                                <span><b>equip</b></span>
                                <hr />
                            </h3>
                        </div>
                        <div className='content'>
                            <h3 style={{ background: 'white' }}>
                                <AiOutlineDashboard className="dashboardText" />
                                <span style={{ fontWeight: 'bold', padding: '1rem' }}>Dashboard</span></h3>
                            <ul style={{ listStyle: 'none', textAlign: 'justify', padding: '3rem' }}>
                                <li style={{ padding: '0.5rem' }}>
                                    <AiFillPieChart className="imgIcon" />
                                    <span className="menuText">Analytics</span>
                                </li>
                                <li style={{ padding: '0.5rem' }}>
                                    <RiSuitcase2Fill className="imgIcon" />
                                    <span className="menuText">Programs</span>
                                </li>
                                <li style={{ padding: '0.5rem' }}>
                                    <HiDocumentReport className="imgIcon" />
                                    <span className="menuText">Reports</span>
                                </li>
                                <hr className="whiteLine" />
                                <li style={{ padding: '0.5rem' }}>
                                    <FaUserAlt className="imgIcon" />
                                    <span className="menuText">Patient</span>
                                </li>
                                <hr className="whiteLine" />
                                <li style={{ padding: '0.5rem' }}>
                                    <RiSuitcase3Fill className="imgIcon" />
                                    <a href="/WorkHistory" className="menuText">
                                        Work Board</a>
                                </li>
                                <hr className="whiteLine" />
                                <li style={{ padding: '0.5rem' }}>
                                    <FaRegAddressCard className="imgIcon" />
                                    <span className="menuText">Order</span>
                                </li>
                                <li style={{ padding: '0.5rem' }}>
                                    <RiBookletLine className="imgIcon" />
                                    <span className="menuText">Appointment</span>
                                </li>
                                <li style={{ padding: '0.5rem' }}>
                                    <RiSuitcase2Line className="imgIcon" />
                                    <span className="menuText">InPatient</span>
                                </li>
                                <li style={{ padding: '0.5rem' }}>
                                    <GrMail className="imgIcon" />
                                    <span className="menuText">Message</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div id='main'>
                    <div className='header'>
                        <h3 className={`
                      title
                      ${'left-' + leftOpen}
                      ${'right-' + rightOpen}
                  `}>
                            <Toolbar />
                        </h3>
                    </div><br /><br /><br /><br /><br />
                    <div className='content'>
                        <CardsData />
                        <PatientsListCard />
                        <hr />
                        <PatientDataList />
                        <WorkHistoryList />
                        <Footer />
                    </div>
                </div>
            </div>

        );
    }
}

export default Sidebar;