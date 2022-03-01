import * as Yup from 'yup';
import { useFormik, Form, FormikProvider } from 'formik';
import { Stack, TextField, Button } from '@mui/material';

import { useAppDispatch } from '../redux/app/hooks';
import { addTransaction } from '../redux/reducer/TransactionSlice';

function AddTranscation() {
  const dispatch = useAppDispatch();

  const TranscationSchema = Yup.object().shape({
    text: Yup.string().required('Please enter your Expense/Income'),
    amount: Yup.number().required('Amount field is required'),
  });

  const formik = useFormik({
    initialValues: {
      text: '',
      amount: 0,
    },
    validationSchema: TranscationSchema,
    onSubmit: () => {
      dispatch(addTransaction(values));
    },
  });

  const { errors, touched, values, handleSubmit, getFieldProps } = formik;

  return (
    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3}>
          <TextField
            fullWidth
            label="Expense/Income"
            variant="outlined"
            {...getFieldProps('text')}
            error={Boolean(touched.text && errors.text)}
            helperText={touched.text && errors.text}
          />
          <TextField
            fullWidth
            label="Amount"
            variant="outlined"
            {...getFieldProps('amount')}
            error={Boolean(touched.amount && errors.amount)}
            helperText={touched.amount && errors.amount}
          />
        </Stack>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          type="submit"
          disableElevation
          sx={{ mt: 2 }}
        >
          Save
        </Button>
      </Form>
    </FormikProvider>
  );
}

export default AddTranscation;
