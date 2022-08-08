import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../common/PageTitle";
import FAQCard from "../../components/faq/FAQCard";

export default function FAQPage() {
  const qustions = [
    {
      id: 1,
      title: "Frequently Asked Questions",
    },

    {
      id: 2,
      title: "Privacy Policy",
    },
    {
      id: 3,
      title: "User Guide",
    },
  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="FAQ's" subTitle="Online Reference Documents" />
      <Box display="flex">
        <Grid
          container
          rowSpacing={7}
          columnSpacing={{ xs: 1 }}
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          mt="8%"
        >
          {qustions.map((report) => (
            <FAQCard large title={report.title} key={report.id} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
