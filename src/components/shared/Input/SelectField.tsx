import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

type TProps = {
  value: string;
  menuItems: {
    value: string;
    label: string;
  }[];
  handleSelect: (event: SelectChangeEvent) => void;
  label: string;
};

const SelectField = ({ handleSelect, value, menuItems, label }: TProps) => {
  return (
    <FormControl sx={{ minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">{label}</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={value}
        label="Age"
        onChange={handleSelect}
      >
        {menuItems.map((ele) => (
          <MenuItem key={ele.value} value={ele.value}>
            {ele.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectField;
