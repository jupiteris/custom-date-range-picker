import React, { useState } from "react";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ExpandLessIcon from "@material-ui/icons/ExpandLess";
import { Paper, InputBase, IconButton, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  paper: {
    padding: "10px 15px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "inset 0px 0px 0px 1px #18bc9c !important",
    width: 200,
  },
  icon: {
    padding: "0px !important",
    "& svg": {
      border: "unset !important",
      color: "#26C0A2 !important",
    },
  },
}));

const DateInput = ({ start, end, expanded }) => {
  const classes = useStyles();

  const handleChange = (event) => {};

  // get the date according to the start and end date.
  let date = "Any date";
  if (start && end) {
    date = `${start} - ${end}`;
  } else if (start) {
    date = start;
  } else if (expanded) {
    date = "Select date";
  }
  // this variable is used for date-text to be bold or not
  const txt_emphasis = (start && end && !expanded) || (!start && !end && !expanded);
  // this variable is used for border to be bold or not
  const border_emphasis = start && end && !expanded;
  return (
    // <Paper
    //   className={classes.paper}
    //   sx={{ boxShadow: start && end && !expanded && "inset 0px 0px 0px 2px #18bc9c !important" }}
    // >
    //   <InputBase sx={{ ml: 1, flex: 1, color: highlight && "#26C0A2", fontWeight: highlight && "bold" }} value={date} />
    //   <IconButton className={classes.icon}>{expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
    // </Paper>
    <div className="input-box" style={{ boxShadow: border_emphasis && "inset 0px 0px 0px 2px #18bc9c" }}>
      <span style={{ color: txt_emphasis && "rgb(54 208 178)", fontWeight: txt_emphasis && "bold" }}>{date}</span>
      {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
    </div>
  );
};

export default DateInput;
