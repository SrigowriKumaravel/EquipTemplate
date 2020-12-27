import React, { Component } from 'react';
class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="container-fluid">
                    <div className="d-sm-flex justify-content-center justify-content-sm-between py-2 w-100">
                        <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">2018 © <a href="https://equip.health/" target="_blank" rel="noopener noreferrer">equip.com </a> | Build V.7c704ce</span>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;