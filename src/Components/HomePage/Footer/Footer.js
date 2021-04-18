import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import appStore from './../../../images/app-store.png';
import playStore from './../../../images/play-store.png';
import './Footer.css';

const Footer = () => {
    return (
        <footer id="Footer">
            <Container>
                <Row className="py-3">
                    <Col md={4} className="py-3 text-white">
                        {/* <Link to="/admin"><h3 className="text-danger"><i className="now-ui-icons users_circle-08 mr-2"></i>Admin Panel</h3></Link> */}
                        <h4 className="">MANPOWER SUPPLY AGENCY</h4>
                        <p className="">Email: xyz@gmail.com</p>
                        <p className="">Phone: +88000-000-000</p>
                    </Col>
                    <Col md={2} className="py-3">
                    <ul className="list-unstyled">
                            <li className="py-2"><a href='/help'>Get Help</a></li>
                            <li className="py-2"><a href='/faq'>Read FAQ</a></li>
                            <li className="py-2"><a href='/templates'>View All Templates</a></li>
                            <li className="py-2"><a href='/about-us'>About Us</a></li>
                        </ul>
                    </Col>
                    <Col md={2} className="py-3">
                    <ul className="list-unstyled">
                            <li className="py-2"><a href='/policy'>Privacy Policy</a></li>
                            <li className="py-2"><a href='/cookie'>Cookie Policy</a></li>
                            <li className="py-2"><a href='/terms'>Terms of Use</a></li>
                            <li className="py-2"><a href='/contacts'>Contact Us</a></li>
                        </ul>
                    </Col>
                    <Col md={4} className="py-3">
                    <ul className="list-unstyled text-white">
                            <h6>DOWNLOAD OUR APP</h6>
                            <p>Tackle your to-do list wherever you are with our mobile app & make your life easy.</p>
                            <div className="d-flex">
                            <a href=""><img style={{width: "162px"}} src={appStore} alt="AppStore Logo"/></a>
                            <a href=""><img className="app-logo" style={{width: "162px"}} src={playStore} alt="Play Store Logo"/></a>
                            </div>
                        </ul>
                    </Col>
                </Row>
                <div className='footer-bottom d-flex justify-content-center'>
                    <p className='text-white'>Copyright &copy; {(new Date()).getFullYear()} Developed by S.M. Samrat </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;