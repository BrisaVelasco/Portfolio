import { Flex, Text} from '@chakra-ui/react';
import timelineData from '../data';
import { TimelineItem } from './TimelineItem';

export const Timeline = ()=>(
    <div className='timeline'>
        <div className='title-timeline'>
            <Flex>
                <Text fontSize='3xl'>Linea de tiempo</Text>
            </Flex>
        </div>
        <div className="timeline-container">
            {timelineData.map((data, idx)=>(
                <TimelineItem data ={data} key={idx}/>
            ))}
        </div>
    </div>
)