import React from 'react'
import PropTypes from 'prop-types'
import { Toolbar, ToolbarContent } from 'react-native-paper'

const Header = ({title}) =>
  <Toolbar>
    <ToolbarContent title={title}/>
  </Toolbar>  

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header