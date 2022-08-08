import React from "react";
import List from "@mui/material/List";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PeopleIcon from "@mui/icons-material/People";
import { ListSubheader } from "@mui/material";
import {
  Map as MapIcon,
  ListAlt,
  Schedule,
  Report,
  Security,
  Dangerous,
  HealthAndSafety,
  Pages,
  Notifications,
  Quiz,
  SupportAgent,
  Logout,
  House,
} from "@mui/icons-material";
import ListItemLink from "../common/ListItemLink";

function SideMenu() {
  const dashboardMenus = [
    {
      primary: "Dashboard",
      to: "/",
      icon: <DashboardIcon />,
    },
    {
      primary: "Sites",
      to: "/sites",
      icon: <House />,
    },
    {
      primary: "Guards",
      to: "/users",
      icon: <Security />,
    },
    {
      primary: "Trackers",
      to: "/trackers",
      icon: <MapIcon />,
    },
    {
      primary: "Timesheets",
      to: "/timesheets",
      icon: <ListAlt />,
    },
    {
      primary: "Scheduler",
      to: "/scheduler",
      icon: <Schedule />,
    },
    {
      primary: "Reports",
      to: "/reports",
      icon: <Report />,
    },
    {
      primary: "Users",
      to: "/users",
      icon: <PeopleIcon />,
    },
    {
      primary: "Alert Information",
      to: "/alerts",
      icon: <Dangerous />,
    },
    {
      primary: "Safety Tips",
      to: "/safety-tips",
      icon: <HealthAndSafety />,
    },
    {
      primary: "App Page",
      to: "/app_page",
      icon: <Pages />,
    },
    {
      primary: "Notification",
      to: "/notifications",
      icon: <Notifications />,
    },
    {
      primary: "FAQ's",
      to: "/faq",
      icon: <Quiz />,
    },
    {
      primary: "Support",
      to: "/supports",
      icon: <SupportAgent />,
    },
    {
      primary: "Log Out",
      to: "/login",
      icon: <Logout />,
    },
  ];


  return (
    <>
      <List
        component="nav"
        subheader={
          <ListSubheader
            sx={{
              fontSize: "larger",
              fontWeight: "700",
              lineHeight: "normal",
              my: 3,
            }}
            component="p"
            id="nested-list-subheader"
          >
            Super Admin
          </ListSubheader>
        }
      >
        {dashboardMenus.slice(0, 2).map(({ primary, to, icon }) => (
          <ListItemLink primary={primary} to={to} icon={icon} key={primary} />
        ))}
      </List>
      <List
        component="nav"
        subheader={
          <ListSubheader
            sx={{ fontSize: "larger", fontWeight: "700", my: 1 , marginBottom : 4}}
            component="p"
            id="nested-list-subheader"
          >
            Company
          </ListSubheader>
        }
      >
        {dashboardMenus.slice(2).map(({ primary, to, icon }) => (
          <ListItemLink primary={primary} to={to} icon={icon} key={primary} />
        ))}
      </List>
    </>
  );
}

export default SideMenu;
