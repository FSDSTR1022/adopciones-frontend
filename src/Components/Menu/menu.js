import React from "react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react'

const Menu = () => {
    return <div> 
        <Breadcrumb separator='-' >
        <BreadcrumbItem m={2} p={2}>
        <BreadcrumbLink href='#' >Home</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem>
        <BreadcrumbLink href='pets'>Mascotas</BreadcrumbLink>
        </BreadcrumbItem>

        <BreadcrumbItem isCurrentPage>
        <BreadcrumbLink href='myuser'>Mi Sitio</BreadcrumbLink>
        </BreadcrumbItem>
        </Breadcrumb>
        </div>
}

export default Menu