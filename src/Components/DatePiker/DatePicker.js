import Calendar from "react-calendar";
import { useState } from "react";

export default function DatePicker({ onSelect }) {
  const [value, setValue] = useState(new Date());

  const saveDate = (date) => {
    setValue(date);
    onSelect(date);
  };

  return (
    <div>
      <Calendar onChange={saveDate} value={value} />
    </div>
  );
}
