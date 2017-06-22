const ReactDOM = require('react-dom');
const React = require('react')
const Backbone = require('backbone');
const $ = require('jquery')

let message = 'Hello Jstn!!!';

console.log(message);

const TodoList = React.createClass({
  getInitialState: function (){
    return {
      data: [],
    };
  },

  componentDidMount: function (){this.setState({data: this.props.data});
},
taskAdd: function (item){
  let items;

  item.id = new Date().getTime(),
  items = this.state.data.concat([item]);

  localStorage.setItem('#app-container', JSON.stringify(items));

  this.setState({
    data: items
  });
},
handleTaskRemoved: function (item){
  // console.log('all cleared', item);
  let newStuff = this.state.data.filter(function(i) {
    return item.id !==i.id;
  });

  localStorage.setItem('#app-container', JSON.stringify(newStuff));

  this.setState({data: newStuff});
},
render: function (){
  return(

    <div className="todo-list">
    <h1 className = "Top">Justin Todo List</h1>
    {

    this.state.data.length ?

    <ListItems data={this.state.data} onTaskRemoved={this.handleTaskRemoved}/>:
    <p>None Here</p>
  }
      <Input onTaskAdded={this.taskAdd}/>
    </div>
  );
}
});



const ListItems = React.createClass({
  render: function (){
    let this_= this;
    const items = this.props.data.map (function(item) {
      return (
        <IndItem item={item} key={item.id} onTaskRemoved= {this_.props.onTaskRemoved}/>
      );
    });
    return(
      <ul className="allitems">{items}</ul>
    );
  }
});



const IndItem = React.createClass({
  onClick: function (){
    // console.log('removed task');
    this.props.onTaskRemoved(this.props.item);
  },
  render: function (){
    return(
      <ul className = "inditem">
      {this.props.item.newtask}
      - <a href="#" onClick={this.onClick}><button className ="removebutton">Finished</button></a>
      </ul>
    );

  }
});

const Input = React.createClass({
  getInitialState: function (){
    return {
      item: ''
    };
  },
  taskAdd: function (e) {
    e.preventDefault();

    if (this.state.item.trim() ===''){
      return;
    }
    this.props.onTaskAdded({
      newtask: this.state.item
    });
    this.setState({
      item:''
    });
  },
  taskChange: function (e){
    this.setState({item: e.target.value});
  },
  render: function(){
    return(
      <form onSubmit = {this.taskAdd}>
        <textarea className = "inputtext"
          rows = "6"
          value = {this.state.item}
          placeholder = "Upcoming Tasks"
          onChange={this.taskChange}>
        </textarea>
        <input type="submit" className = "subbutton"/>
      </form>
    );
  }




});
const data = JSON.parse(localStorage.getItem('#app-container')) || [];



ReactDOM.render(<TodoList data ={data}/>, document.querySelector('#app-container'));
