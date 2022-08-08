import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import SiteOverviewCard from "../../../components/sites/Overview";
import LocalDateSelector from "../../../common/LocalDateSelector";

export default function SitesOverviewPage() {
  const sitesOverview = [
    {
      id: 1,
      title: "Total Fixed Labour Hours",
      count: 1072,
    },

    {
      id: 2,
      title: "Total Casual Labour Hours",
      count: 68,
    },
    {
      id: 3,
      title: "Total Lost Time",
      count: 8,
    },
    {
      id: 4,
      title: "Total Failed Check-Ins",
      count: 1,
    },
    {
      id: 5,
      title: "Fire Alarms Reported",
      count: 1,
    },
    {
      id: 6,
      title: "Break-Ins Reported",
      count: 1,
    },
    {
      id: 7,
      title: "Incidents Reported",
      count: 5,
    },
    {
      id: 8,
      title: "Bomb Threats Reported",
      count: 0,
    },
    {
      id: 9,
      title: "Suspicious Activity Reported",
      count: 2,
    },
    {
      id: 10,
      title: "Other Profile",
      count: 0,
    },
  ];
  return (
    <Box>
      <PageTitle
        title="Sites View"
        subTitle="111, ABC Street, Sydney / Site Overview"
      />
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row" columnGap={5} mb={5} ml={4}>
          <LocalDateSelector label="Start Date" />
          <LocalDateSelector label="Finish Date" />
        </Box>

        <Grid container rowSpacing={7} columnSpacing={{ xs: 1 }}>
          {sitesOverview.map((report) => (
            <SiteOverviewCard
              title={report.title}
              subTitle={report.count}
              key={report.id}
            />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
