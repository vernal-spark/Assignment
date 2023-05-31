import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem  from "@mui/material/MenuItem";

import logo from "../assets/Rectangle23.png";
import "./Table.css";

const Client = () => {
  return (
    <div className="client">
      <img src={logo} style={{ height: "30px" }} />
      MadeByMack
    </div>
  );
};

const Edit = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        style={{color:'black',border:'1px solid black'}}
      >
        Edit &gt;
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleClose}>Pause</MenuItem>
        <MenuItem onClick={handleClose}>Duplicate</MenuItem>
        <MenuItem onClick={handleClose}>Edit</MenuItem>
        <MenuItem onClick={handleClose}>Terminate</MenuItem>
        <MenuItem onClick={handleClose}>Skip to next</MenuItem>
      </Menu>
    </div>
  );
};

function createData(client, send, end_date, interval, amount, edit) {
  return { client, send, end_date, interval, amount, edit };
}

const rows = [
  createData(<Client />, 25, "24-20-2024", "3/month", "€3000", <Edit/>),
  createData(<Client />, 25, "24-20-2024", "3/month", "€3000", <Edit/>),
  createData(<Client />, 25, "24-20-2024", "3/month", "€3000", <Edit/>),
  createData(<Client />, 25, "24-20-2024", "3/month", "€3000", <Edit/>),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>
              <span style={{ color: "grey" }}>Client</span>
            </TableCell>
            <TableCell>
              <span style={{ color: "grey" }}>#Send</span>
            </TableCell>
            <TableCell>
              <span style={{ color: "grey" }}>End Date</span>
            </TableCell>
            <TableCell>
              <span style={{ color: "grey" }}>Interval</span>
            </TableCell>
            <TableCell>
              <span style={{ color: "grey" }}>Amount</span>
            </TableCell>
            <TableCell>
              <span style={{ color: "grey" }}>Edit</span>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.client}
              </TableCell>
              <TableCell>{row.send}</TableCell>
              <TableCell>{row.end_date}</TableCell>
              <TableCell>{row.interval}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>{row.edit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
