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
                <CardDate>Sep 2025 - Dec 2026 (Expected)</CardDate>
                <CardTitle>
                  M.S., Artificial Intelligence · Boston University
                </CardTitle>
                <CardMeta>GPA: 3.86 · Boston, MA</CardMeta>
                <CardDescription>
                  Relevant Coursework: Deep Learning, Machine Learning, Image
                  &amp; Video Computing, Natural Language Processing, Agentic
                  AI.
                </CardDescription>
              </CardContent>
            </EducationCard>

            {/* ===================== */}
            {/* IIT Guwahati          */}
            {/* ===================== */}
            <EducationCard className="iitg">
              <CardContent>
                <CardDate>Jul 2021 - May 2025</CardDate>
                <CardTitle>
                  B.Tech, Engineering Physics · IIT Guwahati
                </CardTitle>
                <CardMeta>Guwahati, India</CardMeta>
                <CardDescription>
                  Relevant Coursework: Data Structures and Algorithms, Operating
                  Systems, Database Management Systems, Recommendation Systems.
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

// Grid that holds both cards (one per row)
const EducationGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;
  margin-bottom: 3.5rem;
`;

// Base card with background image + gradient scrim
const EducationCard = styled.article`
  position: relative;
  border-radius: 14px;
  overflow: hidden;
  min-height: 320px;
  display: flex;
  align-items: stretch;

  /* Background image per school */
  &.bu {
    background-image: url('/images/bu-campus.jpg');
  }

  &.iitg {
    background-image: url('/images/iitg-campus.jpg');
  }

  background-size: cover;
  background-position: center;

  /*
   * Text sits on a photo, so it cannot follow the light/dark theme.
   * A bottom-weighted scrim keeps the image bright at the top while
   * guaranteeing contrast behind the copy at the bottom.
   */
  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      rgba(6, 9, 15, 0.25) 0%,
      rgba(6, 9, 15, 0.55) 45%,
      rgba(6, 9, 15, 0.85) 100%
    );
    z-index: 0;
    transition: background 0.25s ease;
  }

  /* Hover brightens the image slightly but never below readable contrast */
  &:hover::before {
    background: linear-gradient(
      to bottom,
      rgba(6, 9, 15, 0.15) 0%,
      rgba(6, 9, 15, 0.45) 45%,
      rgba(6, 9, 15, 0.78) 100%
    );
  }

  /* Subtle hover lift */
  transition: transform 0.25s ease, box-shadow 0.25s ease;
  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
  }
`;

// Content to sit above the scrim
const CardContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 2.2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.55);

  @media (max-width: 600px) {
    padding: 1.8rem 1.5rem;
  }
`;

const CardDate = styled.p`
  margin: 0 0 0.6rem;
  font-family: var(--font-family-monospace, monospace);
  font-size: calc(var(--font-xs, 11px) + 0.2px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: rgba(255, 255, 255, 0.85);
`;

const CardTitle = styled.h2`
  margin: 0 0 0.4rem;
  font-size: calc(var(--font-md) + 1.6px);
  font-weight: 600;
  color: #ffffff;
`;

const CardMeta = styled.p`
  margin: 0 0 0.7rem;
  font-size: calc(var(--font-sm) - 0.2px);
  letter-spacing: 0.02em;
  color: rgba(255, 255, 255, 0.82);
`;

const CardDescription = styled.p`
  margin: 0;
  font-size: calc(var(--font-sm) + 0.4px);
  line-height: 1.8;
  color: rgba(255, 255, 255, 0.92) !important;
`;

export default Education;
