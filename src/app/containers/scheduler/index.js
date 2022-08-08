import React from "react";
import { Box, Grid } from "@mui/material";
import PageTitle from "../../common/PageTitle";
import FAQCard from "../../components/faq/FAQCard";

export default function SchedulerPage() {
  const schedule = [
    {
      id: 1,
      title: "Create Alarm Response",
    },

    {
      id: 2,
      title: "Casual Shifts",
    },
  ];
  return (
    <Box sx={{ height: "inherit" }}>
      <PageTitle title="Scheduler" />
      <Box display="flex">
        <Grid
          container
          rowSpacing={7}
          columnSpacing={{ xs: 1 }}
          alignContent="center"
          justifyContent="center"
          alignItems="center"
          mt="20%"
        >
          {schedule.map((report) => (
            <FAQCard large title={report.title} key={report.id} />
          ))}
        </Grid>
      </Box>
    </Box>
  );
}
