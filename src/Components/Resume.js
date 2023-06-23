import React from 'react'
import resume from './Resume/resume.jpg'

const Resume = () => {
  return (
    <div class="container">
    <div class="row" style={{textAlign:'center',margin:"80px 0px 80px"}}>
        <a href ="./Resume/resume.pdf" attributes-list download ><button type="button" class="btn btn-outline-dark fw-bold">Download</button></a>
    </div>
    <div class="row" style={{textAlign:'center',margin:"80px 0px 80px"}}>
        <img style={{height:'100%'}} src={resume} alt="/"/>
    </div>
    </div>
  )
}

export default Resume
