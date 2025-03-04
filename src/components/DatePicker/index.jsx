import React from "react";
import { DatePicker } from "antd";
import dayjs from "dayjs";

const DatePickerItem = ({ setDate, dateOfBirth }) => (
    <DatePicker
        value={dateOfBirth ? dayjs(dateOfBirth, "DD-MM-YYYY") : null}
        onChange={(date, dateString) => {
            setDate((prev) => ({
                ...prev,
                dateOfBirth: date ? dateString : "" 
            }));
        }}
        style={{ width: "229px", height: "46px", borderRadius: "10px", opacity: "1" }}
        format="DD-MM-YYYY"
        placeholder="dd-mm-yyyy"
    />
);

export default DatePickerItem;
