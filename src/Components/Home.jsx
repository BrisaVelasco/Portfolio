import { Flex, Text} from '@chakra-ui/react';
import { useState } from 'react';

export const Home = ()=>{
    return(
        <div className='grid'>
            <div className='Home'>
                <div className='Name'>
                    <Flex >
                        <Text fontSize='6xl'>Brisa Velasco</Text>
                    </Flex>
                </div>
                <div className='Presentation'>
                    <Flex>
                        <Text fontSize='3xl'>
                            Hola mundo mi nombre es Brisa y soy desarrolladora Full Stack developer, me especializo en crear y ocasionalmente a diseñar una interfaz de usuario atractiva, dando vida a la experiencia del usuario.
                        </Text>
                    </Flex> 
                </div>
            </div>
            <div className='Image'></div>
        </div>
    )
}