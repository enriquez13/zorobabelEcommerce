import React from 'react'
import { NavLink } from 'react-router-dom'
import { useCartContext } from '../../CartProvider'
import { BsBag } from 'react-icons/bs'
import { IoShirtOutline,IoShirt } from 'react-icons/io5'
import { BsWhatsapp } from "react-icons/bs";
import { BsHouseDoor,BsHouseDoorFill} from "react-icons/bs";
import { useState } from 'react'

//const [cambio,setCambio]= useState(false)





export const Pie = () => {
  const [home, setHome] = useState(false)
  const [tshirt, setTshirt] = useState(false)

  function cambiarHome(){
    setHome(false)
    setTshirt(false)
  }
  function cambiarTshirt(){
  setHome(true)
  setTshirt(true)
}

  const {totalProducts} = useCartContext()
  return (
    <div className='px-1 w-full fixed bottom-1'>
      <div className=' w-[hv-100] h-10  rounded-xl grid grid-cols-4 text-center content-center 
    item-center justify-center border text-gray-600 bg-[#FFFEFB] text-lg'>
        <NavLink to="/" className="flex justify-center" >
          <button onClick={cambiarHome} >{home==true ?<BsHouseDoor />:<BsHouseDoorFill/>}</button>
        </NavLink>
      
        <NavLink to='/products' className="flex justify-center">
          <button onClick={cambiarTshirt}>{tshirt==true?<IoShirt/>:<IoShirtOutline />}</button>
        </NavLink>
        <NavLink to='/cart' className="flex justify-center">
          <span className=' relative'><BsBag />
            {
              totalProducts() ? <span className="absolute bottom-[-8px] left-3 text-white text-base bg-blue-600 rounded-full px-2 animate-pulse">
                {totalProducts()}
              </span> : ''
            }
          </span>
        </NavLink>
        <a href="https://wa.me/573127296362" className='flex justify-center text-lime-800'><BsWhatsapp /></a>
      </div>
    </div>
  )
}
