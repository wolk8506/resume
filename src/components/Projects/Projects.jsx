import React from 'react';
import { Tooltip } from '@mui/material';
import { langPage } from '../Lokalization/lokalization';
import s from '../../css/Projects.module.css';
import { data } from './data';
import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/contacts/contacts-selectors';
import DesignServicesIcon from '@mui/icons-material/DesignServices';

export const Projects = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];

  const projects = data.map(i => (
    <li key={i.name} className={s.projectsItem}>
      <span className={s.myProjectsText}>
        <Tooltip
          title={
            <a href={i.link} rel="noopener noreferrer" target="_blank">
              <img src={i.img} alt="projects_1" width="200" height="160" />
            </a>
          }
          placement="right"
        >
          <a
            href={i.link}
            className={s.myProjectsLink}
            rel="noopener noreferrer"
            target="_blank"
          >
            {i.name}
          </a>
        </Tooltip>
        <span className={s.myProjectsBracketLine}></span>
        <span className={s.myProjectsBracket}>[</span>
        <span className={s.myProjectsTechnology}> {i.technology}</span>
        <span className={s.myProjectsBracket}>]</span>
      </span>
    </li>
  ));

  return (
    <>
      <div className={s.myProjectsSection}>
        <h2 className={s.mainContentTitle}>
          <DesignServicesIcon />
          {lang.projects}
        </h2>
        <ol className={s.myProjectsList}>{projects}</ol>
      </div>
    </>
  );
};
