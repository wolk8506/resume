import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import actions from '../../redux/contacts/contacts-actions';
import { Tooltip } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import s from '../../css/Lokalization.module.css';

export const LanguageSwitcher = () => {
  const value2 = useSelector(getContacts);
  const dispatch = useDispatch();
  const [value, setValue] = useState(value2);

  const handleChange = e => {
    setValue(e.target.value);

    dispatch(
      actions.language({
        value: e.target.value,
      })
    );
  };

  return (
    <>
      <Tooltip title="Language" placement="top">
        <div className={s.userProfileLang}>
          <FormControl variant="standard" sx={{ m: 1, minWidth: 50 }}>
            <Select
              labelId="language"
              id="language"
              value={value}
              onChange={handleChange}
              label="language"
            >
              <MenuItem value={0}>EN</MenuItem>
              <MenuItem value={1}>RU</MenuItem>
              <MenuItem value={2}>UA</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Tooltip>
    </>
  );
};
