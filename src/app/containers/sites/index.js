import { Box, Grid } from "@mui/material";
import React from "react";
import PageTitle from "../../common/PageTitle";
import SiteCard from "../../components/sites/SiteCard";

function SitePage() {
  const sites = [
    {
      id: 1,
      title: "111, ABC Street, Sydney",
    },
    {
      id: 2,
      title: "222, DEF Street, Melbourne",
    },
    {
      id: 3,
      title: " 333, GHI Street. Brisbane",
    },
    {
      id: 4,
      title: "444, JKL Street, Perth",
    },
    {
      id: 5,
      title: "555, MNO Street, Adelaide",
    },
    {
      id: 6,
      title: " 667, PQR Street, Ryde",
    },
    {
      id: 7,
      title: "777, STU Street, Sydney",
    },
    {
      id: 8,
      title: " 888, VWX Street, Sydney",
    },
    {
      id: 9,
      title: "999 Yz Street, Sydney",
    },
  ];
  return (
    <Box>
      <PageTitle title="Sites View" />
      <Grid container rowSpacing={7} columnSpacing={3} pl={5}>
        {sites.map((report) => (
          <SiteCard title={report.title} key={report.id} id={report.id} />
        ))}
      </Grid>
    </Box>
  );
}

export default SitePage;
