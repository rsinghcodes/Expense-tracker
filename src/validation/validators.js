import Validator from 'validator';
import isEmpty from 'is-empty';

export const validateInput = (data) => {
  let errors = {};

  data.text = !isEmpty(data.text) ? data.text : '';
  data.amount = !isEmpty(data.amount) ? data.amount : '';

  if (Validator.isEmpty(data.text)) {
    errors.text = 'Please add some text';
  }
  if (Validator.isEmpty(data.amount)) {
    errors.amount = 'Please add a positive or negative number';
  } else if (!Validator.isNumeric(data.amount)) {
    errors.amount = 'Please add a positive or negative number';
  }
  return {
    errors,
    isValid: isEmpty(errors),
  };
};
