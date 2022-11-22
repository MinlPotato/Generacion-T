import { Form, Button } from "react-bootstrap";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";

function FormComp() {
  const [info, setInfo] = useState(null);

  const validationSchema = Yup.object().shape({
    password: Yup.string()
      .min(5, "Must be at least 5 characters")
      .max(20, "Must be 20 characters or less")
      .required("Required"),

    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const formik = useFormik({
    initialValues: {
      password: "",
      email: "",
      check: "",
      firstName: "",
      lastName: "",
      comentario: "",
    },

    onSubmit: (data) => {
      console.log(data);
      setInfo(data);
      // alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <>
      {info == null ? (
        <Form onSubmit={formik.handleSubmit} className="card text-start">
          <div className="card-body">
            <div className="d-flex gap-5">
              <div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Escribe tu email"
                    onChange={formik.handleChange}
                  />
                  <Form.Text className="text-muted">
                    No vamos a compartir tu email con nadie.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicFirstName">
                  <Form.Label>Nombre</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Ecribe tu nombre"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicLastName">
                  <Form.Label>Apellido</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Ecribe tu apellido"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-4" controlId="formBasicTextArea">
                  <Form.Label>Comentanos tus dudas o problemas!</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "245px", maxHeight: "300px", minHeight: "220px"}}
                    name="comentario"
                    placeholder="Escribe tu duda o pregunta aqui"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="check"
                    label="Enviar la respuesta al mail"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <Button variant="primary" type="submit">
                Enviar
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <div>
          <h2 className="text-center">Mensaje Enviado con Exito!</h2>
          <div className="card">
            <div className="card-body">
              <p> Email: {info.email}</p>
              <p> First Name: {info.firstName}</p>
              <p> Last Name: {info.lastName}</p>
              <p> Comentario: {info.comentario}</p>
              <p> Check: {info.check}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormComp;
