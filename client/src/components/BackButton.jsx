import React from 'react'
import classNames from 'classnames'
import { useNavigate } from 'react-router-dom'
import BackArrow from '../assets/icons/arrow_left.svg'
import './BackButton.scss'

function BackButton({
  variant = 'default'
}) {

    const navigate = useNavigate();

  return (
    <button onClick={() => navigate(-1)} className={classNames(
      'back-btn', 
      `back-btn--${variant}`,
    )}>
      <img src={BackArrow} alt="Back icon" />
      <span className='back-text'>Go back</span>
    </button>
  )
}

export default BackButton