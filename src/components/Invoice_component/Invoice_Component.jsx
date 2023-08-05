import { Container } from '@mui/system';
import React from 'react'
import classes from "../Invoice_component/Invoice_component.module.css";
import { Box, Grid, Typography, Button, TextField } from '@mui/material'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Card_section() {
    function createData(course_price, discount, total) {
        return { course_price, discount, total };
    }

    const rows = [
        createData('150 جنيها', "0 جنيها", '150 جنيها')
    ];

    return (
        <Container>
            <Box
                sx={{
                    flexGrow: 1, marginTop: "2rem",
                    boxSizing: "border-box",
                    minHeight: "30rem", position: "relative"
                }}>
                <Grid container >
                    <Grid
                        xs={12} md={10}
                        sx={{
                            position: { md: "relative" },
                            margin: { md: "-12% auto 0 auto" },
                            zIndex: { md: "100" },
                            backgroundColor: "white",
                            border: '1px solid black',
                        }}>
                        <Typography sx={{ color: "black", padding: "1rem", textAlign: "center", fontWeight: "bold" }} variant='h4' fontFamily={'inherit'}>الفاتورة</Typography>
                        <Typography sx={{ color: "black", padding: "1rem" }} variant='subtitle1' fontFamily={'inherit'}>
                            هل لديك كوبون؟
                            <Typography variant="span" color="#f43f5e" className={classes.span}> أنسخه الأن</Typography>
                        </Typography>
                        <TextField id="standard-basic" label="الكوبون الخاص بك" variant="standard" />
                        <TableContainer component={Paper}>
                            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell>سعر الكورس</TableCell>
                                        <TableCell align="center">الخصم</TableCell>
                                        <TableCell align="center">اجمالي سعر الفاتورة النهائي</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {rows.map((row) => (
                                        <TableRow
                                            key={row.course_price}
                                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                        >
                                            <TableCell component="th" scope="row">
                                                {row.course_price}
                                            </TableCell>
                                            <TableCell align="center">{row.discount}</TableCell>
                                            <TableCell align="center">{row.total}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                        <Button className={classes.ButtonHover}
                            sx={{
                                color: "white",
                                backgroundColor: "#3b82f6",
                                fontFamily: "inherit",
                                display: "flex",
                                margin: "auto"
                            }}
                            size="large" variant="outlined">الذهاب للدفع</Button>
                    </Grid>
                </Grid>
            </Box>
        </Container >
    )
}
