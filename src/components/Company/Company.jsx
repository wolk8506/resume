import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import { langPage } from '../Lokalization/lokalization';
import s from '../../css/Company.module.css';

export const Company = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];
  const company = lang.company.map(i => (
    <div key={i.time} className={s.myWorkExperienceBlock}>
      <h3 className={s.myWorkExperiencePosition}>
        {i.lebensstellung}{' '}
        <span className={s.myWorkExperienceCompany}>{i.arbeitsplatz}</span>
      </h3>
      {/* <!-- count time --> */}
      <p className={s.myWorkExperiencePeriod}>
        {i.time} <span className={s.myWorkExperienceDivider}>|</span>{' '}
        <span id="time">{i.time2}</span>
      </p>
      <ul className={s.myWorkExperienceDuties}>
        {i.slils.map(i => (
          <li key={i} className={s.myWorkExperienceDuty}>
            {i}
          </li>
        ))}
      </ul>
    </div>
  ));

  return (
    <div className={s.company}>
      <h2 className={s.mainContentTitle}>
        <BusinessCenterIcon />
        {lang.workExperience}
      </h2>
      {company}
    </div>
  );
};
