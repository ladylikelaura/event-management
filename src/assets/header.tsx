import React from "react";
import styled from "@emotion/styled";

export function Header() {
    return (
        <RootWrapperHeaderDefault>
            <Photo>
                <AvatarManHeader>
                    <AvatarManHeader_0001>
                        <MHeader src="grida://assets-reservation/images/135:15514" alt="image of MHeader"/>
                    </AvatarManHeader_0001>
                </AvatarManHeader>
                <ProfileCircle/>
            </Photo>
            <Name>
                Seun Opeoluwa
            </Name>
            <DividerLineVertical>
                <Divider src="grida://assets-reservation/images/135:15518" alt="image of Divider"/>
            </DividerLineVertical>
            <IconNotificationsNew>
                <Vector xmlns="http://www.w3.org/2000/svg">
                    <path fill="rgb(197, 199, 205)" d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14L5.00096 14C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125L7.9994 1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1L6.00065 1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13L12.9969 13C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216L13.731 11.3216Z"/>
                </Vector>
                <New/>
            </IconNotificationsNew>
            <IconSearch>
                <Search>
                    <Ellipse/>
                    <Vector_0001 src="grida://assets-reservation/images/135:15525" alt="image of Vector"/>
                </Search>
            </IconSearch>
            <Title>
                My Events
            </Title>
        </RootWrapperHeaderDefault>
    )
}

const RootWrapperHeaderDefault = styled.div`
	position: relative;
`;

const Photo = styled.div`
	width: 44px;
	height: 44px;
	position: absolute;
	left: 1078px;
	top: 0px;
`;

const AvatarManHeader = styled.div`
	width: 40px;
	height: 40px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 20px));
	right: 2px;
`;

const AvatarManHeader_0001 = styled.div`
	overflow: hidden;
	border-radius: 20px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const MHeader = styled.img`
	object-fit: cover;
	position: absolute;
	left: -12px;
	top: -2px;
	right: -12px;
	bottom: -2px;
`;

const ProfileCircle = styled.div`
	width: 44px;
	height: 44px;
	border-radius: 44px / 44px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 22px));
	right: 0px;
`;

const Name = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	width: 115px;
	min-height: 18px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 9px));
	right: 52px;
	height: 18px;
`;

const DividerLineVertical = styled.div`
	width: 0px;
	height: 32px;
	position: absolute;
	top: calc((calc((50% + 4px)) - 16px));
	right: 199px;
`;

const Divider = styled.img`
	width: 0px;
	object-fit: cover;
	position: absolute;
	left: calc((calc((50% + 0px)) - 0px));
	top: 0px;
	bottom: 0px;
`;

const IconNotificationsNew = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 8px));
	right: 231px;
`;

const Vector = styled.svg`
	width: 14px;
	height: 16px;
	position: absolute;
	left: 1px;
	top: 0px;
	right: 1px;
	bottom: 0px;
`;

const New = styled.div`
	background-color: rgb(55, 81, 255);
	border-radius: 6px / 6px;
	position: absolute;
	left: 10px;
	top: -1px;
	right: 0px;
	bottom: 11px;
`;

const IconSearch = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 8px));
	right: 271px;
`;

const Search = styled.div`
	width: 15px;
	height: 15px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Ellipse = styled.div`
	border-radius: 13px / 13px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 2px;
	bottom: 2px;
`;

const Vector_0001 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 11px;
	top: 11px;
	right: 0px;
	bottom: 0px;
`;

const Title = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	min-height: 34px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 1px)) - 17px));
	right: 343px;
	height: 34px;
`;

