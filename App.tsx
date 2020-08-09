import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup'


const SignInSchema = Yup.object().shape({
    email: Yup.string().required("This field is required!").email('This is not valid email'),
    password: Yup.string().required("This field is required").min(6,"Minimum length is 6")
})


const App: React.FC = () => {

  let [passwordHidden, setPasswordHidden] = useState(true);

  const handleSubmit = (values: any) => {
      //fetch()
  }

  return (
    <div className="App container my-5">
        <Formik
          initialValues={{ email: '', password: '' }}
          onSubmit={handleSubmit}
          validationSchema={SignInSchema}
        >

        { ( props: any ) => (

            <Form>
              <div>
                  <label htmlFor="email" className="label" >email</label>
                  <Field name="email" className="input is-dark" placeholder="email"/>
                  <ErrorMessage name="email"/>
              </div>
              <div>
                  <label htmlFor="password" className="label">password</label>
                  <Field type={passwordHidden ? "password" : "text"} name="password" className="input is-dark" placeholder="password"/>
                  <ErrorMessage name="password"/>
                  <button onClick={() => { setPasswordHidden(!passwordHidden)} } className="button is-medium is-warning my-5">{passwordHidden ? " show password" : " hide password "}</button>
              </div>
              <button disabled={!props.isValid || !props.dirty }className="button is-success my-5 is-medium" >submit</button>
              <button className="button is-danger my-5 mx-5 is-medium" onClick={props.handleReset}>reset</button>
            </Form>
        )
        }

        </Formik>
    </div>
  );
}

export default App;
