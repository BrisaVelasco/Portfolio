import { Flex, Text, Box, Link } from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { ImMail } from "react-icons/im";
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa';

export const Contact = ()=>{
    return(
        <div id="contact" className="contact">
            <Box 
                className='contact-box' 
                bgColor='#fef2c6' 
                boxShadow='md'  
                borderRadius='md' 
                w='100%'>
                <div className="contactBox-continer">
                    <h1>Contacto</h1>
                    <Text>
                        Actualmenteestoy en busqueda de mi primer trabajo como programadora, mi bandeja de entrada siempre está abierta.<br/> Ya sea que tengas una pregunta o simplemente quiera saludar!
                    </Text>
                    
                    <Text> <Icon as={ImMail} w={7} h={7}/>brisavelasco28@gmail.com</Text>
                    <Link href='https://www.linkedin.com/in/brisa-velasco-4a993b244/'> <Icon as={FaLinkedin } w={7} h={7} />Brisa Velasco</Link>
                    <Link href='https://github.com/BrisaVelasco'> <Icon as={FaGithubSquare } w={7} h={7} />Brisa Velasco</Link>
                </div>
            </Box>
        </div>
    )
}