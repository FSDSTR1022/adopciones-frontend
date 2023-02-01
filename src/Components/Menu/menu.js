import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ButtonGroup, Button } from '@chakra-ui/react'
import "./menu.css"
import {Link} from 'react-router-dom'

const Menu = () => {
    return <div > 
        
        <Breadcrumb separator='-' className="menu1" fontFamily='Jaldi' paddingLeft={0} paddingBottom={2} >
            <div >
           
            <BreadcrumbItem className="menu2" padding={4}>
               <BreadcrumbLink href='/' className="menu3" ><Link to='/'/>Home</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2" padding={4}>
               <BreadcrumbLink href='pets' className="menu3" ><Link to='/pets'/>Mascotas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2" padding={4} colorScheme='yellow'>
                <BreadcrumbLink href='myuser' className="menu3" ><Link to='/myprofile'/>Mi Perfil</BreadcrumbLink>
            </BreadcrumbItem>

            </div>
        
            <ButtonGroup spacing='2' paddingRight={8} paddingBottom={0}>
                <Button className="botonmenu" variant='solid' colorScheme='yellow' color='white' bg='#f23084' href='Login' height='2rem' as={Link} to='/login' > Log-in </Button>
            </ButtonGroup> 

            
        </Breadcrumb>
        </div>
}

export default Menu