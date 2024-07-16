import React from 'react'
import QRCODE from '../../assets/QR-Codes.jpg'
import './help1.css'


const help1 = () => {
  return (
    <div className='help1 container'>
    <div className='help1-col'>
        <h3>For Indian Donors</h3>
        <ul>
            <li>Bank Of Baroda</li>
            <li>City: Nagpur</li>
            <li>Contact No: +91 8010996763</li>
            <li>Account Name: Suvidha Mahila Mandal</li>
            <li>Suvidha Account No: 97840100027609</li>
            <li>IFSC Code: BARB0DBKPAR</li>
        </ul>
    </div>

    <div className='help1-col'>
    <h3>QR Code</h3>
    <img src={QRCODE} alt='' />
    </div>
    </div>
  )
}

export default help1;