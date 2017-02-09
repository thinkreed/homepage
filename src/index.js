import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'tim',
  lastName: 'duncan'
};

const element = (
  <h1>hello, {formatName(user)}</h1>
);

ReactDOM.render(
  element, document.getElementById('root'));
