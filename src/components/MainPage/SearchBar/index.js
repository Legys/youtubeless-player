import React, { Component } from "react";
import TextField from "material-ui/TextField";
import styled from "styled-components";

const SearchBarGrid = styled.div`
  display: flex;
  margin: 50px;
  flex-flow: row nowrap;
  justify-content: center;
`;

const SearchInput = styled(TextField)`
  flex: 1 0 auto;
  max-width: 600px;
`;

// const st = {
//   searchBarGrid: {
//     display: "flex",
//     margin: "50px",
//     flexFlow: "row nowrap",
//     justifyContent: "center"
//   },
//   searchInput: {
//     flex: "1 0 auto",
//     maxWidth: "600px"
//   }
// };

class SearchBar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <SearchBarGrid>
        <SearchInput
          // hintText="Search music"
          type="text"
          // fullWidth={true}
          onChange={(event, newValue) => this.props.onSearch(newValue)}
        />
      </SearchBarGrid>
    );
  }
}

export default SearchBar;
