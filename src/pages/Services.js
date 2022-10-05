import React, { useState, useEffect } from "react";
import ServiceContainer from "../components/ServiceContainer";

function Services() {
    const [services, setServices] = useState([])
    // console.log(services)
    
    useEffect(()=>{
        fetch("http://localhost:3000/services")
        .then((r) => r.json())
        .then((data) => setServices(data));
    },[])

  return <>
  {services.map((service)=> (<ServiceContainer key={service.id}  service={service}/>))}

  </>
}

export default Services