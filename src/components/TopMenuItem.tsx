import Link from "next/link"

export default function TopMenuItem ( 
    { title, pageRef} : {title:string, pageRef:string}) {
    return (
        <Link href={pageRef} className="w-[120px] text-center my-auto font-verdana text-[10pt] text-gray-500">
            {title}
        </Link>
    );
}