import { langPage } from '../Lokalization/lokalization';
import s from '../../css/University.module.css';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import SchoolIcon from '@mui/icons-material/School';

export const University = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];
  const tag = lang.university.map(i => (
    <div key={i.еducationPeriod}>
      <h3 className={s.myEducationUniversity}>{i.universityName}</h3>
      <div className={s.myEducation}>
        <h4 className={s.myEducationSpecialization}>{i.specialization}</h4>
        {i.certificate.isVisible && (
          <a
            href={i.certificate.link}
            target="_blank"
            rel="noreferrer noopener"
            className={s.certificate}
          >
            {i.certificate.name}
          </a>
        )}
      </div>
      <p className={s.myWorkExperiencePeriod}>
        {i.еducationTime} <span className={s.myWorkExperienceDivider}>|</span>{' '}
        {i.еducationPeriod}
      </p>
    </div>
  ));

  return (
    <>
      <div className={s.myEducationSection}>
        <h2 className={s.mainContentTitle}>
          <SchoolIcon />
          {lang.еducation}
        </h2>
        {tag}
      </div>
    </>
  );
};
