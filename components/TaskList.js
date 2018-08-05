import React, { Component } from 'react'
import { FlatList, StyleSheet, View, TouchableOpacity } from 'react-native'
import { Caption, Switch } from 'react-native-paper'
import Icon from 'react-native-vector-icons/MaterialIcons'
import PropTypes from 'prop-types'

export default class TaskList extends Component {
 
  static propTypes = {
    tasks: PropTypes.array.isRequired,
    style: PropTypes.number,
    onChangeDone: PropTypes.func.isRequired,
  }

  renderItem = ({item}) => (
    <View style={styles.item}>
      <Switch value={item.done} onValueChange={()=>this.props.onChangeDone(item)} />
      <Caption style={[
        styles.textItem, 
        {textDecorationLine: item.done ? 'line-through' : 'none'}
        ]}>{item.name}</Caption>
      <TouchableOpacity style={{marginRight: 10}} 
        onPress={()=>this.props.onDelete(item.id)}>
        <Icon name="delete" size={30} color='rgba(0,0,0,0.5)'/>
      </TouchableOpacity>
    </View>
  )
  
  render() {
    const { style, tasks } = this.props
    return (
      <FlatList 
        style={style}
        data={tasks}
        renderItem={this.renderItem}
        keyExtractor={({id})=>id.toString()}
      />
    )
  }
}


const styles = StyleSheet.create({
  item: {
    paddingLeft: 8,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textItem: {
    marginLeft: 8,
    flex: 1
  }
})
