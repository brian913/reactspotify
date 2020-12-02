import React from "react";
import { IoMusicalNotes } from "react-icons/io5";
import { ButtonStyle } from "./LibraryButtonStyled";

const LibraryButton = () => {
  return (
    <div>
      <ButtonStyle onClick={() => alert("Drawer feature will come soon")}>
        Library
        <IoMusicalNotes />
      </ButtonStyle>
    </div>
  );
};

export default LibraryButton;
