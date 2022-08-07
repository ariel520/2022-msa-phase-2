import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button} from '@mui/material';

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



export default function CustomizedTables(props:any) {
  return (
    <TableContainer component={Paper} sx={{ width: 600 }} style={{marginLeft:'120px',marginTop:"10px"}} >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell >Song</StyledTableCell>
            <StyledTableCell align="right">Singer</StyledTableCell>
            <StyledTableCell align="right">Album</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {props.List.map((row:any) => (
            <StyledTableRow key={row.songs}>
              <StyledTableCell component="th" scope="row">
                {row.data.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.data.artists.items[0].profile.name}</StyledTableCell>
              <StyledTableCell align="right">{row.data.albumOfTrack.name}</StyledTableCell>
              <StyledTableCell align="right"><Button color="secondary" size='small' onClick={()=>{props.OnPlay(row.data.id)}}>play</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
