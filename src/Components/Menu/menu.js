import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'
import {styles} from "./menu.css"

const Menu = () => {
    return <div> 
        <Breadcrumb separator='  -' className="menu1">
            <BreadcrumbItem isCurrentPage m={2} p={2} className="menu2">
                <BreadcrumbLink href='#' className="menu3">Inicio</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem m={2} p={2} className="menu2">
               <BreadcrumbLink href='pets' className="menu3">Mascotas</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem m={2} p={2}  className="menu2">
                <BreadcrumbLink href='myuser' className="menu3">Mi Perfil</BreadcrumbLink>
            </BreadcrumbItem>
        </Breadcrumb>
        </div>
}

export default Menu