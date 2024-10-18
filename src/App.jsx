import React from "react";
import { Box, Button, Container, Paper, Typography } from "@mui/material";
import DarkModeToggle from "./components/DarkModeToggle";

const serviceList = ["Service 1", "Service 2", "Service 3"];

const App = () => {
  return (
    <Container>
      <DarkModeToggle />
      <Typography
        variant="h1"
        sx={{ my: 4, textAlign: "center", color: "primary.main" }}
      >
        My Cards
      </Typography>
      <Typography variant="h2">Overview</Typography>
      <Box
        sx={{
          pt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          gap: 4,
        }}
      >
        {serviceList.map((ele, index) => (
          <Paper elevation={3} sx={{ width: { xs: 1, md: 320 } }} key={index}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{ele}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor
                laborum molestias magni, autem minima, perferendis ea atque qui
                et voluptates id ipsam veniam quae facilis quia non voluptas
                praesentium aperiam!
              </Typography>
              <Button variant="contained" color="secondary" sx={{ mt: 2 }}>
                Learn More
              </Button>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
};

export default App;
