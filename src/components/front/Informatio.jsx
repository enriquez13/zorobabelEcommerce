import React from 'react'
import { TbTruck} from "react-icons/tb";
import { GrSecure } from "react-icons/gr";  
import { FiPhoneCall } from "react-icons/fi";

export const Informatio = () => {
  return (
    <>
    <hr className='mt-10' />
      <div className='grid md:grid-cols-3 justify-items-center text-center gap-5 mt-5 mb-[4rem]'>
          
          <div className=''>            
            <h4 className='grid justify-items-center text-2xl w-full text-[2rem]'><TbTruck /></h4>
              <span className='col-start-1 col-span-6 block font-bold mt-5 mx-4'>PROCESO DE DEVOLUCIÓN SENCILLO</span>
              <span className='col-start-1 col-span-6 block mt-5 mx-4'>Tenemos un proceso de devolución rápido y sencillo.
                  Para más información visita la zona de Atención al Cliente.
              </span>
          </div>
          <div className=''>
          <h4 src='https://e7.pngegg.com/pngimages/829/486/png-clipart-computer-icons-security-payment-bank-safe-bank-text-payment.png'
           className='grid justify-items-center text-2xl w-full text-[2rem]'><GrSecure/></h4>
              <span className='col-start-1 col-span-6 block font-bold mt-5 mx-4'>PAGOS SEGUROS</span>
              <span className='col-start-1 col-span-6 block mt-5 mx-4'>Transacciones totalmente seguras gracias a
                  los más avanzados sistemas de codificación de los datos de pago.
              </span>
          </div>
          <div className="">
          <h4 src='https://w7.pngwing.com/pngs/438/868/png-transparent-easier-living-services-pty-ltd-telephone-call-computer-icons-symbol-symbol.png'
           className='grid justify-items-center text-2xl w-full text-[2rem]'><FiPhoneCall/> </h4>
              <span className='col-start-1 col-span-6 block font-bold mt-5 mx-4'>ATENCIÓN AL CLIENTE</span>
              <span className='col-start-1 col-span-6 block mt-5 mx-4'>
                  Ponte en contacto con nosotros y haznos cualquier pregunta, estamos a tu disposición.
              </span>
          </div>
      </div>
      </>
  )
}