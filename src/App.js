import './App.css';
import Header from './Header'
import Footer from './Footer';
import Employees from './Employees'
import {useState, useEffect} from 'react';
import employeeList from './employeeList'
import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import GroupedTeamMembers from './GroupedTeamMembers'
import Nav from "./Nav"
import NotFound from './NotFound';

function App() {
  const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");


  const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || employeeList);

  useEffect(() => {
    localStorage.setItem('employeeList', JSON.stringify(employees))
  },[employees]);


  useEffect(() => {
    localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam))
  },[selectedTeam]);

  function handleTeamSelectionChange(event){
      console.log(event.target.value);
      setTeam(event.target.value);
  }
  function handleEmployeeCardClick(event){
      const transformedEmployees = employees.map(employee => {
          if(employee.id === parseInt(event.currentTarget.id)){
              if(employee.teamName === selectedTeam){
                  return {...employee, teamName: ''}
              }else{
                  return {...employee, teamName: selectedTeam}
              }
          }else{
              return employee;
          }})
      setEmployees(transformedEmployees);
  }
  return (

      <Router>
      <Nav />
        <Header selectedTeam={selectedTeam}
                teamMemberCount={employees.filter(employee => (employee.teamName === selectedTeam)).length}
        />
        <Routes>
        <Route path="/"
                element={<Employees employees={employees}
                      selectedTeam={selectedTeam}
                      handleTeamSelectionChange={handleTeamSelectionChange}
                      handleEmployeeCardClick={handleEmployeeCardClick}
                />}>
          
          </Route>
          <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees} 
                                                                          selectedTeam={selectedTeam} 
                                                                          setTeam={setTeam} />}>
          </Route>
          <Route path="*" element={<NotFound />}>
          </Route>
        </Routes>
        <Footer />
      </Router>

  );
}

export default App;
