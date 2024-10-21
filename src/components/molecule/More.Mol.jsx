import React from 'react'
import "./more.css"
import { products } from '../../Config2'
import MoltiObjectAtom from '../atom/MoltiObject.Atom'
function MoreMol() {
  return (
    <div className='More '>
      <h3 className='solid'>محصولات پرفروش</h3>
     
     {products.map((i)=>(
        <MoltiObjectAtom {...i}/>
     ))}
    </div>
  )
}

export default MoreMol
