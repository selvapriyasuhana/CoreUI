// App.js
import React from 'react';
import { CContainer, CRow, CCol, CCard, CCardHeader, CCardBody, CNav, CNavLink } from '@coreui/react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import '@coreui/coreui/dist/css/coreui.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <CContainer className="mt-3">
          <CRow>
            <CCol>
              <CCard>
                <CCardHeader>
                  <CNav component="nav">
                    <CNavLink as={NavLink} to="/" className="nav-link" active={window.location.pathname === '/'} exact>
                      Home
                    </CNavLink>
                    <CNavLink as={NavLink} to="/menu" className="nav-link" active={window.location.pathname === '/menu'}>
                      Menu
                    </CNavLink>
                  </CNav>
                </CCardHeader>
                <CCardBody>
                  <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/menu" component={Menu} />
                  </Switch>
                </CCardBody>
              </CCard>
            </CCol>
          </CRow>
        </CContainer>
      </div>
    </Router>
  );
}

export default App;
