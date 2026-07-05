import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
const SignupForm = () => {
  const { register, handleSubmit, reset,formState: { errors }} = useForm();

  const handleClearClick=(event)=>{
    reset();
  }

const handleSubmitForm = (data) => {
  console.log(data);

};
  return (
   <form onSubmit={handleSubmit(handleSubmitForm)}>
    <label>
      Nombre:
      <input {...register("name",{required:true})}/>
    </label>
    <br></br>
    <label>
      Age:
      <input {...register("age",{required:true})}  />
    </label>
       <br></br>
    <label>
      Address:
      <input {...register("address",{required:true})} />
    </label>
       <br></br>
    <label>
      Zipcode:
      <input {...register("zipcode",{required:true})} />
    </label>
       <br></br>
    <label>
      Phone:
      <input {...register("phone",{required:true})} />
    </label>
       <br></br>
       <div>

       <button type="button" onClick={handleClearClick}>clear</button> <button type="submit">submit</button>
       </div>
   
   </form>
  )
}

export default SignupForm
