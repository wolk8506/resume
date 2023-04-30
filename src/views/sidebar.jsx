import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-selectors';
import Tooltip from '@mui/material/Tooltip';
import CallIcon from '@mui/icons-material/Call';
import GitHubIcon from '@mui/icons-material/GitHub';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import photo from '../img/photo.jpg';
import { IconSkype } from '../img';
import { UkraineFlag } from '../img';
import { langPage } from '../components/Lokalization/lokalization';
import s from '../css/sidebar.module.css';

export const Sidebar = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];

  const techSkills = lang.techSkills.map(i => (
    <li key={i} className={s.item}>
      <span className={s.itemText}>{i}</span>
    </li>
  ));

  const softSkills = lang.softSkills.map(i => (
    <li key={i} className={s.item}>
      <span className={s.itemText}>{i}</span>
    </li>
  ));

  const languages = lang.languages.map(i => (
    <li key={i} className={s.item}>
      <span className={s.itemText}>{i}</span>
    </li>
  ));

  return (
    <>
      <aside className={s.sidebarSection}>
        <div className={s.blokPhoto}>
          <img
            className={s.photo}
            src={photo}
            alt="My_photo"
            width="370"
            height="354"
          />
        </div>

        {/* <!-- Contacts section --> */}
        <div className={s.skillsSection}>
          <h2 className={s.sidebarTitle}>{lang.contacts}</h2>

          {lang.contact[0].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`tel:${lang.contact[0].link.split(' ').join('')}`}
              >
                <CallIcon className={s.contactIcon} /> {lang.contact[0].link}
              </a>
            </div>
          )}

          {lang.contact[1].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`mailto:${lang.contact[1].link}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MailOutlineIcon className={s.contactIcon} />
                {lang.contact[1].link}
              </a>
            </div>
          )}

          {lang.contact[2].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`https://${lang.contact[2].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`https://${lang.contact[2].link}`}
              >
                <Tooltip title="Linkedin" placement="bottom">
                  <LinkedInIcon className={s.contactIcon} />
                </Tooltip>
                Linkedin
              </a>
            </div>
          )}
          {lang.contact[3].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`https://${lang.contact[3].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="github"
              >
                <Tooltip
                  title={`https://${lang.contact[3].link}`}
                  placement="bottom"
                >
                  <GitHubIcon className={s.contactIcon} />
                </Tooltip>
                GitHub
              </a>
            </div>
          )}

          {lang.contact[4].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`https://${lang.contact[4].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="telegram"
              >
                <Tooltip
                  title={`https://${lang.contact[4].link}`}
                  placement="bottom"
                >
                  <TelegramIcon className={s.contactIcon} />
                </Tooltip>
                Telegram
              </a>
            </div>
          )}
          {lang.contact[5].isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={`https://${lang.contact[5].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="skype"
              >
                <Tooltip
                  title={`https://${lang.contact[5].link}`}
                  placement="bottom"
                >
                  <div className={s.contactIconSkype}>
                    <IconSkype />
                  </div>
                </Tooltip>
                Skype
              </a>
            </div>
          )}
          {lang.location.isVisible && (
            <div className={s.contactItem}>
              <a
                className={s.contactsSectionLink}
                href={lang.location.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="skype"
              >
                <Tooltip title={lang.location.city} placement="bottom">
                  <div className={s.iconContainer}>
                    <LocationOnIcon />
                  </div>
                </Tooltip>
                <UkraineFlag />
                {lang.location.city}
              </a>
            </div>
          )}
        </div>
        {/* //  Tech skills section */}

        <div className={s.skillsSection}>
          <h2 className={s.sidebarTitle}>{lang.techSkillsTitle}</h2>
          <ul className={s.skillsList}>{techSkills}</ul>
        </div>
        {/* <!-- Soft skills section --> */}
        <div className={s.skillsSection}>
          <h2 className={s.sidebarTitle}>{lang.softSkillsTitle}</h2>
          <ul className={s.skillsList}>{softSkills}</ul>
        </div>
        {/* <!-- Languages --> */}
        <div className={s.skillsSection}>
          <h2 className={s.sidebarTitle}>{lang.languagesTitle}</h2>
          <ul className={s.skillsList}>{languages}</ul>
        </div>
      </aside>
    </>
  );
};
