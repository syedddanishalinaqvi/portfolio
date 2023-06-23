import React from 'react'

const Footer = () => {
    return (

        <nav class="container-fluid" style={{ height: "80px", backgroundColor: '#343434'}}>
            <div className="row">
                <div className="col-md-6">
                    <div className="row" style={{ textAlign: 'center', paddingTop: '30px' }}>
                        <p class="text-light">Designed and Developed by Syed Danish Ali Naqvi</p>
                    </div>
                </div>
                <div className="col-md-6" >
                    <div className="row" style={{ textAlign: 'center', paddingTop: '30px' }}>
                        <p class="text-light">Copyright © 2023 Sdan</p>
                    </div>
                </div>
            
            </div>
        </nav>

    )
}

export default Footer
