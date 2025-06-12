import React from 'react'
import "./contact.css"
import { useForm } from 'react-hook-form'

function Contact() {
   const {
    register,
    handleSubmit,
    formState:{ errors },
    reset,
   }=useForm();

   const onSubmit=(data)=>{
    console.log("Form submitted successfully");
    reset();
   }
  return (
    <div id="contact">
      <div className="Contactform">
          <div className='about'><h3 className="heading">Contact Me</h3></div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input type="name" placeholder='Enter your Name'
            {...register('name',{required:"Name is required",minLength :{value:3,message:"Name must be atleast three characters"}})}/><br/>
            {errors.name && <p style={{color:"red"}}>{errors.name.message}</p>}            
             <input type="email" placeholder='Enter your Email'
            {...register('email',{required:" Email is required", pattern :{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/,message:"Email must be in the format abc@gmail.com"}})}/><br/>
            {errors.email && <p style={{color:"red"}}>{errors.email.message}</p>}
            <input type="message" placeholder='Write your message' 
            {...register('message',{required:"Message is required" , minLength:{value:15,message:"Message must be more than 15 chracters"}})}/><br/>
            {errors.message && <p style={{color:"red"}}>{errors.message.message}</p>}
            <button type='submit'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default Contact
