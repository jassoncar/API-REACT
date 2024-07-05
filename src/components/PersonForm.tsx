import React, { useState, useEffect } from "react";
import { Button, Grid, TextField } from "@mui/material";
import { PersonRequest } from "../PersonModel";

interface PersonFormProp {
  setOpenModal: (value: boolean) => void;
  createPerson: (value: PersonRequest) => void;
  updatePerson: (id: string, value: PersonRequest) => void;
  selectedPerson: Person | null;
}

const PersonForm = ({ setOpenModal, createPerson, updatePerson, selectedPerson }: PersonFormProp) => {
  const [inputName, setInputName] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");

  useEffect(() => {
    if (selectedPerson) {
      setInputName(selectedPerson.name);
      setInputAddress(selectedPerson.address);
      setInputPhone(selectedPerson.phone);
    }
  }, [selectedPerson]);

  const handleSave = () => {
    const request: PersonRequest = {
      name: inputName,
      address: inputAddress,
      phone: inputPhone,
    };

    if (selectedPerson) {
      updatePerson(selectedPerson.id, request);
    } else {
      createPerson(request);
    }

    setOpenModal(false); // Cerrar el modal después de guardar
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="name"
            label="Name"
            variant="standard"
            fullWidth
            onChange={(e) => setInputName(e.target.value)}
            value={inputName}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address"
            label="Address"
            variant="standard"
            fullWidth
            onChange={(e) => setInputAddress(e.target.value)}
            value={inputAddress}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="phone"
            label="Phone"
            variant="standard"
            fullWidth
            onChange={(e) => setInputPhone(e.target.value)}
            value={inputPhone}
          />
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={2}>
        <Grid item>
          <Button
            variant="contained"
            color="primary"
            onClick={handleSave}
          >
            {selectedPerson ? "Actualizar" : "Guardar"}
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default PersonForm;
