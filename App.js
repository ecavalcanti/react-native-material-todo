import React from 'react'
import { StyleSheet, AsyncStorage} from 'react-native'
import { Provider as PaperProvider, Modal } from 'react-native-paper'
import { Header, AddButton, TaskList, AddTask } from './components'

export default class App extends React.Component {
  state = {
    tasks: [],
    isShowModal: false
  }

  async componentDidMount() {
    const tasks = await AsyncStorage.getItem('tasks')
    this.setState({tasks: JSON.parse(tasks) || []})
  }

  addTask = (name) => {
    const newTask = {
      id: new Date(),
      name: name,
      done: false
    }
    this.state.tasks.push(newTask)
    this.setState({tasks: [...this.state.tasks], isShowModal: false}, this.saveTasks)
  }

  saveTasks = () => {
    AsyncStorage.setItem('tasks', JSON.stringify(this.state.tasks))
  }

  showModal = () => {
    this.setState({isShowModal: true})
  }

  changeTaskDone = (task) => {
    task.done = !task.done
    this.setState({tasks: [...this.state.tasks]}, this.saveTasks)
  } 

  deleteTask = (id) => {
    const tasks = this.state.tasks.filter((item) => item.id != id)
    this.setState({tasks}, this.saveTasks) 
  }

  renderModal = () => (
    <Modal 
      visible={this.state.isShowModal}
      onDismiss={()=>this.setState({isShowModal: false})}
      >
      <AddTask onTaskFilled={this.addTask} />
    </Modal>
  )

  render() {
    return (
      <PaperProvider>
        <Header title="Todo App" />
        {this.renderModal()}
        <TaskList 
          style={styles.container}
          tasks={this.state.tasks}
          onChangeDone={this.changeTaskDone}
          onDelete={this.deleteTask} />

        <AddButton style={styles.addButton} onPress={this.showModal} />

      </PaperProvider>
    )
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 30,
    right: 30,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})
