import Image from 'next/image';
import InteractiveCard from './InteractiveCard';

export default function Card( {venueName, imgSrc} : {venueName:string, imgSrc:string} ){
    return(
        <InteractiveCard>
            <div className='w-full h-[70%] relative rounded-t-lg'>
                <Image src={imgSrc}  
                    alt='Event Picture'
                    fill = {true}
                    className='object-cover rounded-t-lg'
                />
            </div>
            <div className='w-full h-[30%] p-[10px]'>
                <h2 className='text-indigo-800 font-sans font-semibold'>{venueName}</h2>
            </div>
        </InteractiveCard>
    );
}