import React, { useState } from 'react'
import './Slider.css'
import { motion } from 'framer-motion';

const Slider = () => {
  const [ num, setNum ] = useState(0);
  return (
    <div className='slider'>
        <motion.div className='div_img'
                    animate={{ x : ( num * -300 ) }}
                    // drag='x'
        >
        {
            [0, 1, 2].map(item => <motion.div className='img'
                                                whileHover={{ scale : 1.2 }}
            > img {item} </motion.div>)
        }
        </motion.div>
        <ul className='pager'>
            {
                [0, 1, 2].map(item => (
                    <motion.li animate={{ backgroundColor : item === num ? 'black' : 'white' }}
                               onClick={() => setNum(item)} 
                    > {item} </motion.li>
                ))
            }
        </ul>
        
        {/* 인디케이터, 무한으로 돌아가는 슬라이더 */}
        <button onClick={ () => setNum( num > 0 ? num - 1 : 2 ) }>prev</button>
        <button onClick={ () => setNum( num < 2 ? num + 1 : 0 ) }>next</button>

    </div>
  )
}

export default Slider