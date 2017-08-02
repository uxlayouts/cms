import React from 'react';
import { renderRoutes } from 'react-router-config';
import { func, shape, arrayOf, string } from 'prop-types';
import TransitionGroup from 'react-transition-group/TransitionGroup';
import VertSwitch from './VertSwitch';
import Sidebar from './Sidebar';
import './assets/scss/styles.css';

const LayoutCreator = ({ route, location }) => (
  <div className="pageWrapper">
    <div className="pageContent">
      <TransitionGroup component="main">
        <VertSwitch key={location.key} location={location}>
          {renderRoutes(route.routes)}
        </VertSwitch>
      </TransitionGroup>
    </div>
    <Sidebar />
  </div>
);

LayoutCreator.propTypes = {
  route: shape({
    routes: arrayOf(
      shape({
        path: string,
        component: func,
      }),
    ),
  }).isRequired,
  location: shape({}),
};

export default LayoutCreator;
