import React from 'react'

import {NavBar, NavTab} from '../../src'

const Layout = (props) => (
  <div>

    <NavBar activeLinkClass="bg-turquoise active-tab">

      <NavTab to="/" text="Home" />

      <NavTab to="/buttons" text="Buttons" />

      <NavTab to="/forms" text="Forms" />

    </NavBar>

    {props.children}

  </div>
);

export default Layout