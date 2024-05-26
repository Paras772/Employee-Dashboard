import React from 'react';
import styled from 'styled-components';
import goldMedal from './gold-medal.png';
import silverMedal from './silver-medal.png';
import bronzeMedal from './bronze-medal.png';

const TableContainer = styled.div`
  width: 75%;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead`
  background-color: #007bff;
  color: white;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
`;

const TableCell = styled.td`
  padding: 10px;
  text-align: left;
  vertical-align: middle;
  font-size: 14px;

  &:nth-child(1) {
    width: 10%;
  }

  &:nth-child(2) {
    width: 25%;
  }

  &:nth-child(3) {
    width: 25%;
  }

  &:nth-child(4) {
    width: 20%;
  }

  &:nth-child(5) {
    width: 20%;
  }
`;

const ChangeIndicator = styled.span`
  color: ${(props) => (props.positive ? 'green' : 'red')};
`;

const Medal = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
`;

const getMedal = (rank) => {
  switch (rank) {
    case 1:
      return goldMedal;
    case 2:
      return silverMedal;
    case 3:
      return bronzeMedal;
    default:
      return null;
  }
};

const RankTable = () => {
  const employees = [
    { rank: 1, name: 'Rakesh Sharma', designation: 'UI/UX Designer', hoursWorked: '7(42)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 2, name: 'Ankita Thakur', designation: 'HR Recruiter', hoursWorked: '7(41)', changes: '▼ 1.5 hrs', positive: false },
    { rank: 3, name: 'Sarah Yadav', designation: 'Product Manager', hoursWorked: '7(40)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 4, name: 'Harsha Shivhare', designation: 'Designer', hoursWorked: '7(37)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 5, name: 'Vanhil Rai', designation: 'Video Editor', hoursWorked: '7(37)', changes: '▼ 1.5 hrs', positive: false },
    { rank: 6, name: 'Bhanu Sharma', designation: 'Business Analyst', hoursWorked: '7(32)', changes: '▼ 1.5 hrs', positive: false },
    { rank: 7, name: 'Sunil Yadav', designation: 'Developer', hoursWorked: '7(24)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 8, name: 'Akash Roy', designation: 'Business Analyst', hoursWorked: '7(21)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 9, name: 'Rohit Soni', designation: 'Developer', hoursWorked: '7(20)', changes: '▲ 1.5 hrs', positive: true },
    { rank: 10, name: 'Suraj Chauhan', designation: 'Developer', hoursWorked: '7(18)', changes: '▼ 1.5 hrs', positive: false },
  ];

  return (
    <TableContainer>
      <Table>
        <TableHeader>
          <TableRow>
            <TableCell>Rank</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Designation</TableCell>
            <TableCell>No. of hours worked</TableCell>
            <TableCell>Changes</TableCell>
          </TableRow>
        </TableHeader>
        <tbody>
          {employees.map((employee) => (
            <TableRow key={employee.rank}>
              <TableCell>
                {employee.rank <= 3 && (
                  <Medal src={getMedal(employee.rank)} alt={`${employee.rank} medal`} />
                )}
                {employee.rank}
              </TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.designation}</TableCell>
              <TableCell>{employee.hoursWorked}</TableCell>
              <TableCell>
                <ChangeIndicator positive={employee.positive}>
                  {employee.changes}
                </ChangeIndicator>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default RankTable;
