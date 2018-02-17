import React, { Component } from "react";
import ListWrapper from "../ListWrapper";
import List, { ListItem, ListSubheader } from "material-ui/List";
// import ListSubheader from "material-ui/ListSubheader";
import MusicIcon from "material-ui-icons/MusicNote";
import { indigo500 } from "material-ui/colors";
import styled from "styled-components";

const ListStyled = styled(List)`
  flex: 0 1 450px;
`;

export default class SimiliarSongsList extends Component {
  render() {
    return (
      <ListWrapper>
        <ListStyled>
          <ListSubheader>Similiar songs</ListSubheader>
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
          <ListItem
          // primaryText="Author - Song name"
          // leftIcon={<MusicIcon hoverColor={indigo500} />}
          />
        </ListStyled>
      </ListWrapper>
    );
  }
}
