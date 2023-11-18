import { Form, Field, Formik, ErrorMessage } from "formik";

import "./form.css";

export default function FormikForm({hideForm, formSubmit}) {

  const validate = (values) => {
    const errors = {};

    if (!values.name) {
      errors.name = "This field must be filled in";
    }
    if (!values.surname) {
      errors.surname = "This field must be filled in";
    }
    if (!values.phone) {
      errors.phone = "This field must be filled in";
    } else if (!/^\d{1,12}$/i.test(values.phone)) {
      errors.phone = `Invalid number. Do not use the prefix "+"`;
    }
    return errors;
  };
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          surname: "",
          phone: "",
        }}
        validate={validate}
        onSubmit={formSubmit}
      >
        <Form className="formik__wrap">
          <div className="formik">
          <div className="form__item">
            <span className="id">First name:</span>
            <Field className="input" type="text" name="name" />
          </div>
          <span className="error">
            <ErrorMessage name="name" />
          </span>
          <div className="form__item">
            <span className="id">Last name:</span>
            <Field className="input" type="text" name="surname" />
          </div>
          <span className="error">
            <ErrorMessage name="surname" />
          </span>
          <div className="form__item">
            <span className="id">Phone:</span>
            <Field className="input" type="tel" name="phone" />
          </div>
          <span className="error">
            <ErrorMessage name="phone" />
          </span>
          <div className="buttons">
          <button onClick={hideForm} className="btn__form grey" type="button">
            Cancel
          </button>
          <button className="btn__form green" type="submit">
            Save
          </button>
          </div>
          </div>
        </Form>
      </Formik>
    </>
  );
}
