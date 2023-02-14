import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export function EventList() {
    return (
        <RootWrapperEventList>
            <Bg xmlns="http://www.w3.org/2000/svg">
                <path fill="rgb(247, 248, 252)" d="M0 0L1185 0L1185 1100L0 1100L0 0Z"/>
            </Bg>

            <HeaderDefault>
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
                    <Divider_0017 src="grida://assets-reservation/images/135:15518" alt="image of Divider"/>
                </DividerLineVertical>
                <IconNotificationsNew>
                    <Vector_0011 xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(197, 199, 205)" d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14L5.00096 14C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125L7.9994 1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1L6.00065 1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13L12.9969 13C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216L13.731 11.3216Z"/>
                    </Vector_0011>
                    <New/>
                </IconNotificationsNew>
                <IconSearch>
                    <Search_0002>
                        <Ellipse/>
                        <Vector_0012 src="grida://assets-reservation/images/135:15525" alt="image of Vector"/>
                    </Search_0002>
                </IconSearch>
                <Title_0008>
                    My Events
                </Title_0008>
            </HeaderDefault>
            <SidebarDesktop>
                <DashboardKit>
                    Dashboard Kit
                </DashboardKit>
                <SidebarListInactive>
                    <Link href={"/overview"}>
                        <Title_0009>
                            Overview
                        </Title_0009>
                    </Link>
                    <IconSidebarInactive1Overview>
                        <Vector_0013 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M15.5233 8.47046L8.54418 8.47046L13.1921 13.1184C13.3698 13.296 13.6621 13.3104 13.8448 13.1384C14.983 12.066 15.7659 10.6205 15.9957 8.99546C16.0351 8.71722 15.8042 8.47046 15.5233 8.47046L15.5233 8.47046ZM15.0577 6.56458C14.8154 3.05106 12.0077 0.243416 8.49418 0.00106353C8.22595 -0.0174658 8.00006 0.20871 8.00006 0.477533L8.00006 7.0587L14.5815 7.0587C14.8504 7.0587 15.0762 6.83281 15.0577 6.56458ZM6.5883 8.47046L6.5883 1.49135C6.5883 1.21047 6.34153 0.979591 6.06359 1.019C2.55859 1.5143 -0.120524 4.57635 0.00418193 8.24605C0.132417 12.0149 3.37742 15.1054 7.14801 15.0581C8.63036 15.0396 10.0001 14.5619 11.1262 13.7631C11.3586 13.5984 11.3739 13.2563 11.1724 13.0549L6.5883 8.47046Z"/>
                        </Vector_0013>
                    </IconSidebarInactive1Overview>
                </SidebarListInactive>
                <SidebarListActive>
                    <Sheet_0010 xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(159, 162, 180)" d="M0 0L255 0L255 56L0 56L0 0Z"/>
                    </Sheet_0010>
                    <Selected/>
                    <Title_0010>
                        Event lists
                    </Title_0010>
                    <IconSidebarActive2Tickets>
                        <Vector_0014 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(221, 226, 255)" d="M3.55556 2.66667L12.4444 2.66667L12.4444 8L3.55556 8L3.55556 2.66667ZM14.6667 5.33333C14.6667 6.06972 15.2636 6.66667 16 6.66667L16 9.33333C16 10.0697 15.4031 10.6667 14.6667 10.6667L1.33333 10.6667C0.596944 10.6667 0 10.0697 0 9.33333L0 6.66667C0.736389 6.66667 1.33333 6.06972 1.33333 5.33333C1.33333 4.59694 0.736389 4 0 4L0 1.33333C0 0.596944 0.596944 0 1.33333 0L14.6667 0C15.4031 0 16 0.596944 16 1.33333L16 4C15.2636 4 14.6667 4.59694 14.6667 5.33333ZM13.3333 2.44444C13.3333 2.07625 13.0349 1.77778 12.6667 1.77778L3.33333 1.77778C2.96514 1.77778 2.66667 2.07625 2.66667 2.44444L2.66667 8.22222C2.66667 8.59042 2.96514 8.88889 3.33333 8.88889L12.6667 8.88889C13.0349 8.88889 13.3333 8.59042 13.3333 8.22222L13.3333 2.44444Z"/>
                        </Vector_0014>
                    </IconSidebarActive2Tickets>
                </SidebarListActive>
                <SidebarListInactive_0001>
                    <Title_0009>
                        Promotion
                    </Title_0009>
                    <IconSidebarInactive3Ideas>
                        <Vector_0015 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M3.00187 14.1985C3.00219 14.395 3.06031 14.5875 3.16937 14.7513L3.70344 15.5541C3.79467 15.6913 3.91841 15.8039 4.06366 15.8817C4.2089 15.9596 4.37114 16.0003 4.53594 16.0003L6.46438 16.0003C6.62917 16.0003 6.79141 15.9596 6.93665 15.8817C7.0819 15.8039 7.20564 15.6913 7.29688 15.5541L7.83094 14.7513C7.93995 14.5875 7.99822 14.3952 7.99844 14.1985L7.99969 13L3.00031 13L3.00187 14.1985ZM0 5.50003C0 6.88659 0.514063 8.15159 1.36125 9.11815C1.8775 9.70721 2.685 10.9378 2.99281 11.976C2.99406 11.9841 2.995 11.9922 2.99625 12.0003L8.00375 12.0003C8.005 11.9922 8.00594 11.9844 8.00719 11.976C8.315 10.9378 9.1225 9.70721 9.63875 9.11815C10.4859 8.15159 11 6.88659 11 5.50003C11 2.45659 8.52844 -0.00934836 5.48281 2.66431e-05C2.295 0.00971414 0 2.59284 0 5.50003ZM5.5 3.00003C4.12156 3.00003 3 4.12159 3 5.50003C3 5.77628 2.77625 6.00003 2.5 6.00003C2.22375 6.00003 2 5.77628 2 5.50003C2 3.57003 3.57 2.00003 5.5 2.00003C5.77625 2.00003 6 2.22378 6 2.50003C6 2.77628 5.77625 3.00003 5.5 3.00003Z"/>
                        </Vector_0015>
                    </IconSidebarInactive3Ideas>
                </SidebarListInactive_0001>
                <SidebarListInactive_0002>
                    <Title_0009>
                        Report
                    </Title_0009>
                    <IconSidebarInactive6Articles>
                        <Vector_0016 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M14 11.25L14 0.75C14 0.334375 13.6656 0 13.25 0L3 0C1.34375 0 0 1.34375 0 3L0 13C0 14.6562 1.34375 16 3 16L13.25 16C13.6656 16 14 15.6656 14 15.25L14 14.75C14 14.5156 13.8906 14.3031 13.7219 14.1656C13.5906 13.6844 13.5906 12.3125 13.7219 11.8313C13.8906 11.6969 14 11.4844 14 11.25ZM4 4.1875C4 4.08437 4.08437 4 4.1875 4L10.8125 4C10.9156 4 11 4.08437 11 4.1875L11 4.8125C11 4.91563 10.9156 5 10.8125 5L4.1875 5C4.08437 5 4 4.91563 4 4.8125L4 4.1875ZM4 6.1875C4 6.08437 4.08437 6 4.1875 6L10.8125 6C10.9156 6 11 6.08437 11 6.1875L11 6.8125C11 6.91563 10.9156 7 10.8125 7L4.1875 7C4.08437 7 4 6.91563 4 6.8125L4 6.1875ZM11.9187 14L3 14C2.44688 14 2 13.5531 2 13C2 12.45 2.45 12 3 12L11.9187 12C11.8594 12.5344 11.8594 13.4656 11.9187 14Z"/>
                        </Vector_0016>
                    </IconSidebarInactive6Articles>
                </SidebarListInactive_0002>
                <SidebarListInactive_0003>
                    <Title_0009>
                        Settings
                    </Title_0009>
                    <IconSidebarInactiveA1Settings>
                        <Vector_0017 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M14.6486 9.61253L13.3174 8.84378C13.4517 8.11878 13.4517 7.37503 13.3174 6.65003L14.6486 5.88128C14.8017 5.79378 14.8705 5.61253 14.8205 5.44378C14.4736 4.33128 13.883 3.32503 13.1111 2.48753C12.9924 2.3594 12.7986 2.32815 12.6486 2.41565L11.3174 3.1844C10.758 2.70315 10.1142 2.33128 9.41737 2.08753L9.41737 0.553154C9.41737 0.378154 9.2955 0.225029 9.12362 0.187529C7.97675 -0.0687207 6.80175 -0.0562207 5.71113 0.187529C5.53925 0.225029 5.41738 0.378154 5.41738 0.553154L5.41738 2.09065C4.72363 2.33753 4.07988 2.7094 3.51738 3.18753L2.18925 2.41878C2.03613 2.33128 1.8455 2.3594 1.72675 2.49065C0.954878 3.32503 0.364254 4.33128 0.0173787 5.4469C-0.0357463 5.61565 0.0361287 5.7969 0.189254 5.8844L1.5205 6.65315C1.38613 7.37815 1.38613 8.1219 1.5205 8.8469L0.189254 9.61565C0.0361287 9.70315 -0.0326212 9.8844 0.0173787 10.0532C0.364254 11.1657 0.954878 12.1719 1.72675 13.0094C1.8455 13.1375 2.03925 13.1688 2.18925 13.0813L3.5205 12.3125C4.07988 12.7938 4.72363 13.1657 5.4205 13.4094L5.4205 14.9469C5.4205 15.1219 5.54238 15.275 5.71425 15.3125C6.86113 15.5688 8.03612 15.5563 9.12675 15.3125C9.29862 15.275 9.4205 15.1219 9.4205 14.9469L9.4205 13.4094C10.1142 13.1625 10.758 12.7907 11.3205 12.3125L12.6517 13.0813C12.8049 13.1688 12.9955 13.1407 13.1142 13.0094C13.8861 12.175 14.4767 11.1688 14.8236 10.0532C14.8705 9.88128 14.8017 9.70003 14.6486 9.61253L14.6486 9.61253ZM7.41738 10.2469C6.03925 10.2469 4.91738 9.12503 4.91738 7.7469C4.91738 6.36878 6.03925 5.2469 7.41738 5.2469C8.7955 5.2469 9.91737 6.36878 9.91737 7.7469C9.91737 9.12503 8.7955 10.2469 7.41738 10.2469Z"/>
                        </Vector_0017>
                    </IconSidebarInactiveA1Settings>
                </SidebarListInactive_0003>
                <SidebarListInactive_0004>
                    <Title_0009>
                        Subscription
                    </Title_0009>
                    <IconSidebarInactiveA2Subscription>
                        <Vector_0018 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M3.03506 11.3324C2.7635 11.0609 2.90506 11.1374 2.25006 10.9621C1.95287 10.8824 1.69162 10.7293 1.45537 10.5459L0.0375617 14.0221C-0.0996258 14.3587 0.156624 14.7243 0.519749 14.7106L2.16631 14.6478L3.29881 15.844C3.54881 16.1078 3.98756 16.0256 4.12475 15.689L5.75131 11.7009C5.41256 11.8896 5.03662 12.0003 4.64787 12.0003C4.0385 12.0003 3.466 11.7631 3.03506 11.3324L3.03506 11.3324ZM11.9626 14.0221L10.5447 10.5459C10.3085 10.7296 10.0472 10.8824 9.75006 10.9621C9.09162 11.1384 9.236 11.0615 8.96506 11.3324C8.53412 11.7631 7.96131 12.0003 7.35194 12.0003C6.96319 12.0003 6.58725 11.8893 6.2485 11.7009L7.87506 15.689C8.01225 16.0256 8.45131 16.1078 8.701 15.844L9.83381 14.6478L11.4804 14.7106C11.8435 14.7243 12.0997 14.3584 11.9626 14.0221L11.9626 14.0221ZM8.21881 10.6253C8.69631 10.1393 8.751 10.1812 9.431 9.99588C9.86506 9.87744 10.2044 9.53213 10.3207 9.09025C10.5544 8.20275 10.4938 8.30994 11.1316 7.66056C11.4494 7.33713 11.5735 6.86556 11.4572 6.42369C11.2238 5.53681 11.2235 5.66056 11.4572 4.77275C11.5735 4.33088 11.4494 3.85931 11.1316 3.53588C10.4938 2.8865 10.5544 2.99338 10.3207 2.10619C10.2044 1.66431 9.86506 1.319 9.431 1.20056C8.55975 0.962752 8.66475 1.02494 8.02631 0.375252C7.7085 0.0518145 7.24506 -0.074748 6.811 0.0436895C5.94006 0.281189 6.06162 0.281502 5.18912 0.0436895C4.75506 -0.074748 4.29162 0.051502 3.97381 0.375252C3.336 1.02463 3.441 0.962752 2.56944 1.20056C2.13537 1.319 1.796 1.66431 1.67975 2.10619C1.44631 2.99338 1.50662 2.8865 0.868812 3.53588C0.550999 3.85931 0.426624 4.33088 0.543187 4.77275C0.776624 5.659 0.776937 5.53525 0.543187 6.42338C0.426937 6.86525 0.550999 7.33681 0.868812 7.66056C1.50662 8.30994 1.446 8.20275 1.67975 9.09025C1.796 9.53213 2.13537 9.87744 2.56944 9.99588C3.26881 10.1865 3.321 10.1565 3.78131 10.6253C4.19475 11.0462 4.83881 11.1215 5.33569 10.8071C5.53438 10.681 5.76487 10.614 6.00022 10.614C6.23557 10.614 6.46606 10.681 6.66475 10.8071C7.16131 11.1215 7.80537 11.0462 8.21881 10.6253ZM3.05194 5.499C3.05194 3.84181 4.37194 2.49838 6.00006 2.49838C7.62819 2.49838 8.94819 3.84181 8.94819 5.499C8.94819 7.15619 7.62819 8.49963 6.00006 8.49963C4.37194 8.49963 3.05194 7.15619 3.05194 5.499L3.05194 5.499Z"/>
                        </Vector_0018>
                    </IconSidebarInactiveA2Subscription>
                </SidebarListInactive_0004>
                <DividerLineHorizontal_0017>
                    <Divider src="grida://assets-reservation/images/135:15564" alt="image of Divider"/>
                </DividerLineHorizontal_0017>
                {/*<Ellipse_0001/>*/}
            </SidebarDesktop>
            <Dropdown>
                <Button>
                    <ButtonBase>
                        <Text>
                            Create New Event
                        </Text>
                        <AvatarAddButton>
                            <Content_0008>
                                <Plus>
                                    <Icon src="grida://assets-reservation/images/I131:15622;120:4096;1041:34317;1038:34375;1102:4857;1037:34133" alt="image of Icon"/>
                                </Plus>
                            </Content_0008>
                        </AvatarAddButton>
                    </ButtonBase>
                </Button>
            </Dropdown>
            <AllTickets>
                <CardsDefault>
                    <Sheet/>
                    <Search/>
                    <EventName>
                        Event name
                    </EventName>
                </CardsDefault>
                <TableTicketPriorityHigh>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityHigh>
                            <Sheet_0001/>
                            <Title>
                                High
                            </Title>
                        </ChipPriorityHigh>
                        <TimeLabel>
                            6:30 PM
                        </TimeLabel>
                        <DateLabel>
                            May 26, 2019
                        </DateLabel>
                        <DateCustomer>
                            on 24.05.2019
                        </DateCustomer>
                        <CustomerName>
                            Zik hall
                        </CustomerName>
                        <TicketInformation>
                            Updated 1 day ago
                        </TicketInformation>
                        <TicketName>
                            Nacoss Fresher Welcome
                        </TicketName>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15331" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15333" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityHigh>
                <TableTicketPriorityLow>
                    <Content_0001>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityLow>
                            <Sheet_0002/>
                            <Title>
                                low
                            </Title>
                        </ChipPriorityLow>
                        <TimeLabel_0001>
                            8:00 AM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 26, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 24.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0001>
                            KDLT
                        </CustomerName_0001>
                        <TicketInformation_0001>
                            Updated 1 day ago
                        </TicketInformation_0001>
                        <TicketName_0001>
                            Nacoss Week
                        </TicketName_0001>
                        <AvatarWoman5>
                            <AvatarWoman5_0001/>
                        </AvatarWoman5>
                    </Content_0001>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15351" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15353" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityLow>
                <TableTicketPriorityLow_0001>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityLow>
                            <Sheet_0002/>
                            <Title>
                                low
                            </Title>
                        </ChipPriorityLow>
                        <TimeLabel_0001>
                            11:30 AM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 25, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 22.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0001>
                            KDLT
                        </CustomerName_0001>
                        <TicketInformation_0002>
                            Updated 4 day ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            Seminar for masters students
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15371" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15373" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityLow_0001>
                <TableTicketPriorityHigh_0001>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityHigh>
                            <Sheet_0001/>
                            <Title>
                                High
                            </Title>
                        </ChipPriorityHigh>
                        <TimeLabel_0001>
                            7:30 PM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 26, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 24.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0001>
                            CLT
                        </CustomerName_0001>
                        <TicketInformation_0002>
                            Updated 1 day ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            400L election
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15391" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15393" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityHigh_0001>
                <Filter>
                    <Filter_0001>
                        Filter
                    </Filter_0001>
                    <IconFilter>
                        <Vector_0004 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(197, 199, 205)" d="M11.4369 0L0.563154 0C0.0635131 0 -0.188604 0.606234 0.165419 0.960258L4.5 5.29549L4.5 10.125C4.5 10.3085 4.58955 10.4805 4.73993 10.5858L6.61493 11.8979C6.98484 12.1568 7.5 11.8944 7.5 11.437L7.5 5.29549L11.8347 0.960258C12.188 0.606937 11.9376 0 11.4369 0Z"/>
                        </Vector_0004>
                    </IconFilter>
                </Filter>
                <Sort>
                    <Sort_0001>
                        Sort
                    </Sort_0001>
                    <IconSort>
                        <Vector_0005 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(197, 199, 205)" d="M0.128568 2.26839L2.31563 0.125478C2.48647 -0.0418526 2.7636 -0.0417991 2.93434 0.125478L5.12132 2.26839C5.39667 2.53812 5.20059 3.00001 4.81195 3.00001L3.5 3.00001L3.5 11.5714C3.5 11.8081 3.30414 12 3.0625 12L2.1875 12C1.94586 12 1.75 11.8081 1.75 11.5714L1.75 3.00001L0.437935 3.00001C0.0485329 3.00001 -0.146209 2.53758 0.128568 2.26839L0.128568 2.26839ZM6.5625 1.7143L13.5625 1.7143C13.8041 1.7143 14 1.52243 14 1.28573L14 0.428584C14 0.191879 13.8041 1.34454e-05 13.5625 1.34454e-05L6.5625 1.34454e-05C6.32086 1.34454e-05 6.125 0.191879 6.125 0.428584L6.125 1.28573C6.125 1.52243 6.32086 1.7143 6.5625 1.7143ZM6.125 4.71429L6.125 3.85715C6.125 3.62045 6.32086 3.42858 6.5625 3.42858L11.8125 3.42858C12.0541 3.42858 12.25 3.62045 12.25 3.85715L12.25 4.71429C12.25 4.951 12.0541 5.14287 11.8125 5.14287L6.5625 5.14287C6.32086 5.14287 6.125 4.951 6.125 4.71429ZM6.125 11.5714L6.125 10.7143C6.125 10.4776 6.32086 10.2857 6.5625 10.2857L8.3125 10.2857C8.55414 10.2857 8.75 10.4776 8.75 10.7143L8.75 11.5714C8.75 11.8081 8.55414 12 8.3125 12L6.5625 12C6.32086 12 6.125 11.8081 6.125 11.5714ZM6.125 8.14286L6.125 7.28572C6.125 7.04901 6.32086 6.85715 6.5625 6.85715L10.0625 6.85715C10.3041 6.85715 10.5 7.04901 10.5 7.28572L10.5 8.14286C10.5 8.37957 10.3041 8.57143 10.0625 8.57143L6.5625 8.57143C6.32086 8.57143 6.125 8.37957 6.125 8.14286Z"/>
                        </Vector_0005>
                    </IconSort>
                </Sort>
                <Sort_0002>
                    <Search_0001>
                        <Icon src="grida://assets-reservation/images/I136:19352;1037:33988" alt="image of Icon"/>
                    </Search_0001>
                </Sort_0002>
                <TableBottom>
                    <RowsPerPage>
                        <RowsPerPage_0001>
                            Rows per page:
                        </RowsPerPage_0001>
                        <_8>
                            8
                        </_8>
                        <IconDropdown>
                            <Vector_0006 xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(159, 162, 180)" d="M0.468863 0L6.49933 0C6.91652 0 7.12511 0.503906 6.8298 0.799219L3.81574 3.81562C3.63293 3.99844 3.33527 3.99844 3.15246 3.81562L0.138394 0.799219C-0.156919 0.503906 0.0516751 0 0.468863 0Z"/>
                            </Vector_0006>
                        </IconDropdown>
                    </RowsPerPage>
                    <Pagination>
                        <_18Of5>
                            1-8 of 5
                        </_18Of5>
                        <IconArrowLeft>
                            <Left src="grida://assets-reservation/images/135:15411" alt="image of Left"/>
                        </IconArrowLeft>
                        <IconArrowRight>
                            <Right src="grida://assets-reservation/images/135:15413" alt="image of Right"/>
                        </IconArrowRight>
                    </Pagination>
                </TableBottom>
                <EventList_0001>
                    Event List
                </EventList_0001>
                <TableTicketPriorityNormal>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityNormal>
                            <Sheet_0005/>
                            <Title>
                                Normal
                            </Title>
                        </ChipPriorityNormal>
                        <TimeLabel_0001>
                            5:00 PM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 25, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 24.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0004>
                            Boltannical Garden
                        </CustomerName_0004>
                        <TicketInformation_0002>
                            Updated 2 days ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            Nacoss Dinner
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15432" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15434" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityNormal>
                <TableTicketPriorityNormal_0001>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityNormal>
                            <Sheet_0005/>
                            <Title>
                                Normal
                            </Title>
                        </ChipPriorityNormal>
                        <TimeLabel_0001>
                            2:00 PM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 25, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 23.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0005>
                            FASSA
                        </CustomerName_0005>
                        <TicketInformation_0002>
                            Updated 3 days ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            Seminar 3
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15452" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15454" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityNormal_0001>
                <TableTicketPriorityNormal_0002>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityNormal>
                            <Sheet_0005/>
                            <Title>
                                Normal
                            </Title>
                        </ChipPriorityNormal>
                        <TimeLabel_0001>
                            1:00 PM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 24, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 21.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0001>
                            NFLT
                        </CustomerName_0001>
                        <TicketInformation_0002>
                            Updated 6 days ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            Seminar 2
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal>
                        <Divider src="grida://assets-reservation/images/135:15472" alt="image of Divider"/>
                    </DividerLineHorizontal>
                    <DividerLineHorizontal_0001>
                        <Divider src="grida://assets-reservation/images/135:15474" alt="image of Divider"/>
                    </DividerLineHorizontal_0001>
                </TableTicketPriorityNormal_0002>
                <TableTicketPriorityHighHover>
                    <Sheet_0008/>
                    <IconCursorPointingHand>
                        <Group>
                            <Fill1 xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M2.8929 11.9025C2.6089 11.5435 2.2639 10.8095 1.6499 9.91853C1.3019 9.41453 0.438897 8.46553 0.181897 7.98353C-0.0411031 7.55753 -0.0171031 7.36653 0.0358969 7.01353C0.129897 6.38553 0.773897 5.89653 1.4609 5.96253C1.9799 6.01153 2.4199 6.35453 2.8159 6.67853C3.0549 6.87353 3.3489 7.25253 3.5259 7.46653C3.6889 7.66253 3.7289 7.74353 3.9029 7.97553C4.1329 8.28253 4.2049 8.43453 4.1169 8.09653C4.0459 7.60053 3.9299 6.75353 3.7619 6.00453C3.6339 5.43653 3.6029 5.34753 3.4809 4.91153C3.3519 4.44753 3.2859 4.12253 3.1649 3.63053C3.0809 3.28253 2.9299 2.57153 2.8889 2.17153C2.8319 1.62453 2.8019 0.732532 3.1529 0.322532C3.4279 0.00153172 4.0589 -0.0954683 4.4499 0.102532C4.9619 0.361532 5.2529 1.10553 5.3859 1.40253C5.6249 1.93653 5.7729 2.55353 5.9019 3.36353C6.0659 4.39453 6.3679 5.82553 6.3779 6.12653C6.4019 5.75753 6.3099 4.98053 6.3739 4.62653C6.4319 4.30553 6.7019 3.93253 7.0399 3.83153C7.3259 3.74653 7.6609 3.71553 7.9559 3.77653C8.2689 3.84053 8.5989 4.06453 8.7219 4.27553C9.0839 4.89953 9.0909 6.17453 9.1059 6.10653C9.1919 5.73053 9.1769 4.87753 9.3899 4.52253C9.5299 4.28853 9.8869 4.07753 10.0769 4.04353C10.3709 3.99153 10.7319 3.97553 11.0409 4.03553C11.2899 4.08453 11.6269 4.38053 11.7179 4.52253C11.9359 4.86653 12.0599 5.83953 12.0969 6.18053C12.1119 6.32153 12.1709 5.78853 12.3899 5.44453C12.7959 4.80553 14.2329 4.68153 14.2879 6.08353C14.3129 6.73753 14.3079 6.70753 14.3079 7.14753C14.3079 7.66453 14.2959 7.97553 14.2679 8.34953C14.2369 8.74953 14.1509 9.65353 14.0259 10.0915C13.9399 10.3925 13.6549 11.0695 13.3739 11.4755C13.3739 11.4755 12.2999 12.7255 12.1829 13.2885C12.0649 13.8505 12.1039 13.8545 12.0809 14.2535C12.0579 14.6515 12.2019 15.1755 12.2019 15.1755C12.2019 15.1755 11.3999 15.2795 10.9679 15.2105C10.5769 15.1475 10.0929 14.3695 9.9679 14.1315C9.7959 13.8035 9.4289 13.8665 9.2859 14.1085C9.0609 14.4915 8.5769 15.1785 8.2349 15.2215C7.5669 15.3055 6.1809 15.2525 5.0959 15.2415C5.0959 15.2415 5.2809 14.2305 4.8689 13.8835C4.5639 13.6245 4.0389 13.0995 3.7249 12.8235L2.8929 11.9025Z"/>
                            </Fill1>
                            <Stroke3 src="grida://assets-reservation/images/135:15480" alt="image of Stroke3"/>
                            <Stroke5 src="grida://assets-reservation/images/135:15481" alt="image of Stroke5"/>
                            <Stroke7 src="grida://assets-reservation/images/135:15482" alt="image of Stroke7"/>
                            <Stroke9 src="grida://assets-reservation/images/135:15483" alt="image of Stroke9"/>
                        </Group>
                    </IconCursorPointingHand>
                    <Content>
                        <IconMoreVertical>
                            <Vector xmlns="http://www.w3.org/2000/svg">
                                <path fill="rgb(197, 199, 205)" d="M2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4ZM2 6C0.9 6 0 6.9 0 8C0 9.1 0.9 10 2 10C3.1 10 4 9.1 4 8C4 6.9 3.1 6 2 6ZM2 12C0.9 12 0 12.9 0 14C0 15.1 0.9 16 2 16C3.1 16 4 15.1 4 14C4 12.9 3.1 12 2 12Z"/>
                            </Vector>
                        </IconMoreVertical>
                        <ChipPriorityHigh>
                            <Sheet_0001/>
                            <Title>
                                High
                            </Title>
                        </ChipPriorityHigh>
                        <TimeLabel_0001>
                            4:00 PM
                        </TimeLabel_0001>
                        <DateLabel_0001>
                            May 25, 2019
                        </DateLabel_0001>
                        <DateCustomer_0001>
                            on 24.05.2019
                        </DateCustomer_0001>
                        <CustomerName_0001>
                            CLT
                        </CustomerName_0001>
                        <TicketInformation_0002>
                            Updated 2 days ago
                        </TicketInformation_0002>
                        <TicketName_0002>
                            Career talk seminar
                        </TicketName_0002>
                    </Content>
                    <DividerLineHorizontal_0014>
                        <Divider src="grida://assets-reservation/images/135:15500" alt="image of Divider"/>
                    </DividerLineHorizontal_0014>
                    <DividerLineHorizontal_0015>
                        <Divider src="grida://assets-reservation/images/135:15502" alt="image of Divider"/>
                    </DividerLineHorizontal_0015>
                </TableTicketPriorityHighHover>
                <TableTop>
                    <Location>
                        Location
                    </Location>
                    <Status>
                        Status
                    </Status>
                    <Date>
                        Date
                    </Date>
                    <DividerLineHorizontal_0016>
                        <Divider src="grida://assets-reservation/images/135:15509" alt="image of Divider"/>
                    </DividerLineHorizontal_0016>
                </TableTop>
            </AllTickets>
        </RootWrapperEventList>
    )
}


const Ellipse_0001 = styled.div`
	background-color: rgb(55, 81, 255);
	border-radius: 32px / 32px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;


const RootWrapperEventList = styled.div`
	min-height: 100vh;
	background-color: rgb(54, 55, 64);
	position: relative;
`;

const Bg = styled.svg`
	width: 1185px;
	height: 1100px;
	position: absolute;
	left: 255px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;
//
// const Bg = styled.svg`
//   width: 100vw;
//   height: 100vh;
//   position: absolute;
//   left: 0;
//   top: 0;
//   right: 0;
//   bottom: 0;
// `;


const AllTickets = styled.div`
	height: 942px;
    max-width: 100%;
	overflow: hidden;
	position: absolute;
	left: 285px;
	top: 148px;
	right: 33px;
`;

const CardsDefault = styled.div`
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Sheet = styled.div`
	background-color: white;
	border: solid 1px rgb(223, 224, 235);
	border-radius: 8px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Search = styled.div`
	width: 24px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	left: 828px;
	top: 37px;
`;

const EventName = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 99px;
	top: 100px;
	right: 710px;
`;

const TableTicketPriorityHigh = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 134px;
	right: 1px;
`;

const Content = styled.div`
	width: 990px;
	height: 40px;
	position: absolute;
	left: 99px;
	top: 26px;
`;

const IconMoreVertical = styled.div`
	width: 24px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 0px;
`;

const Vector = styled.svg`
	width: 4px;
	height: 16px;
	position: absolute;
	left: 10px;
	top: 4px;
	right: 10px;
	bottom: 4px;
`;

const ChipPriorityHigh = styled.div`
	width: 54px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 96px;
`;

const Sheet_0001 = styled.div`
	background-color: rgb(241, 43, 44);
	border-radius: 100px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Title = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 11px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
	min-height: 14px;
	position: absolute;
	left: 12px;
	top: calc((calc((50% + 0px)) - 7px));
	right: 12px;
	height: 14px;
`;

const TimeLabel = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	width: 164px;
	min-height: 16px;
	position: absolute;
	top: calc((calc((50% + 12px)) - 8px));
	right: 166px;
	height: 16px;
`;

const DateLabel = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 164px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 166px;
`;

const DateCustomer = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	width: 232px;
	min-height: 16px;
	position: absolute;
	top: calc((calc((50% + 12px)) - 8px));
	right: 346px;
	height: 16px;
`;

const CustomerName = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 232px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 346px;
`;

const TicketInformation = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 16px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 12px)) - 8px));
	right: 594px;
	height: 16px;
`;

const TicketName = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + -10px)) - 10px));
	right: 594px;
`;

const DividerLineHorizontal = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	right: 0px;
	bottom: 0px;
`;

const Divider = styled.img`
	height: 0px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 0px)) - 0px));
	right: 0px;
`;

const DividerLineHorizontal_0001 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
`;

const TableTicketPriorityLow = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 226px;
	right: 1px;
`;

const Content_0001 = styled.div`
	width: 1058px;
	height: 44px;
	position: absolute;
	left: 31px;
	top: 24px;
`;

const ChipPriorityLow = styled.div`
	width: 52px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 98px;
`;

const Sheet_0002 = styled.div`
	background-color: rgb(254, 196, 0);
	border-radius: 100px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const TimeLabel_0001 = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	width: 160px;
	min-height: 16px;
	position: absolute;
	top: calc((calc((50% + 12px)) - 8px));
	right: 170px;
	height: 16px;
`;

const DateLabel_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 160px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 170px;
`;

const DateCustomer_0001 = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	width: 228px;
	min-height: 16px;
	position: absolute;
	top: calc((calc((50% + 12px)) - 8px));
	right: 350px;
	height: 16px;
`;

const CustomerName_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 208px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 370px;
`;

const TicketInformation_0001 = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 16px;
	position: absolute;
	left: 68px;
	top: calc((calc((50% + 12px)) - 8px));
	right: 598px;
	height: 16px;
`;

const TicketName_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 68px;
	top: calc((calc((50% + -10px)) - 10px));
	right: 598px;
`;

const AvatarWoman5 = styled.div`
	width: 44px;
	height: 44px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 0px)) - 22px));
`;

const AvatarWoman5_0001 = styled.div`
	overflow: hidden;
	border-radius: 22px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const TableTicketPriorityLow_0001 = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 686px;
	right: 1px;
`;

const TicketInformation_0002 = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 16px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 12px)) - 8px));
	right: 598px;
	height: 16px;
`;

const TicketName_0002 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + -10px)) - 10px));
	right: 598px;
`;

const TableTicketPriorityHigh_0001 = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 318px;
	right: 1px;
`;

const Filter = styled.div`
	width: 58px;
	height: 20px;
	position: absolute;
	left: 1032px;
	top: 37px;
`;

const Filter_0001 = styled.span`
	color: rgb(75, 80, 109);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const IconFilter = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	top: 1px;
	right: 42px;
`;

const Vector_0004 = styled.svg`
	width: 12px;
	height: 12px;
	position: absolute;
	left: 2px;
	top: 2px;
	right: 2px;
	bottom: 2px;
`;

const Sort = styled.div`
	width: 53px;
	height: 20px;
	position: absolute;
	left: 947px;
	top: 37px;
`;

const Sort_0001 = styled.span`
	color: rgb(75, 80, 109);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const IconSort = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	top: 1px;
	right: 37px;
`;

const Vector_0005 = styled.svg`
	width: 14px;
	height: 12px;
	position: absolute;
	left: 1px;
	top: 2px;
	right: 1px;
	bottom: 2px;
`;

const Sort_0002 = styled.div`
	width: 23px;
	height: 20px;
	position: absolute;
	left: 846px;
	top: 36px;
`;

const Search_0001 = styled.div`
	width: 23px;
	height: 20px;
	overflow: hidden;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const Icon = styled.img`
	object-fit: cover;
	position: absolute;
	left: 3px;
	top: 3px;
	right: 3px;
	bottom: 3px;
`;

const TableBottom = styled.div`
	width: 371px;
	height: 24px;
	position: absolute;
	left: 719px;
	top: 894px;
`;

const RowsPerPage = styled.div`
	width: 139px;
	height: 18px;
	position: absolute;
	left: 0px;
	top: 3px;
`;

const RowsPerPage_0001 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 126px;
	min-height: 18px;
	position: absolute;
	top: 0px;
	right: 13px;
	height: 18px;
`;

const _8 = styled.span`
	color: rgb(75, 80, 109);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	width: 10px;
	min-height: 18px;
	position: absolute;
	top: 0px;
	right: 15px;
	height: 18px;
`;

const IconDropdown = styled.div`
	width: 12px;
	height: 12px;
	overflow: hidden;
	position: absolute;
	top: 3px;
	right: 0px;
`;

const Vector_0006 = styled.svg`
	width: 7px;
	height: 4px;
	position: absolute;
	left: calc((calc((50% + -0px)) - 3px));
	top: calc((calc((50% + 0px)) - 2px));
`;

const Pagination = styled.div`
	width: 184px;
	height: 24px;
	position: absolute;
	left: 187px;
	top: 0px;
`;

const _18Of5 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	width: 120px;
	min-height: 18px;
	position: absolute;
	top: 3px;
	right: 64px;
	height: 18px;
`;

const IconArrowLeft = styled.div`
	width: 24px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: 0px;
	right: 36px;
`;

const Left = styled.img`
	object-fit: cover;
	position: absolute;
	left: 9px;
	top: 6px;
	right: 9px;
	bottom: 6px;
`;

const IconArrowRight = styled.div`
	width: 24px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const Right = styled.img`
	object-fit: cover;
	position: absolute;
	left: 9px;
	top: 6px;
	right: 9px;
	bottom: 6px;
`;

const EventList_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 62px;
	top: 32px;
	right: 640px;
`;

const TableTicketPriorityNormal = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 410px;
	right: 1px;
`;

const ChipPriorityNormal = styled.div`
	width: 76px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 74px;
`;

const Sheet_0005 = styled.div`
	background-color: rgb(41, 204, 151);
	border-radius: 100px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const CustomerName_0004 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 228px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 350px;
`;

const TableTicketPriorityNormal_0001 = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 594px;
	right: 1px;
`;

const CustomerName_0005 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	width: 218px;
	position: absolute;
	top: calc((calc((50% + -10px)) - 10px));
	right: 360px;
`;

const TableTicketPriorityNormal_0002 = styled.div`
	height: 92px;
	position: absolute;
	left: 1px;
	top: 778px;
	right: 1px;
`;

const TableTicketPriorityHighHover = styled.div`
	height: 92px;
	background-color: white;
	position: absolute;
	left: 1px;
	top: 502px;
	right: 1px;
`;

const Sheet_0008 = styled.div`
	background-color: rgb(55, 81, 255);
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	opacity: 0;
`;

const IconCursorPointingHand = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	left: 405px;
	top: calc((calc((50% + 2px)) - 8px));
`;

const Group = styled.div`
	width: 14px;
	height: 15px;
	position: absolute;
	left: 1px;
	top: 0px;
`;

const Fill1 = styled.svg`
	width: 14px;
	height: 15px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Stroke3 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Stroke5 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 11px;
	top: 9px;
	right: 2px;
	bottom: 3px;
`;

const Stroke7 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 9px;
	top: 9px;
	right: 4px;
	bottom: 3px;
`;

const Stroke9 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 7px;
	top: 9px;
	right: 6px;
	bottom: 3px;
`;

const DividerLineHorizontal_0014 = styled.div`
	width: 1120px;
	height: 0px;
	position: absolute;
	left: 0px;
	top: 92px;
`;

const DividerLineHorizontal_0015 = styled.div`
	width: 1120px;
	height: 0px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const TableTop = styled.div`
	height: 34px;
	position: absolute;
	left: 1px;
	top: 100px;
	right: 1px;
`;

const Location = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 208px;
	position: absolute;
	top: 0px;
	right: 401px;
`;

const Status = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 104px;
	position: absolute;
	top: 0px;
	right: 77px;
`;

const Date = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 140px;
	position: absolute;
	top: 0px;
	right: 221px;
`;

const DividerLineHorizontal_0016 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 30px;
	right: 0px;
`;

const HeaderDefault = styled.div`
  height: 44px;
  position: absolute;
  left: 285px;
  top: 30px;
  right: 33px;
  //z-index: 999; /* or any other value higher than the other components */
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
	width: 119px;
	min-height: 18px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 9px));
	right: 48px;
	height: 18px;
`;

const DividerLineVertical = styled.div`
	width: 0px;
	height: 32px;
	position: absolute;
	top: calc((calc((50% + 4px)) - 16px));
	right: 199px;
`;

const Divider_0017 = styled.img`
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

const Vector_0011 = styled.svg`
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

const Search_0002 = styled.div`
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

const Vector_0012 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 11px;
	top: 11px;
	right: 0px;
	bottom: 0px;
`;

const Title_0008 = styled.span`
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
	right: 339px;
	height: 34px;
`;

const SidebarDesktop = styled.div`
	width: 255px;
	height: 608px;
	overflow: hidden;
	background-color: rgb(54, 55, 64);
	position: absolute;
	left: 0px;
	top: 0px;
`;

const DashboardKit = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 76px;
	top: 41px;
	opacity: 0.7;
`;
//
// const SidebarListInactive = styled.div`
// 	width: 255px;
// 	height: 56px;
// 	position: absolute;
// 	left: 0px;
// 	top: 128px;
// `;

const SidebarListInactive = styled.div`
  width: 255px;
  height: 56px;
  position: absolute;
  left: 0;
  top: 128px;

  /* styles for when the component is hovered */
  &:hover {
    background-color: lightgray;
    cursor: pointer;  
  }

  /* styles for when the component is clicked */
  &:active {
    background-color: gray;
  }
`;


const Title_0009 = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + 0px)) - 10px));
	right: 24px;
`;

const IconSidebarInactive1Overview = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0013 = styled.svg`
	width: 16px;
	height: 15px;
	position: absolute;
	left: -0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	opacity: 0.4;
`;

const SidebarListActive = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 184px;
`;

const Sheet_0010 = styled.svg`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
	opacity: 0.1;
`;

const Selected = styled.div`
	width: 3px;
	background-color: rgb(221, 226, 255);
	position: absolute;
	left: 0px;
	top: 0px;
	bottom: 0px;
`;

const Title_0010 = styled.span`
	color: rgb(221, 226, 255);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Mulish, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + 0px)) - 10px));
	right: 8px;
`;

const IconSidebarActive2Tickets = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0014 = styled.svg`
	width: 16px;
	height: 11px;
	position: absolute;
	left: 0px;
	top: 3px;
	right: 0px;
	bottom: 3px;
`;

const SidebarListInactive_0001 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 240px;

  /* styles for when the component is hovered */
  &:hover {
    background-color: lightgray;
    cursor: pointer;
  }

  /* styles for when the component is clicked */
  &:active {
    background-color: gray;
  }
`;

const IconSidebarInactive3Ideas = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0015 = styled.svg`
	width: 11px;
	height: 16px;
	position: absolute;
	left: 3px;
	top: -0px;
	right: 3px;
	bottom: -0px;
	opacity: 0.4;
`;

const SidebarListInactive_0002 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 296px;
`;

const IconSidebarInactive6Articles = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0016 = styled.svg`
	width: 14px;
	height: 16px;
	position: absolute;
	left: 1px;
	top: 0px;
	right: 1px;
	bottom: 0px;
	opacity: 0.4;
`;

const SidebarListInactive_0003 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 496px;
`;

const IconSidebarInactiveA1Settings = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0017 = styled.svg`
	width: 15px;
	height: 16px;
	position: absolute;
	left: 1px;
	top: 0px;
	right: 1px;
	bottom: 0px;
	opacity: 0.4;
`;

const SidebarListInactive_0004 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 552px;
`;

const IconSidebarInactiveA2Subscription = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0018 = styled.svg`
	width: 12px;
	height: 16px;
	position: absolute;
	left: 2px;
	top: -0px;
	right: 2px;
	bottom: -0px;
	opacity: 0.4;
`;

const DividerLineHorizontal_0017 = styled.div`
	width: 255px;
	height: 0px;
	position: absolute;
	left: 0px;
	top: 480px;
	opacity: 0.1;
`;

const LogoNacos1 = styled.img`
	width: 35px;
	height: 35px;
	object-fit: cover;
	position: absolute;
	left: 32px;
	top: 37px;
`;

const Dropdown = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	align-items: flex-start;
	box-sizing: border-box;
	position: absolute;
	left: 285px;
	top: 89px;
	width: 181px;
	height: 43px;
`;

const Button = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	border-radius: 8px;
	box-sizing: border-box;
`;

const ButtonBase = styled.div`
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
`;

const Text = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
`;

const AvatarAddButton = styled.div`
	width: 20px;
	height: 20px;
	background-color: white;
	border: solid 1px rgb(208, 213, 221);
	border-radius: 12px;
	position: relative;
`;

const Content_0008 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	border-radius: 12px;
	box-sizing: border-box;
	padding: 4px;
	position: absolute;
	left: -2px;
	top: -2px;
	right: -2px;
	bottom: -2px;
`;

const Plus = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: relative;
`;

