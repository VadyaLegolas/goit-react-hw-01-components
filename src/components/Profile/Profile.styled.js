import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  height: auto;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
  background-color: #eef2f5;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
`;

export const Description = styled.div`
  padding: 5px;
  background-color: #fff;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 0px 0px;
`;

export const Avatar = styled.img`
  width: 150px;
  height: auto;
  border: 2px solid rgba(33, 33, 33, 0.2);
  border-radius: 50% 50%;
  overflow: hidden;
  display: block;
  margin-right: auto;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Tag = styled.p`
  text-align: center;
  color: #8997a5;
  margin-bottom: 10px;
`;

export const Location = styled.p`
  text-align: center;
  color: #8997a5;
  font-size: 16px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Stats = styled.ul`
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  padding: 10px 5px;

  &:not(:last-child) {
    border-right: 1px solid rgba(33, 33, 33, 0.2);
  }
  /* &:not(:last-child)::after {
    content: '';
    display: block;
    width: 22px;
    height: 0;
    border: 1px solid rgba(33, 33, 33, 0.2);
    -webkit-transform: rotate(90deg);
    transform: rotate(90deg);
    
  } */
`;

export const Label = styled.span`
  color: #8997a5;
`;

export const Quantity = styled.span`
  font-weight: 700;
`;
