import { createAction } from '@reduxjs/toolkit';

const language = createAction('contacts/language', ({ value }) => ({
  payload: {
    value,
  },
}));

// const removeContact = createAction('contacts/delete');
// const changeFilter = createAction('contacts/changeFilter');
// eslint-disable-next-line import/no-anonymous-default-export
export default { language };
