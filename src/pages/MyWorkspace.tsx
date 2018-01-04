
import * as React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { MainNavbar } from '../components/MainNavbar';
import { CreateProgramPage } from './CreateProgramPage';
import { Page1Page } from './Page1Page';
import { Page2Page } from './Page2Page';
import { Page3Page } from './Page3Page';

export const MyWorkspace = () => (
  <BrowserRouter>
    <div className="container">
      <MainNavbar />

      <Route path="/" component={Page1Page} exact={true} />
      <Route path="/page2" component={Page2Page} />
      <Route path="/page3" component={Page3Page} />
      <Route path="/createprogram" component={CreateProgramPage} />
    </div>
  </BrowserRouter>
);
