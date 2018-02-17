import React from "react";
import { ListItem, ListItemText, ListItemIcon } from "material-ui/List";
import { indigo } from "material-ui/colors";
import MusicNote from "material-ui-icons/MusicNote";
import styled from "styled-components";

const MusicNoteStyled = styled(MusicNote)`
  :hover {
    fill: ${indigo[500]};
  }
`;

const SongListItem = props => {
  return (
    <ListItem>
      <ListItemIcon>
        <MusicNoteStyled />
      </ListItemIcon>
      <ListItemText primary={props.title} />
    </ListItem>
  );
};

export default SongListItem;
