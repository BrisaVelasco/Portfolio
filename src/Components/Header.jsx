import { Flex, Text, IconButton} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon  } from '@chakra-ui/icons';
import { useState } from 'react';



export const Header = () => {
  //estado para que funcione el boton del menu abierto
  const[display, changeDisplay] = useState('none')
  
  return (
    <div className='Navbar'> 
      <Flex justifyContent='space-between' p='15px' align='center'>
        <Flex>
          <Text fontSize='2em'>Brisa Velasco</Text>
        </Flex>
        <Flex gap='40' pr='150px' display={['none', 'none', ' flex', 'flex']}>
          <a href='#aboutme'>
          <Button
            variant='ghost' 
            aria-label='AboutMe'
            >
            Acerca de mí
          </Button>
            </a>

          <a href='#works'>
            <Button
              variant='ghost' 
              aria-label='Works'
            >
              Experiencia
            </Button>
          </a>

          <a href='#contact'>
            <Button
              variant='ghost' 
              aria-label='Contact'
            >
              Contacto
            </Button>
          </a>

        </Flex>

        <IconButton 
          aria-label='Open Menu' 
          size='lg' mr={2} 
          icon={<HamburgerIcon/>} 
          display={['flex', 'flex', 'none', 'none']}
          onClick={()=>changeDisplay('flex')}
        />
        <Flex
          w='100%'
          zIndex={20}
          h='100%'
          pos='fixed'
          top='0'
          left='0'
          overflowY='auto'
          flexDir='column'
          display={display}
          bg='#fef2c6'
        >
          <Flex justifyContent='flex-end'>
            <IconButton
             
             mt={2}
             mr={2}
             aria-label='Close Menu'
             size='lg'
             icon={
               <CloseIcon/>
             }
             onClick={()=>changeDisplay('none')}
            />
          </Flex>
          <Flex flexDir='column' align='center'>
            <a href='#aboutme'>
              <Button
                  variant='ghost' 
                  aria-label='AboutMe'
                  onClick={'#aboutme'}
                >
                  About Me
                </Button>
              </a>

              <a href='#works'>
                <Button
                  variant='ghost' 
                  aria-label='Works'
                  onClick={'#works'}
                >
                  Works
                </Button>
              </a>

              <a href='#contact'>
                <Button
                  variant='ghost' 
                  aria-label='Contact'
                >
                  Contact
                </Button>
              </a>
          </Flex>
        </Flex>
      </Flex>
    </div> 
  );
};
