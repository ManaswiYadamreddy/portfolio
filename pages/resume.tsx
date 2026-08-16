/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* Google Drive file id for the resume. Override with NEXT_PUBLIC_RESUME_LINK. */
const RESUME_FILE_ID =
  process.env.NEXT_PUBLIC_RESUME_LINK || '176kL2h6QSwIojB8WJYck1f0Artak8U3i';

const RESUME_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`;

const Resume = () => {
  const previewData = `https://drive.google.com/file/d/${RESUME_FILE_ID}/preview`;

  return (
    <Layout title="Resume">
      <PageWrapper>
        <PageSection>
          <article>
            <h1 className="intro__text">Resumé.</h1>
            <p>
              Reach out to me via my{' '}
              <b>
                <Link href="/contact">contact page</Link>
              </b>{' '}
              .{' '}
              <b>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  view
                </a>
              </b>{' '}
              or{' '}
              <b>
                <a
                  href={RESUME_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to Resumé Page"
                >
                  download
                </a>
              </b>{' '}
              the resume{' '}
            </p>
          </article>
          <br />
          <iframe
            src={previewData}
            allowFullScreen
            width="740"
            height="780"
            title="Manaswi Yadamreddy Resumé"
          />
        </PageSection>
        <br />
        <br />
        <FooterLink goto="/contact" className="mt-3 mb-5">
          Are you convinced to contact me now ?
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
  p {
    font-size: calc(var(--font-sm) + 0.9px);
    margin-top: 0.6rem;
    line-height: 2;
    font-weight: 400;
    color: var(--article-color) !important;
  }
  iframe {
    width: 100%;
    filter: invert(var(--invert)) grayscale(calc(var(--invert) - 0.15));
    border: none;
    height: 44.5rem;
    @media (min-width: 768px) {
      width: 82.8% !important;
      height: 70.4rem !important;
    }
  }
`;
export default Resume;
