import { useEffect, useState } from "react";
import axios from "../axios";
import { Person, PersonRequest } from "../PersonModel";

const usePerson = () => {
    const [personData, setPersonData] = useState<Person[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const [selectedPerson, setSelectedPerson] = useState<Person | null>(null);

    const getPersons = async () => {
        try {
            const response = await axios.get("v1/persons");
            setPersonData(response.data);
        } catch (error) {
            console.error("Error fetching persons:", error);
        }
    };

    const createPerson = async (request: PersonRequest) => {
        try {
            await axios.post("v1/persons", request);
            getPersons(); // Actualizar la lista
        } catch (error) {
            console.error("Error creating person:", error);
        }
    };

    const updatePerson = async (id: string, request: PersonRequest) => {
        try {
            await axios.put(`v1/persons/${id}`, request);
            getPersons(); // Actualizar la lista
        } catch (error) {
            console.error("Error updating person:", error);
        }
    };

    const deletePerson = async (id: string) => {
        try {
            await axios.delete(`v1/persons/${id}`);
            getPersons(); // Actualizar la lista
        } catch (error) {
            console.error("Error deleting person:", error);
        }
    };

    useEffect(() => {
        getPersons();
    }, []);

    return { personData, openModal, setOpenModal, createPerson, updatePerson, deletePerson, selectedPerson, setSelectedPerson };
}

export default usePerson;
