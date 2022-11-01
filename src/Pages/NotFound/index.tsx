import React from "react";
import { Box, Typography } from "@mui/material";

const NotFound = () => {
  return (
    <Box textAlign="center" sx={{ padding: "0 50px 0" }}>
      <Typography
        variant="h1"
        color="primary"
        fontWeight="medium"
        sx={{ fontFamily: `"M PLUS Rounded 1c", sans-serif` }}
      >
        404
      </Typography>
      <Typography my={2}>お探しのページは見つかりませんでした。</Typography>
    </Box>
  );
};

export default NotFound;
