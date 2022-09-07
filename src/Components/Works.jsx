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
                    <Text fontSize='2xl'>En el transcurso del Bootcamp desarrollamos aplicaciones enteras desde cero utilizando las últimas tecnologías del mercado como:</Text>
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
                            <ListItem>PostgreSQL</ListItem>
                            <ListItem>MySQL</ListItem>
                            <ListItem>GitHub</ListItem>
                        </UnorderedList>
                    </Flex>
                </div>
            <div className="works-box">
            
                <div className="box1">
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' bgColor='#fef2c6'>
                        <Image 
                            borderRadius='lg'
                            p='0.5em'
                            src='/revistaWow.png' alt='imagenHogarth'></Image>
                        <Box p='6' bgColor='#fef2c6' borderRadius='lg'>
                            <Box mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                                color='#467b5d'>
                                <Text>Revista WOW! - Hogarth</Text>
                            </Box>
                            <Box as='span' color='#467b5d' fontSize='sm'>
                                <Text>WOW! es una revista online especialmente dirigida a mujeres.
                                    Este proyecto fue realizado por 5 personas en el lapso de 4 semanas,
                                    en la cual tuvimos que desarrollar una un nuevo componente para 
                                    atraer más público, una ABM en donde podrás realizar Altas, Bajas 
                                    y modificaciones a la hora de redactar una noticia.
                                </Text>
                                <div className="Icon">
                                    <Box color='#467b5d' pr='1em'>
                                        <Icon as={GoMarkGithub} w={7} h={7} /> 
                                        <Link href="https://github.com/BrisaVelasco/Revista-WOW-">Git Hub</Link>
                                    </Box>
                                </div>
                            </Box>
                        </Box>
                    </Box>
                </div>
                
                <div className="box2">
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' bgColor='#fef2c6'>
                        <Image 
                            borderRadius='lg'
                            p='0.5em'
                            src='/edlab.png' alt='imagenEdlab'
                        />
                        <Box p='6' bgColor='#fef2c6' borderRadius='lg'>
                            <Box mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                                color='#467b5d'>
                                <Text>Edlab - Plataforma 5</Text>
                            </Box>
                            <Box as='span' color='#467b5d' fontSize='sm'>
                                <Text>
                                    En plataforma 5 nos desafiaron a realizar en una práctica grupal de 5 personas, durante 2 semanas, una tienda online de productos tecnológicos, con vista de Administrador y cliente.
                                    Edlab fue pensado para que el usuario tenga una simple y buena experiencia a la hora de hacer una compra online.
                                </Text>
                            </Box>
                        </Box>
                            <div className="Icon">
                                <Box color='#467b5d' pr='1em'>  
                                    <Icon as={GoMarkGithub} w={7} h={7} /> 
                                    <Link href="https://github.com/BrisaVelasco/E-commerce-Edlab">Git Hub</Link>
                                </Box>
                            </div>
                    </Box>
                </div>

                <div className="box3">
                    <Box maxW='sm' borderWidth='1px' borderRadius='lg' bgColor='#fef2c6'>
                        <Image 
                            borderRadius='lg'
                            p='0.5em'
                            src='/portfolio.png' alt='imagenPortfolio'></Image>
                        <Box p='6' bgColor='#fef2c6' borderRadius='lg'>
                            <Box mt='1'
                                fontWeight='semibold'
                                as='h4'
                                lineHeight='tight'
                                noOfLines={1}
                                color='#467b5d'>
                                <Text>Portfolio - Brisa Velasco</Text>
                            </Box>
                            <Box as='span' color='#467b5d' fontSize='sm'>
                                <Text>
                                El portfolio es un trabajo individual propio que elaboré durante unas semanas. En este portfolio me exprese con los colores, el diseño y los estilos. Quería que me representara a mi misma, las cosas que me gustan, mi personalidad para que así puedan conocerme.
                            </Text>
                                <br/>
                            </Box>
                        </Box>
                        <div  className="Icon">
                            <Box color='#467b5d' pr='1em'>
                                <Icon as={GoMarkGithub} w={7} h={7} /> 
                                <Link href="https://github.com/BrisaVelasco/Portfolio">Git Hub</Link>
                            </Box>
                        </div>
                    </Box>
                </div>
            </div>
        </div>
    )
}