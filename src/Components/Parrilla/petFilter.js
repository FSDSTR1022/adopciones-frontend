import React from "react";
import { Tag,TagLabel,TagLeftIcon,TagRightIcon,TagCloseButton,HStack} from '@chakra-ui/react'
import "./petFilter.css"

const PetFilter = () => {
    return <div className="fitrosbox"> 
        
        <div className="filtrostitulo">Filtros</div>
        <div className="tags">
            <HStack spacing={1}>
                <Tag size='sm' variant='solid' colorScheme='yellow'>Gatos<TagCloseButton /></Tag>
                <Tag size='sm' variant='solid' colorScheme='yellow'>Perros<TagCloseButton /></Tag>
            </HStack>
        </div>
        </div>
}

export default PetFilter