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
                  aria-label="Machine Learning Research Intern at Brigham and Women's Hospital, Harvard Medical School"
                  tabIndex={-1}
                >
                  Machine Learning Research Intern · Brigham and Women&apos;s
                  Hospital, Harvard Medical School
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>May 2026 - Present</b>
                </a>
                <p>
                  Developing a two-prior score-based diffusion model that removes
                  structured clutter from transesophageal echocardiography,
                  training unpaired tissue and clutter priors on 13K patches from
                  58 patients.
                </p>
                <p>
                  Building an inverse finite element pipeline to predict calcified
                  nodule stiffness from CT volumes, replacing assumed
                  density-to-stiffness values with a transferable CT-to-stiffness
                  law for TAVR planning.
                </p>
              </li>
              <li className="mt-2">
                <a
                  aria-label="Machine Learning Engineer at BU Spark!, Boston University"
                  tabIndex={-1}
                >
                  Machine Learning Engineer · BU Spark!, Boston University
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Jan 2026 - May 2026</b>
                </a>
                <p>
                  Client: Boston Public Library (Digital Commonwealth).
                </p>
                <p>
                  Architected a hybrid retrieval pipeline over 1.8M+ chunks of the
                  Digital Commonwealth archive, fusing BGE-M3 dense and sparse
                  retrieval with reciprocal rank fusion to raise Hit@50 from 0.40
                  to 0.66.
                </p>
                <p>
                  Added a Neo4j GraphRAG layer with spaCy entity extraction and
                  GPT-4o cited generation, deployed as an app that grounds every
                  answer in real archival sources.
                </p>
              </li>
              <li className="mt-2">
                <a
                  aria-label="Graduate Research Assistant at the Image and Video Computing Lab"
                  tabIndex={-1}
                >
                  Graduate Research Assistant · Image and Video Computing Lab
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>Jan 2026 - May 2026</b>
                </a>
                <p>
                  Built BLIP ITM and SigLIP 2 scoring pipelines to filter noisy
                  frame-caption pairs from a 264K-clip infant touch dataset,
                  preparing clean data for multimodal contrastive pretraining.
                </p>
                <p>
                  Benchmarked vision-language scorers against human-annotated
                  labels to set calibrated filtering thresholds, contributing to a
                  dataset paper accepted at IEEE ICDL 2026.
                </p>
              </li>
              <li className="mt-2">
                <a
                  aria-label="Research Intern at MedImg Lab, IIT Delhi and AIIMS Delhi"
                  tabIndex={-1}
                >
                  Research Intern · MedImg Lab, IIT Delhi &amp; AIIMS Delhi
                </a>
                <a className="float-right" tabIndex={-1}>
                  <Date /> <b>May 2024 - Aug 2025</b>
                </a>
                <p>
                  Delivered a CAD framework for an ICMR-funded study classifying
                  benign versus metastatic pulmonary nodules in sarcoma patients,
                  trained on 3D CT from 460 patients with patient-wise splits.
                </p>
                <p>
                  Designed an ensemble of multi-scale 3D CNNs with spatial and
                  channel attention reaching 0.85 sensitivity and 0.85 AUC-ROC,
                  with Grad-CAM++ maps to surface model reasoning.
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
