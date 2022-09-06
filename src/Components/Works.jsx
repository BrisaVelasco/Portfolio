import { Flex, Text, Box, Image, Link , ListItem, UnorderedList,} from "@chakra-ui/react";
import { Icon } from '@chakra-ui/react';
import { GoMarkGithub } from "react-icons/go";
  

export const Works = ()=>{
    return(
        <div id="works" className="works-component">
            <div className='works-title'> 
                <Flex className="title">
                    <Text fontSize='5xl'>Experiencia en proyectos</Text>
                </Flex>
                <br/> 
                <Flex className="subtitle">
                    <Text fontSize='2xl'>En el transcurso del Bootcamp desarrollamos aplicaciones enteras desde cero utilizando las ultimas tecnologias del mercado como:</Text>
                </Flex>
            </div>
                <div className="List">
                    <Flex>
                        <UnorderedList>
                            <ListItem>HTML5</ListItem>
                            <ListItem>CSS3</ListItem>
                            <ListItem>React</ListItem>
                            <ListItem>Next</ListItem>
                        </UnorderedList>
                    </Flex>
                    <Flex>
                        <UnorderedList>
                            <ListItem>Redux</ListItem>
                            <ListItem>Material-UI</ListItem>
                            <ListItem>Chakra-UI</ListItem>
                            <ListItem>Bootstrap</ListItem>
                        </UnorderedList>
                    </Flex>
                    <Flex>
                        <UnorderedList>
                            <ListItem>Node.JS</ListItem>
                            <ListItem>Express</ListItem>
                            <ListItem>Sequelize</ListItem>
                            <ListItem>MongoDB</ListItem>
                        </UnorderedList>
                    </Flex>
                    <Flex>
                        <UnorderedList>
                            <ListItem>PostgresSQL</ListItem>
                            <ListItem>MySQL</ListItem>
                            <ListItem>GitHub</ListItem>
                        </UnorderedList>
                    </Flex>
                </div>
            <div className="works-box">
                <div className="box1">
                    <Box 
                        p={4}
                        display={{ md: 'flex' }} 
                        boxShadow='md'  
                        borderRadius='md' 
                        bgColor='#fef2c6' 
                        color='#467b5d'
                        w='65%'
                        >
                        <Box flexShrink={0}>
                            <Image
                            borderRadius='lg'
                            width={{ md: 40 }}
                            src='/revistaWOW.png'
                            alt='revista wow!'
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                            mt={1}
                            display='block'
                            fontSize='lg'
                            lineHeight='normal'
                            fontWeight='semibold'
                            href='#'
                            >
                            Revista Online WOW! - Hogarth
                            </Text>
                            <Text mt={2} color='#467b5d'>
                            WOW! es una revista online especialmente dirigida a mujeres.
                            Este proyecto fue realizado por 5 personas en el lapso de 4 semanas,
                            en la cual tuvismos que desarrollar una un nuevo componente para 
                            atraer mas publico, una ABM en donde podias realizar Altas, Bajas 
                            y modificaciones a la hora de redactar una noticia.
                            </Text>
                            
                            <div className="Icon">
                                <Icon as={GoMarkGithub} w={7} h={7} /> 
                                <Link href="">Git Hub</Link>
                            </div>
                        </Box>
                    </Box>
                </div>
                
                <div className="box2">
                    <Box 
                        p={4} display={{ md: 'flex' }} 
                        boxShadow='md' 
                        borderRadius='md' 
                        bgColor='#fef2c6' 
                        color='#467b5d'
                        w='65%'
                    >
                        <Box flexShrink={0}>
                            <Image
                            borderRadius='lg'
                            width={{ md: 40 }}
                            h='auto'
                            src='/edlab.png'
                            alt='E-commerce edlab'

                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                mt={1}
                                display='block'
                                fontSize='lg'
                                lineHeight='normal'
                                fontWeight='semibold'
                                href='#'
                            >
                             Edlab - Plataforma 5
                            </Text>
                            <Text mt={2} color='#467b5d'>
                                En plataforma 5 nos desafiaron a realizar un e-comerce en una práctica grupal de 5 personas que se llamo EDLAB en la que desarrollamos,
                                en 2 semanas, una tienda online de productos
                                tecnológicos, con vista de Administrador y cliente.
                                Edlab fue pensado para que el usuario tenga una simple y buena experiencia a la hora de hacer una compra online.
                            </Text>
                            <div className="Icon">
                                <Icon as={GoMarkGithub} w={7} h={7} /> 
                                <Link href="">Git Hub</Link>
                            </div>
                        </Box>
                    </Box>
                </div>

                <div className="box3">
                    <Box 
                        p={4} display={{ md: 'flex' }} 
                        boxShadow='md' 
                        borderRadius='md' 
                        bgColor='#fef2c6' 
                        color='#467b5d'
                        w='65%'
                    >
                        <Box flexShrink={0}>
                            <Image
                            borderRadius='lg'
                            width={{ md: 40 }}
                            src='/portfolio.png'
                            alt='Woman paying for a purchase'
                            />
                        </Box>
                        <Box mt={{ base: 4, md: 0 }} ml={{ md: 6 }}>
                            <Text
                                mt={1}
                                display='block'
                                fontSize='lg'
                                lineHeight='normal'
                                fontWeight='semibold'
                                href='#'
                            >
                             Portfolio - Brisa Velasco
                            </Text>
                            <Text mt={2} color='#467b5d'>
                                El portfolio es un trabajo individual propio. En este proyecto queria hacer algo que me represente al 100% y puedan conocerme un poco más.
                            </Text>
                            <div  className="Icon">
                                <Icon as={GoMarkGithub} w={7} h={7} /> 
                                <Link href="https://github.com/BrisaVelasco/Revista-WOW">Git Hub</Link>
                            </div>
                        </Box>
                    </Box>
                </div>
            </div>
        </div>
    )
}