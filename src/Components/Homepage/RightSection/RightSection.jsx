import React from "react";
import styled from "styled-components";
import DownloadYatra from "./DownloadYatra";
import ExtraDescription from "./ExtraDescription";
import { ImageSection } from "./ImageSection";
import { ImageSection2 } from "./ImageSection2";
import { PopularFlightRoutes } from "./PopularFlightRoutes";
import { RecentSearch } from "./RecentSearch";
import YatraSpecials from "./YatraSpecials";

const RightContainer = styled.div`
  margin-top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fdfafa;
  width: 55%;
  padding: 20px;

  @media all and (max-width: 1000px) {
    width: 100%;
  }
`;

function RightSection() {
  return (
    <RightContainer>
      <ImageSection />
      <YatraSpecials />
      <RecentSearch />
      <PopularFlightRoutes routeType="domestic" />
      <PopularFlightRoutes routeType="international" />
      <ImageSection2 />
      <DownloadYatra />
      <ExtraDescription />
    </RightContainer>
  );
}

export { RightSection };
