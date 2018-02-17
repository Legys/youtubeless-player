import React, { Component } from "react";
import ListWrapper from "./ListWrapper";
import List, { ListItem, ListSubheader } from "material-ui/List";
import { indigo500 } from "material-ui/colors";
import TextField from "material-ui/TextField";
// import ListSubheader from "material-ui/ListSubheader";
import MusicNote from "material-ui-icons/MusicNote";
import Search from "material-ui-icons/Search";

const st = {
  list: {
    flex: "0 1 450px"
  },
  searchIcon: {
    flex: "0 0 24px",
    margin: "0px 20px 0px 0px"
  },
  searchWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    margin: "0px 20px"
  },
  searchInput: {
    flex: "0 1 360px"
  }
};

export default class MyPlaylist extends Component {
  render() {
    return (
      <ListWrapper>
        <List style={st.list}>
          <ListSubheader>My playlist</ListSubheader>
          <div style={st.searchWrapper}>
            <Search style={st.searchIcon} />
            <TextField
              id="playlist-search"
              // hintText="Search"
              type="search"
              style={st.searchInput}
              fullWidth={true}
            />
          </div>
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicNote hoverColor={indigo500} />}
          />
        </List>
      </ListWrapper>
    );
  }
}
