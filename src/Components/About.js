import React from 'react'
import developer from './Images/developer.png'
import cpp from './Images/skillset/cpp.png'
import javascript from './Images/skillset/javascript.png'
import react from './Images/skillset/react.png'
import node from './Images/skillset/node.png'
import mongodb from './Images/skillset/mongodb.png'
import html from './Images/skillset/html.png'
import css from './Images/skillset/css.png'
import vue from './Images/skillset/vue.png'
import bootstrap from './Images/skillset/bootstrap.png'
import nextjs from './Images/skillset/nextjs.png'
import git from './Images/skillset/git.png'
import windows from './Images/skillset/windows.png'
import vsc from './Images/skillset/vsc.png'
import photoshop from './Images/skillset/photoshop.png'
import github from './Images/skillset/github.png'
import figma from './Images/skillset/figma.png'

const About = () => {
  return (
    <div class="container-fluid">
      <div class="container" style={{ padding: "140px 12px 0px" }}>
        <div className="row">
          <div className="col-md-7">
            <h1 class="fw-bold" style={{ textAlign: 'center', padding: '0px 0px 12px' }}>Know Who I'M</h1>
            <p class="fs-4">
              Hi Everyone, I am <b>Syed Danish Ali Naqvi</b> from <b>Jammu & Kashmir, India.</b>
              <br />
              I am a final year student pursuing my BE in Computer Engineering from Thakur College Of Engineering.
              Additionally, I am currently <b>unemployed</b> and <b>looking for job role of - Software Engineer and Full-Stack Developer.</b>
            </p>
            <p class="fs-4">
              Appart from Coding, some other activities that i love to do!
              <ul class="ps-5">
                <li>
                  Playing Games
                </li>
                <li>
                  Making youtube videos
                </li>
                <li>
                  Travelling
                </li>
              </ul>
            </p>
            <p class="fs-5" style={{ textAlign: "center" }}>"Don't judge each day by the harvest you reap but by the seeds that you plant." <br />-Robert Louis Stevenson</p>
          </div>
          <div className="col-md-5 pt-5">
            <img alt="/" style={{ height: "400px" }} src={developer} />
          </div>
        </div>
        <h1 style={{ textAlign: 'center', paddingTop: "30px", marginTop: '40px' }}>My <b>Skillset</b></h1>
        <div className="row justify-content-center" style={{paddingBottom:'50px'}}>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={cpp} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={javascript} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={html} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={css} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={react} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={node} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={mongodb} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={bootstrap} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={vue} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={git} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={nextjs} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
        </div>
        <h1 style={{ textAlign: 'center', paddingTop: "20px", marginTop: '10px' }}><b>Tools</b> I use</h1>
        <div className="row justify-content-center" style={{paddingBottom:'50px'}}>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={windows} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={vsc} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={github} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={photoshop} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
          <div class="col-md-2 col-4 mx-3 my-3" style={{ border: 'solid 1px', margin:"15px",padding: '20px' }}>
            <img src={figma} alt="/" style={{ height: '100px',width: '100%' }} />
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
