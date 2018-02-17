import React, { Component } from "react";
import MyPlaylist from "./MyPlaylist";
import SimiliarSongsList from "./SimiliarSongsList";
import styled from "styled-components";

const SongListWrapper = styled.div`
  flex: 0 1 900px;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: flex-start;
  align-content: center;
`;
const st = {
  songsListContainer: {
    flex: "0 1 900px",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "flex-start",
    alignContent: "center"
  }
};

class SongList extends Component {
  render() {
    return (
      <SongListWrapper>
        <MyPlaylist />
        <SimiliarSongsList />
      </SongListWrapper>
    );
  }
}

export default SongList;
