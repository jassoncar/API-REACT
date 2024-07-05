import React from "react";
import { Table, Button } from "react-bootstrap";

const TableComponent = ({ users, isCompact, handleDelete, handleEdit }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          {isCompact
            ? ["Nombre", "Pais", "Correo", "Eliminar", "Editar"].map((column) => (
                <th key={column}>{column}</th>
              ))
            : [
                "Nombre",
                "Pais",
                "Correo",
                "Edad",
                "Fecha de Nacimiento",
                "Sexo",
                "Imagen",
                "Eliminar",
                "Editar",
              ].map((column) => (
                <th key={column}>{column}</th>
              ))}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.login.uuid}>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.location.country}</td>
            <td>{user.email}</td>
            {isCompact ? (
              <>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user)}>
                    Eliminar
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(user)}>
                    Editar
                  </Button>
                </td>
              </>
            ) : (
              <>
                <td>{user.dob.age}</td>
                <td>{new Date(user.dob.date).toLocaleDateString()}</td>
                <td>{user.gender}</td>
                <td>
                  <img src={user.picture.large} alt={user.name.first} className="user-image" />
                </td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(user)}>
                    Eliminar
                  </Button>
                </td>
                <td>
                  <Button variant="primary" onClick={() => handleEdit(user)}>
                    Editar
                  </Button>
                </td>
              </>
            )}
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableComponent;
