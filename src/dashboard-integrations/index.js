import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsLightning } from "react-icons/bs";
import {
  FiSearch,
  FiSettings,
  FiBell,
  FiBellOff,
  FiPlus,
} from "react-icons/fi";
import {
  Container,
  Header,
  HeaderContent,
  HeaderLogo,
  HeaderNavigation,
  HeaderLink,
  HeaderActions,
  SoundBox,
  SettingsBox,
  Main,
  MainHeader,
  MainHeaderTitle,
  SearchContainer,
  MainTabs,
  ContentHeader,
  ContentHeaderIntro,
  ContentHeaderIntroTitle,
  ContentHeaderIntroSubtitle,
  ContentHeaderActions,
  Request,
  Content,
  ContentPanel,
  ContentMain,
  ContainerCard,
  CardHeader,
  CardBody,
  CardFooter,
  IconCard,
  NameCard,
  ButtonContainer,
  NameCardContainer,
  SwithContainer,
  Circle,
  LinkTabLinkTabs,
  LinkTabs,
  LinkControlPanel
} from "./styled";

const cards = [
  {
    icon: <img src={`images/zeplin.svg`} />,
    name: "Zeplin",
    subscription: "Link pull requests and automate workflows.",
  },
  {
    icon: <img src={`images/github.svg`} />,
    name: "GitHub",
    subscription: "Collaboration between designers and developers.",
  },
  {
    icon: <img src={`images/figma.svg`} />,
    name: "Figma",
    subscription: "Embed file previews in projects.",
  },
  {
    icon: <img src={`images/zapier.svg`} />,
    name: "Zapier",
    subscription: "Build custom automations and integrations with apps.",
  },
  {
    icon: <img src={`images/notion.svg`} />,
    name: "Notion",
    subscription: "Embed notion pages and notes in projects.",
  },
  {
    icon: <img src={`images/slack.svg`} />,
    name: "Slack",
    subscription: "Send notifications to channels and create projects.",
  },
  {
    icon: <img src={`images/zendesk.svg`} />,
    name: "Zendesk",
    subscription: "Link and automate Zendesk tickets.",
  },
  {
    icon: <img src={`images/jira.svg`} />,
    name: "Atlassian JIRA",
    subscription: "Plan, track, and release great software.",
  },
  {
    icon: <img src={`images/dropbox.svg`} />,
    name: "Dropbox",
    subscription: "Everything you need for work, all in one place.",
  },
  {
    icon: <img src={`images/google-chrome.svg`} />,
    name: "Google Chrome",
    subscription:
      "Link your Google account to share bookmarks across your entire team.",
  },
  {
    icon: <img src={`images/discord.svg`} />,
    name: "Discord",
    subscription: "Keep in touch with your customers without leaving the app.",
  },
  {
    icon: <img src={`images/google-drive.svg`} />,
    name: "Google Drive",
    subscription:
      "Link your Google account to share files across your entire team.",
  },
];

const DashboardIntegrations = (props) => {
  const [withSound, setWithSound] = useState(true);
  const [search, setSearch] = useState("");
  return (
    <Container>
      <Header>
        <HeaderContent>
          <HeaderLogo>
            <img src={`images/Logo.png`} />
            <span>Untitled UI</span>
          </HeaderLogo>
          <HeaderNavigation>
            <HeaderLink>
              <a href={``}>Home</a>
              <Link to={"/dashboard"}>Dashboard</Link>
              <Link to={"/projects"}>Projects</Link>
              <Link to={"/tasks"}>Tasks</Link>
              <Link to={"/reporting"}>Reporting</Link>
              <Link to={"/users"}>Users</Link>
            </HeaderLink>
            {/*<HeaderActions>*/}
            {/*  <a href={``}>*/}
            {/*    <BsLightning />*/}
            {/*    <span>Upgrade now</span>*/}
            {/*  </a>*/}
            {/*</HeaderActions>*/}
            <SettingsBox>
              <FiSettings />
            </SettingsBox>
            <SoundBox onClick={() => setWithSound(!withSound)}>
              {withSound ? <FiBell /> : <FiBellOff />}
            </SoundBox>
          </HeaderNavigation>
        </HeaderContent>
      </Header>
      <Main>
        <MainHeader>
          <MainHeaderTitle>Settings</MainHeaderTitle>
          <SearchContainer>
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <FiSearch />
          </SearchContainer>
        </MainHeader>
        <MainTabs>
          <LinkTabs>My details</LinkTabs>
          <LinkTabs>Profile</LinkTabs>
          <LinkTabs>Password</LinkTabs>
          <LinkTabs>Team</LinkTabs>
          <LinkTabs>Plan</LinkTabs>
          <LinkTabs>Billing</LinkTabs>
          <LinkTabs>Email</LinkTabs>
          <LinkTabs>Notifications</LinkTabs>
          <LinkTabs active>
            Integrations
          </LinkTabs>
          <LinkTabs>API</LinkTabs>
        </MainTabs>
        <ContentHeader>
          <ContentHeaderIntro>
            <ContentHeaderIntroTitle>
              Intergrations and connected apps
            </ContentHeaderIntroTitle>
            <ContentHeaderIntroSubtitle>
              Supercharge your workflow and connect the tool you use every day.
            </ContentHeaderIntroSubtitle>
          </ContentHeaderIntro>
          <ContentHeaderActions>
            <Request>
              <FiPlus />
              Request integration
            </Request>
          </ContentHeaderActions>
        </ContentHeader>
      </Main>
      <Content>
        <ContentPanel>
          <LinkControlPanel active>View all</LinkControlPanel>
          <LinkControlPanel>Developer tools</LinkControlPanel>
          <LinkControlPanel>Communication</LinkControlPanel>
          <LinkControlPanel>Productivity</LinkControlPanel>
          <LinkControlPanel>Browser tools</LinkControlPanel>
          <LinkControlPanel>Marketplace</LinkControlPanel>
        </ContentPanel>
        <ContentMain>
          {cards
            .filter((cards) => {
              return (
                search === "" ||
                cards.name.toLowerCase().includes(search.toLowerCase())
              );
            })
            .map((card) => {
              return <Card {...card} />;
            })}
        </ContentMain>
      </Content>
    </Container>
  );
};

const Card = React.memo((props) => {
  const { icon, name, subscription } = props;
  const [off, on] = useState(false);
  const clickSwitch = () => on(!off);
  return (
    <ContainerCard>
      <CardHeader>
        <NameCardContainer>
          <IconCard>{icon}</IconCard>
          <NameCard>{name}</NameCard>
        </NameCardContainer>
        <ButtonContainer>
          <SwithContainer onClick={clickSwitch}>
            <Circle off={off} />
          </SwithContainer>
        </ButtonContainer>
      </CardHeader>
      <CardBody>{subscription}</CardBody>
      <CardFooter>
        <a href="#">View integration</a>
      </CardFooter>
    </ContainerCard>
  );
});

export default DashboardIntegrations;
