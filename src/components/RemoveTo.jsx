import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { removeto } from './Slice'
import '../styles/leap.css'

const Remove = () => {
    const dispatch = useDispatch();

    const years = useSelector(state=>state.years)
  
  return (
    <div className='container-2'>
      {years.map((year)=>(
        <div className='form-4' key={year}>
            {year.number}
           <div >
           <button className='form-5' onClick={()=>dispatch(removeto(year.id))}>remove</button>
           </div>
        </div>

      ))}
    </div>
  )
}

export default Remove
