import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ButtonGroup, Button } from '@chakra-ui/react'
import styles from "./menu.css"

const Menu = () => {
    return <div> 
        
        <Breadcrumb separator='-' className="menu1" fontFamily='Jaldi' paddingLeft={0} paddingBottom={2} >
            <div className="AAA">
            <BreadcrumbItem isCurrentPage className="menu2" padding={4} >
                <BreadcrumbLink href='caca' className="menu3">Inicio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2" padding={4}>
               <BreadcrumbLink href='pets' className="menu3" >Mascotas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2" padding={4} colorScheme='yellow'>
                <BreadcrumbLink href='myuser' className="menu3" >Mi Perfil</BreadcrumbLink>
            </BreadcrumbItem>
            </div>

            <div className="BBB">            
            <ButtonGroup spacing='2' paddingRight={4}>
                <Button className="botonficha" variant='solid' colorScheme='yellow' color='white' bg='#f23084'  > Log-in </Button>
            </ButtonGroup>
            </div>
        </Breadcrumb>
        </div>
}

export default Menu