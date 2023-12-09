import "./App.css"
import React from "react"
import styled from "styled-components"
import tw from "twin.macro"
import { HomePage } from "./app/containers/HomePage"

const AppContainer = styled.div`
 ${tw`
  w-full
  h-full
  flex
  flex-col
 `};
`;
export default function App() {
  return(
  <AppContainer>
    <HomePage/>
   
  </AppContainer>
  );
}
