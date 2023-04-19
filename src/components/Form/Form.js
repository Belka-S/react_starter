import { Formik } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';

import { Form, Field, Label, ErrorMessage } from './Form.styled';

const formSchema = Yup.object({
  type: Yup.string().oneOf(['deposit', 'withdrawal']).required(' required'),
  amount: Yup.number().positive(' !!!>0').required(' required'),
  currency: Yup.string().min(2, ' short').max(3, ' long').required(' required'),
});

export const FormikForm = ({ onSubmit }) => (
  <Formik
    initialValues={{ type: 'deposit', amount: 0, currency: 'usd' }}
    validationSchema={formSchema}
    onSubmit={(values, actions) =>
      onSubmit({ ...values, id: nanoid() }, actions.resetForm())
    }
  >
    <Form>
      <Label>
        Type
        <ErrorMessage name="type" component="span" />
        <Field component="select" name="type">
          <option value="deposit">deposit</option>
          <option value="withdrawal">withdraw</option>
        </Field>
      </Label>
      <Label>
        Amount
        <ErrorMessage name="amount" component="span" />
        <Field name="amount" type="number" step="10"></Field>
      </Label>
      <Label>
        Currency
        <ErrorMessage name="currency" component="span" />
        <Field name="currency"></Field>
      </Label>
      <button type="submit">Save</button>
    </Form>
  </Formik>
);
