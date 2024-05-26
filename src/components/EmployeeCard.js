import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  padding: 20px;
  margin-top: 20px;
  width: 300px;
  text-align: center;
  background-color: white;
`;

const EmployeeImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 10px;
`;

const EmployeeName = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`;

const EmployeePosition = styled.div`
  font-size: 14px;
  color: #666;
`;

const Date = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 10px;
`;

const EmployeeCard = () => {
  return (
    <Card>
      <EmployeeImage src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTG9Jy5q6ie9vf5NhJeIVRg0Gr6jTrx74d7iy978nL11w&s" alt="Employee of the Month" />
      <div style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "10px" }}>Employee of the Month</div>
      <EmployeeName>Rakesh Sharma</EmployeeName>
      <EmployeePosition>UI/UX Designer</EmployeePosition>
      <Date>March 30, 2024</Date>
    </Card>
  );
};

export default EmployeeCard;
