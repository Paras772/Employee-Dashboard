import React from 'react';
import styled from 'styled-components';
import RankTable from './RankTable';
import EmployeeCard from './EmployeeCard';

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-width: 1200px;
`;

const Header = styled.div`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  align-self: flex-start;
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const Dashboard = () => {
  return (
    <DashboardContainer>
      <Header>Employees Activity Dashboard</Header>
      <Content>
        <RankTable />
        <EmployeeCard />
      </Content>
    </DashboardContainer>
  );
};

export default Dashboard;
