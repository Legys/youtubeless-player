import React, { Component } from "react";
import axios from "axios";
import { debounce } from "lodash";
import AppBar from "material-ui/AppBar";
import SearchBar from "./SearchBar/SearchBar";
import IconButton from "material-ui/IconButton";
import LibraryMusic from "material-ui-icons/LibraryMusic";
import Reboot from "material-ui/Reboot";

import CurrentSong from "./Player/CurrentSong";
import SongListsContainer from "./SongLists/SongListsContainer";

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
    alignItems: "center"
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
        <Reboot />
        <AppBar
          title="Hello, Alexander"
          children={
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
