import React, { Component } from "react";
import ListWrapper from "../ListWrapper";
import List, {
  ListItem,
  ListSubheader,
  ListItemText,
  ListItemIcon
} from "material-ui/List";
import { indigo } from "material-ui/colors";
import TextField from "material-ui/TextField";
// import ListSubheader from "material-ui/ListSubheader";
import MusicNote from "material-ui-icons/MusicNote";
import Search from "material-ui-icons/Search";
import styled from "styled-components";

const ListStyled = styled(List)`
  flex: 0 1 450px;
`;
const SearchStyled = styled(Search)`
  flex: 0 0 24px;
  margin: 0px 20px 0px 0px;
`;
const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px 20px;
`;

const TextFieldStyled = styled(TextField)`
  flex: 0 1 360px;
`;

const MusicNoteStyled = styled(MusicNote)`
  :hover {
    fill: ${indigo[500]};
  }
`;

export default class MyPlaylist extends Component {
  render() {
    const filler = new Array(5).fill(0);
    return (
      <ListWrapper>
        <ListStyled>
          <ListSubheader>My playlist</ListSubheader>
          <SearchWrapper>
            <SearchStyled />
            <TextFieldStyled
              id="playlist-search"
              // hintText="Search"
              type="search"
              fullWidth={true}
            />
          </SearchWrapper>
          {filler.map((_, i) => (
            <ListItem key={i}>
              <ListItemIcon>
                <MusicNoteStyled />
              </ListItemIcon>
              <ListItemText primary="Author - Song name" />
            </ListItem>
          ))}
        </ListStyled>
      </ListWrapper>
    );
  }
}
