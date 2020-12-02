import React from "react";
import {
  IoPlay,
  IoPause,
  IoPlaySkipForward,
  IoPlaySkipBack,
  IoVolumeMedium,
} from "react-icons/io5";
import { OptionsBar } from "./SongOptionsStyled";

const SongOptions = () => {
  return (
    <OptionsBar>
      <PreviousButton />
      <PlayButton />
      <SkipButton />
      <VolumeButton />
    </OptionsBar>
  );
};

const PlayButton = () => {
  return <IoPlay size={35} />;
  //play song onClick
  //hide icon onClick
};

/*const PauseButton = () => {
  return <IoPause size={35} />;
};*/

const SkipButton = () => {
  return <IoPlaySkipForward size={35} />;
};

const PreviousButton = () => {
  return <IoPlaySkipBack size={35} />;
};

const VolumeButton = () => {
  return <IoVolumeMedium size={35} />;
  //renders volume bar onClick
};

export default SongOptions;
