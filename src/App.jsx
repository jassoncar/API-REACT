import React, { useState } from "react";
import { Button } from "react-bootstrap";
import TableComponent from "./TableComponent";
import ModalComponent from "./ModalComponent";
import ColumnSelector from "./ColumnSelector";
import useUsers from "./hooks/useUsers";
import useFilters from "./hooks/useFilters";
import UserEditForm from "./UserEditForm";

const App = () => {
  const { users, setUsers } = useUsers();
  const { filterValues, handleFilterSubmit } = useFilters();
  const [selectedColumns, setSelectedColumns] = useState([]);
  const [showColumnModal, setShowColumnModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isCompact, setIsCompact] = useState(true);
  const [showEditModal, setShowEditModal] = useState(false);
  const [filter, setFilter] = useState(""); // Estado del filtro

  const handleDelete = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const confirmDelete = () => {
    setUsers(users.filter((u) => u.login.uuid !== selectedUser.login.uuid));
    setShowDeleteModal(false);
  };

  const handleEdit = (user) => {
    setSelectedUser(user);
    setShowEditModal(true);
  };

  const handleSaveEdit = (editedUser) => {
    setUsers(users.map((u) => (u.login.uuid === editedUser.login.uuid ? editedUser : u)));
    setShowEditModal(false);
  };

  const handleColumnSelect = (event) => {
    const isChecked = event.target.checked;
    const columnName = event.target.name;

    if (isChecked) {
      setSelectedColumns([...selectedColumns, columnName]);
    } else {
      setSelectedColumns(selectedColumns.filter((column) => column !== columnName));
    }
  };

  const handleCompactToggle = () => {
    setIsCompact(!isCompact);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  // Lógica de filtrado
  const filteredUsers = users.filter((user) => {
    const fullName = `${user.name.first} ${user.name.last}`;
    const country = user.location.country;
    const email = user.email;
    const age = user.dob.age.toString();
    const birthdate = user.dob.date;
    const gender = user.gender;

    return (
      fullName.toLowerCase().includes(filter.toLowerCase()) ||
      country.toLowerCase().includes(filter.toLowerCase()) ||
      email.toLowerCase().includes(filter.toLowerCase()) ||
      age.includes(filter) ||
      birthdate.includes(filter) ||
      gender.toLowerCase().includes(filter.toLowerCase())
    );
  });

  return (
    <div className="container">
      <h1 className="text-center">USERS</h1>

      <div className="d-flex justify-content-between align-items-center mb-3">
        {isCompact && (
          <Button variant="outline-primary" onClick={() => setShowColumnModal(true)}>
            Seleccionar Columnas
          </Button>
        )}
        <Button variant="outline-info" onClick={handleCompactToggle}>
          {isCompact ? "Versión Expandida" : "Versión Compacta"}
        </Button>
      </div>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Filtrar usuarios..."
        value={filter}
        onChange={handleFilterChange}
      />

      <TableComponent
        users={filteredUsers}
        isCompact={isCompact}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        selectedColumns={selectedColumns}
      />

      <ModalComponent
        show={showColumnModal}
        onHide={() => setShowColumnModal(false)}
        title="Seleccionar Columnas"
      >
        <ColumnSelector
          selectedColumns={selectedColumns}
          handleColumnSelect={handleColumnSelect}
        />
      </ModalComponent>

      <ModalComponent
        show={showDeleteModal}
        onHide={() => setShowDeleteModal(false)}
        title="Eliminar Usuario"
      >
        ¿Está seguro de que desea eliminar a {selectedUser?.name?.first} {selectedUser?.name?.last}?
        <Button variant="danger" onClick={confirmDelete}>
          Eliminar
        </Button>
      </ModalComponent>

      <ModalComponent
        show={showEditModal}
        onHide={() => setShowEditModal(false)}
        title="Editar Usuario"
      >
        <UserEditForm user={selectedUser} onSave={handleSaveEdit} />
      </ModalComponent>
    </div>
  );
};

export default App;
