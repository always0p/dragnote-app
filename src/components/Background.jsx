import React from 'react'

function Background() {
  return (
    <div className='fixed w-full h-screen z-[1]'>        
    <div className="absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 text-xl 
    font-semibold">Note</div>
    <h1 className="absolute top-1/2 left-1/2 text-[13vw] -translate-x-[50%] -translate-y-[50%]
    leading-none tracking-tighter font-semibold text-zinc-900">DragNote</h1>     
</div>
  )
}

export default Background