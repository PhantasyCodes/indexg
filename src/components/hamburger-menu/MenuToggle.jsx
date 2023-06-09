import React from 'react'

import { motion } from 'framer-motion'
import styled from 'styled-components'


const Button = styled.div`
    z-index: 99;
    cursor: pointer;
    position: fixed;
    top: 7vh;
    right: 5vw;
    // background-color: red;
`;

const Path = (props) => (
    <motion.path strokeLinecap="round" strokeWidth="3" {...props} />
)

const transition = { duration: 0.3 }

const MenuToggle = (props) => {
    console.log(props.isOpen)
  return (
    <Button onClick={props.toggle} >
        <svg width="43" height="43" viewBox="0 0 23 23">
            <Path 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{
                    closed: { d: "M 2 2.5 L 20 2.5" , stroke: "hsl(0, 0%, 100%)" },
                    open: { d: "M 3 16.5 L 17 2.5", stroke: "hsl(0, 0%, 100%)" }
                }} 
                transition={transition} />
            <Path 
                d="M 2 9.423 L 20 9.423" 
                stroke="hsl(0, 0%, 100%)" 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{closed: {opacity: 1}, open: {opacity: 0}}} 
                transition={transition} />
            <Path 
                animate={props.isOpen ? "open" : "closed"} 
                initial={false} 
                variants={{ closed : { d: "M 2 16.346 L 20 16.346", stroke: "hsl(0, 0%, 100%)" }, open: { d: "M 3 2.5 L 17 16.346", stroke: "hsl(0, 0%, 100%)" } }} 
                transition={transition} />
        </svg>
    </Button>
  )
}

export default MenuToggle