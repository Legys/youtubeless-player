import React, { Component } from "react";
import ListWrapper from "../ListWrapper";
import List, { ListSubheader } from "material-ui/List";
import SongListItem from "../SongListItem";
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
          <SongListItem title="Author Song Name" />
        </ListStyled>
      </ListWrapper>
    );
  }
}
