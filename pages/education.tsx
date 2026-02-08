/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import React from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */
import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

const Education = () => {
  return (
    <Layout title="Education">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Education.</h1>
          <EducationGrid>
            {/* ===================== */}
            {/* Boston University     */}
            {/* ===================== */}
            <EducationCard className="bu">
              <CardContent>
                <CardDate>Expected Dec 2026</CardDate>
                <CardTitle>M.S., Artificial Intelligence · Boston University</CardTitle>
                <CardDescription>
                  Relevant Coursework: Deep Learning, Principles of Machine Learning,
                  Artificial Intelligence, Data Science Tools &amp; Applications,
                  Image &amp; Video Computing, Natural Language Processing.
                </CardDescription>
              </CardContent>
            </EducationCard>

            {/* ===================== */}
            {/* IIT Guwahati          */}
            {/* ===================== */}
            <EducationCard className="iitg">
              <CardContent>
                <CardDate>Jul 2021 — May 2025</CardDate>
                <CardTitle>B.Tech, Engineering Physics · IIT Guwahati</CardTitle>
                <CardDescription>
                  Relevant Coursework: Data Structures &amp; Algorithms,
                  Operating Systems, Database Management Systems, Recommendation
                  System Design Using Deep Learning.
                </CardDescription>
              </CardContent>
            </EducationCard>
          </EducationGrid>
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

export const PageSection = styled.div`
  .intro__text {
    font-size: var(--font-x-lg);
    font-weight: 900;
    margin: 4rem 0rem 1.5rem;
    position: relative;
  }
`;

// Grid that holds both cards (2 per row on desktop)
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr; /* one per row */
  gap: 3rem; /* more vertical breathing room */
  margin-bottom: 3.5rem;
`;


// Base card with background image + dark overlay
const EducationCard = styled.article`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: stretch;
  color: var(--cw);

  /* Background image per school */
  &.bu {
    background-image: url('/images/bu-campus.jpg');
  }

  &.iitg {
    background-image: url('/images/iitg-campus.jpg');
  }

  background-size: cover;
  background-position: center;

  /* Dark overlay for readability */
    &::before {
    content: '';
    position: absolute;
    inset: 0;

    /* normal state: readable but slightly dark */
    background: rgba(10, 13, 20, 0.2);

    backdrop-filter: blur(0.4px);
    z-index: 0;
    transition: background 0.25s ease;
    }



  &:hover::before {
    /* hover: brighter image */
    background: rgba(10, 13, 20, 0.001);
    }


  /* Subtle hover lift */
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);


    &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
    }


`;

// Content to sit above overlay
const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2.2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media (max-width: 600px) {
    padding: 1.8rem 1.5rem;
  }
`;

const CardDate = styled.p`
  margin: 0 0 0.6rem;
  font-family: var(--font-mono, monospace);
  font-size: calc(var(--font-xs, 11px) + 0.2px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  opacity: 0.9;
`;

const CardTitle = styled.h2`
  margin: 0 0 0.6rem;
  font-size: calc(var(--font-md) + 1.6px);
  font-weight: 600;
  color: var(--cw);
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: calc(var(--font-sm) + 0.4px);
  line-height: 1.8;
  color: rgba(230, 236, 255, 0.9);
`;

export default Education;
