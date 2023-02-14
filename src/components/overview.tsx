import React from "react";
import styled from "@emotion/styled";
import Link from "next/link";

export function Overview() {
    return (
        <RootWrapper11Overview>
            <Bg xmlns="http://www.w3.org/2000/svg">
                <path fill="rgb(247, 248, 252)" d="M0 0L1185 0L1185 1234L0 1234L0 0Z"/>
            </Bg>
            <TicketsAndTasks>
                <Tasks>
                    <CardsDefault>
                        <Sheet/>
                        <AvatarGroup>
                            <Avatars>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:786" alt="image of Avatar"/>
                                </AvatarWrap>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:788" alt="image of Avatar"/>
                                </AvatarWrap>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:790" alt="image of Avatar"/>
                                </AvatarWrap>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:792" alt="image of Avatar"/>
                                </AvatarWrap>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:798" alt="image of Avatar"/>
                                </AvatarWrap>
                                <AvatarWrap>
                                    <Avatar src="grida://assets-reservation/images/I131:15592;1274:804" alt="image of Avatar"/>
                                </AvatarWrap>
                                <Avatar_0006>
                                    <Text>
                                        +5
                                    </Text>
                                </Avatar_0006>
                            </Avatars>
                            <AvatarAddButton>
                                <Content>
                                    <Plus>
                                        <Icon src="grida://assets-reservation/images/I131:15592;1274:806;1102:4857;1037:34133" alt="image of Icon"/>
                                    </Plus>
                                </Content>
                            </AvatarAddButton>
                        </AvatarGroup>
                        <Sheet_0001/>
                        <Sheet_0002/>
                        <Sheet_0003/>
                    </CardsDefault>
                    <ButtonTextButtonPrimaryDefault>
                        <ViewAll>
                            View all
                        </ViewAll>
                    </ButtonTextButtonPrimaryDefault>
                    <OngoingTasksToComplete>
                        Ongoing Tasks to complete
                    </OngoingTasksToComplete>
                    <Today>
                        Today
                    </Today>
                    <TaskCreate>
                        <CreateNewTask>
                            Create new task
                        </CreateNewTask>
                        <IconCreateInactive>
                            <Sheet_0004/>
                            <Plus_0001>
                                <Vector src="grida://assets-reservation/images/120:15242" alt="image of Vector"/>
                                <Vector_0001 src="grida://assets-reservation/images/120:15243" alt="image of Vector"/>
                            </Plus_0001>
                        </IconCreateInactive>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15245" alt="image of Divider"/>
                        </DividerLineHorizontal>
                        <Done>
                            Done
                        </Done>
                        <Urgent>
                            Urgent
                        </Urgent>
                        <Design>
                            Design
                        </Design>
                    </TaskCreate>
                    <Task2>
                        <CreateNewTicketExample>
                            Create new ticket example
                        </CreateNewTicketExample>
                        <ChipDefaultSuccess>
                            <Sheet_0005/>
                        </ChipDefaultSuccess>
                        <ControlsCheckboxInactive>
                            <Checkbox>
                                <CheckboxBase/>
                            </Checkbox>
                        </ControlsCheckboxInactive>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15254" alt="image of Divider"/>
                        </DividerLineHorizontal>
                        <Sheet_0006/>
                        <Title>
                            400 Level seminar
                        </Title>
                    </Task2>
                    <Task1>
                        <FinishTicketUpdate>
                            Finish ticket update
                        </FinishTicketUpdate>
                        <ChipDefaultWarning>
                            <Sheet_0007/>
                        </ChipDefaultWarning>
                        <Sheet_0008/>
                        <Checkbox_0001>
                            <CheckboxBase/>
                        </Checkbox_0001>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15263" alt="image of Divider"/>
                        </DividerLineHorizontal>
                        <Title_0001>
                            200 Level seminar
                        </Title_0001>
                    </Task1>
                    <Task3>
                        <UpdateTicketReport>
                            Update ticket report
                        </UpdateTicketReport>
                        <ChipDefaultGray>
                            <Sheet_0009/>
                        </ChipDefaultGray>
                        <Checkbox_0001>
                            <CheckboxBase_0002>
                                <Check>
                                    <Icon_0001 src="grida://assets-reservation/images/I131:15806;1097:64015;1097:63897;1027:6381" alt="image of Icon"/>
                                </Check>
                            </CheckboxBase_0002>
                        </Checkbox_0001>
                        <Sheet_0008/>
                        <Title_0001>
                            200 Level seminar
                        </Title_0001>
                    </Task3>
                </Tasks>
                <UnresolvedTickets>
                    <CardsDefault>
                        <Sheet/>
                    </CardsDefault>
                    <ButtonTextButtonPrimaryDefault>
                        <ViewDetails>
                            View details
                        </ViewDetails>
                    </ButtonTextButtonPrimaryDefault>
                    <UnresolvedIsssues>
                        Unresolved Isssues
                    </UnresolvedIsssues>
                    <GroupSupport>
                        Group: Support
                    </GroupSupport>
                    <UnresolvedTicket1>
                        <WaitingOnFeatureRequest>
                            Waiting on Feature Request
                        </WaitingOnFeatureRequest>
                        <_4238>
                            4238
                        </_4238>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15283" alt="image of Divider"/>
                        </DividerLineHorizontal>
                    </UnresolvedTicket1>
                    <UnresolvedTicket2>
                        <AwaitingCustomerResponse>
                            Awaiting Customer Response
                        </AwaitingCustomerResponse>
                        <_4238>
                            1005
                        </_4238>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15288" alt="image of Divider"/>
                        </DividerLineHorizontal>
                    </UnresolvedTicket2>
                    <UnresolvedTicket3>
                        <AwaitingDeveloperFix>
                            Awaiting Developer Fix
                        </AwaitingDeveloperFix>
                        <_4238>
                            914
                        </_4238>
                        <DividerLineHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15293" alt="image of Divider"/>
                        </DividerLineHorizontal>
                    </UnresolvedTicket3>
                    <UnresolvedTicket4>
                        <Pending>
                            Pending
                        </Pending>
                        <_4238>
                            281
                        </_4238>
                    </UnresolvedTicket4>
                </UnresolvedTickets>
            </TicketsAndTasks>
            <TodaySTrends>
                <CardsDefault>
                    <Sheet/>
                </CardsDefault>
                <TodaySTrends_0001>
                    Today’s trends
                </TodaySTrends_0001>
                <AsOf25May20190941Pm>
                    as of 25 May 2019, 09:41 PM
                </AsOf25May20190941Pm>
                <GraphHelp>
                    <Today_0001>
                        <DividerGraphHorizontal>
                            <Divider src="grida://assets-reservation/images/120:15305" alt="image of Divider"/>
                        </DividerGraphHorizontal>
                        <Today_0002>
                            Today
                        </Today_0002>
                    </Today_0001>
                    <Yesterday>
                        <DividerGraphHorizontal_0001>
                            <Divider src="grida://assets-reservation/images/120:15309" alt="image of Divider"/>
                        </DividerGraphHorizontal_0001>
                        <Yesterday_0001>
                            Yesterday
                        </Yesterday_0001>
                    </Yesterday>
                </GraphHelp>
                <FullGraph>
                    <HorizontalLines>
                        <DividerGraphHorizontal_0002>
                            <Divider src="grida://assets-reservation/images/120:15314" alt="image of Divider"/>
                        </DividerGraphHorizontal_0002>
                        <DividerGraphHorizontal_0003>
                            <Divider src="grida://assets-reservation/images/120:15316" alt="image of Divider"/>
                        </DividerGraphHorizontal_0003>
                        <DividerGraphHorizontal_0004>
                            <Divider src="grida://assets-reservation/images/120:15318" alt="image of Divider"/>
                        </DividerGraphHorizontal_0004>
                        <DividerGraphHorizontal_0005>
                            <Divider src="grida://assets-reservation/images/120:15320" alt="image of Divider"/>
                        </DividerGraphHorizontal_0005>
                        <DividerGraphHorizontal_0006>
                            <Divider src="grida://assets-reservation/images/120:15322" alt="image of Divider"/>
                        </DividerGraphHorizontal_0006>
                        <DividerGraphHorizontal_0007>
                            <Divider src="grida://assets-reservation/images/120:15324" alt="image of Divider"/>
                        </DividerGraphHorizontal_0007>
                        <DividerGraphHorizontal_0008>
                            <Divider src="grida://assets-reservation/images/120:15326" alt="image of Divider"/>
                        </DividerGraphHorizontal_0008>
                    </HorizontalLines>
                    <DividerGraphVertical>
                        <Divider_0015 src="grida://assets-reservation/images/120:15328" alt="image of Divider"/>
                    </DividerGraphVertical>
                    <Hours>
                        <_0>
                            0
                        </_0>
                        <_1>
                            1
                        </_1>
                        <_2>
                            2
                        </_2>
                        <_3>
                            3
                        </_3>
                        <_4>
                            4
                        </_4>
                        <_5>
                            5
                        </_5>
                        <_6>
                            6
                        </_6>
                        <_7>
                            7
                        </_7>
                        <_8>
                            8
                        </_8>
                        <_9>
                            9
                        </_9>
                        <_10>
                            10
                        </_10>
                        <_11>
                            11
                        </_11>
                        <_12>
                            12
                        </_12>
                        <_13>
                            13
                        </_13>
                        <_14>
                            14
                        </_14>
                        <_15>
                            15
                        </_15>
                        <_16>
                            16
                        </_16>
                        <_17>
                            17
                        </_17>
                        <_18>
                            18
                        </_18>
                        <_19>
                            19
                        </_19>
                        <_20>
                            20
                        </_20>
                        <_21>
                            21
                        </_21>
                        <_22>
                            22
                        </_22>
                        <_23>
                            23
                        </_23>
                    </Hours>
                    <Values>
                        <_0_0001>
                            0
                        </_0_0001>
                        <_10_0001>
                            10
                        </_10_0001>
                        <_20_0001>
                            20
                        </_20_0001>
                        <_30>
                            30
                        </_30>
                        <_40>
                            40
                        </_40>
                        <_50>
                            50
                        </_50>
                        <_60>
                            60
                        </_60>
                    </Values>
                    <GraphicMain>
                        <GraphicMain_0001>
                            <GraphicMask>
                                <MaskGroup>
                                    <MaskGroup_0001>
                                        <BgToday xmlns="http://www.w3.org/2000/svg">
                                            <path fill="rgb(55, 81, 255)" d="M103.608 118.31C56.6903 116.649 12.0745 194.633 0 227.151L0 329.924L604.85 329.924L604.85 73.4235C548.875 70.9235 531.174 14.5287 488.266 14.5287C445.358 14.5287 406.62 96.1688 384.771 139.064C366.831 177.255 343.947 185.419 334.748 184.727C291.97 186.388 259.426 101.012 248.502 58.1167C238.842 9.96212 227.967 -7.86705e-06 222.628 5.09665e-05C213.67 -0.0309947 200.204 14.1141 186.404 62.2679C172.605 110.422 150.756 123.844 141.556 124.536C128.689 125.504 113.383 118.31 103.608 118.31Z"/>
                                        </BgToday>
                                    </MaskGroup_0001>
                                </MaskGroup>
                                <YesterdayGraph src="grida://assets-reservation/images/120:15368" alt="image of YesterdayGraph"/>
                                <TodayGraph src="grida://assets-reservation/images/120:15369" alt="image of TodayGraph"/>
                                <Pointer>
                                    <CirclePointer2/>
                                    <CirclePointer1/>
                                    <Value>
                                        <Sheet_0013 src="grida://assets-reservation/images/120:15374" alt="image of Sheet"/>
                                        <PointerValue>
                                            38
                                        </PointerValue>
                                    </Value>
                                </Pointer>
                            </GraphicMask>
                        </GraphicMain_0001>
                    </GraphicMain>
                </FullGraph>
                <AdditionalInfo>
                    <TasksUnresolved>
                        Tasks unresolved
                    </TasksUnresolved>
                    <_4_0001>
                        4
                    </_4_0001>
                    <DividerLineVertical>
                        <Divider_0015 src="grida://assets-reservation/images/120:15382" alt="image of Divider"/>
                    </DividerLineVertical>
                    <DividerLineHorizontal_0006>
                        <Divider src="grida://assets-reservation/images/120:15384" alt="image of Divider"/>
                    </DividerLineHorizontal_0006>
                    <TaskReceived>
                        Task Received
                    </TaskReceived>
                    <_40_0001>
                        40
                    </_40_0001>
                    <DividerLineHorizontal_0007>
                        <Divider src="grida://assets-reservation/images/120:15388" alt="image of Divider"/>
                    </DividerLineHorizontal_0007>
                    <AverageResponseTimeToTasks>
                        Average response time to tasks
                    </AverageResponseTimeToTasks>
                    <_33M>
                        33m
                    </_33M>
                    <DividerLineHorizontal_0008>
                        <Divider src="grida://assets-reservation/images/120:15392" alt="image of Divider"/>
                    </DividerLineHorizontal_0008>
                    <CompletionRate>
                        Completion rate
                    </CompletionRate>
                    <_94>
                        94%
                    </_94>
                    <DividerLineHorizontal_0009/>
                </AdditionalInfo>
            </TodaySTrends>
            <Cards>
                <Unresolved>
                    <CardsDefault_0003>
                        <Sheet/>
                    </CardsDefault_0003>
                    <UpcomingTasks>
                        Upcoming Tasks<br/>

                    </UpcomingTasks>
                    <_4_0002>
                        4
                    </_4_0002>
                </Unresolved>
                <Open>
                    <CardsDefault_0003>
                        <Sheet/>
                    </CardsDefault_0003>
                    <CompletedTasks>
                        Completed Tasks
                    </CompletedTasks>
                    <_3_0001>
                        3
                    </_3_0001>
                </Open>
                <Open_0001>
                    <CardsDefault_0003>
                        <Sheet/>
                    </CardsDefault_0003>
                    <TasksOnHold>
                        Tasks On hold
                    </TasksOnHold>
                    <_7_0001>
                        7
                    </_7_0001>
                </Open_0001>
                <Overdue>
                    <CardsHover>
                        <Stroke/>
                        <Sheet_0017/>
                    </CardsHover>
                    <OverdueTasks>
                        Overdue Tasks
                    </OverdueTasks>
                    <_16_0001>
                        16
                    </_16_0001>
                    <IconCursorPointingHand>
                        <Group>
                            <Fill1 xmlns="http://www.w3.org/2000/svg">
                                <path fill="white" d="M2.8929 11.9025C2.6089 11.5435 2.2639 10.8095 1.6499 9.91853C1.3019 9.41453 0.438897 8.46553 0.181897 7.98353C-0.0411031 7.55753 -0.0171031 7.36653 0.0358969 7.01353C0.129897 6.38553 0.773897 5.89653 1.4609 5.96253C1.9799 6.01153 2.4199 6.35453 2.8159 6.67853C3.0549 6.87353 3.3489 7.25253 3.5259 7.46653C3.6889 7.66253 3.7289 7.74353 3.9029 7.97553C4.1329 8.28253 4.2049 8.43453 4.1169 8.09653C4.0459 7.60053 3.9299 6.75353 3.7619 6.00453C3.6339 5.43653 3.6029 5.34753 3.4809 4.91153C3.3519 4.44753 3.2859 4.12253 3.1649 3.63053C3.0809 3.28253 2.9299 2.57153 2.8889 2.17153C2.8319 1.62453 2.8019 0.732532 3.1529 0.322532C3.4279 0.00153172 4.0589 -0.0954683 4.4499 0.102532C4.9619 0.361532 5.2529 1.10553 5.3859 1.40253C5.6249 1.93653 5.7729 2.55353 5.9019 3.36353C6.0659 4.39453 6.3679 5.82553 6.3779 6.12653C6.4019 5.75753 6.3099 4.98053 6.3739 4.62653C6.4319 4.30553 6.7019 3.93253 7.0399 3.83153C7.3259 3.74653 7.6609 3.71553 7.9559 3.77653C8.2689 3.84053 8.5989 4.06453 8.7219 4.27553C9.0839 4.89953 9.0909 6.17453 9.1059 6.10653C9.1919 5.73053 9.1769 4.87753 9.3899 4.52253C9.5299 4.28853 9.8869 4.07753 10.0769 4.04353C10.3709 3.99153 10.7319 3.97553 11.0409 4.03553C11.2899 4.08453 11.6269 4.38053 11.7179 4.52253C11.9359 4.86653 12.0599 5.83953 12.0969 6.18053C12.1119 6.32153 12.1709 5.78853 12.3899 5.44453C12.7959 4.80553 14.2329 4.68153 14.2879 6.08353C14.3129 6.73753 14.3079 6.70753 14.3079 7.14753C14.3079 7.66453 14.2959 7.97553 14.2679 8.34953C14.2369 8.74953 14.1509 9.65353 14.0259 10.0915C13.9399 10.3925 13.6549 11.0695 13.3739 11.4755C13.3739 11.4755 12.2999 12.7255 12.1829 13.2885C12.0649 13.8505 12.1039 13.8545 12.0809 14.2535C12.0579 14.6515 12.2019 15.1755 12.2019 15.1755C12.2019 15.1755 11.3999 15.2795 10.9679 15.2105C10.5769 15.1475 10.0929 14.3695 9.9679 14.1315C9.7959 13.8035 9.4289 13.8665 9.2859 14.1085C9.0609 14.4915 8.5769 15.1785 8.2349 15.2215C7.5669 15.3055 6.1809 15.2525 5.0959 15.2415C5.0959 15.2415 5.2809 14.2305 4.8689 13.8835C4.5639 13.6245 4.0389 13.0995 3.7249 12.8235L2.8929 11.9025Z"/>
                            </Fill1>
                            <Stroke3 src="grida://assets-reservation/images/120:15424" alt="image of Stroke3"/>
                            <Stroke5 src="grida://assets-reservation/images/120:15425" alt="image of Stroke5"/>
                            <Stroke7 src="grida://assets-reservation/images/120:15426" alt="image of Stroke7"/>
                            <Stroke9 src="grida://assets-reservation/images/120:15427" alt="image of Stroke9"/>
                        </Group>
                    </IconCursorPointingHand>
                </Overdue>
            </Cards>
            <HeaderDefault>
                <Photo>
                    <AvatarManHeader>
                        <AvatarManHeader_0001>
                            <MHeader src="grida://assets-reservation/images/120:15432" alt="image of MHeader"/>
                        </AvatarManHeader_0001>
                    </AvatarManHeader>
                    <ProfileCircle/>
                </Photo>
                <Name>
                    Seun Opeoluwa
                </Name>
                <DividerLineVertical_0001>
                    <Divider_0015 src="grida://assets-reservation/images/120:15436" alt="image of Divider"/>
                </DividerLineVertical_0001>
                <IconNotificationsNew>
                    <Vector_0002 xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(197, 199, 205)" d="M7.00002 16C8.10377 16 8.99908 15.1047 8.99908 14L5.00096 14C5.00096 15.1047 5.89627 16 7.00002 16ZM13.731 11.3216C13.1272 10.6728 11.9975 9.69687 11.9975 6.5C11.9975 4.07188 10.295 2.12812 7.9994 1.65125L7.9994 1C7.9994 0.447812 7.5519 0 7.00002 0C6.44815 0 6.00065 0.447812 6.00065 1L6.00065 1.65125C3.70502 2.12812 2.00252 4.07188 2.00252 6.5C2.00252 9.69687 0.872834 10.6728 0.269084 11.3216C0.0815841 11.5231 -0.00154089 11.7641 2.16059e-05 12C0.00345911 12.5125 0.405647 13 1.00315 13L12.9969 13C13.5944 13 13.9969 12.5125 14 12C14.0016 11.7641 13.9185 11.5228 13.731 11.3216L13.731 11.3216Z"/>
                    </Vector_0002>
                    <New/>
                </IconNotificationsNew>
                <IconSearch>
                    <Search>
                        <Ellipse/>
                        <Vector_0003 src="grida://assets-reservation/images/120:15443" alt="image of Vector"/>
                    </Search>
                </IconSearch>
                <Title_0003>
                    Overview
                </Title_0003>
            </HeaderDefault>
            <SidebarDesktop>
                <Dashboard>
                    Dashboard
                </Dashboard>
                <SidebarListActive>
                    <Sheet_0018 xmlns="http://www.w3.org/2000/svg">
                        <path fill="rgb(159, 162, 180)" d="M0 0L255 0L255 56L0 56L0 0Z"/>
                    </Sheet_0018>
                    <Selected/>
                    <Title_0004>
                        Overview
                    </Title_0004>
                    <IconSidebarActive1Overview>
                        <Vector_0004 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(221, 226, 255)" d="M15.5233 8.47046L8.54418 8.47046L13.1921 13.1184C13.3698 13.296 13.6621 13.3104 13.8448 13.1384C14.983 12.066 15.7659 10.6205 15.9957 8.99546C16.0351 8.71722 15.8042 8.47046 15.5233 8.47046L15.5233 8.47046ZM15.0577 6.56458C14.8154 3.05106 12.0077 0.243416 8.49418 0.00106353C8.22595 -0.0174658 8.00006 0.20871 8.00006 0.477533L8.00006 7.0587L14.5815 7.0587C14.8504 7.0587 15.0762 6.83281 15.0577 6.56458ZM6.5883 8.47046L6.5883 1.49135C6.5883 1.21047 6.34153 0.979591 6.06359 1.019C2.55859 1.5143 -0.120524 4.57635 0.00418193 8.24605C0.132417 12.0149 3.37742 15.1054 7.14801 15.0581C8.63036 15.0396 10.0001 14.5619 11.1262 13.7631C11.3586 13.5984 11.3739 13.2563 11.1724 13.0549L6.5883 8.47046Z"/>
                        </Vector_0004>
                    </IconSidebarActive1Overview>
                </SidebarListActive>
                <SidebarListInactive>
                    <Link href={"/event_list"}>
                        <Title_0005>
                            Event List
                        </Title_0005>
                    </Link>
                    <IconSidebarInactive2Tickets>
                        <Vector_0005 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M3.55556 2.66667L12.4444 2.66667L12.4444 8L3.55556 8L3.55556 2.66667ZM14.6667 5.33333C14.6667 6.06972 15.2636 6.66667 16 6.66667L16 9.33333C16 10.0697 15.4031 10.6667 14.6667 10.6667L1.33333 10.6667C0.596944 10.6667 0 10.0697 0 9.33333L0 6.66667C0.736389 6.66667 1.33333 6.06972 1.33333 5.33333C1.33333 4.59694 0.736389 4 0 4L0 1.33333C0 0.596944 0.596944 0 1.33333 0L14.6667 0C15.4031 0 16 0.596944 16 1.33333L16 4C15.2636 4 14.6667 4.59694 14.6667 5.33333ZM13.3333 2.44444C13.3333 2.07625 13.0349 1.77778 12.6667 1.77778L3.33333 1.77778C2.96514 1.77778 2.66667 2.07625 2.66667 2.44444L2.66667 8.22222C2.66667 8.59042 2.96514 8.88889 3.33333 8.88889L12.6667 8.88889C13.0349 8.88889 13.3333 8.59042 13.3333 8.22222L13.3333 2.44444Z"/>
                        </Vector_0005>
                    </IconSidebarInactive2Tickets>
                </SidebarListInactive>
                <SidebarListInactive_0001>
                    <Title_0006>
                        Promption
                    </Title_0006>
                    <IconSidebarInactive3Ideas>
                        <Vector_0006 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M3.00187 14.1985C3.00219 14.395 3.06031 14.5875 3.16937 14.7513L3.70344 15.5541C3.79467 15.6913 3.91841 15.8039 4.06366 15.8817C4.2089 15.9596 4.37114 16.0003 4.53594 16.0003L6.46438 16.0003C6.62917 16.0003 6.79141 15.9596 6.93665 15.8817C7.0819 15.8039 7.20564 15.6913 7.29688 15.5541L7.83094 14.7513C7.93995 14.5875 7.99822 14.3952 7.99844 14.1985L7.99969 13L3.00031 13L3.00187 14.1985ZM0 5.50003C0 6.88659 0.514063 8.15159 1.36125 9.11815C1.8775 9.70721 2.685 10.9378 2.99281 11.976C2.99406 11.9841 2.995 11.9922 2.99625 12.0003L8.00375 12.0003C8.005 11.9922 8.00594 11.9844 8.00719 11.976C8.315 10.9378 9.1225 9.70721 9.63875 9.11815C10.4859 8.15159 11 6.88659 11 5.50003C11 2.45659 8.52844 -0.00934836 5.48281 2.66431e-05C2.295 0.00971414 0 2.59284 0 5.50003ZM5.5 3.00003C4.12156 3.00003 3 4.12159 3 5.50003C3 5.77628 2.77625 6.00003 2.5 6.00003C2.22375 6.00003 2 5.77628 2 5.50003C2 3.57003 3.57 2.00003 5.5 2.00003C5.77625 2.00003 6 2.22378 6 2.50003C6 2.77628 5.77625 3.00003 5.5 3.00003Z"/>
                        </Vector_0006>
                    </IconSidebarInactive3Ideas>
                </SidebarListInactive_0001>
                <SidebarListInactive_0002>
                    <IconSidebarInactive6Articles>
                        <Vector_0007 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M14 11.25L14 0.75C14 0.334375 13.6656 0 13.25 0L3 0C1.34375 0 0 1.34375 0 3L0 13C0 14.6562 1.34375 16 3 16L13.25 16C13.6656 16 14 15.6656 14 15.25L14 14.75C14 14.5156 13.8906 14.3031 13.7219 14.1656C13.5906 13.6844 13.5906 12.3125 13.7219 11.8313C13.8906 11.6969 14 11.4844 14 11.25ZM4 4.1875C4 4.08437 4.08437 4 4.1875 4L10.8125 4C10.9156 4 11 4.08437 11 4.1875L11 4.8125C11 4.91563 10.9156 5 10.8125 5L4.1875 5C4.08437 5 4 4.91563 4 4.8125L4 4.1875ZM4 6.1875C4 6.08437 4.08437 6 4.1875 6L10.8125 6C10.9156 6 11 6.08437 11 6.1875L11 6.8125C11 6.91563 10.9156 7 10.8125 7L4.1875 7C4.08437 7 4 6.91563 4 6.8125L4 6.1875ZM11.9187 14L3 14C2.44688 14 2 13.5531 2 13C2 12.45 2.45 12 3 12L11.9187 12C11.8594 12.5344 11.8594 13.4656 11.9187 14Z"/>
                        </Vector_0007>
                    </IconSidebarInactive6Articles>
                </SidebarListInactive_0002>
                <SidebarListInactive_0003>
                    <IconSidebarInactive6Articles>
                        <Vector_0007 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M14 11.25L14 0.75C14 0.334375 13.6656 0 13.25 0L3 0C1.34375 0 0 1.34375 0 3L0 13C0 14.6562 1.34375 16 3 16L13.25 16C13.6656 16 14 15.6656 14 15.25L14 14.75C14 14.5156 13.8906 14.3031 13.7219 14.1656C13.5906 13.6844 13.5906 12.3125 13.7219 11.8313C13.8906 11.6969 14 11.4844 14 11.25ZM4 4.1875C4 4.08437 4.08437 4 4.1875 4L10.8125 4C10.9156 4 11 4.08437 11 4.1875L11 4.8125C11 4.91563 10.9156 5 10.8125 5L4.1875 5C4.08437 5 4 4.91563 4 4.8125L4 4.1875ZM4 6.1875C4 6.08437 4.08437 6 4.1875 6L10.8125 6C10.9156 6 11 6.08437 11 6.1875L11 6.8125C11 6.91563 10.9156 7 10.8125 7L4.1875 7C4.08437 7 4 6.91563 4 6.8125L4 6.1875ZM11.9187 14L3 14C2.44688 14 2 13.5531 2 13C2 12.45 2.45 12 3 12L11.9187 12C11.8594 12.5344 11.8594 13.4656 11.9187 14Z"/>
                        </Vector_0007>
                    </IconSidebarInactive6Articles>
                    <Title_0007>
                        Articles
                    </Title_0007>
                </SidebarListInactive_0003>
                <SidebarListInactive_0004>
                    <Title_0006>
                        Settings
                    </Title_0006>
                    <IconSidebarInactiveA1Settings>
                        <Vector_0009 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M14.6486 9.61253L13.3174 8.84378C13.4517 8.11878 13.4517 7.37503 13.3174 6.65003L14.6486 5.88128C14.8017 5.79378 14.8705 5.61253 14.8205 5.44378C14.4736 4.33128 13.883 3.32503 13.1111 2.48753C12.9924 2.3594 12.7986 2.32815 12.6486 2.41565L11.3174 3.1844C10.758 2.70315 10.1142 2.33128 9.41737 2.08753L9.41737 0.553154C9.41737 0.378154 9.2955 0.225029 9.12362 0.187529C7.97675 -0.0687207 6.80175 -0.0562207 5.71113 0.187529C5.53925 0.225029 5.41738 0.378154 5.41738 0.553154L5.41738 2.09065C4.72363 2.33753 4.07988 2.7094 3.51738 3.18753L2.18925 2.41878C2.03613 2.33128 1.8455 2.3594 1.72675 2.49065C0.954878 3.32503 0.364254 4.33128 0.0173787 5.4469C-0.0357463 5.61565 0.0361287 5.7969 0.189254 5.8844L1.5205 6.65315C1.38613 7.37815 1.38613 8.1219 1.5205 8.8469L0.189254 9.61565C0.0361287 9.70315 -0.0326212 9.8844 0.0173787 10.0532C0.364254 11.1657 0.954878 12.1719 1.72675 13.0094C1.8455 13.1375 2.03925 13.1688 2.18925 13.0813L3.5205 12.3125C4.07988 12.7938 4.72363 13.1657 5.4205 13.4094L5.4205 14.9469C5.4205 15.1219 5.54238 15.275 5.71425 15.3125C6.86113 15.5688 8.03612 15.5563 9.12675 15.3125C9.29862 15.275 9.4205 15.1219 9.4205 14.9469L9.4205 13.4094C10.1142 13.1625 10.758 12.7907 11.3205 12.3125L12.6517 13.0813C12.8049 13.1688 12.9955 13.1407 13.1142 13.0094C13.8861 12.175 14.4767 11.1688 14.8236 10.0532C14.8705 9.88128 14.8017 9.70003 14.6486 9.61253L14.6486 9.61253ZM7.41738 10.2469C6.03925 10.2469 4.91738 9.12503 4.91738 7.7469C4.91738 6.36878 6.03925 5.2469 7.41738 5.2469C8.7955 5.2469 9.91737 6.36878 9.91737 7.7469C9.91737 9.12503 8.7955 10.2469 7.41738 10.2469Z"/>
                        </Vector_0009>
                    </IconSidebarInactiveA1Settings>
                </SidebarListInactive_0004>
                <SidebarListInactive_0005>
                    <Title_0006>
                        Subscription
                    </Title_0006>
                    <IconSidebarInactiveA2Subscription>
                        <Vector_0010 xmlns="http://www.w3.org/2000/svg">
                            <path fill="rgb(159, 162, 180)" d="M3.03506 11.3324C2.7635 11.0609 2.90506 11.1374 2.25006 10.9621C1.95287 10.8824 1.69162 10.7293 1.45537 10.5459L0.0375617 14.0221C-0.0996258 14.3587 0.156624 14.7243 0.519749 14.7106L2.16631 14.6478L3.29881 15.844C3.54881 16.1078 3.98756 16.0256 4.12475 15.689L5.75131 11.7009C5.41256 11.8896 5.03662 12.0003 4.64787 12.0003C4.0385 12.0003 3.466 11.7631 3.03506 11.3324L3.03506 11.3324ZM11.9626 14.0221L10.5447 10.5459C10.3085 10.7296 10.0472 10.8824 9.75006 10.9621C9.09162 11.1384 9.236 11.0615 8.96506 11.3324C8.53412 11.7631 7.96131 12.0003 7.35194 12.0003C6.96319 12.0003 6.58725 11.8893 6.2485 11.7009L7.87506 15.689C8.01225 16.0256 8.45131 16.1078 8.701 15.844L9.83381 14.6478L11.4804 14.7106C11.8435 14.7243 12.0997 14.3584 11.9626 14.0221L11.9626 14.0221ZM8.21881 10.6253C8.69631 10.1393 8.751 10.1812 9.431 9.99588C9.86506 9.87744 10.2044 9.53213 10.3207 9.09025C10.5544 8.20275 10.4938 8.30994 11.1316 7.66056C11.4494 7.33713 11.5735 6.86556 11.4572 6.42369C11.2238 5.53681 11.2235 5.66056 11.4572 4.77275C11.5735 4.33088 11.4494 3.85931 11.1316 3.53588C10.4938 2.8865 10.5544 2.99338 10.3207 2.10619C10.2044 1.66431 9.86506 1.319 9.431 1.20056C8.55975 0.962752 8.66475 1.02494 8.02631 0.375252C7.7085 0.0518145 7.24506 -0.074748 6.811 0.0436895C5.94006 0.281189 6.06162 0.281502 5.18912 0.0436895C4.75506 -0.074748 4.29162 0.051502 3.97381 0.375252C3.336 1.02463 3.441 0.962752 2.56944 1.20056C2.13537 1.319 1.796 1.66431 1.67975 2.10619C1.44631 2.99338 1.50662 2.8865 0.868812 3.53588C0.550999 3.85931 0.426624 4.33088 0.543187 4.77275C0.776624 5.659 0.776937 5.53525 0.543187 6.42338C0.426937 6.86525 0.550999 7.33681 0.868812 7.66056C1.50662 8.30994 1.446 8.20275 1.67975 9.09025C1.796 9.53213 2.13537 9.87744 2.56944 9.99588C3.26881 10.1865 3.321 10.1565 3.78131 10.6253C4.19475 11.0462 4.83881 11.1215 5.33569 10.8071C5.53438 10.681 5.76487 10.614 6.00022 10.614C6.23557 10.614 6.46606 10.681 6.66475 10.8071C7.16131 11.1215 7.80537 11.0462 8.21881 10.6253ZM3.05194 5.499C3.05194 3.84181 4.37194 2.49838 6.00006 2.49838C7.62819 2.49838 8.94819 3.84181 8.94819 5.499C8.94819 7.15619 7.62819 8.49963 6.00006 8.49963C4.37194 8.49963 3.05194 7.15619 3.05194 5.499L3.05194 5.499Z"/>
                        </Vector_0010>
                    </IconSidebarInactiveA2Subscription>
                </SidebarListInactive_0005>
                <DividerLineHorizontal_0010>
                    <Divider src="grida://assets-reservation/images/120:15482" alt="image of Divider"/>
                </DividerLineHorizontal_0010>
                <Logo>
                    {/*<Ellipse_0001/>*/}
                    {/*<LogoNacos1 src="grida://assets-reservation/images/131:15775" alt="image of LogoNacos1"/>*/}
                </Logo>
            </SidebarDesktop>
            <Checkbox_0003>
                <CheckboxBase/>
            </Checkbox_0003>
        </RootWrapper11Overview>
    )
}

const RootWrapper11Overview = styled.div`
	min-height: 100vh;
	background-color: rgb(54, 55, 64);
	position: relative;
`;

const Bg = styled.svg`
	width: 1185px;
	height: 1234px;
	position: absolute;
	left: 255px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const TicketsAndTasks = styled.div`
	height: 336px;
	overflow: hidden;
	position: absolute;
	left: 283px;
	top: 875px;
	right: 35px;
`;

const Tasks = styled.div`
	height: 336px;
	overflow: hidden;
	position: absolute;
	left: 582px;
	top: 0px;
	right: -6px;
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

const AvatarGroup = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	gap: 8px;
	box-sizing: border-box;
	position: absolute;
	left: 78px;
	top: 62px;
	width: 261px;
	height: 25px;
`;

const Avatars = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	align-items: flex-start;
	flex: none;
	box-sizing: border-box;
`;

const AvatarWrap = styled.div`
	width: 20px;
	height: 24px;
	position: relative;
`;

const Avatar = styled.img`
	width: 24px;
	height: 24px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const Avatar_0006 = styled.div`
	width: 24px;
	height: 24px;
	background-color: rgb(249, 245, 255);
	border: solid 2px white;
	border-radius: 200px;
	position: relative;
`;

const Text = styled.span`
	color: rgb(127, 86, 217);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 18px;
	text-align: center;
	width: 24px;
	position: absolute;
	left: calc((calc((50% + 0px)) - 12px));
	top: calc((calc((50% + 1px)) - 9px));
`;

const AvatarAddButton = styled.div`
	width: 24px;
	height: 24px;
	background-color: white;
	border: solid 1px rgb(208, 213, 221);
	border-radius: 12px;
	position: relative;
`;

const Content = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	border-radius: 12px;
	box-sizing: border-box;
	padding: 4px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Plus = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: relative;
`;

const Icon = styled.img`
	object-fit: cover;
	position: absolute;
	left: 3px;
	top: 3px;
	right: 3px;
	bottom: 3px;
`;

const Sheet_0001 = styled.div`
	background-color: rgb(254, 200, 75);
	border-radius: 20px;
	position: absolute;
	left: 363px;
	top: 87px;
	right: 167px;
	bottom: 232px;
`;

const Sheet_0002 = styled.div`
	background-color: rgb(41, 204, 151);
	border-radius: 20px;
	position: absolute;
	left: 432px;
	top: 87px;
	right: 98px;
	bottom: 232px;
`;

const Sheet_0003 = styled.div`
	background-color: rgb(152, 162, 179);
	border-radius: 20px;
	position: absolute;
	left: 293px;
	top: 87px;
	right: 237px;
	bottom: 232px;
`;

const ButtonTextButtonPrimaryDefault = styled.div`
	width: 84px;
	height: 18px;
	position: absolute;
	top: 37px;
	right: 32px;
`;

const ViewAll = styled.span`
	color: rgb(55, 81, 255);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 0px)) - 10px));
	right: -2px;
`;

const OngoingTasksToComplete = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 32px;
	top: 32px;
	right: 176px;
`;

const Today = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 18px;
	position: absolute;
	left: 32px;
	top: 66px;
	right: 467px;
	height: 18px;
`;

const TaskCreate = styled.div`
	height: 41px;
	position: absolute;
	left: 0px;
	top: 113px;
	right: 0px;
`;

const CreateNewTask = styled.span`
	color: rgb(197, 199, 205);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 2px)) - 10px));
	right: 176px;
`;

const IconCreateInactive = styled.div`
	width: 24px;
	height: 24px;
	position: absolute;
	top: calc((calc((50% + 1px)) - 12px));
	right: 32px;
`;

const Sheet_0004 = styled.div`
	background-color: rgb(240, 241, 247);
	border-radius: 8px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Plus_0001 = styled.div`
	width: 10px;
	height: 10px;
	position: absolute;
	left: 7px;
	top: 7px;
`;

const Vector = styled.img`
	width: 0px;
	height: 10px;
	object-fit: cover;
	position: absolute;
	left: calc((calc((50% + 0px)) - 0px));
	top: calc((calc((50% + 0px)) - 5px));
`;

const Vector_0001 = styled.img`
	width: 0px;
	height: 10px;
	object-fit: cover;
	position: absolute;
	left: calc((calc((50% + 5px)) - 0px));
	top: calc((calc((50% + 5px)) - 5px));
	transform: rotate(-270deg);
	transform-origin: top left;
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

const Done = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 18px;
	position: absolute;
	left: 317px;
	top: -25px;
	right: 185px;
	height: 18px;
`;

const Urgent = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 18px;
	position: absolute;
	left: 385px;
	top: -25px;
	right: 117px;
	height: 18px;
`;

const Design = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 18px;
	position: absolute;
	left: 457px;
	top: -25px;
	right: 31px;
	height: 18px;
`;

const Task2 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 212px;
	right: 8px;
`;

const CreateNewTicketExample = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 68px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 140px;
`;

const ChipDefaultSuccess = styled.div`
	width: 23px;
	height: 24px;
	overflow: hidden;
	border-radius: 20px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 30px;
`;

const Sheet_0005 = styled.div`
	background-color: rgb(41, 204, 151);
	border-radius: 20px;
	position: absolute;
	left: 0px;
	top: 3px;
	right: 6px;
	bottom: 4px;
`;

const ControlsCheckboxInactive = styled.div`
	width: 20px;
	height: 20px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 10px));
`;

const Checkbox = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	position: absolute;
	left: 2px;
	top: 2px;
	right: 2px;
	bottom: 2px;
`;

const CheckboxBase = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	background-color: white;
	border: solid 1px rgb(208, 213, 221);
	border-radius: 4px;
	position: relative;
`;

const Sheet_0006 = styled.div`
	background-color: rgb(152, 162, 179);
	border-radius: 4px;
	position: absolute;
	left: 310px;
	top: 17px;
	right: 77px;
	bottom: 17px;
`;

const Title = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 11px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
	min-height: 14px;
	position: absolute;
	left: 317px;
	top: calc((calc((50% + 0px)) - 7px));
	right: 82px;
	height: 14px;
`;

const Task1 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 154px;
	right: 0px;
`;

const FinishTicketUpdate = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 68px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 140px;
`;

const ChipDefaultWarning = styled.div`
	width: 74px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 32px;
`;

const Sheet_0007 = styled.div`
	background-color: rgb(254, 200, 75);
	border-radius: 20px;
	position: absolute;
	left: 45px;
	top: 3px;
	right: 12px;
	bottom: 4px;
`;

const Sheet_0008 = styled.div`
	background-color: rgb(152, 162, 179);
	border-radius: 4px;
	position: absolute;
	left: 310px;
	top: 17px;
	right: 85px;
	bottom: 17px;
`;

const Checkbox_0001 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
	width: 16px;
	height: 16px;
`;

const Title_0001 = styled.span`
	color: white;
	text-overflow: ellipsis;
	font-size: 11px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	text-transform: uppercase;
	min-height: 14px;
	position: absolute;
	left: 317px;
	top: calc((calc((50% + 0px)) - 7px));
	right: 90px;
	height: 14px;
`;

const Task3 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 270px;
	right: 0px;
`;

const UpdateTicketReport = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 68px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 140px;
`;

const ChipDefaultGray = styled.div`
	width: 76px;
	height: 24px;
	overflow: hidden;
	position: absolute;
	top: calc((calc((50% + 0px)) - 12px));
	right: 32px;
`;

const Sheet_0009 = styled.div`
	background-color: rgb(152, 162, 179);
	border-radius: 20px;
	position: absolute;
	left: 47px;
	top: 3px;
	right: 12px;
	bottom: 4px;
`;

const CheckboxBase_0002 = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	background-color: rgb(249, 245, 255);
	border: solid 1px rgb(127, 86, 217);
	border-radius: 4px;
	position: relative;
`;

const Check = styled.div`
	overflow: hidden;
	position: absolute;
	left: 2px;
	top: 2px;
	right: 2px;
	bottom: 2px;
`;

const Icon_0001 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 2px;
	top: 3px;
	right: 2px;
	bottom: 4px;
`;

const UnresolvedTickets = styled.div`
	height: 336px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 576px;
`;

const ViewDetails = styled.span`
	color: rgb(55, 81, 255);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 0px)) - 10px));
	right: -2px;
`;

const UnresolvedIsssues = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 32px;
	top: 32px;
	right: 176px;
`;

const GroupSupport = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	min-height: 16px;
	position: absolute;
	left: 32px;
	top: 64px;
	right: 176px;
	height: 16px;
`;

const UnresolvedTicket1 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 96px;
	right: 0px;
`;

const WaitingOnFeatureRequest = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 134px;
`;

const _4238 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: right;
	width: 80px;
	position: absolute;
	top: calc((calc((50% + 1px)) - 10px));
	right: 32px;
`;

const UnresolvedTicket2 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 154px;
	right: 0px;
`;

const AwaitingCustomerResponse = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 134px;
`;

const UnresolvedTicket3 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 212px;
	right: 0px;
`;

const AwaitingDeveloperFix = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 134px;
`;

const UnresolvedTicket4 = styled.div`
	height: 58px;
	position: absolute;
	left: 0px;
	top: 270px;
	right: 0px;
`;

const Pending = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: left;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 1px)) - 10px));
	right: 136px;
`;

const TodaySTrends = styled.div`
	height: 546px;
	overflow: hidden;
	position: absolute;
	left: 285px;
	top: 292px;
	right: 33px;
`;

const TodaySTrends_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 402px;
	position: absolute;
	left: 32px;
	top: 32px;
`;

const AsOf25May20190941Pm = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 16px;
	text-align: left;
	width: 402px;
	min-height: 16px;
	position: absolute;
	left: 32px;
	top: 64px;
	height: 16px;
`;

const GraphHelp = styled.div`
	width: 172px;
	height: 16px;
	position: absolute;
	left: 576px;
	top: 64px;
`;

const Today_0001 = styled.div`
	width: 59px;
	height: 16px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const DividerGraphHorizontal = styled.div`
	width: 16px;
	height: 0px;
	position: absolute;
	top: 8px;
	right: 43px;
`;

const Today_0002 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 35px;
	min-height: 16px;
	position: absolute;
	top: 0px;
	right: 0px;
	height: 16px;
`;

const Yesterday = styled.div`
	width: 81px;
	height: 16px;
	position: absolute;
	left: 91px;
	top: 0px;
`;

const DividerGraphHorizontal_0001 = styled.div`
	width: 16px;
	height: 0px;
	position: absolute;
	top: 8px;
	right: 65px;
`;

const Yesterday_0001 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 12px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	width: 57px;
	min-height: 16px;
	position: absolute;
	top: 0px;
	right: 0px;
	height: 16px;
`;

const FullGraph = styled.div`
	height: 380px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: 134px;
	right: 404px;
`;

const HorizontalLines = styled.div`
	width: 686px;
	height: 336px;
	position: absolute;
	left: 0px;
	top: 19px;
`;

const DividerGraphHorizontal_0002 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 336px;
	right: 0px;
`;

const DividerGraphHorizontal_0003 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 280px;
	right: 0px;
`;

const DividerGraphHorizontal_0004 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 224px;
	right: 0px;
`;

const DividerGraphHorizontal_0005 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 168px;
	right: 0px;
`;

const DividerGraphHorizontal_0006 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 112px;
	right: 0px;
`;

const DividerGraphHorizontal_0007 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 56px;
	right: 0px;
`;

const DividerGraphHorizontal_0008 = styled.div`
	height: 0px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
`;

const DividerGraphVertical = styled.div`
	width: 0px;
	height: 221px;
	position: absolute;
	top: 134px;
	right: 272px;
`;

const Divider_0015 = styled.img`
	width: 0px;
	object-fit: cover;
	position: absolute;
	left: calc((calc((50% + 0px)) - 0px));
	top: 0px;
	bottom: 0px;
`;

const Hours = styled.div`
	height: 13px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 367px;
	right: -30px;
`;

const _0 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: 0px;
	bottom: 1px;
`;

const _1 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -329px)) - 3px));
	bottom: 1px;
`;

const _2 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -303px)) - 3px));
	bottom: 1px;
`;

const _3 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -277px)) - 3px));
	bottom: 1px;
`;

const _4 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -251px)) - 3px));
	bottom: 1px;
`;

const _5 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -225px)) - 3px));
	bottom: 1px;
`;

const _6 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -199px)) - 3px));
	bottom: 1px;
`;

const _7 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -173px)) - 3px));
	bottom: 1px;
`;

const _8 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -147px)) - 3px));
	bottom: 1px;
`;

const _9 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 6px;
	position: absolute;
	left: calc((calc((50% + -121px)) - 3px));
	bottom: 1px;
`;

const _10 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + -91px)) - 7px));
	bottom: 1px;
`;

const _11 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + -57px)) - 7px));
	bottom: 1px;
`;

const _12 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + -23px)) - 7px));
	bottom: 1px;
`;

const _13 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 11px)) - 7px));
	bottom: 1px;
`;

const _14 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 45px)) - 7px));
	bottom: 1px;
`;

const _15 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 79px)) - 7px));
	bottom: 1px;
`;

const _16 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 113px)) - 7px));
	bottom: 1px;
`;

const _17 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 147px)) - 7px));
	bottom: 1px;
`;

const _18 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 181px)) - 7px));
	bottom: 1px;
`;

const _19 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 215px)) - 7px));
	bottom: 1px;
`;

const _20 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 249px)) - 7px));
	bottom: 1px;
`;

const _21 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 283px)) - 7px));
	bottom: 1px;
`;

const _22 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	left: calc((calc((50% + 317px)) - 7px));
	bottom: 1px;
`;

const _23 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 14px;
	position: absolute;
	right: 0px;
	bottom: 1px;
`;

const Values = styled.div`
	width: 13px;
	height: 348px;
	position: absolute;
	left: 673px;
	top: 0px;
`;

const _0_0001 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 336px;
	right: 0px;
`;

const _10_0001 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 280px;
	right: 0px;
`;

const _20_0001 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 224px;
	right: 0px;
`;

const _30 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 168px;
	right: 0px;
`;

const _40 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 112px;
	right: 0px;
`;

const _50 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 56px;
	right: 0px;
`;

const _60 = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 10px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: right;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const GraphicMain = styled.div`
	width: 576px;
	height: 336px;
	position: absolute;
	left: 0px;
	top: 19px;
`;

const GraphicMain_0001 = styled.div`
	height: 336px;
	overflow: hidden;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
`;

const GraphicMask = styled.div`
	width: 627px;
	height: 330px;
	position: absolute;
	left: -9px;
	top: 52px;
`;

const MaskGroup = styled.div`
	width: 605px;
	height: 330px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const MaskGroup_0001 = styled.div`
	height: 330px;
	position: absolute;
	clip-path: path("M103.608 118.31C56.6903 116.649 12.0745 194.633 0 227.151L0 329.924L604.85 329.924L604.85 73.4235C548.875 70.9235 531.174 14.5287 488.266 14.5287C445.358 14.5287 406.62 96.1688 384.771 139.064C366.831 177.255 343.947 185.419 334.748 184.727C291.97 186.388 259.426 101.012 248.502 58.1167C238.842 9.96212 227.967 -7.86705e-06 222.628 5.09665e-05C213.67 -0.0309947 200.204 14.1141 186.404 62.2679C172.605 110.422 150.756 123.844 141.556 124.536C128.689 125.504 113.383 118.31 103.608 118.31Z");
`;

const BgToday = styled.svg`
	width: 605px;
	height: 330px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	opacity: 0.1;
`;

const YesterdayGraph = styled.img`
	height: 143px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 47px;
	right: 0px;
`;

const TodayGraph = styled.img`
	height: 227px;
	object-fit: cover;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 25px;
`;

const Pointer = styled.div`
	width: 66px;
	height: 74px;
	position: absolute;
	left: 390px;
	top: 1px;
`;

const CirclePointer2 = styled.div`
	width: 24px;
	height: 24px;
	border-radius: 24px / 24px;
	position: absolute;
	top: 50px;
	right: 21px;
	opacity: 0.2;
`;

const CirclePointer1 = styled.div`
	width: 14px;
	height: 14px;
	box-shadow: 0px 1px 2px  rgba(55, 81, 255, 0.2);
	background-color: white;
	border-radius: 14px / 14px;
	position: absolute;
	top: 55px;
	right: 26px;
`;

const Value = styled.div`
	width: 66px;
	height: 38px;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const Sheet_0013 = styled.img`
	width: 64px;
	height: 36px;
	object-fit: cover;
	position: absolute;
	left: 1px;
	top: 1px;
`;

const PointerValue = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 14px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: center;
	min-height: 16px;
	position: absolute;
	left: 13px;
	top: 8px;
	right: 13px;
	bottom: 14px;
`;

const AdditionalInfo = styled.div`
	width: 342px;
	height: 546px;
	overflow: hidden;
	position: absolute;
	top: 0px;
	right: 0px;
`;

const TasksUnresolved = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 22px;
	text-align: center;
	width: 280px;
	position: absolute;
	top: 32px;
	right: 30px;
`;

const _4_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 278px;
	position: absolute;
	top: 60px;
	right: 32px;
`;

const DividerLineVertical = styled.div`
	width: 0px;
	height: 546px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const DividerLineHorizontal_0006 = styled.div`
	width: 342px;
	height: 0px;
	position: absolute;
	top: 114px;
	right: 0px;
`;

const TaskReceived = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 22px;
	text-align: center;
	width: 280px;
	position: absolute;
	top: 138px;
	right: 30px;
`;

const _40_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 278px;
	position: absolute;
	top: 166px;
	right: 32px;
`;

const DividerLineHorizontal_0007 = styled.div`
	width: 342px;
	height: 0px;
	position: absolute;
	top: 220px;
	right: 0px;
`;

const AverageResponseTimeToTasks = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 22px;
	text-align: center;
	width: 278px;
	position: absolute;
	top: 244px;
	right: 32px;
`;

const _33M = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 278px;
	position: absolute;
	top: 272px;
	right: 32px;
`;

const DividerLineHorizontal_0008 = styled.div`
	width: 342px;
	height: 0px;
	position: absolute;
	top: 326px;
	right: 0px;
`;

const CompletionRate = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 22px;
	text-align: center;
	width: 280px;
	position: absolute;
	top: 397px;
	right: 30px;
`;

const _94 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: center;
	width: 278px;
	position: absolute;
	top: 425px;
	right: 32px;
`;

const DividerLineHorizontal_0009 = styled.div`
	width: 342px;
	height: 0px;
	position: absolute;
	top: 432px;
	right: 0px;
`;

const Cards = styled.div`
	height: 134px;
	position: absolute;
	left: 285px;
	top: 124px;
	right: 179px;
`;

const Unresolved = styled.div`
	width: 222px;
	height: 134px;
	position: absolute;
	left: 251px;
	top: 0px;
`;

const CardsDefault_0003 = styled.div`
	height: 134px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
`;

const UpcomingTasks = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: center;
	min-height: 47px;
	position: absolute;
	left: 32px;
	top: 24px;
	right: 30px;
	height: 47px;
`;

const _4_0002 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	position: absolute;
	left: 32px;
	top: 69px;
	right: 32px;
`;

const Open = styled.div`
	width: 221px;
	height: 134px;
	position: absolute;
	left: 503px;
	top: 0px;
`;

const CompletedTasks = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: center;
	min-height: 40px;
	position: absolute;
	left: 32px;
	top: 24px;
	right: 30px;
	height: 40px;
`;

const _3_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	position: absolute;
	left: 32px;
	top: 69px;
	right: 32px;
`;

const Open_0001 = styled.div`
	width: 222px;
	height: 134px;
	position: absolute;
	left: 754px;
	top: 0px;
`;

const TasksOnHold = styled.span`
	color: rgb(159, 162, 180);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: center;
	position: absolute;
	left: 32px;
	top: 24px;
	right: 30px;
`;

const _7_0001 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	position: absolute;
	left: 32px;
	top: 71px;
	right: 32px;
`;

const Overdue = styled.div`
	width: 221px;
	height: 134px;
	position: absolute;
	left: 0px;
	top: 0px;
`;

const CardsHover = styled.div`
	height: 134px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
`;

const Stroke = styled.div`
	border: solid 2px rgb(221, 226, 255);
	border-radius: 8px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const Sheet_0017 = styled.div`
	background-color: white;
	border: solid 1px rgb(235, 87, 87);
	border-radius: 8px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const OverdueTasks = styled.span`
	color: rgb(217, 45, 32);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	line-height: 20px;
	text-align: center;
	min-height: 23px;
	position: absolute;
	left: 32px;
	top: 24px;
	right: 30px;
	height: 23px;
`;

const _16_0001 = styled.span`
	color: rgb(217, 45, 32);
	text-overflow: ellipsis;
	font-size: 40px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	letter-spacing: 1px;
	text-align: center;
	position: absolute;
	left: 32px;
	top: 69px;
	right: 32px;
`;

const IconCursorPointingHand = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	top: 102px;
	right: 32px;
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

const HeaderDefault = styled.div`
	height: 44px;
	position: absolute;
	left: 285px;
	top: 30px;
	right: 33px;
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
	width: 111px;
	min-height: 18px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 9px));
	right: 56px;
	height: 18px;
`;

const DividerLineVertical_0001 = styled.div`
	width: 0px;
	height: 32px;
	position: absolute;
	top: calc((calc((50% + 4px)) - 16px));
	right: 199px;
`;

const IconNotificationsNew = styled.div`
	width: 16px;
	height: 16px;
	position: absolute;
	top: calc((calc((50% + 0px)) - 8px));
	right: 231px;
`;

const Vector_0002 = styled.svg`
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

const Vector_0003 = styled.img`
	object-fit: cover;
	position: absolute;
	left: 11px;
	top: 11px;
	right: 0px;
	bottom: 0px;
`;

const Title_0003 = styled.span`
	color: rgb(37, 39, 51);
	text-overflow: ellipsis;
	font-size: 24px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	min-height: 34px;
	position: absolute;
	left: 0px;
	top: calc((calc((50% + 1px)) - 17px));
	right: 351px;
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

const Dashboard = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 19px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 76px;
	top: 41px;
	opacity: 0.7;
`;

const SidebarListActive = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 128px;
`;

const Sheet_0018 = styled.svg`
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

const Title_0004 = styled.span`
	color: rgb(221, 226, 255);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + -1px)) - 10px));
	right: 24px;
`;

const IconSidebarActive1Overview = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0004 = styled.svg`
	width: 16px;
	height: 15px;
	position: absolute;
	left: -0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const SidebarListInactive = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 184px;
`;

const Title_0005 = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + -1px)) - 10px));
	right: 22px;
`;

const IconSidebarInactive2Tickets = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0005 = styled.svg`
	width: 16px;
	height: 11px;
	position: absolute;
	left: 0px;
	top: 3px;
	right: 0px;
	bottom: 3px;
	opacity: 0.4;
`;

const SidebarListInactive_0001 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 240px;
`;

const Title_0006 = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + -1px)) - 10px));
	right: 24px;
`;

const IconSidebarInactive3Ideas = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0006 = styled.svg`
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
	top: 233px;
`;

const IconSidebarInactive6Articles = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0007 = styled.svg`
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
	top: 291px;
`;

const Title_0007 = styled.span`
	color: rgb(164, 166, 179);
	text-overflow: ellipsis;
	font-size: 16px;
	font-family: Inter, sans-serif;
	font-weight: initial;
	text-align: left;
	position: absolute;
	left: 72px;
	top: calc((calc((50% + 2px)) - 10px));
	right: 24px;
`;

const SidebarListInactive_0004 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 418px;
`;

const IconSidebarInactiveA1Settings = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0009 = styled.svg`
	width: 15px;
	height: 16px;
	position: absolute;
	left: 1px;
	top: 0px;
	right: 1px;
	bottom: 0px;
	opacity: 0.4;
`;

const SidebarListInactive_0005 = styled.div`
	width: 255px;
	height: 56px;
	position: absolute;
	left: 0px;
	top: 474px;
`;

const IconSidebarInactiveA2Subscription = styled.div`
	width: 16px;
	height: 16px;
	overflow: hidden;
	position: absolute;
	left: 32px;
	top: calc((calc((50% + 0px)) - 8px));
`;

const Vector_0010 = styled.svg`
	width: 12px;
	height: 16px;
	position: absolute;
	left: 2px;
	top: -0px;
	right: 2px;
	bottom: -0px;
	opacity: 0.4;
`;

const DividerLineHorizontal_0010 = styled.div`
	width: 255px;
	height: 0px;
	position: absolute;
	left: 0px;
	top: 480px;
	opacity: 0.1;
`;

const Logo = styled.div`
	width: 32px;
	height: 32px;
	position: absolute;
	left: 32px;
	top: 37px;
`;

const Ellipse_0001 = styled.div`
	background-color: rgb(55, 81, 255);
	border-radius: 32px / 32px;
	position: absolute;
	left: 0px;
	top: 0px;
	right: 0px;
	bottom: 0px;
`;

const LogoNacos1 = styled.img`
	object-fit: cover;
	position: absolute;
	left: -1px;
	top: -1px;
	right: -2px;
	bottom: -2px;
`;

const Checkbox_0003 = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: row;
	align-items: center;
	box-sizing: border-box;
	position: absolute;
	left: 830px;
	top: 858px;
	width: 16px;
	height: 16px;
`;

