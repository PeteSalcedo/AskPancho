import React, { Component } from "react";
import Modal from 'react-responsive-modal';

class Settings extends Component {

  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
    this.onOpenModal = this.onOpenModal.bind(this);
    this.onCloseModal = this.onCloseModal.bind(this);
  }

  onOpenModal() {
    this.setState({ open: true });
  }

  onCloseModal() {
    this.setState({ open: false });
  }

  render() {
    const { open } = this.state;

    return (
      <div>
        <button onClick={this.onOpenModal}>Settings</button>
        <Modal open={open} onClose={this.onCloseModal} center>
          <form onSubmit={this.handleSubmit} className="bookmark-form">
              <input
                  type="text"
                  value={this.state.websiteAddress}
                  onChange={this.updateInputState}
                  placeholder="Add website address"
                  autoFocus
                  required
              />
              <input type="submit" value="Submit" />
          </form>

        </Modal>
      </div>
    )}
}

export default Settings;
