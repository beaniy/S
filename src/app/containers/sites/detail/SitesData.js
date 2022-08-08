import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import LocalDateSelector from "../../../common/LocalDateSelector";
import SiteOverviewCard from "../../../components/sites/Overview";

export default function SiteDataPage() {
  const sitesData = [
    {
      id: 1,
      title: "Guards Clocked In",
      count: 6,
    },

    {
      id: 2,
      title: "Shift Logs Recieved",
      count: 0,
    },
    {
      id: 3,
      title: "Trespassing Reported",
      count: 6,
    },
    {
      id: 4,
      title: "Late Clock In",
      count: 1,
    },
    {
      id: 5,
      title: "Hazards Reported",
      count: 1,
    },
    {
      id: 6,
      title: "Vandalism Reported",
      count: 1,
    },
    {
      id: 7,
      title: "Failed Clock In / Clock Out",
      count: 0,
    },
    {
      id: 8,
      title: "Injury Reported",
      count: 0,
    },
    {
      id: 9,
      title: "Break Ins Reported",
      count: 2,
    },
  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle
        title="Sites View"
        subTitle="111, ABC Street, Sydney / Live View"
      />
      <Box display="flex" flexDirection="column" rowGap={7}>
        <Box>
          <LocalDateSelector />
        </Box>
        <Grid
          container
          rowSpacing={7}
          columnSpacing={{ xs: 1 }}
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          mb="20%"
        >
          {sitesData.map((report) => (
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
