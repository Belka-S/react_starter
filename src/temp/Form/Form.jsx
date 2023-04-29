import { Formik, Form, Field, ErrorMessage } from 'formik';
import { DiCss3, DiHtml5, DiJavascript } from 'react-icons/di';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import css from './Form.module.scss';

// FormikForm
const formOptions = ['deposit', 'withdrawal', 'payment'];

const formSchema = Yup.object({
  operation: Yup.string().oneOf(formOptions).required('required'),
  amount: Yup.number().positive('positive').required('required'),
  currency: Yup.string().min(2, 'short').max(3, 'long').required('required'),
});

export const FormikForm = ({ handleSubmit }) => (
  <Formik
    initialValues={{ operation: 'deposit', amount: 0, currency: 'usd' }}
    validationSchema={formSchema}
    onSubmit={(values, actions) => {
      handleSubmit({ ...values, id: nanoid() });
      actions.resetForm();
    }}
  >
    <Form className={css.Form}>
      <label>
        Operation
        <Field name="operation" component="select">
          {formOptions.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </Field>
        <ErrorMessage className={css.Error} name="operation" component="div" />
      </label>
      <label>
        Amount
        <Field name="amount" type="number" step="10"></Field>
        <ErrorMessage className={css.Error} name="amount" component="div" />
      </label>
      <label>
        Currency
        <Field name="currency"></Field>
        <ErrorMessage className={css.Error} name="currency" component="div" />
      </label>
      <button type="submit">Submit Form</button>
    </Form>
  </Formik>
);

// Input
export const Input = ({ handleChange, inputValue, reset }) => (
  <div className={css.InputWrap}>
    <label>
      Filter
      <input
        type="text"
        name="filter"
        value={inputValue}
        onChange={handleChange}
      />
    </label>
    <button className={css.Btn} onClick={reset}>
      Clear Input
    </button>
  </div>
);

// Radio
export const Radio = ({ handleChange, subject, allSabjects }) =>
  allSabjects.map(el => (
    <div className={css.InputWrap} key={el}>
      <label>
        {el}
        {(() => {
          switch (el) {
            case 'css':
              return <DiCss3 size="25" />;
            case 'html':
              return <DiHtml5 size="25" />;
            default:
              return <DiJavascript size="25" />;
          }
        })()}
        <input
          type="radio"
          name="subject"
          value={el}
          checked={subject === el}
          onChange={handleChange}
        ></input>
      </label>
    </div>
  ));

// Checkbox
export const Checkbox = ({ handleCheckbox, agree }) => (
  <div className={css.InputWrap}>
    <label>
      Agree
      <input
        type="checkbox"
        name="agree"
        // value="yes"
        checked={agree}
        onChange={handleCheckbox}
      />
    </label>
  </div>
);
