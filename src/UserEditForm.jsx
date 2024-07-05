import React from "react";
import { Form, Button } from "react-bootstrap";
import { Formik, Field } from "formik";

const UserEditForm = ({ user, onSave }) => {
  return (
    <Formik
      initialValues={{
        ...user,
      }}
      onSubmit={(values) => {
        onSave(values);
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Nombre</Form.Label>
            <Field
              as={Form.Control}
              type="text"
              name="name.first"
              onChange={handleChange}
              value={values.name?.first || ""}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Apellido</Form.Label>
            <Field
              as={Form.Control}
              type="text"
              name="name.last"
              onChange={handleChange}
              value={values.name?.last || ""}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>País</Form.Label>
            <Field
              as={Form.Control}
              type="text"
              name="location.country"
              onChange={handleChange}
              value={values.location?.country || ""}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Correo</Form.Label>
            <Field
              as={Form.Control}
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email || ""}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Guardar
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default UserEditForm;
