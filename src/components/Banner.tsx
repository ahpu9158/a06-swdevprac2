import Image from 'next/image';

import styles from './banner.module.css'

export default function Banner(){{
    return(
        <div className={styles.banner}>
            <Image src={'/img/banner.jpg'}
                alt='cover'
                fill={true}
                priority
                objectFit='cover'/>
            <div className={styles.bannerText}>
                <h1 className='text-4xl font-serif font-bold'>where every event finds its venue</h1>
                <h3 className='text-xl font-sans font-light'>event is a thing that happens, especially one of importance.</h3>
            </div>
        </div>
    );
}}