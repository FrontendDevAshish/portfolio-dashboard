import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/Bentogrid'
import { gridItems } from '@/data'

const Grid = () => {
  return (
    <section id='about'>
        <BentoGrid>
            {gridItems.map((item) =>(
                <BentoGridItem
                id={item.id}
                key={item.id}
                title={item.title}
                description={item.description}
                className={item.className}
                img={item.img}
                />
            ))}
        </BentoGrid>

    </section>
  )
}

export default Grid

{/* <Lottie 
                   loop= {copied}
                   autoplay= {copied}
                   animationData= {animationData}
                   rendererSettings= {{ preserveAspectRatio: "xMidYMid slice",}}
                  height={200} width={400} /> */}