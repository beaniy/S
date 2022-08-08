import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../../common/PageTitle";
import SiteDetailCard from "../../../components/sites/DetailCard";

export default function SiteDetailPage() {
  const siteDetails = [
    {
      id: 1,
      title: "Live View",
    },

    {
      id: 2,
      title: "Site View",
    },
    {
      id: 3,
      title: "Site Settings",
    },
    {
      id: 4,
      title: "Fixed Roster",
    },
    {
      id: 5,
      title: "Site Documents",
    },
    {
      id: 6,
      title: "Site Overview",
    },
    {
      id: 7,
      title: "Site Inspection Forms",
    },
    {
      id: 8,
      title: "Site Reports",
    },
  ];
  return (
    <Box>
      <PageTitle title="Sites View" subTitle="111, ABC Street, Sydney" />
      <Grid container rowSpacing={7} columnSpacing={{ xs: 1 }}>
        {siteDetails.map((report) => (
          <SiteDetailCard title={report.title} key={report.id} />
        ))}
      </Grid>
    </Box>
  );
}
