import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup'
export const Forms =()=>{

    const schema = yup.object().shape({
        FirstName: yup.string().required("Name should not be empty"),
        Age: yup.number("Age should not be empty").positive().integer().min(20).max(60).required(),
        Email: yup.string().email().required("Email Should not be empty"),
        Password: yup.string().min(4).max(12).required("Password should not be empty"),
        RePassword: yup.string().oneOf([yup.ref("Password")], "Password doesn't match").required("Confirm password should not be empty"),
    })

    const {register, handleSubmit, formState:{errors}} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = (data)=>{
        //console.log(data)
        alert("Button cliked");
    }
   return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>
            <input type="text" placeholder="Enter Your first name" {...register("FirstName")}/>
                <p className="errorMessage">{errors.FirstName?.message}</p>
            <input type="number" defaultValue={30} placeholder="Enter Your Age"{...register("Age")}/> 
                <p className="errorMessage">{errors.Age?.message}</p>
            <input type="email" placeholder="Enter Your email" {...register("Email")}/>
                <p className="errorMessage">{errors.Email?.message}</p>
            <input type="password" placeholder="Enter Your password" {...register("Password")}/>
                <p className="errorMessage">{errors.Password?.message}</p>
            <input type="password" placeholder="Re-Enter Your password" {...register("RePassword")}/>
                <p className="errorMessage">{errors.RePassword?.message}</p>
            <input type="submit"/>
        </form>
    </div>
   );
}