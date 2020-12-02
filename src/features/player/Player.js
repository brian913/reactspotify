import React from "react";
import SongCover from "../songCover/SongCover";
import TimeBar from "../timeBar/TimeBar";
import { InfoContainer, SongTitle, SongArtist } from "./PlayerStyled";

const Player = () => {
  return (
    <>
      <SongCover />
      <InfoContainer>
        <SongTitle>{SongInfo.title}</SongTitle>
        <SongArtist>{SongInfo.artist}</SongArtist>
      </InfoContainer>
      <TimeBar />
    </>
  );
};

const SongInfo = {
  title: "Dream Girl",
  artist: "Aviino",
};

export default Player;
