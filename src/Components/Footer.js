import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faYoutube, faInstagram,faGithub, faFacebook} from '@fortawesome/free-brands-svg-icons';
import {
    faBriefcase,
    faCode,
    faInfoCircle,
    faLock, faMoneyBill, faScroll,
    faTools, faUser
} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

function Footer({pad}) {

    return (
        <Container fluid="true" className={`px-${pad}`}>
            <Row className="mx-0">
                <Col className="justify-content-start" lg={4} md={4} sm={4}>
                    <h4 className="title text-dark mt-sm-2">Contact</h4>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faFacebook}/> Facebook</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faYoutube}/> YouTube</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faInstagram}/> Instagram</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faGithub}/> Github</a><br/>
                </Col>
                <Col className="justify-content-start " lg={4} md={4} sm={4}>
                    <h4 className="title text-dark mt-sm-2">Important</h4>
                    <Link to="/javascript" className="contactLink"><FontAwesomeIcon icon={faCode}/> Practice</Link><br/>
                    <Link to="/project" className="contactLink"><FontAwesomeIcon icon={faBriefcase}/> Projects</Link><br/>
                    <Link to="/about" className="contactLink"><FontAwesomeIcon icon={faInfoCircle}/> About</Link><br/>
                    <Link to="/services" className="contactLink"><FontAwesomeIcon icon={faTools}/> Service</Link><br/>
                </Col>
                <Col className="justify-content-start mt-sm-2" lg={4} md={4} sm={4}>
                    <h4 className="title text-dark">Pages</h4>
                    <Link to="/privacy" className="contactLink" href="#a"><FontAwesomeIcon icon={faLock}/> Privacy Policy</Link><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faScroll}/> Terms & Condition</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faMoneyBill}/> Refund Policy</a><br/>
                    <a className="contactLink" href="#a"><FontAwesomeIcon icon={faUser}/> Community Guidelines</a><br/>
                </Col>
            </Row>
        </Container>
    );
}

export default Footer;