import styled from "styled-components";
import {colors} from "./Colors";

export const ProfileWrapper = styled.div`
  width: 100%;
  height: 80vh;
  padding: 1.2vw 2.4vw;
  border-radius: 0 0.4vw 0.4vw 0;
  background-color: ${colors.BackgroundWight};`;

export const GeneralProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;

export const ToolsProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 15vw;
  border-radius: 0.4vw 0 0 0.4vw;
  background-color: ${colors.ToolsBackground};
`


export const TitleProfileWrapper = styled.p<{ fontSz?: number }>`
  font-weight: 600;
  font-size: ${({fontSz}) => fontSz}vw;
  color: #2D2E46`;

export const TextProfileWrapper = styled.p<{ color?: string, fontSz: number, opacity?: number, textAlign?: string }>`
  width: 100%;
  font-weight: 400;
  font-size: ${({fontSz}) => fontSz}vw;
  font-style: normal;
  color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
  text-align: ${({textAlign}) => textAlign}`;

export const ButtonProfile = styled.button<{ width?: number, height?: number, bgColor?: string, color?: string }>`
  width: ${({width}) => width}vw;
  height: ${({height}) => height}vw;
  background-color: ${({bgColor}) => bgColor};
  color: ${({color}) => color};
  font-size: 0.7vw;
  border-radius: 1vw;
  letter-spacing: 0.1vw;
  border: none;
  cursor: pointer;
  transition: opacity 1s;
  opacity: 0.8;

  :hover {
    opacity: 1;
  }: disabled {
  opacity: 0.5;
}`;
