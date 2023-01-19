import React from "react";
import {styles} from "./parrilla.css"
import { Card, CardBody, ButtonGroup, CardFooter, Image,Stack, Heading, Text, Divider,Button } from '@chakra-ui/react'

const Parrilla = () => {
    return  <div className="parrilla">
        <Card maxW='sm' className="ficha">
        <CardBody>
            <Image src='' alt='' borderRadius='lg'
            />
            <Text color='blue.600' fontSize='2xl'> Gato1 </Text>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Short Description</Heading>
                <Text>Gender</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2' >
            <Button variant='solid' colorScheme='blue' className="botonficha">
                Adopta
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>

        <Card maxW='sm' className="ficha">
        <CardBody>
            <Image src='' alt='' borderRadius='lg'
            />
            <Text color='blue.600' fontSize='2xl'> Gato2 </Text>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Short Description</Heading>
                <Text>Gender</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2' >
            <Button variant='solid' colorScheme='blue' className="botonficha">
                Adopta
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>

        <Card maxW='sm' className="ficha">
        <CardBody>
            <Image src='' alt='' borderRadius='lg'
            />
            <Text color='blue.600' fontSize='2xl'> Gato3 </Text>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Short Description</Heading>
                <Text>Gender</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2' >
            <Button variant='solid' colorScheme='blue' className="botonficha">
                Adopta
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>

        <Card maxW='sm' className="ficha">
        <CardBody>
            <Image src='' alt='' borderRadius='lg'
            />
            <Text color='blue.600' fontSize='2xl'> Gato4 </Text>
            <Stack mt='6' spacing='3'>
                <Heading size='md'>Short Description</Heading>
                <Text>Gender</Text>
            </Stack>
        </CardBody>
        <Divider/>
        <CardFooter>
            <ButtonGroup spacing='2' >
            <Button variant='solid' colorScheme='blue' className="botonficha">
                Adopta
            </Button>
            </ButtonGroup>
        </CardFooter>
        </Card>
            </div>
}

export default Parrilla