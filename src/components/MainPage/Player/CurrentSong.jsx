import React, { Component } from "react";
import Player from "./Player";
import { Card, CardHeader } from "material-ui/Card";

const st = {
  song: {
    flex: "0 1 900px"
  }
};

export default class CurrentSong extends Component {
  render() {
    return (
      <div style={st.song}>
        <Card>
          <CardHeader title="Author" subtitle="Song name" />
          {/* <CardText>Audio</CardText> */}
          <Player />
        </Card>
        {/* <audio src="//www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM" type="audio/mp3" controls /> */}
      </div>
    );
  }
}
