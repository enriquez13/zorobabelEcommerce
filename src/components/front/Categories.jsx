import { NavLink } from "react-router-dom"

import React from 'react'

export const Categories = () => {
  return (
  
<>

<div className="grid justify-items-center my-2 pb-3 text-lg text-white ">
            CATEGORIAS
</div>
            <div className=" grid grid-cols-2 text-gray-100 ">
                <NavLink to="/categoria/camiseta" className="w-full relative h-[24rem] md:h-[600px] mt-2">
       
                <img className="object-cover w-full h-full" src="https://i.pinimg.com/564x/c6/1c/2e/c61c2e114bb0e7abb665fa75ee093298.jpg" />
                    <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-full rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver camisetas</div>
                    </div>                
                </NavLink>
                <NavLink to="/categoria/camibuso" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full" src="https://i.pinimg.com/564x/6f/bd/75/6fbd7592e41af6362a742a6ccf5b21ca.jpg" />
                <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-full rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver camibusos</div>
                    </div>      
                </NavLink>
                <NavLink to="/categoria/buzo" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                    <img className="object-cover w-full h-full" src="https://i.pinimg.com/564x/32/e7/7a/32e77ac4c5baa942c51f0af09573b5e8.jpg" />
                    <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className="w-full rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver buzos</div>
                    </div>     
                </NavLink>
                <NavLink to="/categoria/chaqueta" className="w-full relative h-[24rem] md:h-[600px] mt-2">
                <img className="object-cover w-full h-full" src="https://i.pinimg.com/564x/5c/fb/0d/5cfb0dc90bbc1f782acb4f7e97cb2876.jpg" />
                <div className="absolute grid bottom-[50px] w-full text-sm px-4">
                        <div className=" w-full rounded-xl place-self-center py-3 text-center  bg-zinc-900 "> Ver chaquetas</div>
                    </div>      
                </NavLink>
            </div>
            </>
              )
            }