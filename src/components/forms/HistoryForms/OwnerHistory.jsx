// import { produce } from "immer";
import React, { useContext } from "react";
import { v4 as uuidv4 } from 'uuid';
import { multiStepContext } from '../FormContext'


const OwnerHistory = () => {
    const { userData, setUserData } = useContext(multiStepContext)

    return (
        <div style={{ textAlign: "center" }}>
            <button
                onClick={() => {
                    setUserData(userData => [
                        ...userData,
                        {
                            id: uuidv4(),
                            previousOwnerName: "",
                            lastName: ""
                        }
                    ]);
                }}
            >
                add new person
            </button>
            {userData.owners.map((p, index) => {
                return (
                    <div key={index}>
                        <input
                            onChange={(event) => setUserData({ ...userData, previousOwnerName: event.target.value })}
                            value={userData.previousOwnerName}
                            placeholder="first name"
                        />
                        <button
                            onClick={() => {
                                setUserData(userData =>
                                    userData.filter(x => x.id !== p.id)
                                );
                            }}
                        >
                            x
                        </button>
                    </div>
                );
            })}
            {/* <div>{JSON.stringify(userData, null, 2)}</div> */}
        </div>
    );
};

export default OwnerHistory;
