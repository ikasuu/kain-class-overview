import React from 'react';
import { versionName } from '../special/Values';
import { Col, Row } from 'react-bootstrap';
import '../css/footer.css';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <Row>
                    <Col>
                        <div className="footer-text">© 2020 Grandis Library - All rights reserved.</div>
                        <div className="footer-text">KMSt Ver. 1.2.112 [{versionName}]</div>
                    </Col>
                </Row>
            </div>
        </footer>
    );
}

export default Footer
