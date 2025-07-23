import { Suspense } from 'react';
import {montserrat} from '../font';
import InputComp from '@/components/input'

type posts = {
    userId: number,
    id:number,
    title:string,
    body:number,
}

export function Loading() {
    return (
        <div className = "flex justify-center items-center">
            <p className="m-5">Loading</p>
          <svg className="mr-3 -ml-1 size-5 m-5 animate-spin text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle><path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
        </div> 
    )
}
async function PostsList({ posts }: { posts:posts[] }) {
    return (
        <div className={`flex-col flex-wrap justify-center items-center ${montserrat.className}`}>
            {posts.map((value) => (
                <div key={value.id} className={` m-5 justify-center items-center ${montserrat.className}`}>
                   {value.id}. {value.body}
                </div>
            ))}
        </div>
    );
}



export default async function Page({...propsPromise}:{
    params?:Promise<{ page?: number}>;
    searchParams?:Promise<{ query?: string}>;
    
}) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
    const posts: posts[] = await response.json();
    const searchParams = await propsPromise.searchParams;
    const valueSearch = searchParams?.query || "";
    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(valueSearch.toLowerCase())
    );
    
    
    return (
        <>
        <div className='border-2 bg-gray-300/10 rounded-[0.5em] m-24 p-10'>
        <InputComp placeholder='test'/>
        <Suspense fallback={<Loading />}>
            <PostsList posts={filteredPosts} />
        </Suspense>
        </div>
        </>
    );
}
