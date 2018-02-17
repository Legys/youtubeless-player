import React, { Component } from "react";
import styled from "styled-components";

const ListWrapperStyled = styled.div`
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 6px, rgba(0, 0, 0, 0.12) 0px 1px 4px;
`;

class ListWrapper extends Component {
  render() {
    return <ListWrapperStyled>{this.props.children} </ListWrapperStyled>;
  }
}

export default ListWrapper;
