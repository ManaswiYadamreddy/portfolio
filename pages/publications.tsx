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

const SELF = 'Manaswi Yadamreddy';

const publications = [
  {
    title:
      'Making Sense of Touch from the Child’s View for Contrastive Learning',
    authors: [
      'Max Whitton',
      'Zecheng Wang',
      'Puchen Liu',
      'Quang Tuan Truong',
      'Shengao Wang',
      'Manaswi Yadamreddy',
      'Oktay Ozel',
      'Visista Jayanti',
      'Saniya Sekhon',
      'Hanna Samuel Tadesse',
      'Lawrence Miao',
      'Junjie Wang',
      'Jiasen Lu',
      'Chen Yu',
      'Boqing Gong',
    ],
    venue: 'IEEE International Conference on Development and Learning (ICDL)',
    year: '2026',
    status: 'Accepted',
    summary:
      'A dataset and contrastive learning study on infant egocentric touch, filtering noisy frame-caption pairs from a 264K-clip corpus to prepare clean data for multimodal pretraining.',
  },
  {
    title:
      'Sarcoma Lung Metastases Classification in CT Scans Using Multi-scale 3D CNNs with Attention Mechanisms',
    authors: [
      'Himanshu Rikhari',
      'Manaswi Yadamreddy',
      'Esha Baidya Kayal',
      'Shuvadeep Ganguly',
      'Archana Sasi',
      'Swetambri Sharma',
      'Ajith Antony',
      'Krithika Rangarajan',
      'Sameer Bakhshi',
      'Devasenathipathy Kandasamy',
      'Amit Mehndiratta',
    ],
    venue: 'Japanese Journal of Radiology',
    status: 'Under review',
    summary:
      'An ensemble of multi-scale 3D CNNs with spatial and channel attention for classifying benign versus metastatic pulmonary nodules in sarcoma patients, with Grad-CAM++ explainability.',
  },
];

const Publications = () => {
  return (
    <Layout title="Publications">
      <PageSection>
        <PageWrapper>
          <h1 className="intro__text">Publications.</h1>

          <PublicationList>
            {publications.map((pub, index) => (
              <PublicationItem
                key={pub.title}
                {...getTransitions(0.1 + index * 0.09)}
              >
                <ItemIndex className="p-index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </ItemIndex>

                <ItemBody>
                  <PubStatus
                    data-accepted={pub.status === 'Accepted' ? 'true' : 'false'}
                  >
                    <StatusDot className="status-dot" aria-hidden="true" />
                    {pub.status}
                  </PubStatus>
                  <PubTitle className="p-title">{pub.title}</PubTitle>

                  <PubAuthors>
                    {pub.authors.map((author, idx) => (
                      <React.Fragment key={author}>
                        {author === SELF ? <b>{author}</b> : author}
                        {idx < pub.authors.length - 1 ? ', ' : ''}
                      </React.Fragment>
                    ))}
                  </PubAuthors>

                  <PubVenue>
                    {pub.venue}
                    {pub.year ? `, ${pub.year}` : ''}
                  </PubVenue>

                  <PubSummary>{pub.summary}</PubSummary>
                </ItemBody>
              </PublicationItem>
            ))}
          </PublicationList>
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

const PublicationList = styled.div`
  margin-bottom: 4rem;
  border-top: 1px solid var(--timeline);
`;

const PublicationItem = styled(motion.article)`
  position: relative;
  display: grid;
  grid-template-columns: 4.5rem minmax(0, 1fr);
  gap: 0 2.5rem;
  padding: 2.8rem 0 2.8rem 1.2rem;
  border-bottom: 1px solid var(--timeline);
  transition: background 0.3s ease, padding-left 0.3s ease;

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

  /* Scoped by class: component selectors need the styled-components plugin */
  &:hover .p-index {
    color: var(--cw);
    -webkit-text-stroke-color: transparent;
    transform: translateY(-2px);
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

const ItemIndex = styled.div`
  font-family: var(--font-family-monospace, monospace);
  font-size: 2.4rem;
  font-weight: 800;
  line-height: 1;
  letter-spacing: -0.04em;
  color: transparent;
  -webkit-text-stroke: 1.2px var(--timeline);
  transition: color 0.35s ease, -webkit-text-stroke-color 0.35s ease,
    transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);

  @media (max-width: 900px) {
    font-size: 1.6rem;
  }
`;

const ItemBody = styled.div`
  min-width: 0;
`;

const StatusDot = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  border: 1px solid currentColor;
  background: transparent;
`;

const PubStatus = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  font-family: var(--font-family-monospace, monospace);
  font-size: calc(var(--font-xs, 11px) - 0.2px);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  border-radius: 999px;
  padding: 0.22rem 0.7rem;
  margin-bottom: 0.9rem;

  /* neutral in both states; the dot is filled only when accepted */
  color: var(--article-color);
  border: 1px solid var(--timeline);
  background: var(--button-index);

  &[data-accepted='true'] {
    color: var(--cw);
  }

  &[data-accepted='true'] .status-dot {
    background: currentColor;
  }
`;

const PubTitle = styled.h2`
  font-size: calc(var(--font-md) + 1.5px);
  font-weight: 700;
  line-height: 1.45;
  margin: 0 0 0.75rem;
  color: var(--cw);
`;

const PubAuthors = styled.p`
  font-size: calc(var(--font-sm) - 0.2px);
  line-height: 1.9;
  margin: 0 0 0.4rem;
  color: var(--article-color) !important;

  /* the author's own name is pulled forward, neutral */
  b {
    color: var(--cw);
    font-weight: 700;
  }
`;

const PubVenue = styled.p`
  font-size: calc(var(--font-sm) - 0.2px);
  line-height: 1.7;
  margin: 0;
  font-style: italic;
  color: var(--article-color) !important;
`;

const PubSummary = styled.p`
  font-size: calc(var(--font-sm) + 0.2px);
  line-height: 1.9;
  margin: 1rem 0 0;
  padding-left: 0.9rem;
  border-left: 2px solid var(--timeline);
  color: var(--article-color) !important;
`;

export default Publications;
