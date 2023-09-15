import './rabbitform.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Header from "../../components/Header/Header"
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const RabbitForm = () => {
    const [dob, setdob] = useState('')
    const [father, setfather] = useState('')
    const [mother, setmother] = useState('')
    const [shade, setshade] = useState('')
    const [cage, setcage] = useState('')
    const [compartment, setcompartment] = useState('')
    const [gender, setgender] = useState('')
    const [rabbitcode, setrabbitcode] = useState('')
    const [breed, setbreed] = useState('')
    const [bodycolor, setbodycolor] = useState('')
    const [eyescolor, seteyescolor] = useState('')


    const navigateTo = useNavigate();

    const checkoutSchema = yup.object().shape({
        DOB: yup.string().required("required"),
        Father: yup.string().required("required"),
        Mother: yup.string().required("required"),
        Shade: yup.string().required("required"),
        Cage: yup.string().required("required"),
        Compartment: yup.string().required("required"),
        Breed: yup.string().required("required"),
        Rabbit_Code: yup.string().required("required"),
        Body_Color: yup.string().required("required"),
        Eyes_Color: yup.string().required("required"),
        Gender: yup.string().required("required")
    });
    const handleSubmit = (values) => {
        axios
            .post('http://localhost:3002/rabbitform', {
                DOB: dob,
                Father: father,
                Mother: mother,
                Shade: shade,
                Cage: cage,
                Compartment: compartment,
                Breed: breed,
                Rabbit_Code: rabbitcode,
                Body_Color: bodycolor,
                Eyes_Color: eyescolor,
                Gender: gender
            })
            .then(() => navigateTo('/rabbit'))
            .catch((err) => console.log(err));
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");



    return (
        <div className='container'>

            <Box m="10px">
                <Header
                    title="ADD NEW RABBIT"
                />
                <Formik
                    initialValues={{
                        DOB: "",
                        Father: "",
                        Mother: "",
                        Shade: "",
                        Cage: "",
                        Compartment: "",
                        Breed: "",
                        Gender: "",
                        Body_Color: "",
                        Eyes_Color: "",
                        Rabbit_Code: ""
                    }}
                    validationSchema={checkoutSchema}
                >

                    {({
                        errors,
                        touched,
                        handleBlur,
                        handleChange
                    }) => (
                        <Form >
                            <Box
                                display="grid"
                                gap="30px"
                                gridTemplateColumns="repeat(4, minmax(0, 1fr))"
                                sx={{
                                    "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                }}
                            >
                                <TextField
                                    fullWidth
                                    type='date'
                                    variant='filled'
                                    onChange={(event) => { setdob(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    className='text'
                                    label="DOB"
                                    name='DOB'
                                    error={!!touched.DOB && !!errors.DOB}
                                    helperText={touched.DOB && errors.DOB}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setfather(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Father(Buck)"
                                    name='Father'
                                    className='text'
                                    error={!!touched.Father && !!errors.Father}
                                    helperText={touched.Father && errors.Father}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setmother(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Mother(Doe)"
                                    name='Mother'
                                    error={!!touched.Mother && !!errors.Mother}
                                    helperText={touched.Mother && errors.Mother}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setshade(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Shade"
                                    name='Shade'
                                    error={!!touched.Shade && !!errors.Shade}
                                    helperText={touched.Shade && errors.Shade}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setcage(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Cage"
                                    name='Cage'
                                    error={!!touched.Cage && !!errors.Cage}
                                    helperText={touched.Cage && errors.Cage}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setcompartment(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Compartment"
                                    name='Compartment'
                                    error={!!touched.Compartment && !!errors.Compartment}
                                    helperText={touched.Compartment && errors.Compartment}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setbreed(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Breed"
                                    name='Breed'
                                    error={!!touched.Breed && !!errors.Breed}
                                    helperText={touched.Breed && errors.Breed}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setgender(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Gender"
                                    name='Gender'
                                    error={!!touched.Gender && !!errors.Gender}
                                    helperText={touched.Gender && errors.Gender}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setrabbitcode(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Rabbit_Code"
                                    name='Rabbit_Code'
                                    error={!!touched.Rabbit_Code && !!errors.Rabbit_Code}
                                    helperText={touched.Rabbit_Code && errors.Rabbit_Code}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setbodycolor(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Body_Color"
                                    name='Body_Color'
                                    error={!!touched.Body_Color && !!errors.Body_Color}
                                    helperText={touched.Body_Color && errors.Body_Color}
                                    sx={{ gridColumn: "span 2", fontSize: "10px" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { seteyescolor(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Eyes_Color"
                                    name='Eyes_Color'
                                    error={!!touched.Eyes_Color && !!errors.Eyes_Color}
                                    helperText={touched.Eyes_Color && errors.Eyes_Color}
                                    sx={{ gridColumn: "span 2" }}
                                    style={{ fontSize: "8px" }}
                                />

                            </Box>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit" color="secondary" variant="contained" className="btnadd" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Box>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Link to={'/management/rabbit'}>
                                    <Button type="submit" color="secondary" variant="contained" className="btnadd">
                                        Back
                                    </Button>
                                </Link>
                            </Box>
                        </Form>
                    )}

                </Formik>
            </Box>
        </div>
    );
};

export default RabbitForm;

