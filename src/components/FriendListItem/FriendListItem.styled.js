import styled from 'styled-components';

export const Item = styled.li`
  width: 250px;
  height: auto;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  background-color: #eef2f5;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  display: flex;
  align-items: center;
  padding: 10px;
`;

const isOnlineBgColor = props => {
  if (props.isonline === 'true') {
    return 'green';
  }
  return 'red';
};

export const Status = styled.span`
  width: 20px;
  height: 20px;
  background-color: ${isOnlineBgColor};
  border-radius: 50%;
  margin-right: 10px;
`;

export const Avatar = styled.img`
  margin-right: 20px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
`;
