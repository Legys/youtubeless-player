import React, { Component } from "react";
// import FloatingActionButton from "material-ui/FloatingActionButton";
import IconButton from "material-ui/IconButton";
import { CardActions } from "material-ui/Card";
import PlayArrow from "material-ui-icons/PlayArrow";
import FlightTakeoff from "material-ui-icons/FlightTakeoff";
import Pause from "material-ui-icons/Pause";
// import Slider from "material-ui/Slider";
// https://github.com/sghall/react-compound-slider
import { red } from "material-ui/colors";
import styled from "styled-components";

const IconButtonStyled = styled(IconButton)`
  margin: 10px 20px;
`;

class CurrentSong extends Component {
  constructor(props) {
    super(props);

    this.state = {
      song: new Audio(
        "//www.convertmp3.io/fetch/?video=https://www.youtube.com/watch?v=BbZoMtIzwNc"
      ),
      playingSong: false,
      songIsLoading: false,
      currentTime: 0,
      loaded: false
    };
    this.play = this.play.bind(this);
    this.load = this.load.bind(this);
    this.handleSeek = this.handleSeek.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
  }
  handleSeek(e, newValue) {
    this.setState({
      song: Object.assign(this.state.song, { currentTime: newValue })
    });
  }
  play() {
    // if (!this.state.playingSong && this.state.loaded) {
    if (!this.state.playingSong && this.state.loaded) {
      this.setState({ playingSong: true });
      this.state.song.play();
    } else if (this.state.playingSong) {
      this.setState({ playingSong: false });
      this.state.song.pause();
    }
  }
  load() {
    this.setState({ songIsLoading: true });
    this.state.song.load();
  }
  handleClickPlay() {
    if (!this.state.loaded) {
      this.load();
    } else {
      this.play();
    }
  }
  componentDidMount() {
    this.setState({
      song: Object.assign(this.state.song, { preload: "none" })
    });
    this.state.song.addEventListener("timeupdate", e => {
      this.setState({ currentTime: Math.round(e.path[0].currentTime) });
    });
    // this.state.song.addEventListener("loadstart", e => {
    //   console.log("load start", e);
    //   this.setState({ songIsLoading: true})
    // });
    this.state.song.addEventListener("canplay", e => {
      console.log("canplay", e);
    });
    this.state.song.addEventListener("loadeddata", e => {
      this.setState({ loaded: true, songIsLoading: false });
      this.play();
      console.log("load finished", e);
    });
    // this.state.song.addEventListener("seeked", e => {
    //   console.log("seeked", e);
    // });
    // this.state.song.addEventListener("seeking", e => {
    //   console.log("seeking", e);
    // });
  }

  render() {
    const renderActionButton = () => {
      if (this.state.songIsLoading) {
        return <FlightTakeoff nativeColor={red[500]} />;
      } else if (this.state.playingSong) {
        return <Pause />;
      } else if (!this.state.playingSong) {
        return <PlayArrow />;
      }
    };
    return (
      <div>
        <CardActions>
          {/* <Slider
            style={st.grid}
            min={0}
            max={Math.round(this.state.song.duration) || 100}
            value={this.state.currentTime}
            onChange={this.handleSeek}
          /> */}
          {this.state.currentTime}
          <IconButtonStyled label="Action1" onClick={this.handleClickPlay}>
            {renderActionButton()}
          </IconButtonStyled>
        </CardActions>
      </div>
    );
  }
}

export default CurrentSong;
