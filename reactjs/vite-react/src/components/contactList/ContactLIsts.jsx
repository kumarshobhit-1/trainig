import axios from 'axios'
import React, { useEffect, useState } from 'react'


export const ContactLIst = () => {
    const [record, setRecord] = useEffect({})
    useEffect(() => {
        console.log("use effect");
        axios.get("http://localhost:3001/contact")
        .then((res) => {
            console.log(res);
            console.log(res.data);
            // setRecord(res.data)
        })
        
    },[])
  return (
    <>
    {
        console.log("dcbdsd")
    }
    <div>ContactLIst</div>
    </>
  )
}
