import React, { useState, createContext } from 'react';
import MainStepper from './MainStepper';
// import { useHistory } from "react-router-dom";

const initialInfoState = {
    make: "",
    model: "",
    year: "",
    exteriorColor: "",
    interiorColor: "",
    vinNumber: "",
    ezPassNumber: "",
    transmissionType: "",
    finalCost: "",
    additionalNotesAddCar: "",

    // previousOwnerName: "",
    // previousOwnerContact: "",
    // previousOwnerYears: "",
    // mileageOwners: "",
    // previousOwnerStory: "",
    "owners":[
        {
            previousOwnerName: "",
            previousOwnerContact: "",
            previousOwnerYears: "",
            mileageOwners: "",
            previousOwnerStory: "",
        }
    ]
};

export const multiStepContext = createContext();
    const FormContext = () => {
        const [userData, setUserData] = useState(initialInfoState)
        const [finalData, setFinalData] = useState([])
        // const history = useHistory();

        function submitData() {
            setFinalData(finalData => [...finalData, userData])
            setUserData('')
            alert(JSON.stringify(userData, null, 2))
            console.log("Submitted data!!!!!")
        }

        return (
            <div>
                <multiStepContext.Provider value={{userData, setUserData, finalData, setFinalData, submitData}}>
                    <MainStepper />
                </multiStepContext.Provider>
            </div>
        )




    }
export default FormContext;