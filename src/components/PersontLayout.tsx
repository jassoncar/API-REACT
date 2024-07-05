import React from "react";
import PersonTable from "./PersonTable";
import usePerson from "./usePerson";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Box } from "@mui/material";
import CustomModal from "./CustomModal";
import PersonForm from "./PersonForm";

const PersonLayout = () => {
  const { personData, openModal, setOpenModal, createPerson, updatePerson, deletePerson, selectedPerson, setSelectedPerson } = usePerson();

  const handleEdit = (person) => {
    setSelectedPerson(person);
    setOpenModal(true);
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          color='success'
          onClick={() => {
            setSelectedPerson(null); // Limpiar la persona seleccionada
            setOpenModal(true);
          }}
          style={{ marginBottom: '10px' }}
        >
          Nueva Persona
        </Button>
      </Stack >

      <PersonTable
        data={personData}
        onEdit={handleEdit}
        onDelete={deletePerson} // Pasamos la función deletePerson
      />

      <CustomModal
        open={openModal}
        setOpen={setOpenModal}
        title={selectedPerson ? 'Editando Persona' : 'Creando Nueva Persona'}
      >
        <PersonForm
          setOpenModal={setOpenModal}
          createPerson={createPerson}
          updatePerson={updatePerson}
          selectedPerson={selectedPerson}
        />
      </CustomModal>
    </>
  );
};

export default PersonLayout;
