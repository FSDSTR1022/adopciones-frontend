import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, ButtonGroup, Button } from '@chakra-ui/react'
import {styles} from "./menu.css"

const Menu = () => {
    return <div> 
        
        <Breadcrumb separator='-' className="menu1" display="flex" justifyContent="space-around" fontFamily='Jaldi' paddingLeft={0} paddingBottom={2}>
            <BreadcrumbItem isCurrentPage className="menu2">
                <BreadcrumbLink href='#' className="menu3">Inicio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2">
               <BreadcrumbLink href='pets' className="menu3" >Mascotas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem className="menu2">
                <BreadcrumbLink href='myuser' className="menu3">Mi Perfil</BreadcrumbLink>
            </BreadcrumbItem>

            <ButtonGroup spacing='2' >
                <Button className="botonficha" variant='solid' colorScheme='yellow' color='white' bg='#f23084'> Log-in </Button>
            </ButtonGroup>

        </Breadcrumb>
        </div>
}

export default Menu