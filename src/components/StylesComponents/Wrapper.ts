import styled from "styled-components";
import {colors} from "./Colors";

export const CardWrapper = styled.div<{ width: number, height: number }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px 33px;
  justify-content: space-around;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
  background: #F9F9FE;
  color: #2D2E46;
  border-radius: 8px`;

export const TitleWrapper = styled.p<{ fontSz?: number }>`
  font-weight: 600;
  font-size: ${({fontSz}) => fontSz}px;
  color: #2D2E46`;

export const TextWrapper = styled.p<{ color: string, fontSz: number, opacity?: number, textAlign?: string }>`
  width: 100%;
  font-weight: 400;
  font-size: ${({fontSz}) => fontSz}px;
  font-style: normal;
  color: ${({color}) => color};
  opacity: ${({opacity}) => opacity};
  text-align: ${({textAlign}) => textAlign}`;

export const FormWrapper = styled.form<{ height?: number }>`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: ${({height}) => height}px`;

export const RememberMeWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center`;

export const ErrorWrapper = styled.div`
  width: 100%;
  color: red;
  font-size: 0.9rem`;

export const HeaderWrapper = styled.div`
  display: flex;
  z-index: 100;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  background-color: ${colors.LightPurpure};
`;
export const ProfileWrapper = styled.div`
  width: 80%;
  height: 740px;
  padding: 24px 48px;
  border-radius: 0 8px 8px 0;
  background-color: ${colors.BackgroundWight};
`;
export const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh`;
export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;`

export const GeneralProfileWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
`;