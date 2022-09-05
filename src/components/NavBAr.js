import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { MdClose } from "react-icons/md"
import { FiMenu } from "react-icons/fi"

const NavBAr = () => {
    const [toggle, settoggle] = useState(false)
    let links = [
        {
        id:1,
        path:'/',
        text:'Home',
    },
        {
        id:2,
        path:'/about',
        text:'About',
    }
    ]

    const handle = () =>{
        settoggle(!toggle)
    }
    
    const closeIt = () =>{
        settoggle(!toggle)
    }

  return (
    <div>
    <nav className='navBar'>
    <button onClick={handle} > {
         toggle ? '' : <FiMenu style={{ color: "#7b7b7b", width: "40px", height: "40px" }}/>
          }
            </button>
        <ul className={ `menuNav  ${ toggle ? 'showMenu' : ''} ` }>
    <button onClick={handle} >
     {
         toggle ? <MdClose style={{ color: "#fff", width: "40px", height: "40px" }} /> : '' 
         }
           </button>
        {
            links.map ( e => {
                return(
                    <li key={e.id} path={e.path} >
                     <NavLink onClick={closeIt} to={e.path} >{e.text} </NavLink>
                     </li>
                )
            } )
        }
        </ul>

    </nav>
    </div>
  )
}

export default NavBAr