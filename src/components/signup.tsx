import React from "react";
import styled from "@emotion/styled";
import {LogoNacos} from "@/assets/logo";
import Link from "next/link";

export function SignUp() {
    return (
        <RootWrapperSignUp>
            <Content>
                <Header>
                    <Logo>
                        <LogoNacos/>
                        <Logotype>
                            <NacossUi>
                                Nacoss UI
                            </NacossUi>
                        </Logotype>
                    </Logo>
                    <TextAndSupportingText>
                        <Text>
                            Create an account
                        </Text>
                    </TextAndSupportingText>
                </Header>
                <Content_0001>
                    <Form>
                        <InputField>
                            <InputFieldBase>
                                <InputWithLabel>
                                    <Label>
                                        Name*
                                    </Label>
                                    <Input>
                                        <Content_0002>
                                            <Content_0003>
                                                <INPUT_0001 placeholder={"Enter your name"}/>
                                            </Content_0003>
                                        </Content_0002>
                                    </Input>
                                </InputWithLabel>
                            </InputFieldBase>
                        </InputField>
                        <InputField>
                            <InputFieldBase>
                                <InputWithLabel>
                                    <Label>
                                        Email*
                                    </Label>
                                    <Input>
                                        <Content_0002>
                                            <Content_0003>
                                                <INPUT_0001 placeholder={"Enter your email"}/>
                                            </Content_0003>
                                        </Content_0002>
                                    </Input>
                                </InputWithLabel>
                            </InputFieldBase>
                        </InputField>
                        <InputField>
                            <InputFieldBase>
                                <InputWithLabel>
                                    <Label>
                                        Password*
                                    </Label>
                                    <Input>
                                        <Content_0002>
                                            <Content_0003>
                                                <INPUT_0001 placeholder={"Create a password"}/>
                                            </Content_0003>
                                        </Content_0002>
                                    </Input>
                                </InputWithLabel>
                                <HintText>
                                    Must be at least 8 characters.
                                </HintText>
                            </InputFieldBase>
                        </InputField>
                    </Form>
                    <Actions>
                        <Button>
                            <ButtonBase>
                            <Link href={"/overview"}>
                                <Text_0004>
                                    Get started
                                </Text_0004>
                        </Link>
                            </ButtonBase>
                        </Button>
                        <SocialButtonGroups>
                            <SocialButton>
                                <SocialIcon>
                                    <Vector xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgb(66, 133, 244)" d="M11.526 2.43836C11.526 1.62263 11.4599 0.802499 11.3188 0L0 0L0 4.62098L6.48173 4.62098C6.21276 6.11133 5.34853 7.42973 4.08305 8.2675L4.08305 11.2658L7.95004 11.2658C10.2209 9.17582 11.526 6.08929 11.526 2.43836Z"/>
                                    </Vector>
                                    <Vector_0001 xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgb(52, 168, 83)" d="M10.7235 9.70053C13.96 9.70053 16.6893 8.63788 18.6779 6.8036L14.811 3.80525C13.7351 4.5372 12.3461 4.95168 10.7279 4.95168C7.59728 4.95168 4.94286 2.83961 3.99045 0L0 0L0 3.09094C2.03711 7.14312 6.1863 9.70053 10.7235 9.70053L10.7235 9.70053Z"/>
                                    </Vector_0001>
                                    <Vector_0002 xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgb(251, 188, 4)" d="M5.26254 7.68547C4.75987 6.19511 4.75987 4.5813 5.26254 3.09094L5.26254 0L1.2765 0C-0.425501 3.39078 -0.425501 7.38563 1.2765 10.7764L5.26254 7.68547L5.26254 7.68547Z"/>
                                    </Vector_0002>
                                    <Vector_0003 xmlns="http://www.w3.org/2000/svg">
                                        <path fill="rgb(234, 67, 53)" d="M10.7235 4.74966C12.4343 4.7232 14.0878 5.36697 15.3268 6.54867L18.7529 3.12262C16.5835 1.0855 13.7042 -0.034466 10.7235 0.000808666C6.18629 0.000808666 2.03711 2.55822 0 6.61481L3.98604 9.70575C4.93404 6.86173 7.59287 4.74966 10.7235 4.74966L10.7235 4.74966Z"/>
                                    </Vector_0003>
                                </SocialIcon>
                                <Link href={"/overview"}>
                                    <Text_0005>
                                        Sign up with Google
                                    </Text_0005>
                                </Link>
                            </SocialButton>
                        </SocialButtonGroups>
                    </Actions>
                </Content_0001>
                <Row>
                    <Text_0006>
                        Already have an account?
                    </Text_0006>
                    <Button_0001>
                        <ButtonBase_0001>
                            <Link href={"/login"}>
                                <Text_0007>
                                    Sign in
                                </Text_0007>
                            </Link>
                        </ButtonBase_0001>
                    </Button_0001>
                </Row>
            </Content>
        </RootWrapperSignUp>
    )
}

const RootWrapperSignUp = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 32px;
	min-height: 100vh;
	background-color: white;
	box-sizing: border-box;
	padding: 96px 32px 48px;
`;

const Content = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	flex: none;
	gap: 32px;
	width: 360px;
	box-sizing: border-box;
`;

const Header = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Logo = styled.div`
	width: 142px;
	height: 32px;
	position: relative;
`;


const Logotype = styled.div`
	position: absolute;
	left: 42px;
	top: 0px;
	right: 0px;
	bottom: 8px;
`;

const NacossUi = styled.span`
	color: black;
	text-overflow: ellipsis;
	font-size: 20px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 40px;
	text-align: center;
	min-height: 41px;
	position: absolute;
	left: -15px;
	top: -4px;
	right: -18px;
	bottom: -13px;
`;

const TextAndSupportingText = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 12px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Text = styled.span`
	color: rgb(16, 24, 40);
	text-overflow: ellipsis;
	font-size: 30px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 38px;
	text-align: center;
	align-self: stretch;
	flex-shrink: 0;
`;

const Content_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: center;
	gap: 24px;
	border-radius: 12px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Form = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 20px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const InputField = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const InputFieldBase = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const InputWithLabel = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 6px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Label = styled.span`
	color: rgb(52, 64, 84);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
`;

const Input = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(208, 213, 221);
	border-radius: 8px;
	align-self: stretch;
	background-color: white;
	box-sizing: border-box;
	padding: 10px 14px;
	flex-shrink: 0;
`;

const Content_0002 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: 1;
`;

const Content_0003 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: center;
	flex: 1;
	gap: 8px;
	width: 332px;
	box-sizing: border-box;
`;

const INPUT_0001 = styled.input`
	color: rgb(102, 112, 133);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 24px;
	text-align: left;
	width: 336px;
	flex: 1;

  background-color: transparent;
  border: none;
  outline: none;
`;

const HintText = styled.span`
	color: rgb(102, 112, 133);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	align-self: stretch;
	flex-shrink: 0;
`;

const Actions = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	gap: 16px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Button = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	border-radius: 8px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
  
`;

const ButtonBase = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: 1;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(18, 183, 106);
	border-radius: 8px;
	width: 360px;
	background-color: rgb(18, 183, 106);
	box-sizing: border-box;
	padding: 10px 18px;

  :hover {
    background-color: rgb(28, 193, 116);
    border: solid 1px rgb(28, 193, 116);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
    cursor: pointer;
  }

  :active {
    background-color: rgb(8, 163, 86);
    border: solid 1px rgb(8, 163, 86);
    box-shadow: none;
  }
`;

const Text_0004 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 24px;
	text-align: left;
`;

const SocialButtonGroups = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
	gap: 12px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
  
  
`;

const SocialButton = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	gap: 12px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(208, 213, 221);
	border-radius: 8px;
	align-self: stretch;
	background-color: white;
	box-sizing: border-box;
	padding: 10px 16px;
	flex-shrink: 0;

  :hover {
    background-color: rgb(28, 193, 116);
    border: solid 1px rgb(28, 193, 116);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
    cursor: pointer;
  }

  :active {
    background-color: rgb(8, 163, 86);
    border: solid 1px rgb(8, 163, 86);
    box-shadow: none;
  }
`;

const SocialIcon = styled.div`
	width: 24px;
	height: 24px;
	overflow: hidden;
	position: relative;
`;

const Vector = styled.svg`
	width: 12px;
	height: 11px;
	position: absolute;
	left: 12px;
	top: 10px;
	right: 0px;
	bottom: 3px;
`;

const Vector_0001 = styled.svg`
	width: 19px;
	height: 10px;
	position: absolute;
	left: 2px;
	top: 14px;
	right: 4px;
	bottom: -0px;
`;

const Vector_0002 = styled.svg`
	width: 5px;
	height: 11px;
	position: absolute;
	left: 0px;
	top: 7px;
	right: 18px;
	bottom: 7px;
`;

const Vector_0003 = styled.svg`
	width: 19px;
	height: 10px;
	position: absolute;
	left: 2px;
	top: 0px;
	right: 4px;
	bottom: 14px;
`;

const Text_0005 = styled.span`
	color: rgb(52, 64, 84);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 24px;
	text-align: left;
`;

const Row = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: flex-start;
	gap: 4px;
	align-self: stretch;
	box-sizing: border-box;
	flex-shrink: 0;
`;

const Text_0006 = styled.span`
	color: rgb(102, 112, 133);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
`;

const Button_0001 = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	border-radius: 8px;
	box-sizing: border-box;
`;

const ButtonBase_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	flex: none;
	gap: 8px;
	box-shadow: 0px 1px 2px  rgba(16, 24, 40, 0.05);
	border: solid 1px rgb(18, 183, 106);
	border-radius: 8px;
	background-color: rgb(18, 183, 106);
	box-sizing: border-box;
	padding: 10px 16px;

  :hover {
    background-color: rgb(28, 193, 116);
    border: solid 1px rgb(28, 193, 116);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.1);
    cursor: pointer;
  }

  :active {
    background-color: rgb(8, 163, 86);
    border: solid 1px rgb(8, 163, 86);
    box-shadow: none;
  }
`;

const Text_0007 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
`;

