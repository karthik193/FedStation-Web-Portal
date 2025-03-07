import React from 'react'
import "./Home.css"

import Logo from "../../assets/Get_Started.png"
import { BsLinkedin } from "react-icons/bs"
import { FaFacebookSquare, FaGithubSquare } from "react-icons/fa"
import { useNavigate, Link } from "react-router-dom"

import useCaseLogo from "../../assets/dummy_usecase.jpg"





export default function Home() {
    // const { currentUser } = useAuth()
    const navigate = useNavigate()









    return (
        <div className="home-container">
            <div className='home-body'>
                <div className='get-started' id='getstarted'>
                    <div className='get-started-left'>
                        <div className='get-started-head1'>FedStation</div>
                        <div className='get-started-head2'>A New way for Secure Machine Learning</div>
                        <div className='get-started-tag'>Built to support all your Machine Learning needs <br /> in mobile or web applications</div>
                        <div className='get-started-buttons'>
                            <button className='get-started-button' onClick={() => navigate("/console")}>Get Started</button>
                            {/* <Link to="/watch-demo" className='try-demo-button'>Watch Demo</Link> */}
                            <button className='try-demo-button' onClick={()=>navigate("/watch-demo")}>Watch Demo</button>
                            <button className='docs-button' onClick={() => navigate("/docs")}>Docs</button>
                        </div>
                    </div>
                    <div className='get-started-right'>
                        <img src={Logo} alt='logo' className='get-started-logo' />
                    </div>
                </div>
                <div className='use-cases' id='usecases'>
                    <div className='use-cases-head'>Example Use Cases</div>
                    <div className='use-cases-body'>
                        <div className='use-cases-right'>
                            <div className='use-case-logo'>
                                <img src={useCaseLogo} alt='logo' />
                                {/* <a href="https://www.vectorstock.com/royalty-free-vector/deadline-time-management-on-road-to-success-vector-38067618">Vector image by VectorStock / JulsIst</a> */}
                            </div>
                            <div className='use-case-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </div>
                        <span className='use-case-divider'></span>
                        <div className='use-cases-left'>
                            <div className='use-case-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className='use-case-logo'>
                                <img src={useCaseLogo} alt='logo' />
                            </div>
                        </div>
                        <span className='use-case-divider'></span>
                        <div className='use-cases-right'>
                            <div className='use-case-logo'>
                                <img src={useCaseLogo} alt='logo' />
                            </div>
                            <div className='use-case-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                        </div>
                        <span className='use-case-divider'></span>
                        <div className='use-cases-left'>
                            <div className='use-case-text'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            </div>
                            <div className='use-case-logo'>
                                <img src={useCaseLogo} alt='logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='home-footer'>
                <div className='home-footer-left'>
                    We are always improvising. &nbsp; <span className='feedback-link'>Give Feedback</span>
                </div>
                <div className='home-footer-right'>
                    <div className='footer-connect-us'>Connect with Us</div>
                    <div className='footer-social-media'>
                        <span className='social-icon'><FaFacebookSquare size={"1.5em"} /></span>
                        <span className='social-icon'><BsLinkedin size={"1.35em"} /></span>
                        <span className='social-icon'><FaGithubSquare size={"1.5em"} /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
