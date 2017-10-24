import React, { Component } from 'react'
import ListWrapper from './ListWrapper'
import { List, ListItem } from 'material-ui/List';
import { indigo500 } from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField';
import Subheader from 'material-ui/Subheader';
import MusicIcon from 'material-ui/svg-icons/image/music-note'
import Search from 'material-ui/svg-icons/action/search'

const st = {
  list: {
    flex: '0 1 450px',
  },
  searchIcon: {
    flex: '0 0 24px',
    margin: '0px 20px 0px 0px'
  },
  searchWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: '0px 20px'
  },
  searchInput: {
    flex: '0 1 360px'
  }
}

export default class MyPlaylist extends Component {
  render() {
    return (
      <ListWrapper>
        <List style={st.list}>
          <Subheader>My playlist</Subheader>
          <div style={st.searchWrapper}>
            <Search style={st.searchIcon} />
            <TextField
              id="playlist-search"
              hintText="Search"
              type="search"
              style={st.searchInput}
              fullWidth={true}
            />
          </div>
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
        </List>
      </ListWrapper>
    )
  }
}
