// import { useState } from "react";
import Dashboard from "./pages/dashboard/dashboard";
import Customer from "./pages/customer/customer";
import Supplier from "./pages/supplier/supplier";
import Single from "./pages/single/single";
import New from "./pages/new/new";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Management from "./pages/management/management";
import Rabbit from "./tables/Rabbit/rabbit";
import Mating from "./tables/Mating/mating";
import Breeding from "./tables/Breeding/breeding";
import Cage from "./tables/Cage/cage";
import Medication from "./tables/Medication/medication";
import RabbitForm from "./forms/RabbitForm/rabbitform";
import MatingForm from "./forms/MatingForm/matingform";
import BreedingForm from "./forms/BreedingForm/breedingform";
import CageForm from "./forms/CageForm/cageform";
import MedicationForm from "./forms/MedicationForm/medicationform";
import "./pages/style/dark.scss"
import { DarkModeContext } from "./components/Context/darkModeContext";
import { useContext } from "react";

function App() {

const{darkMode}= useContext(DarkModeContext)

  return (
    <div className= {darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route index element={<Dashboard />} />
            <Route path="customers">
              <Route index element={<Customer />} />
              <Route path=":customerId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="supplier">
              <Route index element={<Supplier />} />
              <Route path=":supplierId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>

            <Route path="management">
              <Route index element={<Management />} />

              <Route path="rabbit">
                <Route index element={<Rabbit />} />
                <Route path="rabbitform" element={<RabbitForm />} />
              </Route>

              <Route path="mating">
                <Route index element={<Mating />} />
                <Route path="matingform" element={<MatingForm />} />
              </Route>

              <Route path="breeding">
                <Route index element={<Breeding />} />
                <Route path="breedingform" element={<BreedingForm />} />
              </Route>

              <Route path="cage">
                <Route index element={<Cage />} />
                <Route path="cageform" element={<CageForm />} />
              </Route>

              <Route path="medication">
                <Route index element={<Medication />} />
                <Route path="medicationform" element={<MedicationForm />} />
              </Route>

            </Route>

          </Route>
        </Routes>
      </BrowserRouter>
    </div >
  );
}

export default App;
