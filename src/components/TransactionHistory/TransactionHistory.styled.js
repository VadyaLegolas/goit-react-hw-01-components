import styled from 'styled-components';

export const Table = styled.table`
margin-right: auto;
margin-left: auto;
  text-align: center;
  width: 500px;
  height: auto;
  border: 2px solid rgba(33, 33, 33, 0.2);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px 4px 4px 4px;
  margin-top: 30px;
  border-collapse: collapse;  
  background-color: #fff;
`;

export const TableRow = styled.tr`
  padding: 20px;
  &:nth-child(even) {
  background-color: #ecf1f4
}
`;

export const TableHead = styled.thead`
  background-color: #00bcd5;
  border: 2px solid white;
  color: white;
  padding-top: 10px;
`;

export const TableData = styled.td`
padding: 5px;
border: 2px solid rgba(33, 33, 33, 0.2);
color: #6c7177;
`;
