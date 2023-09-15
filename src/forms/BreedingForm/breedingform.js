import './breedingform.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Header from "../../components/Header/Header"
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const BreedingForm = () => {
    const [date, setdate] = useState('')
    const [father, setfather] = useState('')
    const [mother, setmother] = useState('')
    const [shade, setshade] = useState('')
    const [cage, setcage] = useState('')
    const [compartment, setcompartment] = useState('')
    const [birthdate, setbirthdate] = useState('')
    const [live, setlive] = useState('')
    const [dead, setdead] = useState('')
    const [comment, setcomment] = useState('')



    const navigateTo = useNavigate();

    const checkoutSchema = yup.object().shape({
        Date: yup.string().required("required"),
        Father: yup.string().required("required"),
        Mother: yup.string().required("required"),
        Shade: yup.string().required("required"),
        Cage: yup.string().required("required"),
        Compartment: yup.string().required("required"),
        Birth_Date: yup.string().required("required"),
        Live: yup.string().required("required"),
        Dead: yup.string().required("required"),
        Comment: yup.string().required("required")
    });

    const handleSubmit = (values) => {

        axios
            .post('http://localhost:3002/breedingform', {
                Date: date,
                Father: father,
                Mother: mother,
                Shade: shade,
                Cage: cage,
                Compartment: compartment,
                Birth_Date: birthdate,
                Live: live,
                Dead: dead,
                Comment: comment
            })
            .then(() => navigateTo('/breeding'))
            .catch((err) => console.log(err));
    };

    const isNonMobile = useMediaQuery("(min-width:600px)");



    return (
        <div className='container'>

            <Box m="20px">
                <Header title="Breeding Details" />
                <Formik
                    initialValues={{
                        Date: "",
                        Father: "",
                        Mother: "",
                        Shade: "",
                        Cage: "",
                        Compartment: "",
                        Birth_Date: "",
                        Live: "",
                        Dead: "",
                        Comment: "",
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
                                    onChange={(event) => { setdate(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Date"
                                    name='Date'
                                    error={!!touched.Date && !!errors.Date}
                                    helperText={touched.Date && errors.Date}
                                    sx={{ gridColumn: "span 2" }}
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
                                    error={!!touched.Father && !!errors.Father}
                                    helperText={touched.Father && errors.Father}
                                    sx={{ gridColumn: "span 2" }}
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
                                    sx={{ gridColumn: "span 2" }}
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
                                    sx={{ gridColumn: "span 2" }}
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
                                    sx={{ gridColumn: "span 2" }}
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
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    type='date'
                                    variant='filled'
                                    onChange={(event) => { setbirthdate(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Birth Date"
                                    name='Birth_Date'
                                    error={!!touched.Birth_Date && !!errors.Birth_Date}
                                    helperText={touched.Birth_Date && errors.Birth_Date}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    type='number'
                                    variant='filled'
                                    onChange={(event) => { setlive(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Live"
                                    name='Live'
                                    error={!!touched.Live && !!errors.Live}
                                    helperText={touched.Live && errors.Live}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    type='number'
                                    variant='filled'
                                    onChange={(event) => { setdead(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Dead"
                                    name='Dead'
                                    error={!!touched.Dead && !!errors.Dead}
                                    helperText={touched.Dead && errors.Dead}
                                    sx={{ gridColumn: "span 2" }}
                                />

                                <TextField
                                    fullWidth
                                    type='text'
                                    variant='filled'
                                    onChange={(event) => { setcomment(event.target.value) }}
                                    onBlur={handleBlur}
                                    onInput={handleChange}
                                    label="Comment"
                                    name='Comment'
                                    error={!!touched.Comment && !!errors.Comment}
                                    helperText={touched.Comment && errors.Comment}
                                    sx={{ gridColumn: "span 2" }}
                                />


                            </Box>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Button type="submit" color="secondary" variant="contained" className="btnadd" onClick={handleSubmit}>
                                    Submit
                                </Button>
                            </Box>

                            <Box display="flex" justifyContent="end" mt="20px">
                                <Link to={'/management/breeding'}>
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

export default BreedingForm;

