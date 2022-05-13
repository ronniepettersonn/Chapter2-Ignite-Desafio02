import styled from 'styled-components';

export const FoodsContainer = styled.div`
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 40px 0px;
  margin-top: -140px;

  display: grid;

  grid-template-columns: repeat(3, 1fr);
  grid-gap: 32px;

  @media(max-width: 774px) {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px 20px;
  }

  @media(min-width: 775px) and (max-width: 1329px) {
    grid-template-columns: repeat(2, 1fr);
    padding: 40px 20px;
  }
`;
