import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'
import "./lastitem.css"
function LastItemAtom({img ,date , title , detail , link , url}) {
 
 const navigate = useNavigate()
 const handleClick5 = () => {

  navigate(url)
 }
 
  return (
    <div onClick={handleClick5} className='roof'>

      <div className='roof-1'>


        <h3 className='roof-img'>{img}</h3>
        <h4 className='roof-date'>{date}</h4>
        <h2 className='roof-title'>{title}</h2>
        <p className='roof-detail'>{detail}</p>
        <Link className='roof-link'>{link}</Link>
      </div>
      
    </div>
  )
}

export default LastItemAtom
