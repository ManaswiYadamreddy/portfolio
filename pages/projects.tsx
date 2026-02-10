/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';

/* ---------------------------- Image Dependency ---------------------------- */
import { Github } from '../components/Icons';

const projects = [
  {
    title: 'Boston Bus Equity — CAS CS 506',
    date: 'Sep 2025 — Present',
    description: [
      'Analyzing MBTA bus performance to identify service equity gaps by correlating historical ridership and reliability with community demographics.',
      'Prototyping time-series and tree-based models to forecast delays and isolate drivers of poor reliability for underserved neighborhoods.',
    ],
    github: 'https://github.com/your-username/boston-bus-equity', // TODO: replace with real link
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Time-series', 'Data Viz'],
  },
  {
    title: 'MedVisionCLIP — Prompt-Driven Medical Segmentation',
    date: 'Jul 2024 — May 2025',
    description: [
      'Built a dual-branch vision-language model that boosted segmentation quality versus CLIPSeg (Mean IoU ≈ 0.882, Mean Dice ≈ 0.923).',
      'A frequency-aware spatial refinement branch, inspired by wavelet features with attention, improved boundary recovery and delineation in low-contrast medical images.',
    ],
    github: 'https://github.com/your-username/medvisionclip', // TODO: replace with real link
    tech: [
      'PyTorch',
      'Transformers',
      'Vision-Language',
      'Segmentation',
      'Wavelet-inspired features',
    ],
  },
  {
    title: 'Automated ECG Interpretation',
    date: 'Feb 2024 — Apr 2024',
    description: [
      'Digitized ECG paper records into time-series signals using an OpenCV pipeline (thresholding + contrast enhancement).',
      'Trained a hybrid CNN-LSTM on PTB-XL, achieving ~98.87% accuracy on cardiac abnormality classification.',
    ],
    github: 'https://github.com/your-username/automated-ecg-interpretation', // TODO: replace
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'CNN', 'LSTM'],
  },
  {
    title: 'Synthetic Image Generation Using GANs',
    date: 'Jul 2023',
    description: [
      'Implemented DCGAN, Conditional GAN, and WGAN in TensorFlow/Keras for data augmentation on limited datasets.',
      'Used SSIM and PSNR to compare fidelity and selected DCGAN for its stronger feature realism in this setting.',
    ],
    github: 'https://github.com/your-username/gan-image-generation', // TODO: replace
    tech: ['TensorFlow', 'Keras', 'GANs', 'SSIM', 'PSNR'],
  },
];

const Projects = () => {
  return (
    <Layout title="Projects">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1>
          <ProjectsGrid>
            {projects.map((project) => (
              <ProjectCard key={project.title}>
                <ProjectHeader>
                  <div>
                    <ProjectTitle>{project.title}</ProjectTitle>
                    <ProjectDate>{project.date}</ProjectDate>
                  </div>
                  {project.github && (
                    <GithubLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View on GitHub"
                    >
                      <Github />
                    </GithubLink>
                  )}
                </ProjectHeader>

                <ProjectBody>
                  {project.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </ProjectBody>

                <TechList>
                  {project.tech.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </TechList>
              </ProjectCard>
            ))}
          </ProjectsGrid>
        </PageWrapper>
      </PageSection>
{/* 
      <PageWrapper>
      <ResumeLink
        href="https://drive.google.com/file/d/1wZXb8jPJ_2syVhY4Kg1NOeGO3Yw8FGHR/view?usp=drive_link"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 mb-5"
        aria-label="Open resume in new tab"
        title="View Resume"
      >
        View My Resume
      </ResumeLink>
      <br />
    </PageWrapper> */}

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

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2 per row */
  gap: 2.4rem; /* more breathing room */
  margin-bottom: 3.5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr; /* stack on tablets & phones */
  }
`;

const ProjectCard = styled.article`
  background: var(--card-bg, var(--bg));
  border-radius: 12px;
  padding: 1.6rem 1.5rem;
  border: 1px solid var(--timeline);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
  transition: transform 0.18s ease, box-shadow 0.18s ease, border-color 0.18s ease;

  &:hover {
    transform: translateY(-3px);
    border-color: var(--mark);
    box-shadow: 0 14px 36px rgba(0, 0, 0, 0.12);
  }

  p {
    font-size: calc(var(--font-sm) + 0.4px);
    margin-top: 0.45rem;
    line-height: 1.8;
    color: var(--article-color) !important;
  }
`;

const ProjectHeader = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.6rem;
`;

const ProjectTitle = styled.h2`
  font-size: calc(var(--font-md) + 1px);
  font-weight: 600;
  margin: 0;
`;

const ProjectDate = styled.div`
  margin-top: 0.3rem;
  font-size: calc(var(--font-xs, 11px) + 0.2px);
  color: var(--timeline);
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.3rem;
  border-radius: 999px;
  border: 1px solid transparent;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover {
    border-color: var(--mark);
    background: var(--gray-dark, transparent);
  }
`;

const ProjectBody = styled.div`
  margin-top: 0.3rem;
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.9rem;

  span {
    font-size: calc(var(--font-xs, 11px) + 0.2px);
    padding: 0.2rem 0.55rem;
    border-radius: 999px;
    background: var(--gray-dark);
    color: var(--cw);
    letter-spacing: 0.01em;
  }
`;
const ResumeLink = styled.a`
  display: inline-block;
  font-size: calc(var(--font-md) + 0.8px);
  font-weight: 700;
  text-decoration: none;
  color: var(--cw);
  border-bottom: 2px solid var(--cw);
  padding-bottom: 0.3rem;
  transition: all 0.25s ease;

  &:hover {
    color: var(--article-color);
    border-color: var(--article-color);
    transform: translateY(-2px);
  }
`;


export default Projects;
