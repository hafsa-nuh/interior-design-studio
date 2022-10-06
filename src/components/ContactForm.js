import React, { useEffect, useState } from 'react';

const url = "http://localhost:3000/userinfo";
function ContactForm() {
    //  GET method
    const [userIfor, setUserIfo] = useState([])

    //  POST method
    const [formInfo, setFormInfo]= useState({
        name:'',
        email:'',
        subject:"",
        message:''
    })

    useEffect(()=>{
        fetch(url)
        .then(r=> r.json())
        .then(data=> setUserIfo(data))
    },[])

    const handleChange= (e)=>{
        setFormInfo({
            ...formInfo,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e)=>{
        e.preventDefault();
        fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formInfo),
        })
        .then(r=> r.json())
        .then((data)=>{
            const newUserInfo = [...userIfor, data]
            setFormInfo(newUserInfo)
        });
        e.target.reset()
    }


  return (
    <>
      <form className="space-y-8 w-full max-w-[780px]" onSubmit={handleSubmit}>
        <div className="flex gap-8">
          <input
            name="name"
            className="input"
            type="text"
            placeholder="Your name"
            onChange={handleChange}
          />
          <input
            name="email"
            className="input"
            type="email"
            placeholder="Your email"
            onChange={handleChange}
          />
        </div>
        <input
          name="subject"
          className="input"
          type="text"
          placeholder="Subject"
          onChange={handleChange}
        />
        <textarea
          name="message"
          className="textarea"
          placeholder="Your message"
          onChange={handleChange}
        ></textarea>
        <button
          type="submit"
          className="btn btn-lg bg-accent hover:bg-secondary-hover"
        >
          Send message
        </button>
      </form>
    </>
  );
}

export default ContactForm