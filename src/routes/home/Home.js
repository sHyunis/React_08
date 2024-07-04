import React from 'react'
import { motion } from 'framer-motion'
// import Tabs from '../../components/tabs/Tabs'
// import Accordion from '../../components/accordion/Accordion'
// import Slider from '../../components/slider/Slider'
// import MoveBox from '../../components/animatePresence/MoveBox'
// import Tabs from '../../components/animatePresence/Tabs'
// import Accordion from '../../components/animatePresence/Accordion'
// import Accordion from '../../components/animatePresence/Accordion2'
// import LoadingCircle from '../../components/animatePresence/LoadingCircle'
import LoadingText from '../../components/animatePresence/LoadingText'


const Home = () => {
  return (
    <div style={{ display : 'flex', flexDirection : 'column', gap : '50px' }}>
        {/* <motion.div
                initial={{ x : 1000 }}
                animate={{ x : 0 }}
        > Home </motion.div>

        <Tabs />
        <Accordion /> */}
        {/* <Slider /> */}
        {/* <MoveBox /> */}
        {/* <Tabs /> */}
        {/* <Accordion /> */}
        {/* <LoadingCircle /> */}
        <LoadingText />
        
    </div>
  )
}

export default Home