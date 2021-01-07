import React, { Component } from 'react';
import { connect } from 'react-redux';
import { storeService } from '../../services/storeService';
import { addStore, updateStore } from '../../store/actions/storeActions'
import './StoreEdit.scss';

class _StoreEdit extends Component {
  state = {
    store: {
      name: '',
      description: '',
      imgURL: '',
      createdBy: '',
      createdDate: null,
      tags: [],
      products: []
    },
    errMsg: ''
  }
  async componentDidMount() {
    console.log('edit');
    const { id } = this.props.match.params
    console.log('id from params', id);
    const store = id ? await storeService.getStoreById(id) : storeService.getEmptyStore()
    if (store) this.setState({ store })
    else this.setState({ errMsg: 'Store not found!' })
  }

  handleChange = ({ target }) => {
    const field = target.name
    const value = target.value
    this.setState(prevState => ({ store: { ...prevState.store, [field]: value } }))
  }

  onSaveStore = async (ev) => {
    ev.preventDefault()
    const store = this.state
    if (store.name || store.description || store.createdBy) {
      return this.prevState({ errMsg: 'Please fill the fields above' })
    }
    if (store._id) await this.props.updateStore(store)
    else await this.props.addStore(store)
    this.props.history.push('/')
  }


  render() {
    const { errMsg } = this.state
    const { name, description, imgURL, createdBy, createdDate, tags, products } = this.state.store
    return (
      <form onSubmit={this.onSaveStore} className="store-edit flex">
        <label>Name:</label>
        <input type="text" name="name" value={name} onChange={this.handleChange} />
        <label>Description:</label>
        <input type="text" name="description" value={description} onChange={this.handleChange} />
        <label>Store img:</label>
        <img src="" alt="" />
        <label>Created by:</label>
        <input type="text" name="createdBy" value={createdBy} onChange={this.handleChange} />
        <label>Created At:</label>
        <span>{createdDate}</span>
        <label>Tags:</label>
        <label>Products:</label>

        <button>Create Store</button>
        <span>{errMsg}</span>
      </form>

    )
  }
}

const mapDispatchToProp = {
  addStore,
  updateStore
}

export const StoreEdit = connect(null, mapDispatchToProp)(_StoreEdit)