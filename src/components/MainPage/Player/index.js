import React, { Component } from "react";
import CurrentSong from "./CurrentSong";
import Card, { CardHeader, CardContent } from "material-ui/Card";
import styled from "styled-components";

const Div = styled.div`
  flex: 0 1 900px;
`;

const st = {};

class Player extends Component {
  render() {
    return (
      <Div>
        <Card>
          <CardHeader title="Author" subheader="Song name" />
          <CardContent>
            {/* <CardText>Audio</CardText> */}
            <CurrentSong />
          </CardContent>
        </Card>
        {/* <audio src="//www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=i62Zjga8JOM" type="audio/mp3" controls /> */}
      </Div>
    );
  }
}

export default Player;
