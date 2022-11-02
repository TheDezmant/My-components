import React, { useState } from "react";
import useNotification from "../../hooks/useNotification";
import { TextField } from "@mui/material";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import Button from "../Button";

const Notification = () => {
  const { changeText, date, setDate } = useNotification();
  const [valueText, setValueText] = useState("");
  const [value, setValue] = React.useState<Date | null>(null);
  const sendChange = () => {
    changeText(valueText);
    setDate(value);
  };

  console.log(date);
  return (
    <>
      <textarea
        value={valueText}
        onChange={(e) => setValueText(e.target.value)}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DateTimePicker
          renderInput={(props) => <TextField {...props} />}
          label="DateTimePicker"
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
        />
      </LocalizationProvider>
      <Button onClick={sendChange}>Добавить уведомление</Button>
    </>
  );
};

export default React.memo(Notification);
