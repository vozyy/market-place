import React from 'react'
import { useNavigate } from 'react-router-dom';
import BackArrow from '../assets/icons/arrow_left.svg'

function BackButton() {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className='back-btn'>
      <img src={BackArrow} alt="back" />
      <span className='back-text'>Go back</span>
    </button>
  )
}

export default BackButton