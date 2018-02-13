import React, { Component } from "react";
import Player from "./Player";
import Card, { CardHeader, CardContent } from "material-ui/Card";

const st = {
  song: {
    flex: "0 1 900px"
  }
};

class CurrentSong extends Component {
  render() {
    return (
      <div style={st.song}>
        <Card>
          <CardHeader title="Author" subheader="Song name" />
          <CardContent>
            {/* <CardText>Audio</CardText> */}
            {/* <Player /> */}
          </CardContent>
        </Card>
        {/* <audio src="//www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM" type="audio/mp3" controls /> */}
      </div>
    );
  }
}

export default CurrentSong;
