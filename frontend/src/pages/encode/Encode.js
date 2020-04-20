import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { withPageContainer } from "../../components/page-containter";
import UploadForm from "../../components/upload-form/UploadForm";

function Encode() {
  return (
    <Grid
      container
      item
      justify="space-evenly"
      alignItems="center"
      direction="column"
    >
      <Grid item>
        <Typography variant="h4" color="primary">
          Enter a message to encode and upload an image
        </Typography>
      </Grid>
      <Grid item>
        <UploadForm></UploadForm>
      </Grid>
    </Grid>
  );
}

export default withPageContainer(Encode);
