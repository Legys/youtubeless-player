import React, { Component } from 'react'
import MyPlaylist from './MyPlaylist'
import SimiliarSongsList from './SimiliarSongsList'

const st = {
  songsListContainer: {
    flex: '0 1 900px',
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'center'
  }
}

export default class SongListsContainer extends Component {

  render() {
    return (
      <div style={st.songsListContainer}>
        <MyPlaylist />
        <SimiliarSongsList />
      </div>
    )
  }
}
