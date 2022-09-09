import { Text, Box, Link } from "@chakra-ui/react";
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
                    Actualmente estoy en busqueda de mi primer trabajo como programadora, mi bandeja de entrada siempre está abierta.
                    <br/>
                    Ya sea que tengas una pregunta o simplemente quieras saludar!

                    </Text>
                    <div className='contact-item'>
                        <div className='itemLink'>
                            <Icon as={ImMail} w={7} h={7}/>
                            <Text pl='0.5em'>brisavelasco28@gmail.com</Text>
                        </div>
                
                        <div className='itemLink'>
                            <Icon as={FaLinkedin } w={7} h={7} />
                            <Link href='https://www.linkedin.com/in/brisa-velasco-4a993b244/' pl='0.5em'>Brisa Velasco</Link>
                        </div>
                        
                        <div className='itemLink'>
                            <Icon as={FaGithubSquare } w={7} h={7} />
                            <Link href='https://github.com/BrisaVelasco' pl='0.5em'>Brisa Velasco</Link>
                        </div>
                    </div>
                </div>
                
            </Box>
        </div>
    )
}