/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */

import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

/* -------------------------- Internal Dependencies ------------------------- */

import Layout, { PageWrapper } from '../components/Layout';
import FooterLink from '../components/Footer';
import { getTransitions } from '../components/Utils';

/* ---------------------------- Image Dependency ---------------------------- */
import { Github } from '../components/Icons';

const projects = [
  {
    title: 'CRAFT: Conditioned Region-Aware Face Restoration',
    context: 'CS 585, Boston University',
    date: 'Jan 2026 - May 2026',
    description: [
      'Replaced the flat VQ codebook of the one-step diffusion restorer OSDFace with a hierarchical region-aware quantizer that parses faces with BiSeNet and quantizes each region against its own three-level residual codebook.',
      'Cut FID by roughly 30% on synthetic CelebA and real-world LFW benchmarks at under 5% added inference cost, and validated the learned codes through region-level code-swap interventions.',
    ],
    github: 'https://github.com/ManaswiYadamreddy/CRAFT',
    tech: ['PyTorch', 'Diffusion', 'BiSeNet', 'Residual VQ', 'CelebA', 'LFW'],
  },
  {
    title: 'Faithfulness Probes for Summarization',
    context: 'CS 505, Boston University',
    date: 'Jan 2026 - May 2026',
    description: [
      'Extended the Lookback Lens hallucination detector with per-token attention, entropy, and logit features from LLaMA-2-7B-Chat, replacing span-level averaging with 1D-CNN and BiLSTM temporal probes.',
      'Raised detection AUROC from 0.833 to 0.885 on AggreFact, with cross-domain transfer measured on XSum and NQ-Open.',
    ],
    github:
      'https://github.com/hannasamuel20/Faithfulness-Probes-for-Summarization',
    tech: [
      'PyTorch',
      'LLaMA-2',
      'Hallucination Detection',
      'BiLSTM',
      '1D-CNN',
    ],
  },
  {
    title: 'MedVisionCLIP: Prompt-Driven Medical Segmentation',
    context: 'Bachelor Thesis, under Dr. Debanga Raj Neog, MFSDSAI, IIT Guwahati',
    date: 'Jul 2024 - May 2025',
    description: [
      'Engineered a dual-branch vision-language model with frequency-aware spatial refinement for prompt-driven medical segmentation.',
      'Improved IoU from 0.490 to 0.882 and Dice from 0.505 to 0.923 over the CLIPSeg baseline on ETIS polyps.',
    ],
    tech: [
      'PyTorch',
      'Transformers',
      'Vision-Language',
      'Segmentation',
      'Wavelet-inspired features',
    ],
  },
  {
    title: 'Boston Bus Equity',
    context: 'CAS CS 506, Boston University',
    date: 'Sep 2025 - Dec 2025',
    description: [
      'Analyzed MBTA bus performance to identify service equity gaps by correlating historical ridership and reliability with community demographics.',
      'Prototyped time-series and tree-based models to forecast delays and isolate drivers of poor reliability for underserved neighborhoods.',
    ],
    github:
      'https://github.com/Chava-Sai/Boston-Bus-Equity-CS506-Final-Project',
    tech: ['Python', 'Pandas', 'Scikit-learn', 'Time-series', 'Data Viz'],
  },
  {
    title: 'Automated ECG Interpretation',
    context: 'Independent project',
    date: 'Feb 2024 - Apr 2024',
    description: [
      'Digitized ECG paper records into time-series signals using an OpenCV pipeline with thresholding and contrast enhancement.',
      'Trained a hybrid CNN-LSTM on PTB-XL, reaching roughly 98.87% accuracy on cardiac abnormality classification.',
    ],
    github: 'https://github.com/ManaswiYadamreddy/Automated-ECG-Interpretation',
    tech: ['TensorFlow', 'Keras', 'OpenCV', 'CNN', 'LSTM'],
  },
  {
    title: 'Synthetic Image Generation Using GANs',
    context: 'Independent project',
    date: 'Jul 2023',
    description: [
      'Implemented DCGAN, Conditional GAN, and WGAN in TensorFlow and Keras for data augmentation on limited datasets.',
      'Used SSIM and PSNR to compare fidelity and selected DCGAN for its stronger feature realism in this setting.',
    ],
    github:
      'https://github.com/ManaswiYadamreddy/Generating-Synthetic-Images-Using-GANs',
    tech: ['TensorFlow', 'Keras', 'GANs', 'SSIM', 'PSNR'],
  },
];

const Projects = () => {
  return (
    <Layout title="Projects">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Projects.</h1>

          <ProjectList>
            {projects.map((project, index) => (
              <ProjectRow
                key={project.title}
                {...getTransitions(0.1 + index * 0.07)}
              >
                <RowIndex className="p-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </RowIndex>

                <RowMeta>
                  <ProjectTitle className="p-title">
                    {project.title}
                  </ProjectTitle>
                  <ProjectContext>{project.context}</ProjectContext>
                  <ProjectDate>{project.date}</ProjectDate>
                  {project.github && (
                    <GithubLink
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${project.title} on GitHub`}
                      title="View on GitHub"
                    >
                      <Github />
                      <span>GitHub</span>
                      <Arrow className="arrow" aria-hidden="true">
                        ↗
                      </Arrow>
                    </GithubLink>
                  )}
                  <TechList className="p-tech">
                    {project.tech.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </TechList>
                </RowMeta>

                <RowBody>
                  {project.description.map((line, idx) => (
                    <p key={idx}>{line}</p>
                  ))}
                </RowBody>
              </ProjectRow>
            ))}
          </ProjectList>
        </PageWrapper>
      </PageSection>

      <PageWrapper>
        <FooterLink goto="/publications" className="mt-3 mb-5">
          View My Publications
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

/* ------------------------------ Project rows ------------------------------ */

const ProjectList = styled.div`
  margin-bottom: 4.5rem;
  border-top: 1px solid var(--timeline);
`;

const ProjectRow = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr) minmax(0, 1.4fr);
  gap: 0 2.5rem;
  padding: 2.8rem 0 2.8rem 1.2rem;
  border-bottom: 1px solid var(--timeline);
  transition: background 0.3s ease, padding-left 0.3s ease;

  /* neutral rail that grows in on hover */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 2px;
    border-radius: 999px;
    background: var(--cw);
    transform: scaleY(0);
    transform-origin: top;
    transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    background: var(--gray-alpha, transparent);
    padding-left: 1.8rem;
  }

  &:hover::before {
    transform: scaleY(1);
  }

  /*
   * Hover styles for children are scoped by class rather than by the
   * styled-components component selector, which would require the
   * babel/SWC plugin that this project does not enable.
   */
  &:hover .p-index {
    color: var(--cw);
    -webkit-text-stroke-color: transparent;
    transform: translateY(-2px);
  }

  &:hover .p-tech span {
    border-color: var(--timeline);
  }

  @media (max-width: 900px) {
    grid-template-columns: 3rem minmax(0, 1fr);
    gap: 0 1.2rem;
    padding: 2.1rem 0 2.1rem 1rem;

    &:hover {
      padding-left: 1.3rem;
    }
  }
`;

const RowIndex = styled.div`
  font-family: var(--font-family-monospace, monospace);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;

  /* outlined "ghost" numeral that fills in on row hover */
  color: transparent;
  -webkit-text-stroke: 1.2px var(--timeline);
  transition: color 0.35s ease, -webkit-text-stroke-color 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

const RowMeta = styled.div`
  min-width: 0;
`;

const RowBody = styled.div`
  min-width: 0;

  p {
    font-size: calc(var(--font-sm) + 0.4px);
    margin: 0 0 0.9rem;
    line-height: 1.9;
    color: var(--article-color) !important;

    &:last-child {
      margin-bottom: 0;
    }
  }

  @media (max-width: 900px) {
    grid-column: 2;
    margin-top: 1.1rem;
  }
`;

const ProjectTitle = styled.h2`
  font-size: calc(var(--font-md) + 2px);
  font-weight: 700;
  line-height: 1.4;
  margin: 0 0 0.55rem;
  color: var(--cw);
`;

const ProjectContext = styled.div`
  font-size: calc(var(--font-sm) - 0.4px);
  line-height: 1.6;
  color: var(--article-color);
`;

const ProjectDate = styled.div`
  margin-top: 0.4rem;
  font-family: var(--font-family-monospace, monospace);
  font-size: calc(var(--font-xs, 11px) + 0.2px);
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: var(--article-color);
  opacity: 0.8;
`;

const Arrow = styled.span`
  display: inline-block;
  transition: transform 0.3s cubic-bezier(0.22, 1, 0.36, 1);
`;

const GithubLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  margin-top: 1rem;
  padding: 0.35rem 0.85rem;
  font-size: calc(var(--font-xs, 11px) + 0.4px);
  font-weight: 500;
  color: var(--cw);
  border: 1px solid var(--timeline);
  border-radius: 999px;
  transition: border-color 0.25s ease, background 0.25s ease,
    transform 0.25s ease;

  svg {
    width: 14px;
    height: 14px;
  }

  &:hover {
    border-color: var(--cw);
    background: var(--button-index);
    transform: translateY(-1px);
  }

  &:hover .arrow {
    transform: translate(2px, -2px);
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 1.1rem;

  span {
    font-size: calc(var(--font-xs, 11px) + 0.2px);
    padding: 0.25rem 0.65rem;
    border-radius: 6px;
    background: var(--button-index);
    border: 1px solid transparent;
    color: var(--article-color);
    letter-spacing: 0.02em;
    transition: border-color 0.25s ease, color 0.25s ease;
  }
`;

export default Projects;
