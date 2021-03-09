import React, { useState } from "react";
import StaticDateRangePicker from "@material-ui/lab/StaticDateRangePicker";
import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
import { Popover, Button, Box, TextField } from "@material-ui/core";
import DateInput from "./DateInput";
import "./demo.css";
import moment from "moment";

export default function StaticDateRangePickerDemo() {
  const [value, setValue] = React.useState([null, null]);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");

  const handleClick = (event) => {
    event.stopPropagation();
    event.preventDefault();
    setAnchorEl(event.currentTarget);
  };

  const handleChange = (newValue) => {
    setValue(newValue);
    const [from, to] = newValue;
    setStart(from ? moment(from).format("MMM D") : "");
    setEnd(to ? moment(to).format("MMM D") : "");
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <div onClick={handleClick}>
        <DateInput expanded={open} start={start} end={end} />
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <StaticDateRangePicker
            displayStaticWrapperAs="desktop"
            value={value}
            onChange={handleChange}
            shouldDisableDate={(e) => {
              if (new Date(e).getTime() <= new Date().getTime() - 3600 * 24 * 1000) return true;
              else return false;
            }}
            renderInput={(startProps, endProps) => {
              return (
                <React.Fragment>
                  <TextField {...startProps} variant="standard" />
                  <Box sx={{ mx: 2 }}> to </Box>
                  <TextField {...endProps} variant="standard" />
                </React.Fragment>
              );
            }}
          />
        </LocalizationProvider>
      </Popover>
    </div>
  );
}
