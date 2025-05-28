'use client';
import { useParams, usePathname, useSearchParams } from "next/navigation";

export default function Page(){
    const params = useParams<{ account: string; }>()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const id = searchParams.get('id')
   
    return(
       <h2 className="text-center">Account: {params.account} <br />
            Path Name: {pathname} <br />
            Serach Param: {id}
       </h2>
    )
}