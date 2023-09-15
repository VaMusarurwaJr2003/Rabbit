import './cageform.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Header from "../../components/Header/Header"
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const CageForm = () => {
  const [cagecolor, setcagecolor] = useState('')
  const [shade, setshade] = useState('')
  const [compartmentsnumber, setcompartmentsnumber] = useState('')
  const [compartmentsize, setcompartmentsize] = useState('')
  const [cagedimensions, setcagedimensions] = useState('')
  const [cageroof, setcageroof] = useState('')

  const navigateTo = useNavigate();

  const checkoutSchema = yup.object().shape({
    Cage_Color: yup.string().required("required"),
    Shade: yup.string().required("required"),
    NO_of_Compartments: yup.string().required("required"),
    Compartment_Size: yup.string().required("required"),
    Cage_Dimensions: yup.string().required("required"),
    Cage_Roof: yup.string().required("required")
  });
  const dropdownoption = [
    { "value": "Zinc", "label": "Zinc" },
    { "value": "Plastic", "label": "Plastic" }
  ]

  const handleSubmit = (values) => {

    axios
      .post('http://localhost:3002/cageform', {
        Cage_Color: cagecolor,
        Shade: shade,
        NO_of_Compartments: compartmentsnumber,
        Compartment_Size: compartmentsize,
        Cage_Dimensions: cagedimensions,
        Cage_Roof: cageroof
      })
      .then(() => navigateTo('/cage'))
      .catch((err) => console.log(err));
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");



  return (
    <div className='container'>

      <Box m="20px">
        <Header title="Cage Details" />
        <Formik
          initialValues={{
            Cage_Color: "",
            Shade: "",
            NO_of_Compartments: "",
            Compartment_Size: "",
            Cage_Dimensions: "",
            Cage_Roof: ""
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
                  type='text'
                  variant='filled'
                  onChange={(event) => { setcagecolor(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Cage Color"
                  name='Cage_Color'
                  error={!!touched.Cage_Color && !!errors.Cage_Color}
                  helperText={touched.Cage_Color && errors.Cage_Color}
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
                  onChange={(event) => { setcompartmentsnumber(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="NO of Compartments"
                  name='NO_of_Compartments'
                  error={!!touched.NO_of_Compartments && !!errors.NO_of_Compartments}
                  helperText={touched.NO_of_Compartments && errors.NO_of_Compartments}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setcompartmentsize(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Compartment Size"
                  name='Compartment_Size'
                  error={!!touched.Compartment_Size && !!errors.Compartment_Size}
                  helperText={touched.Compartment_Size && errors.Compartment_Size}
                  sx={{ gridColumn: "span 2" }}
                />


                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setcagedimensions(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Cage Dimensions"
                  name='Cage_Dimensions'
                  error={!!touched.Cage_Dimensions && !!errors.Cage_Dimensions}
                  helperText={touched.Cage_Dimensions && errors.Cage_Dimensions}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setcageroof(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Cage Roof"
                  name='Cage_Roof'
                  Option={dropdownoption}
                  error={!!touched.Cage_Roof && !!errors.Cage_Roof}
                  helperText={touched.Cage_Roof && errors.Cage_Roof}
                  sx={{ gridColumn: "span 2" }}
                />

              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Button type="submit" color="secondary" variant="contained" className="btnadd" onClick={handleSubmit}>
                  Submit
                </Button>
              </Box>

              <Box display="flex" justifyContent="end" mt="20px">
                <Link to={'/management/cage'}>
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

export default CageForm;

