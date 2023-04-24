import React from 'react';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-selectors';
import { langPage } from '../components/Lokalization/lokalization';
import { LanguageSwitcher } from 'components/Lokalization/languageSwitcher';
import { About } from 'components/About/About';
import { Projects } from '../components/Projects/Projects';
import { Company } from '../components/Company/Company';
import { University } from '../components/University/University';
import s from '../css/resume.module.css';

export const Resume = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];

  return (
    <div className={s.mainContantSection}>
      <LanguageSwitcher />
      <div>
        {/* <!-- About me section --> */}
        <About />
        {/* <!-- My projects section --> */}
        {lang.isVisibleProjects && <Projects />}
        {/* <!-- My work experience section --> */}
        <Company />
        {/* <!-- Education section --> */}
        <University />
      </div>
    </div>
  );
};
