import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, TextInput } from 'react-native-paper'

export default class AddTask extends Component {
  state = {
    text: ''
  }
  
  render() {
    return (
      <View style={styles.container}>
        <TextInput 
          value={this.state.text}
          onChangeText={(text)=>this.setState({text})}
          placeholder="Digite a task" />
        <Button 
          primary 
          raised 
          onPress={() => this.props.onTaskFilled(this.state.text)}>Add</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    height: 160, 
    backgroundColor: 'white', 
    marginHorizontal: 20, 
    paddingHorizontal: 10,
    justifyContent: 'space-around' 
  }
})
