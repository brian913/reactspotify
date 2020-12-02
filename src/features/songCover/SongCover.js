import React from "react";
import Aiguille from "../../assets/albumCovers/Aiguille.jpg";
import { CoverStyle } from "./SongCoverStyled";

const SongCover = () => {
  return <CoverStyle src={Aiguille} alt="album cover" />;
};

export default SongCover;
