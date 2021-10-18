import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
export const Header = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 80px;
  border-bottom: 1px solid #eff1f6;
  background-color: #ffffff;
`;
export const HeaderContent = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
`;
export const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;
  img {
    width: var(--size);
    height: var(--size);
    --size: 32px;
    background-size: cover;
    margin-right: 5px;
  }
  span {
    width: 100px;
    font-weight: 500;
    font-size: 20px;
  }
`;
export const HeaderNavigation = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  a {
    margin-right: 15px;
  }
`;
export const HeaderLink = styled.div`
  display: flex;
  width: 100%;
  a {
    text-decoration: none;
    color: #404089;
    font-weight: 500;
    margin-right: 24px;
    :last-child {
      margin-right: 0;
    }
  }
`;
export const HeaderActions = styled.div`
  display: flex;
  flex-direction: row;
  width: 200px;
  height: 40px;
  align-items: center;
  justify-content: center;
  border: 2px solid #eff1f6;
  border-radius: 8px;
  padding: 0 10px;
  cursor: pointer;
  margin-right: 24px;
  svg {
    margin-right: 8px;
    color: #404089;
    font-size: 20px;
  }
  a {
    text-decoration: none;
    justify-content: center;
    align-items: center;
    color: #404089;
    font-weight: 500;
  }
  span {
    width: 100%;
    align-items: center;
  }
  :hover {
    color: #434ce8;
    border-color: #434ce8;
  }
`;
export const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fdfcff;
  border-bottom: 1px solid #eff1f6;
`;
export const MainHeader = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  justify-content: space-between;
`;
export const MainHeaderTitle = styled.h1`
  display: flex;
  font-size: 1.75rem;
  font-weight: 600;
  line-height: 1.25;
  margin-bottom: 24px;
`;
export const SearchContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 3%;
  input {
    border: 2px solid #eff1f6;
    height: 40px;
    width: 250px;
    border-radius: 8px;
    padding: 0 1em 0 36px;
    color: #404089;
    :hover {
      border-color: #434ce8;
    }
  }
  svg {
    position: absolute;
    left: 10px;
  }
`;
export const MainTabs = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
`;
export const LinkTabs = styled.div`
  display: flex;
  align-items: center;
  height: 48px;
  margin-right: 15px;
  padding: 0 0.25rem;
  font-weight: 500;
  text-decoration: none;
  color: ${({ active }) => (active ? `#434ce8` : `inherit`)};
  border-bottom: ${({ active }) => (active ? `3px solid #434ce8` : `inherit`)};
  cursor: pointer;
  :hover {
    color: #434ce8;
    border-bottom: 3px solid #434ce8;
  }
`;
export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-bottom: 15px;
`;
export const SoundBox = styled.div`
  display: flex;
  cursor: pointer;
  svg {
    color: #404089;
    width: var(--size);
    height: var(--size);
    --size: 16px;
  }
`;
export const SettingsBox = styled.div`
  display: flex;
  margin-right: 15px;
  cursor: pointer;
  svg {
    color: #404089;
    width: var(--size);
    height: var(--size);
    --size: 16px;
  }
`;
export const ContentHeaderIntro = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentHeaderIntroTitle = styled.h2`
  display: flex;
  font-size: 1.25rem;
  font-weight: 600;
`;
export const ContentHeaderIntroSubtitle = styled.p`
  display: flex;
  color: #686b87;
  margin-top: 0.25rem;
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;
export const ContentHeaderActions = styled.div`
  display: flex;
`;
export const Request = styled.div`
  display: flex;
  text-decoration: none;
  align-items: center;
  justify-content: center;
  padding: 0 1em;
  height: 40px;
  border-radius: 8px;
  line-height: 1;
  border: 2px solid #eff1f6;
  color: #404089;
  font-size: 0.875rem;
  background-color: #fff;
  cursor: pointer;
  :hover {
    border-color: #434ce8;
  }
  svg {
    margin-right: 10px;
    color: #404089;
  }
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  //background-color: #fdfcff;
`;
export const ContentPanel = styled.div`
  display: flex;
  flex-direction: column;
  //max-width: 280px;
  width: 25%;
  padding: 2rem 1rem 2rem 0;
  margin-right: 3rem;
  a {
    align-items: center;
    padding: 0.75em 1em;
    background-color: transparent;
    border-radius: 8px;
    text-decoration: none;
    font-weight: 500;
    color: #404089;
  }
`;
export const LinkControlPanel = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75em 1em;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 500;
  color: ${({ active }) => (active ? "#434ce8" : "#404089")};
  background-color: ${({ active }) => (active ? "#ecf3fe" : "transparent")};
  cursor: pointer;
  margin-bottom: 5px;
  :last-child{
    margin-bottom: 0px;
  }
  :hover {
    background-color: #ecf3fe;
    color: #434ce8;
  }
`;
export const ContentMain = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 1.5rem;
  row-gap: 1.5rem;
  padding: 2rem 0rem 2rem 0;
`;
export const ContainerCard = styled.div`
  display: flex;
  height: 212px;
  background-color: #ffffff;
  box-shadow: 0 3px 3px 0 rgb(0 0 0 / 5%), 0 5px 15px 0 rgb(0 0 0 / 5%);
  border-radius: 8px;
  overflow: hidden;
  flex-direction: column;
`;
export const CardHeader = styled.div`
  display: flex;
  box-sizing: border-box;
  align-items: center;
  justify-content: space-between;
`;
export const NameCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  //padding: 1.5rem 1.25rem 1rem 1.25rem;
  padding: 15px;
`;
export const CardBody = styled.div`
  display: flex;
  padding: 1rem 1.25rem;
  font-size: 0.875rem;
  border-bottom: 1px solid #eff1f6;
  height: 40px;
`;
export const CardFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  padding: 20px;
  a {
    color: #404089;
    text-decoration: none;
    font-weight: 500;
    font-size: 0.875rem;
    align-items: center;
    justify-content: center;
  }
`;
export const IconCard = styled.div`
  display: flex;
  height: 40px;
  width: auto;
  margin-right: 10px;
`;
export const NameCard = styled.div`
  display: flex;
`;
export const ButtonContainer = styled.div`
  display: flex;
  padding: 15px;
`;
export const SwithContainer = styled.div`
  display: flex;
  position: relative;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 24px;
  padding: 10px;
  border-radius: 50px;
  overflow: hidden;
`;
export const Circle = styled.div`
  display: flex;
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 50px;
  background: ${({ off }) => (off ? `#404089` : `#8e9eab`)};
  :before {
    position: absolute;
    content: "";
    height: 18px;
    width: 18px;
    left: ${({ off }) => (off ? "18px" : "4px")};
    right: ${({ off }) => (off ? "4px" : "18px")};
    bottom: 3px;
    border-radius: 50%;
    background-color: white;
    transition: 0.2s;
  }
`;
