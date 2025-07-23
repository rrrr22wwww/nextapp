"use client"

import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useDebouncedCallback } from 'use-debounce'
export default function InputComp({placeholder}:{placeholder: string}) {
    
    const urlSearchParam = useSearchParams();
    const {replace} = useRouter();
    const pathname = usePathname();



    const  handler = useDebouncedCallback((term:string) => {

        const params = new URLSearchParams(urlSearchParam)
        params.set(`page`,`1`)
        if(term) {
            params.set(`query`,term)
        } else (
            params.delete(`query`)
        )
        replace(`${pathname}?${params.toString()}`)
        console.log(term)
    },300)
    return (
                <input
                className="bg-gray-300/10 p-3 mb-4 rounded-[0.5em]" 
                placeholder={placeholder}
                onChange={(e)=>handler(e.target.value)}></input>
    )
}