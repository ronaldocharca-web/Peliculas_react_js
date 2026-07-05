import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import style from './MyInfor.module.css'

const USER_DATA = 'userData';
const MyInfo = () => {
  const { handleSubmit, register, setValue } = useForm();


  useEffect(() => {
    try {
      const useData = JSON.parse(localStorage.getItem(USER_DATA)) || [];

      setValue('name', userData?.name)
      setValue('email', useData?.email)
      setValue('Age', useData?.Age)


    } catch (error) {
      console.log(error);
    }


  }, []);
  const handelFromSubmit = (data) => {
    try {
      localStorage.setItem(USER_DATA, JSON.stringify(data));
      alert("usuario actualizado")
    } catch (error) { console.log(error) }
    console.log(data);
  }
  return (
    <form onSubmit={handleSubmit(handelFromSubmit)}
      className={style.form}

    >
      <label
        className={style.label}>
        Nmae:
        <input {...register("name", { required: true, min: 1, max: 120 })}
          className={style.input}
        />
      </label>
      <label className={style.label}>
        Email:
        <input {...register("email", { required: true, min: 1, max: 100 })}
          className={style.input}
        />
      </label>
      <label className={style.label}>
        Age:
        <input {...register("Age", { required: true, min: 1, max: 120, valueAsNumber: true })}
          type='number'
          className={style.input} />
      </label>
      <button type='submit' className={style.subMitButton}>SAVE</button>
    </form>
  )
}

export default MyInfo
