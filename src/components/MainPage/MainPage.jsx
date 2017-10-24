import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "material-ui/IconButton";
import LibraryMusic from "material-ui/svg-icons/av/library-music";
import CurrentSong from "./Player/CurrentSong";
import SongListsContainer from './SongLists/SongListsContainer'

const st = {
  grid: {
    display: "flex",
    flexFlow: "column nowrap",
    justifyContent: "center"
  },
  songGrid: {
    margin: "0px 20px 30px",
    display: "flex",
    flexFlow: "row nowrap",
    justifyContent: "center",
    alignItems: "center",
  },
  listsGrid: {
    margin: "0px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};

export default class MainPage extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handleOnSearch = str => {
    console.log(str);
  };
  render() {
    return (
      <div style={st.grid}>
        <AppBar
          title="Hello, Alexander"
          iconElementLeft={
            <IconButton>
              <LibraryMusic />
            </IconButton>
          }
        />
        <SearchBar onSearch={this.handleOnSearch} />
        <div style={st.songGrid}>
          <CurrentSong style={st.song} />
        </div>
        <div style={st.listsGrid}>
          <SongListsContainer />
        </div>
      </div>
    );
  }
}
