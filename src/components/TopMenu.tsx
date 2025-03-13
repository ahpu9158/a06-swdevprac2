import Image from "next/image";
import TopMenuItem from "./TopMenuItem";

export default function TopMenu(){
    return(
        <div className="fixed h-[50px] bg-white z-30 top-0 left-0 right-0 border-t border-b border-gray-300 flex flex-row justify-end">
            <TopMenuItem title="Booking" pageRef="/booking"/>
            <Image src={'/img/logo.png'}
                alt='logo'
                className="logoimg h-full w-auto"
                width={0} height={0} sizes="100vh"
            />
            
        </div>
    );
}