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

  render() {
    const listItens = this.state.users.map(item =>
      <tr key={item.id}>
          <td>
            <input type="checkbox" className="form-check-input ml-0" id={'1'+item.id} name="option1" value="something" />
          </td>
          <td>{item.firstName} {item.lastName}</td>
          <td><span type="button" className="btn">Delete</span> | <span type="button" className="btn">Show</span></td>
      </tr>
    )
    return (
      <div className="row m-0 justify-content-center">
        <table className="table table-bordered col-10 text-center">
          <thead className="thead-light">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
              {listItens}
          </tbody>
        </table>
      </div>
    )
  }
}
