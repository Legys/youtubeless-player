import React, { Component } from "react";
import axios from "axios";
import { debounce } from "lodash";
import SearchBar from "./SearchBar";
import Reboot from "material-ui/Reboot";
import AppHeader from "./AppHeader";
import CurrentSong from "./Player/CurrentSong";
import SongListsContainer from "./SongLists/SongListsContainer";

import styled from "styled-components";

const PageWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
`;

const SongGrid = styled.div`
  margin: 0px 20px 30px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`;

const ListsGrid = styled.div`
  margin: 0px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// const st = {
//   grid: {
//     display: "flex",
//     flexFlow: "column nowrap",
//     justifyContent: "center"
//   },
//   songGrid: {
//     margin: "0px 20px 30px",
//     display: "flex",
//     flexFlow: "row nowrap",
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   listsGrid: {
//     margin: "0px 20px",
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center"
//   }
// };

export default class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  handleOnSearch = str => {
    console.log(str);
  };
  render() {
    return (
      <PageWrapper>
        <Reboot />
        <AppHeader />
        <SearchBar onSearch={this.handleOnSearch} />
        <SongGrid>
          <CurrentSong />
        </SongGrid>
        <ListsGrid>
          <SongListsContainer />
        </ListsGrid>
      </PageWrapper>
    );
  }
}
