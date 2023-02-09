import React, { Component } from 'react'

export default class To_do extends Component {
  state = {
    items: [],
    currentItem: {
        text: "",
        key: ""
    }
  };

  handleInput = e => {
    this.setState({
        currentItem: {
            text: e.target.value,
            key: Date.now()
        }
    });
  };

  addItem = e => {
    e.preventDefault();
    const newItem = this.state.currentItem;
    if (newItem.text !== "") {
        const items = [...this.state.items, newItem];
        this.setState({
            items: items,
        });
        this.setState({ 
            currentItem: {
                text: "",
                key: ""
            }
        });
    }
  };

  deleteItem = key => {
    const filteredItems = this.state.items.filter(item => item.key !== key);
    this.setState({
        items: filteredItems
    });
  };

  render() {
    return (
        <div className="to-do-container">
            <header>
                <form onSubmit={this.addItem}>
                    <input type = "text" placeholder="Enter task" value={this.state.currentItem.text} onChange={this.handleInput}/>
                    <button type="submit">Add</button>
                </form>
            </header>
            <ListItems items={this.state.items} deleteItem={this.deleteItem} />
        </div>
    );
  }
}

class ListItems extends Component {
    render() {
        const items = this.props.items.map(item => {
            return (
                <li key={item.key}>
                    {item.text}
                    <button onClick={() => this.props.deleteItem(item.key)}>
                      X 
                    </button>
                </li>
            );
        });
        return <ul>{items}</ul>;
    }
}