/* -------------------------------------------------------------------------- */
/*                             External Dependency                            */
/* -------------------------------------------------------------------------- */
import React, { useContext } from 'react';

/* -------------------------- Internal Dependencies ------------------------- */
import { Header } from '../Layout/style';
import Link from '../ActiveLink';
import AppContext from '../Utils/context';
import { useRouter } from 'next/router';


/* ---------------------------- Image Dependency ---------------------------- */
import { Logo, Moon, Icon } from '../Icons';

const Navbar = () => {
  const { show, handleopen, setTheme, closeShow, theme } = useContext(
    AppContext
  );
  const router = useRouter();

  const isHome = router.pathname === '/';

  return (
    <>
      <Header>
        <nav className="navbar navbar-expand-lg bg-light navbar-light">
          <div className="container">
            {/* <Link
              href="/"
              className="navbar-brand"
              aria-label="Manaswi Home"
              tabIndex={show ? -1 : undefined}
            >
              <Logo />
            </Link> */}

            <div className="navbar-brand-wrapper">
              <Link
                href="/"
                className="navbar-brand"
                aria-label="Manaswi Home"
                tabIndex={show ? -1 : undefined}
              >
                <Logo />
              </Link>
            </div>


            <button
              className="navbar-toggler pr-0"
              type="button"
              onClick={handleopen}
              tabIndex={show ? -1 : undefined}
              aria-label="Open Button Toggle"
            >
              <span className="navbar-toggler-icon" />
            </button>

            <div
              className={`collapse navbar-collapse  ${show && 'show'}`}
              id="collapsibleNavbar"
            >
              <button
                className="d-block d-md-none close-nav"
                onClick={handleopen}
                type="button"
              >
                <Icon />
              </button>

              <ul className="navbar-nav ml-auto">
                <li className="nav-item hover__bottom d-block d-md-none">
                  <Link
                    href="/"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go Home"
                    title="Home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link
                    href="/experience"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go To Experience Page"
                    title="Experience"
                  >
                    Experience
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link
                    href="/education"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go To Education Page"
                    title="Education"
                  >
                    Education
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link
                    href="/projects"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go To Projects Page"
                    title="Projects"
                  >
                    Projects
                  </Link>
                </li>
                <li className="nav-item hover__bottom">
                  <Link
                    href="/publications"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go To Publications Page"
                    title="Publications"
                  >
                    Publications
                  </Link>
                </li>

                <li className="nav-item hover__bottom">
                  <a
                    href="https://drive.google.com/file/d/176kL2h6QSwIojB8WJYck1f0Artak8U3i/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="nav-link"
                    id="cardHover"
                    aria-label="Open Resume"
                    title="Resume"
                    onClick={closeShow}
                  >
                    Resume
                  </a>
                </li>
                <li className="nav-item hover__bottom">
                  <Link
                    href="/contact"
                    activeClassName="is-active"
                    className="nav-link"
                    id="cardHover"
                    onClick={closeShow}
                    aria-label="Go To Contacts Page"
                    title="Contact"
                  >
                    Contact
                  </Link>
                </li>

                <li className="nav-item pl-md-3">
                  <Link
                    href="#!"
                    className="nav-link nav-svg"
                    aria-label={`Turn On ${
                      theme === false ? 'Light' : 'Dark'
                    } Mood`}
                    onClick={setTheme}
                  >
                    <Moon />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </Header>
    </>
  );
};

export default Navbar;
