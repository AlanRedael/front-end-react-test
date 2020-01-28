import React from 'react';
import axios from 'axios'

export default class Table extends React.Component {
  state = {
    users: []
  }

  componentDidMount() {
    this.loadData();
  }

  async loadData() {
    const uri = 'useres.json'
    const response = await axios.get(uri).catch(err => {
      console.error('failed to fetch from api:', err.message)
      throw err
    })
    this.setState ({
      users: response.data
    })
  }

  listItens() {
    const listItens = this.state.users.map(item =>
      <tr key={item.id}>
        <td>
          <input type="checkbox" id={item.id} name="option1" value="something" />
        </td>
        <td>{item.firstName} {item.lastName}</td>
        <td><span type="button" id={item.id} className="btn p-0" onClick={(e) => this.deleteListItem(e)}>Delete</span> | <span type="button" className="btn p-0">Show</span></td>
      </tr>
    )
    return listItens
  }

  deleteListItem(e) {
    let key = e.target.id
    let temp = this.state.users.filter(
      // eslint-disable-next-line eqeqeq
      user => user.id != key
    )
    this.setState({
      users: temp
    })
    this.listItens()
  }

  render() {
    return (
      <div className="row m-0 justify-content-center">
        <table className="table table-bordered col-10 text-center">
          <thead className="thead-light">
            <tr>
              <th><input type="checkbox" id={0} name="option1" value="something" /></th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {this.listItens()}
          </tbody>
        </table>
      </div>
    )
  }
}
