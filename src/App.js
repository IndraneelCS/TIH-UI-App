import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react'
// import Amplify from 'aws-amplify';
import { useRoutes } from 'react-router-dom';
import Dashboard from './Dashboard';
import Videos from './Videos';
import Gaming from './Gaming';
import GameStrategy from './GameStrategy';
import Preference from './Preference';
// import aws_exports from './aws-exports';
// Amplify.configure(aws_exports);

const App = () => {

  const routes = useRoutes([
    { path: '/home', element: <Dashboard /> },
    { path: '/videos', element: <Videos /> },
    { path: '/gaming', element: <Gaming /> },
    { path: '/gameStrategy', element: <GameStrategy /> },
    { path: '/preference', element: <Preference /> }
]);
return routes;
}

// const AppWrapper = () => {
//   return (
//     <Router>
//       <App />
//     </Router>
//   );
// };

// export default AppWrapper;

export default App;