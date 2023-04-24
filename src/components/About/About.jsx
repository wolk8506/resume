import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import { langPage } from '../../components/Lokalization/lokalization';
// import s from '../../css/resume.module.css';
import s from '../../css/About.module.css';

export const About = () => {
  const value = useSelector(getContacts);

  const lang = langPage[value];

  return (
    <div className={s.aboutMeSection}>
      <p className={s.aboutMeProfession}>
        {lang.aboutMeProfession[lang.isVisibleAboutMeProfession]}
      </p>
      <h1 className={s.aboutMeName}>{lang.name}</h1>
      <p className={s.aboutMeDescription}>{lang.about[lang.isVisibleAbout]}</p>
    </div>
  );
};
