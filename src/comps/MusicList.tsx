import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  songs: string,
  singer: string,
  album: string,
  start: number,
) {
  return { songs, singer, album, start};
}

const rows = [
  createData('Frozen yoghurt', 'shjkdhf','shjsh',1),
  createData('Frozen yoghurt', 'shjkdhf','shjsh',1),
  createData('Frozen yoghurt', 'shjkdhf','shjsh',1),
  createData('Frozen yoghurt', 'shjkdhf','shjsh',1),
];

export default function CustomizedTables() {
  return (
    <TableContainer component={Paper} sx={{ width: 600 }} style={{marginLeft:'120px',marginTop:"10px"}} >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Song</StyledTableCell>
            <StyledTableCell align="right">Singer</StyledTableCell>
            <StyledTableCell align="right">Album</StyledTableCell>
            <StyledTableCell align="right">start</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.songs}>
              <StyledTableCell component="th" scope="row">
                {row.songs}
              </StyledTableCell>
              <StyledTableCell align="right">{row.singer}</StyledTableCell>
              <StyledTableCell align="right">{row.album}</StyledTableCell>
              <StyledTableCell align="right">{row.start}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
