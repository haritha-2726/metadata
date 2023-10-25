import React from 'react'
import {HiLocationMarker} from "react-icons/hi"
import {MdOutlineContactPhone} from "react-icons/md"
import { Link } from "react-router-dom";

const Location = () => {
  return (
    <> 
    <div>
 
        <h1 className='flex gap-2 text-4xl font-bold'><span><HiLocationMarker/> </span>Location</h1>
        <p className=' pl-4 pt-4' >Metadata Integrated Solutions</p>
        <p className='pl-4'>  2108 N ST; </p>
        <p className='pl-4'>Sacramento, California 95816</p>
    </div>
    <div>
    <h1 className='flex gap-2 text-4xl font-bold pt-4'><span><MdOutlineContactPhone/> </span>Contact</h1>
        <p className=' pl-4 pt-4'> Mobile: 9876554400</p>
        <p className='pl-4'> Local : 8765376554</p>
      <Link to="mailto:metadataintegratedsolutions@gmail.com"><p className='pl-4 font-semibold '> Email:metadataintegratedsolutions@gmail.com</p></Link> 

    </div>
    </>

  )
}

export default Location
