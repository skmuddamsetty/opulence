import React from 'react';
import Aux from '../../hoc/Aux';
import Header from '../Header/Header';

const Layout = props => (
  <Aux>
    <Header />
    <main className="content">{props.children}</main>
  </Aux>
);
export default Layout;
