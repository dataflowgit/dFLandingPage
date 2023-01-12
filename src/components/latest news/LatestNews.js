import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import news from "./news.js";
import NewsCards from "./NewsCards";

const LatestNews = () => {
  const [newsData] = React.useState(news);
  return (
    <Container
      maxWidth="lg"
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: { md: "0", xs: "22rem" },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h1"
          style={{  color: "#495057",fontSize: '28px',lineHeight: '43.75px',fontWeight:'bold' }}
        >
          Brows through our Self Help Hub
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          flexWrap: "wrap",
        }}
      >
        <NewsCards newsData={newsData} />
      </Box>
    </Container>
  );
};

export default LatestNews;
