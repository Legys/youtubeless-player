import React, { Component } from "react";
import FloatingActionButton from "material-ui/FloatingActionButton";
import { CardActions } from "material-ui/Card";
import PlayArrow from "material-ui/svg-icons/av/play-arrow";
import FlightTakeoff from "material-ui/svg-icons/action/flight-takeoff";
import Pause from "material-ui/svg-icons/av/pause";
import Slider from "material-ui/Slider";
import { red500 } from 'material-ui/styles/colors'

const st = {
  grid: {
    margin: "10px 20px"
  }
};

export default class Player extends Component {
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
    this.setState({ songIsLoading: true })
    this.state.song.load()
  }
  handleClickPlay() {
    if (!this.state.loaded) {
      this.load()
    } else {
      this.play()
    }
  }
  componentDidMount() {
    this.setState({ song: Object.assign(this.state.song, { preload: 'none' }) })
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
      this.play()
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
        return <FlightTakeoff color={red500} />
      } else if (this.state.playingSong) {
        return <Pause />
      } else if (!this.state.playingSong) {
        return <PlayArrow />
      }
    }
    return (
      <div>
        <CardActions>
          <Slider
            style={st.grid}
            min={0}
            max={Math.round(this.state.song.duration) || 100}
            value={this.state.currentTime}
            onChange={this.handleSeek}
          />
          {this.state.currentTime}
          <FloatingActionButton
            style={st.grid}
            label="Action1"
            onClick={this.handleClickPlay}
          >
            {renderActionButton()}
          </FloatingActionButton>
        </CardActions>
      </div>
    );
  }
}
