import styled from '@emotion/styled';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  box-sizing: border-box;
  width: 100%;
  background-color: #6b068a;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10%;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.25);
`;

export const MainImage = styled.div`
  position: absolute;
  top: -37px;
  width: 100%;
  height: 30rem;
  z-index: -1;
  overflow: hidden;

  img {
    width: 120%;
    height: 100%;
    object-fit: cover;
    transform: rotateZ(-7deg) translateY(-2rem) translateX(5rem);
  }
`;
