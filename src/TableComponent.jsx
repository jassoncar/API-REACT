import React from "react";
import { Table, Button } from "react-bootstrap";

const TableComponent = ({ users, isCompact, handleDelete, handleEdit, selectedColumns }) => {
  return (
    <Table striped bordered hover variant="secondary">
      <thead>
        <tr>
          <th>Nombre</th>
          <th>País</th>
          <th>Correo</th>
          {(!isCompact || selectedColumns.includes("Edad")) && <th>Edad</th>}
          {(!isCompact || selectedColumns.includes("Fecha de Nacimiento")) && <th>Fecha de Nacimiento</th>}
          {(!isCompact || selectedColumns.includes("Sexo")) && <th>Sexo</th>}
          {(!isCompact || selectedColumns.includes("Imagen")) && <th>Imagen</th>}
          <th>Eliminar</th>
          <th>Editar</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.location.country}</td>
            <td>{user.email}</td>
            {(!isCompact || selectedColumns.includes("Edad")) && <td>{user.dob.age}</td>}
            {(!isCompact || selectedColumns.includes("Fecha de Nacimiento")) && <td>{user.dob.date}</td>}
            {(!isCompact || selectedColumns.includes("Sexo")) && <td>{user.gender}</td>}
            {(!isCompact || selectedColumns.includes("Imagen")) && (
              <td>
                <img
                  src={user.picture.large}
                  alt={user.name.first}
                  className="user-image"
                />
              </td>
            )}
            <td>
              <Button variant="outline-danger" onClick={() => handleDelete(user)}>
                Eliminar
              </Button>
            </td>
            <td>
              <Button variant="outline-dark" onClick={() => handleEdit(user)}>
                Editar
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
