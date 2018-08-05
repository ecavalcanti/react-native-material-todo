import React from 'react'
import { FAB } from 'react-native-paper'
import PropTypes from 'prop-types'

const AddButton = ({style, onPress}) => 
  <FAB
    icon="add"
    style={style}
    onPress={onPress}
  />

AddButton.propTypes = {
  style : PropTypes.number,
}

export default AddButton