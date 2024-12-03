import React, { useEffect } from "react";
import { Button, Typography } from "@mui/material";
import { connect } from "react-redux";
import InputFilter from "../base/InputFilter";

const Todo = ({ data }) => {
  return (
    <div>
      <Typography variant="h4" mt={4} mb={1}>
        Yok kum lung
      </Typography>
      <InputFilter />
    </div>
  );
};

const mapStateToProps = (state) => ({
  data: state.data,
});

export default connect(mapStateToProps)(Todo);
