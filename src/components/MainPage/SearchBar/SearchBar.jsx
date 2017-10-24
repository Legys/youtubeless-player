import React, { Component } from 'react'
import TextField from 'material-ui/TextField';

const st = {
  searchBarGrid: {
    display: 'flex',
    margin: '50px',
    flexFlow: 'row nowrap',
    justifyContent: 'center',
  },
  searchInput: {
    flex: '1 0 auto',
    maxWidth: '600px'
  }
}

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  render() {
    return (
      <div>
        <div style={st.searchBarGrid}>
          <TextField
            style={st.searchInput}
            hintText="Search music"
            type="text"
            fullWidth={true}
            onChange={(event, newValue) => this.props.onSearch(newValue)}
          />
        </div>
      </div>
    )
  }
}
