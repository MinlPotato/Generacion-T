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
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={formik.handleChange}
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className="mb-4" controlId="formBasicFirstName">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="firstName"
                    placeholder="Enter first name"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-4" controlId="formBasicLastName">
                  <Form.Label>Last Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="lastName"
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </div>

              <div>
                <Form.Group className="mb-4" controlId="formBasicTextArea">
                  <Form.Label>Comentanos tus dudas o problemas!</Form.Label>
                  <Form.Control
                    as="textarea"
                    style={{ height: "245px" }}
                    name="comentario"
                    placeholder="Enter last name"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check
                    type="checkbox"
                    name="check"
                    label="Check me out"
                    onChange={formik.handleChange}
                  />
                </Form.Group>
              </div>
            </div>
            <div className="d-flex flex-row-reverse">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </div>
        </Form>
      ) : (
        <div>
          <h1> Email: {info.email}</h1>
          <h1> First Name: {info.firstName}</h1>
          <h1> Last Name: {info.lastName}</h1>
          <h1> Check: {info.check}</h1>
        </div>
      )}
    </>
  );
}

export default FormComp;
