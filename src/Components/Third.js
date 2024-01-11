import React from 'react'
// import Props from '/'

const Third = () => {
  return (
    <>
        <div className='section-main'>
            <div className='section-main1'>
                    <div className="container shadow-lg p-5 mx-auto section-three">
                        <h2>Schedule an Inspection</h2>
                        <p className='section-p'>Take the first step towards a secure and profitable investment. We understand that seeing is believing and our sales team is on hand to give you a tour. All you need to do is fill in the form below and specify your preferred date and time. Our sales team will be in contact with you shortly.</p>
                    </div>
            </div>
            <div className='section-main2'>
                <div className="container shadow-lg p-5 mx-auto d-flex section-threes">
                        <div>
                            <img src={require('../images/land.png')} alt="" className='img-one' />
                        </div>
                        <div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Nmame</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Tel</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Date</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"/>
                            </div>
                            <div className='d-flex gap-5'>
                                <h4>Time</h4>
                                <select className="form-select form-select-sm" aria-label="Small select example">
                                    <option selected></option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <select className="form-select form-select-sm" aria-label="Small select example">
                                    <option selected></option>
                                    <option value="0">00</option>
                                    <option value="30">30</option>
                                </select>
                                <select className="form-select form-select-sm" aria-label="Small select example">
                                    <option selected>AM</option>
                                    <option value="AM">AM</option>
                                    <option value="PM">PM</option>
                                </select>
                            </div>
                            {/* <Props name='Submit'/> */}
                        </div>
                    </div>
            </div>
                    
        </div>

    </>
  )
}

export default Third