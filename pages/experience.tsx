/* eslint-disable jsx-a11y/accessible-emoji */

/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Date, Github, Dribble, Product } from '../components/Icons';

const About = () => {
  return (
    <Layout title="My Experience">
      <PageSection>
        <PageWrapper
          className="mb-5"
          aria-label="You are now in my experience section"
        >
          <h1 className="intro__text">Experience.</h1> <br />
          <article>
            <ul className="timeline">
              <li className="mt-2">
                <a
                  aria-label="Research Intern at MedImg Lab, IIT Delhi and AIIMS Delhi"
                  tabIndex={-1}
                >
                  Research Intern · MedImg Lab, IIT Delhi &amp; AIIMS Delhi
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>May 2024 — Aug 2025</b>
                </a>
                <p>
                  Built components of a CAD tool for an ICMR-funded project on early
                  detection of metastatic pulmonary nodules from 3D CT scans.
                </p>
                <p>
                  Designed a multi-level contextual 3D CNN to capture local–global
                  features aimed at improving sensitivity and specificity while
                  reducing false positives.
                </p>
                <p>
                  Collaborated with clinicians to align metrics and error analysis with
                  practical diagnostic needs.
                </p>
              </li>
            </ul>
          </article>
        </PageWrapper>


      </PageSection>

      <PageWrapper>
        <FooterLink goto="/projects" className="mt-3 mb-5">
        View My Projects
        </FooterLink>
        <br />
      </PageWrapper>
    </Layout>
  );
};

const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
  h4 {
    font-size: calc(var(--font-md) + 1.5px);
  }
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }

  ul.timeline {
    list-style-type: none;
    position: relative;
    &:before {
      content: ' ';
      background: var(--timeline);
      display: inline-block;
      position: absolute;
      left: 0px;
      width: 1px;
      top: 4px;
      height: 100%;
      z-index: 400;
    }
    li {
      margin: 3rem 0;
      padding-left: 20px;
      &:before {
        content: ' ';
        background: var(--mark);
        display: inline-block;
        position: absolute;
        border-radius: 50%;
        border: 2px solid var(--cw);
        left: -7px;
        width: 15px;
        height: 15px;
        margin-top: 3px;
        z-index: 400;
      }
      a {
        font-size: var(--font-md);
        font-weight: 500;

        color: var(--cw);
        &.float-right {
          text-decoration: underline;
          font-size: calc(var(--font-sm) + 0.9px);
        }
      }
      a svg {
        margin-top: -0.4rem;
        width: 13px;
      }
    }
  }
  @media (max-width: 585px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 989px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
  @media (max-width: 220px) {
    ul.timeline li a {
      display: block;
      float: none !important;
      margin-top: 5px;
    }
  }
`;

export default About;
