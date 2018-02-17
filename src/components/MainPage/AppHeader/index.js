import React from "react";

import AppBar from "material-ui/AppBar";
import IconButton from "material-ui/IconButton";
import LibraryMusic from "material-ui-icons/LibraryMusic";

const AppHeader = () => {
  return (
    <AppBar
      title="Hello, Alexander"
      children={
        <IconButton>
          <LibraryMusic />
        </IconButton>
      }
    />
  );
};

export default AppHeader;
