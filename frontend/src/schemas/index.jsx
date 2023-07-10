import * as Yup from 'yup'


export const studschema = Yup.object({
    name:Yup.string().min(2).max(20).required("please enter your name"),
    standard:Yup.string().min(4).max(12).required("password is must"),
    rollno:Yup.number().required("this field is required"),
      
})