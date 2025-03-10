import { Space, TimePicker } from "antd";
import dayjs from "dayjs";

const TimePickerItem = ({ value, setDate }) => {
    return (
        <Space>
            <TimePicker
                value={value ? dayjs(value, "HH:mm:ss") : null}
                onChange={(date, dateString) => {
                    setDate((prev) => ({
                        ...prev,
                        details: {
                            ...prev.details,
                            deadlines: {
                                ...prev.details.deadlines,
                                time: date ? dateString : "" 
                            },
                        }
                    }));
                }}
                style={{
                    width: "229px",
                    height: "46px",
                    borderRadius: "10px",
                    opacity: "1",
                    backgroundColor: "transparent",
                }}
            />
        </Space>
    );
};

export default TimePickerItem;
