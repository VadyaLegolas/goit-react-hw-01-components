import styled from 'styled-components';

export const Section = styled.section`
  width: 450px;
  height: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const Title = styled.h2`
  text-align: center;
  padding-top: 20px;
  padding-bottom: 20px;
  text-transform: uppercase;
  border: 1px solid rgba(33, 33, 33, 0.2);
`;

export const StatList = styled.ul`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  color: white;
`;

const randomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatItem = styled.li`
  padding: 10px 25px;
  margin-left: auto;
  margin-right: auto;
  &:not(:last-child) {
    border-right: 1px solid rgba(33, 33, 33, 0.2);
  }
  /* background-color: violet; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: ${randomColor};
`;

export const Label = styled.span`
  font-size: 16px;
  padding-bottom: 10px;
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 700;
`;
