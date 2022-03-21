import ReactDOM from "react-dom";
import React from "react";
import "./index.css";

class AddTask extends React.Component {
    constructor(props){
        super(props);
        this.state={
            taskDesc:''
        };
    }
    handleTaskTextChange(e){
        this.setState({
            taskDesc:e.target.value
        })
    }
    handleTaskChange(e){
        // alert(this.state.taskDesc);
        this.props.handlerToCollectTaskInfo(this.state.taskDesc);
        this.setState({
            taskDesc:''
        })
    }
  render() {
    return (
      <>
        <form>
          <input type="text" value={this.state.taskDesc} onChange={(e)=>this.handleTaskTextChange(e)} ></input>
          <input type="button" value="Add a task" onClick={()=>this.handleTaskChange()}></input>
        </form>
      </>
    );
  }
}
class TaskList extends React.Component {
    handleTaskClick(taskDesc){
        this.props.handlerToCollectTaskClickInfo(taskDesc);
    }
  render() {
    let list = [];
    for (let i = 0; i < this.props.tasks.length; i++) {
      let task = this.props.tasks[i];
      let spanAction;
      if (task.status) {
        spanAction = <span class="material-icons" onClick={()=>this.handleTaskClick(task.desc)}>close</span>;
      } else {
        spanAction = <span class="material-icons" onClick={()=>this.handleTaskClick(task.desc)}>done</span>;
      }
      let listItem = (
        <div key={i}>
          <span>{task.desc}</span>
          {spanAction}
        </div>
      );
      list.push(listItem);
    }
    return (
      <div className={this.props.forStyling}>
          <div className="list-container">
            <div className="title">{this.props.purpose}</div>
            <div className="content">
                {list}
            </div>
          </div>
      </div>
    );
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    //state contains all the data of the applications
    this.state = {
      tasks: [
        {
          desc: "",
          status: null,
        }
      ],
    };
  }
  
  handleNewTask(task){
    let oldTasks=this.state.tasks.slice();
    oldTasks.push({
        desc:task,
        status:false
    });
    this.setState({
        tasks:oldTasks
    });
  }
  handleTaskUpdate(taskDesc,newStatus){
      let oldTasks=this.state.tasks.slice();
      let taskItem=oldTasks.find(ot => ot.desc==taskDesc);
      taskItem.status=newStatus;
      this.setState({
          tasks:oldTasks
      })
  }
  render() {
    //javascript can be added here
    //   const name="Rahul";
    let tasks = this.state.tasks;
    let reminderTask = tasks.filter((t) => t.status == false);
    let finishedTask = tasks.filter((t) => t.status == true);
    console.log(reminderTask);
    console.log(finishedTask);
    return (
      // <h1>Hello {name}!</h1>
      <>
        <div className="add-task">
          <AddTask handlerToCollectTaskInfo={(task)=>this.handleNewTask(task)}/>
        </div>
        <div className="task-lists">
          <TaskList
            handlerToCollectTaskClickInfo={(taskDesc)=> this.handleTaskUpdate(taskDesc,true)}
            purpose="Reminder"
            forStyling="reminder"
            tasks={reminderTask}
          />
          <TaskList
            handlerToCollectTaskClickInfo={(taskDesc)=> this.handleTaskUpdate(taskDesc,false)}
            purpose="Finished"
            forStyling="finished"
            tasks={finishedTask}
          />
        </div>
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
Props:sends info/content from parent to child component 
*/
