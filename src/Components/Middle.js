import React from 'react'
import '../Css/Navbar.css'
import Image from './coding.png'
import html from './Images/html.png'
import css from './Images/css.png'
import javascript from './Images/javascript.png'
import react from './Images/react.png'
import mongo from './Images/mongo.png'
import node from './Images/node.png'
import Intro from './Images/intro.png'
import instagram from './Images/instagram.png'
import twitter from './Images/twitter.png'
import linkedin from './Images/linkedin.png'
import github from './Images/github.png'

const Middle = () => {
    return (
        <section>
            <div id="home" class="container-fluid" style={{ padding: '30px',paddingLeft:"80px"}}>
                <div class="container" style={{ textAlign: 'left', paddingTop: '144px', paddingBottom: "32px" }}>
                    <div class="row ms-5">
                        <div class="col-md-7">
                            <h1 class="anime fw-bold">MERN STACK DEVELOPER</h1>
                            <h3>Hi There!<span class="wave" role="img" aria-labelledby="wave">👋🏻</span></h3>
                            <h5>i'm Danish Ali. A passionate MERN Stack Developer based in India.</h5>
                        </div>
                        <div class="col-md-5">
                            <img href="/" src={Image} alt="/" />
                        </div>
                    </div>
                    <div class="row ms-5">
                        <div className="col-md-2">
                            <h3>Tech Stack <span class=" fs-2 ">&rarr;</span></h3>
                        </div>
                        <div className="col">
                            <ul>
                                <img href='/' style={{ height: '40px', }} src={html} alt='/' />
                                <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={css} alt='/' />
                                <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={javascript} alt='/' />
                                <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={react} alt='/' />
                                <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={node} alt='/' />
                                <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={mongo} alt='/' />
                            </ul>
                        </div>
                    </div>
                </div >

            </div>
            <div id="contact" class="container-fluid" style={{ textAlign: 'left', padding: ' 70px 12px 70px' }}>
                <div className="container" style={{ padding: '0 12px 0' }}>
                    <div className="row" style={{ margin: '0px -12px -12px 0px' }}>
                        <div className="col-md-8" style={{ textAlign: "center", padding: '100px 12px 20px' }}>
                            <h1 class="fs-1 fw-bold" style={{ paddingBottom: "8px" }}>INTRODUCING MYSELF</h1>
                            <p class="fs-4" style={{ textAlign: "left", paddingTop: "50px", marginBottom: "16px" }}>I fell in love with programming and I have at least learnt something, I think… 🤷‍♂️
                                <br />
                                <br />
                                I am fluent in classics like <b class="fw-bold">C++ and Javascript.</b>
                                <br />
                                <br />
                                My field of Interest's are building new <b class="fw-bold"> Web Technologies and Products</b> and also developing products with <b class="fw-bold">Node.js and Modern Javascript Library and Frameworks</b> like <b class="fw-bold">React.js and Next.js.</b>
                                <br />
                                <br />
                                Sometimes i also play games like <b class="fw-bold">Valorant, GTA5, CSGO .</b>
                            </p>
                        </div>
                        <div className="col-md-4" style={{ padding: '144px 12px 0px' }}>
                            <img style={{ height: '240px',width:'240px' }} href="/" src={Intro} alt="/" />
                        </div>
                    </div>
                </div>

            </div>
            <div id="connect">
                <div className="container" style={{ textAlign: "center" }}>
                    <h1>FIND ME ON</h1>
                    <h5 class="mb-3">Feel Free to <b>Connect</b></h5>
                    <div class="mb-5">
                        <a href='https://github.com/syedddanishalinaqvi' target="blank"><img style={{ height: '40px', }} src={github} alt='/' /></a>
                        <a href='https://twitter.com/naqvii99' target="blank"><img style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={twitter} alt='/' /></a>
                        <a href='https://www.instagram.com/_nkvii/' target="blank" > <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={instagram} alt='/' /></a>
                        <a href='https://www.linkedin.com/in/syed-danish-ali-naqvi-b783741b9/' target='blank'>  <img href='/' style={{ height: '40px', width: '40px', marginLeft: "20px" }} src={linkedin} alt='/' /></a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Middle
