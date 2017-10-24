import React, { Component } from 'react'
import ListWrapper from './ListWrapper'
import { List, ListItem } from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import MusicIcon from 'material-ui/svg-icons/image/music-note'
import { indigo500 } from 'material-ui/styles/colors'

const st = {
  list: {
    flex: '0 1 450px',
  }
}

export default class SimiliarSongsList extends Component {
  render() {
    return (
      <ListWrapper>
        <List style={st.list}>
          <Subheader>Similiar songs</Subheader>
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
            primaryText="Author - Song name"
            leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
        </ List>
      </ListWrapper>
    )
  }
}
