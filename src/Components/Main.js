import React, { useEffect, useState } from 'react'
import Props from './Props'

const Main = () => {
  let [come, setCome] = useState(false)
  useEffect(() => {
    setCome(true)
  }, [])
  
  return (
    <>
        <div className={`container-fluid row section-one ${come ? 'come' : 'go'}`}>
            <div className='section-ones col-sm-8 col-md-block col-md-12 col-xl-4'>
              <div className='main-div col-md-8 col-sm-12'>
                <h2 className='main-one col-md-12 col-sm-12'>Reinventing the Present, Creating the Future</h2>
              </div>
              <p className='main-two col-md-8 col-sm-10'>We make real estate investments accessible to everyone in a way that is simple, secure amd profitable</p>
              <Props name='Get Started' button='props-btn1'/>
            </div>
            <div className='d-flex col-xl-8 col-sm-block col-sm-8 col-md-12 section-div'>
              <div className='img-div'>
                <img src={require('../images/img1.PNG')} alt="" className='img1 img-fluid' />
              </div>
              <div className='img-div'>
                <img src={require('../images/Capture.PNG')} alt="" className='img2 img-fluid' />
              </div>
            </div>
            <div>
              <button className='quick'>Quick Response</button>
            </div>
        </div>
        <div>
            <p className='landwey'>.LandWey, a member of Oxygen Holdings</p>
        </div>
    </>
  )
}

export default Main