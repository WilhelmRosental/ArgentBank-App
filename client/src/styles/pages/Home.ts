import styled from 'styled-components';
import { mixins } from './mixins';

export const Main = styled.main`
  flex: 1;
`;

export const Banner = styled.div`
  background-image: url('../../assets/bank-tree.jpeg');
  background-position: 0 -50px;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  position: relative;

  ${mixins.lg`
    height: 400px;
    background-position: 0% 33%;
  `}
`;

export const BannerContent = styled.section`
  position: relative;
  top: 2rem;
  width: 200px;
  background: ${({ theme }) => theme.colors.surface};
  padding: 2rem;
  text-align: left;
  margin: 0 auto;

  ${mixins.lg`
    position: absolute;
    top: 50px;
    right: 50px;
    width: 300px;
    margin: 2rem;
  `}
`;

export const Subtitle = styled.p`
  font-weight: bold;
  font-size: 1rem;
  margin: 0;

  ${mixins.lg`
    font-size: 1.5rem;
  `}
`;

export const Text = styled.p`
  margin-bottom: 0;
  font-size: 0.9rem;

  ${mixins.lg`
    font-size: 1.2rem;
  `}
`;

export const Features = styled.section`
  display: flex;
  flex-direction: column;

  ${mixins.lg`
    flex-direction: row;
  `}
`;

export const FeatureIcon = styled.img`
  width: 100px;
  border: 10px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  padding: 1rem;
`;

export const FeatureItem = styled.div`
  flex: 1;
  padding: 2.5rem;
`;

export const FeatureItemTitle = styled.h3`
  color: #222;
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
`;