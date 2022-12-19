import React from 'react'
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const Form =()=>{

const onSubmit =(data) => {
console.log(data);
  
}

const schema = yup.object({
    name: yup.string().required(),
    email:yup.string().required().matches(
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "It should be a proper email"
      ),
    phone:yup.string().required().min(10, 'Must be exactly 10 digits')
    .max(10, 'Must be exactly 10 digits')
  
  }).required();

  const { register, handleSubmit, formState:{ errors } } = useForm({
    resolver: yupResolver(schema)
  });





  return (
    <div className='col-md-6 mx-auto card mt-5'>
      <div className='row py-5'>
          <div className='col-md-5'>
            <div className="cardText w-75 mx-auto">
              <h2 className='text-uppercase mb-4'>get in touch</h2>
              <p className=''>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, optio.
              </p>
              </div>
          </div>
        <div className='col-md-1 '>
          <div className='vertiLine'></div>
        </div>
        <div className='col-md-6'>
       
        <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="" for="name">Name&nbsp;*</label>
            <input type={"text"}   {...register("name")} id="name" className='form-control' /> <br></br>
            <p style={{color:"red"}}>{errors.name?.message}</p>
            <label htmlFor="" for="eml">Email&nbsp;*</label>
            <input type={"text"}  {...register("email")} id="eml" className='form-control' /> <br></br>
            <p style={{color:"red"}}>{errors.email?.message}</p>
            <label htmlFor="" for="tel">Mobile Number&nbsp;*</label>
            <input type={"text"}  {...register("phone")}  id="tel"className='form-control' /> <br></br>
            <p style={{color:"red"}}>{errors.phone?.message}</p>




            <button type='submit' className='bg-info text-white'>
                Register Now
            </button>





        </form>
        </div>
        </div>
      </div>

   
  )
}

export default Form