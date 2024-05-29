import SearchIcon from "@mui/icons-material/Search";
import { InputBase, Stack, styled } from "@mui/material";
import { ChangeEventHandler } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,

  backgroundColor: "lightgray",
  marginLeft: 0,
  width: "100%",

  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));
const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",

  width: "100%",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),

    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create(["width"]),
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
        outline: "2px solid blue",
        borderRadius: theme.shape.borderRadius,
      },
    },
  },
}));

type TProps = {
  placeholder?: string;
  handleSearch: ChangeEventHandler<HTMLInputElement>;
};

const SearchInput = ({ placeholder, handleSearch }: TProps) => {
  return (
    <Stack direction={"row"}>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder={placeholder || "Search…"}
          inputProps={{ "aria-label": "search" }}
          onChange={handleSearch}
        />
      </Search>
    </Stack>
  );
};

export default SearchInput;
