import React from "react";
import LibraryButton from "../libraryButton/LibraryButton";
import SongOptions from "../songOptions/SongOptions";
import Player from "../player/Player";
import { MainScreenContainer, NavBar, SongContainer } from "./MainScreenStyed";

const MainScreen = () => {
  return (
    <MainScreenContainer>
      <NavBar>
        <LibraryButton />
      </NavBar>
      <SongContainer>
        <Player />
        <SongOptions />
      </SongContainer>
    </MainScreenContainer>
  );
};

export default MainScreen;
