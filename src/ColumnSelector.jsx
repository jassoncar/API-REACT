import React from "react";
import { Form } from "react-bootstrap";

const ColumnSelector = ({ selectedColumns, handleColumnSelect }) => {
  const columns = ["Edad", "Fecha de Nacimiento", "Sexo", "Imagen"];

  return (
    <Form>
      {columns.map((column) => (
        <Form.Check
          key={column}
          type="checkbox"
          label={column}
          name={column}
          checked={selectedColumns.includes(column)}
          onChange={handleColumnSelect}
        />
      ))}
    </Form>
  );
};

export default ColumnSelector;
