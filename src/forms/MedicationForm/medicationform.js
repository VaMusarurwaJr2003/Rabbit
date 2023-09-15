import './medicationform.scss';
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as yup from 'yup';
import Header from "../../components/Header/Header"
import { Box, Button, TextField } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const MedicationForm = () => {
  const [date, setdate] = useState('')
  const [rabbitcode, setrabbitcode] = useState('')
  const [vaccine, setvaccine] = useState('')
  const [normal, setnormal] = useState('')
  const [sick, setsick] = useState('')
  const [signs, setsigns] = useState('')
  const [disease, setdisease] = useState('')
  const [appliedmed, setappliedmed] = useState('')
  const [nextvacc, setnextvacc] = useState('')
  const [comment, setcomment] = useState('')

  const navigateTo = useNavigate();

  const checkoutSchema = yup.object().shape({
    Date: yup.string().required("required"),
    Rabbit_Code: yup.string().required("required"),
    Vaccine: yup.string().required("required"),
    Normal_Routine: yup.string().required("required"),
    Sick: yup.string().required("required"),
    Signs_symptoms: yup.string().required("required"),
    Disease: yup.string().required("required"),
    Applied_Medication: yup.string().required("required"),
    Next_Vaccination_Date: yup.string().required("required"),
    Comment: yup.string().required("required")
  });

  const handleSubmit = (values) => {

    axios
      .post('http://localhost:3002/medicationform', {
        Date: date,
        Rabbit_Code: rabbitcode,
        Vaccine: vaccine,
        Normal_Routine: normal,
        Sick: sick,
        Signs_symptoms: signs,
        Disease: disease,
        Applied_Medication: appliedmed,
        Next_Vaccination_Date: nextvacc,
        Comment: comment
      })
      .then(() => navigateTo('/medication'))
      .catch((err) => console.log(err));
  };

  const isNonMobile = useMediaQuery("(min-width:600px)");



  return (
    <div className='container'>

      <Box m="20px">
        <Header title="Medication Details" />
        <Formik
          initialValues={{
            Date: "",
            Rabbit_Code: "",
            Vaccine: "",
            Normal_Routine: "",
            Sick: "",
            Signs_symptoms: "",
            Disease: "",
            Applied_Medication: "",
            Next_Vaccination_Date: "",
            Comment: ""
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
                  onChange={(event) => { setrabbitcode(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Rabbit Code"
                  name='Rabbit_Code'
                  error={!!touched.Rabbit_Code && !!errors.Rabbit_Code}
                  helperText={touched.Rabbit_Code && errors.Rabbit_Code}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setvaccine(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Vaccine"
                  name='Vaccine'
                  error={!!touched.Vaccine && !!errors.Vaccine}
                  helperText={touched.Vaccine && errors.Vaccine}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setnormal(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Normal Routine"
                  name='Normal_Routine'
                  error={!!touched.Normal_Routine && !!errors.Normal_Routine}
                  helperText={touched.Normal_Routine && errors.Normal_Routine}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setsick(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Sick"
                  name='Sick'
                  error={!!touched.Sick && !!errors.Sick}
                  helperText={touched.Sick && errors.Sick}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setsigns(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Signs & Symptoms"
                  name='Signs_symptoms'
                  error={!!touched.Signs_symptoms && !!errors.Signs_symptoms}
                  helperText={touched.Signs_symptoms && errors.Signs_symptoms}
                  sx={{ gridColumn: "span 2" }}
                />


                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setdisease(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Disease"
                  name='Disease'
                  error={!!touched.Disease && !!errors.Disease}
                  helperText={touched.Disease && errors.Disease}
                  sx={{ gridColumn: "span 2" }}
                />


                <TextField
                  fullWidth
                  type='text'
                  variant='filled'
                  onChange={(event) => { setappliedmed(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Applied Medication"
                  name='Applied_Medication'
                  error={!!touched.Applied_Medication && !!errors.Applied_Medication}
                  helperText={touched.Applied_Medication && errors.Applied_Medication}
                  sx={{ gridColumn: "span 2" }}
                />

                <TextField
                  fullWidth
                  type='date'
                  variant='filled'
                  onChange={(event) => { setnextvacc(event.target.value) }}
                  onBlur={handleBlur}
                  onInput={handleChange}
                  label="Next Vaccination Date"
                  name='Next_Vaccination_Date'
                  error={!!touched.Next_Vaccination_Date && !!errors.Next_Vaccination_Date}
                  helperText={touched.Next_Vaccination_Date && errors.Next_Vaccination_Date}
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
                <Link to={'/management/medication'}>
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

export default MedicationForm;

