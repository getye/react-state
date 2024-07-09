import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import { useState, useEffect, useRef } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { green } from '@mui/material/colors';
import Fab from '@mui/material/Fab';
import CheckIcon from '@mui/icons-material/Check';
import SaveIcon from '@mui/icons-material/Save';

export const Forms =()=>{

    //progress bar

    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const timer = useRef();
  
    const buttonSx = {
      ...(success && {
        bgcolor: green[500],
        '&:hover': {
          bgcolor: green[700],
        },
      }),
    };
  
    useEffect(() => {
      return () => {
        clearTimeout(timer.current);
      };
    }, []);

    //list box
    const [sex, setSex] = useState('');

    const handleChange = (event) => {
      setSex(event.target.value);
    };

    const schema = yup.object().shape({
        FirstName: yup.string().required("Name should not be empty"),
        Age: yup.number("Age should not be empty").positive().integer().min(18).max(60).required(),
        Email: yup.string().email().required("Email Should not be empty"),
        Sex: yup.string().required("Sex Should not be empty"),
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

    const handleButtonClick = () => {
        if (!loading) {
          setSuccess(false);
          setLoading(true);
          timer.current = setTimeout(() => {
            setSuccess(true);
            setLoading(false);
          }, 2000);
        }
      };

   return (
    <div>
        <form onSubmit={handleSubmit(onSubmit)}>

            <Box component="form"
                sx={{
                 '& > :not(style)': { m: 0, width: 'auto', height:"25%", size:"small"} ,
                }}autoComplete="off" >
            <Grid container spacing={2}>
                <Grid item xs={6}>
            <TextField size="small" label="Enter Your name" variant="standard"{...register("FirstName")}/>
                <p className="errorMessage">{errors.FirstName?.message}</p>
            <TextField size="small" type="email" label="Enter Your email" variant="standard" {...register("Email")}/>
                <p className="errorMessage">{errors.Email?.message}</p>
            <TextField size="small" type="number" label="Enter Your Age" variant="standard"{...register("Age")}/> 
                <p className="errorMessage">{errors.Age?.message}</p>
                </Grid>
                <Grid item xs={3} > 
                <FormControl fullWidth>
                        <InputLabel id="select-sex">Select Sex</InputLabel>
                        <Select
                        labelId="select-sex"
                        id="sex"
                        value={sex}
                        label="Select Sex"
                        variant="standard" {...register("Sex")}
                        onChange={handleChange}
                        >
                        <MenuItem value={"Female"}>Female</MenuItem>
                        <MenuItem value={"Male"}>Male</MenuItem>
                        </Select>
                    </FormControl>
                <p className="errorMessage">{errors.Sex?.message}</p>
            <TextField size="small" type="password" label="Enter Your password" variant="standard" {...register("Password")}/>
                <p className="errorMessage">{errors.Password?.message}</p>
            <TextField size="small" type="password" label="Confirm Your password" variant="standard" {...register("RePassword")}/>
                <p className="errorMessage">{errors.RePassword?.message}</p>
                </Grid>
                </Grid>
            </Box> <br/>
            <center><Button type="submit" variant="contained" endIcon={<SendIcon />}>submit</Button></center>
        </form>

    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Fab
          aria-label="save"
          color="primary"
          sx={buttonSx}
          onClick={handleButtonClick}
        >
          {success ? <CheckIcon /> : <SaveIcon />}
        </Fab>
        {loading && (
          <CircularProgress
            size={68}
            sx={{
              color: green[500],
              position: 'absolute',
              top: -6,
              left: -6,
              zIndex: 1,
            }}
          />
        )}
      </Box>
      <Box sx={{ m: 1, position: 'relative' }}>
        <Button
          variant="contained"
          sx={buttonSx}
          disabled={loading}
          onClick={handleButtonClick}
        >
          {!success ? "Save" : "Saved"}
        </Button>
        {loading && (
          <CircularProgress
            size={24}
            sx={{
              color: green[500],
              position: 'absolute',
              top: '50%',
              left: '50%',
              marginTop: '-12px',
              marginLeft: '-12px',
            }}
          />
        )}
      </Box>
    </Box>
    </div>
   );
}