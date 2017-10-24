import React, { Component } from 'react'
const st = {
  listWrapper: {
    borderRadius: '3px',
    boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px'

  }
}
export default class ListWrapper extends Component {
  render() {
    return (
      <div style={st.listWrapper}>
        {this.props.children}
      </div>
    )
  }
}
