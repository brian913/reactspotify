import styled from "styled-components";

const InfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const SongTitle = styled.p`
  font-size: 24px;
  font-weight: bold;
  font-family: "Lato", sans-serif;
`;

const SongArtist = styled.p`
  font-family: "Lato", sans-serif;
  color: #696969;
`;

export { InfoContainer, SongTitle, SongArtist };
