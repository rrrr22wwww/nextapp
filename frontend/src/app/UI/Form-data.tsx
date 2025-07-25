"use client"

import { JSX, useState } from "react"
import InputComp from '@/components/input'
import Selector from '@/components/selector'

export default function page ():JSX.Element {
    const [formData, useFromData] = useState({
        username:"",
        password:"",
        role: "user"
    })


    return (
        <form> 
            <div className="">
                <InputComp placeholder="Name"></InputComp>
                 <InputComp placeholder="Password"></InputComp>
                 <Selector></Selector>

            </div>
        </form>
    );
}