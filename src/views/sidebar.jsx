import { langPage } from '../components/Lokalization/lokalization';
import photo from '../img/photo.jpg';
import { IconSkype } from '../img';
import { UkraineFlag } from '../img';
import CallIcon from '@mui/icons-material/Call';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TelegramIcon from '@mui/icons-material/Telegram';
import Tooltip from '@mui/material/Tooltip';
import { useSelector } from 'react-redux';
import { getContacts } from '../redux/contacts/contacts-selectors';

export const Sidebar = () => {
  const value = useSelector(getContacts);
  const lang = langPage[value];

  const techSkills = lang.techSkills.map(i => (
    <li key={i} className="tech-skills-item">
      <span className="tech-skills-item-text">{i}</span>
    </li>
  ));

  const softSkills = lang.softSkills.map(i => (
    <li key={i} className="soft-skills-item">
      <span className="soft-skills-item-text">{i}</span>
    </li>
  ));

  const languages = lang.languages.map(i => (
    <li key={i} className="tech-skills-item">
      <span className="tech-skills-item-text">{i}</span>
    </li>
  ));

  return (
    <>
      <aside className="sidebar-section">
        <div className="blokPhoto">
          <img
            className="photo"
            src={photo}
            alt="My_photo"
            width="370"
            height="354"
          />
        </div>

        {/* <!-- Contacts section --> */}
        <div className="contacts-section">
          <h2 className="sidebar-title">{lang.contacts}</h2>

          {lang.contact[0].isVisible && (
            <div>
              <a
                className="contacts-section-link"
                href={`tel:${lang.contact[0].link.split(' ').join('')}`}
              >
                <CallIcon className="contact-icon" /> {lang.contact[0].link}
              </a>
            </div>
          )}

          {lang.contact[1].isVisible && (
            <div>
              <a
                className="contacts-section-link"
                href={`mailto:${lang.contact[1].link}`}
                rel="noopener noreferrer"
                target="_blank"
              >
                <MailOutlineIcon className="contact-icon" />
                {lang.contact[1].link}
              </a>
            </div>
          )}

          {lang.contact[2].isVisible && (
            <div>
              <a
                className="contacts-section-link"
                href={`https://${lang.contact[2].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label={`https://${lang.contact[2].link}`}
              >
                <Tooltip title="Linkedin" placement="bottom">
                  <LinkedInIcon className="contact-icon" />
                </Tooltip>
                Linkedin
              </a>
            </div>
          )}
          {lang.contact[3].isVisible && (
            <div className="contacts-section-item">
              <a
                className="contacts-section-link"
                href={`https://${lang.contact[3].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="github"
              >
                <Tooltip
                  title={`https://${lang.contact[3].link}`}
                  placement="bottom"
                >
                  <GitHubIcon className="contact-icon" />
                </Tooltip>
                GitHub
              </a>
            </div>
          )}

          {lang.contact[4].isVisible && (
            <div className="contacts-section-item">
              <a
                className="contacts-section-link"
                href={`https://${lang.contact[4].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="telegram"
              >
                <Tooltip
                  title={`https://${lang.contact[4].link}`}
                  placement="bottom"
                >
                  <TelegramIcon className="contact-icon" />
                </Tooltip>
                Telegram
              </a>
            </div>
          )}
          {lang.contact[5].isVisible && (
            <div className="contacts-section-item">
              <a
                className="contacts-section-link"
                href={`https://${lang.contact[5].link}`}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="skype"
              >
                <Tooltip
                  title={`https://${lang.contact[5].link}`}
                  placement="bottom"
                >
                  <div className="icon-container contact-icon-skype">
                    <IconSkype />
                  </div>
                </Tooltip>
                Skype
              </a>
            </div>
          )}
          {lang.location.isVisible && (
            <div className="contacts-section-item">
              <a
                className="contacts-section-link"
                href={lang.location.link}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="skype"
              >
                <Tooltip title={lang.location.city} placement="bottom">
                  <div className="icon-container contact-icon">
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
        <div className="skills">
          <div className="tech-skills-section">
            <h2 className="sidebar-title">{lang.techSkillsTitle}</h2>
            <ul className="tech-skills-list">{techSkills}</ul>
          </div>
          {/* <!-- Soft skills section --> */}
          <div className="soft-skills-section">
            <h2 className="sidebar-title">{lang.softSkillsTitle}</h2>
            <ul className="soft-skills-list">{softSkills}</ul>
          </div>
          {/* <!-- Languages --> */}
          <div className="tech-skills-section">
            <h2 className="sidebar-title">{lang.languagesTitle}</h2>
            <ul className="tech-skills-list">{languages}</ul>
          </div>
        </div>
      </aside>
    </>
  );
};
