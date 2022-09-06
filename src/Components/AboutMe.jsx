import { Text, Flex, Image} from '@chakra-ui/react';

export const AboutMe = ()=>{
    return(
        <div id='aboutme' className='aboutme'>
            <div className='title-aboutme'>
                <Flex>
                    <Text fontSize='6xl'>Acerca de mí</Text>
                </Flex>
            </div>
            <div className='aboutme-componentText'>
                <div className='aboutme-img'>
                    <Flex>
                        <Image
                            borderRadius='full'
                            boxSize='sm'
                            src='/brisa.png'
                            alt='Dan Abramov'
                        />
                    </Flex>
                </div>
                <div>
                    <div className='TextI'>
                        <Flex>
                            <Text fontSize='3xl'>
                                Soy Brisa , una desarrolladora Full Stack que le apasiona desarrollar aplicaciones poniendo  al usuario como foco principal. 
                                Al descubrir que la programación era una de las formas de crear experiencias tangibles decidí pausar mi vida por unos meses para realizar un Cooding Bootcamp y ser una programadora.
                            </Text>
                        </Flex>
                    </div>
                    <div className='TextII'>
                        <Flex>
                            <Text fontSize='2xl'>En mis tiempos libres me encontrarás soñando con desayunos, ​​cocinando acompañada de musica y descubriendo culturas de otros paises.</Text>
                            <br/>
                        </Flex>
                    </div>
                </div>
                </div>
        </div>
        
    )
}