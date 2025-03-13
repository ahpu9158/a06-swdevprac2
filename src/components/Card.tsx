import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import Rating from '@mui/material/Rating';
import { useState } from 'react';

export default function Card( {venueName, imgSrc, onRated} : {venueName:string, imgSrc:string, onRated:Function} ){

    const [rating, setValue] = useState<number | null>(0);


    return(
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}  
                    alt='Event Picture'
                    fill = {true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[15%] p-[10px]'>
                <h2 className='text-indigo-800 font-sans font-semibold'>{venueName}</h2>
            </div>
            <Rating
            className='h-[5%] px-[10px]'
                id={venueName+' Rating'}
                name={venueName+' Rating'}
                data-testid={venueName+' Rating'}
                value={rating}
                onChange={(event, newValue) => {
                        event.stopPropagation();
                        onRated(venueName,newValue);
                        setValue(newValue);
                        
                        }}
            />
        </InteractiveCard>
    );
}