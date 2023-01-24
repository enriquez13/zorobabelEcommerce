import React from 'react'
import { useState } from 'react'
import {useCartContext} from '../CartProvider'
//import { ItemCount } from './ItemCount'
import { Link } from 'react-router-dom'


const imgs =[
    {id:0, img:"https://i.pinimg.com/originals/61/4f/cf/614fcffa5a1f887221e977d6738268fe.jpg"},
]
export const ItemDetail = ({data}) => {
    
    
const [goToCart, setGoToCart] = useState(false)
const {addProduct} = useCartContext()

    const onAdd = (quantity) =>{
    setGoToCart(true)
    addProduct(data, quantity, talla, color)
} 



    const [sliderData, setSliderData] = useState(data.img ? data.imagenes : "")
    const handleClick = (index)=>{
        const slider=data.imagenes[index]
        setSliderData(slider)
    }
    const [talla, setTalla] = useState('')
    const [color, setColor] = useState('')

    return (
    <>

    <div className="text-black grid md:grid-cols-2">
    
    <img src={sliderData.img} className='w-full object-cover max-h-[460px] '/>
        <div className="grid grid-cols-4 w-full px-2 md:px-10 gap-2">
            
            {data.imagenes?.map((foto,i)=>
            <img key={foto.id} src={foto.img} className={`${sliderData.id==i? "border-b-4 border-black" :""} object-cover max-h-[110px] w-full py-1 md:px-10`} onClick={()=>handleClick(i)}/>
            )
            }
            
        </div>
        <h2 className="text-left font-bold pl-3 md:text-left text-2xl md:text-4xl  md:mt-10">{data.category}{" "}{data.nombre}</h2> 

            <h3 className="pl-3 text-sm md:text-md mb-6">${data.valor}</h3>

            <div className='grid grid-cols-6 gap-1 place-items-left pl-2'>
                    
                        {data.sizes?.map((c) => (
                            <div>
                        <button key={c.size} onClick={() => setTalla(c.size)}
                        className={`${c.size == talla ? "border bg-black text-gray-100 w-10 h-10 font-bold":"text-[1rem] mx-1 w-9 h-9 border border-gray-200"}  rounded-full `}>{c.size}</button>
                    </div>
                    ))}
                    
                    </div>
                    <div className='grid grid-cols-6 gap-1 place-items-left pt-3 pl-2'> 
                    {data.sizes?.map(item => (
                            item.size === talla ? item.colors.map(col => (
                                <div className=''>
                                    <button onClick={() => {

                                        setColor(col.color)
                                    }} key={col.color} className={`${col.color == color ? "border-2 border-black w-10 h-10" : "border border-gray-300 w-9 h-9"} ${col.bg}  
                                         mx-1 border rounded-full `}>

                                    </button>
                                </div>
                            )
                            ) : ""))}
                            </div>
                          

        <div className="w-auto px-5 md:px-20">
            
            {
            //    goToCart
             //   ? <Link to='/cart'>Terminar compra</Link>
             //   : <ItemCount initial={1} stock={12} onAdd={onAdd}/>
            }
            
            {talla && color ?<div className="">
                <div className='mx-8'>
                <button  className="flex items-center justify-center w-full h-11 mt-5 
                border border-black rounded-xl"  onClick={()=> onAdd(1)}>Agregar al carrito</button>
                </div>
                <div className='mx-8'>
                <Link to='/pay'>
                    <button className="flex items-center justify-center w-full  h-11 mt-3
                    text-white bg-black rounded-xl font-bold">Comprar
                    </button>
                </Link>
                </div>
            </div>:""}
            <p className='mt-5'>El camibuso tipo polo es un producto de alta calidad debido a que está elaborado en piqué de alta calidad lo cual garantiza comodidad, suavidad en la tela, agradable a la vista,  es semi stretch para mayor comodidad, no destiñe y tampoco se deforma después del lavado en condiciones normales. Nuestra horma es la convencional o ideal (no es reducida ni tampoco horma grande). </p>
            <p className='mt-5'>Material</p>
            <hr/>
            <p className='mt-5'>Envíos</p>
            <hr/>
            <p className='mt-5'>Dimensiones</p>
            <hr/>
            <p className='mt-5'>Instrucciones de cuidado</p>
            <hr/>
        </div>
    </div>

    <h2 className="w-full text-2xl md:text-4xl my-2 md:mt-12 text-center">Agregar más productos</h2>
    

    <div className=" h-32 grid grid-cols-2 md:grid-cols-3 md:gap-12 px-3 md:px-10">
       Aquí van Imagenes        
    </div>
   

    </>
  )
}

export default ItemDetail

