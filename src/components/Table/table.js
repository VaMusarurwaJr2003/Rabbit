import './table.scss'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tables = () => {
    const rows = [
        {
            id: 1143155,
            product: "Chicken",
            customer: "Emmanuel Musarurwa",
            address: "Madokero, Harare",
            quantity: "20",
            date: "1 March 2023",
            amount: "$120",
            method: "Cash on Delivery"
        },
        {
            id: 2248135,
            product: "Rabbits",
            customer: "Michael Musarurwa",
            address: "Sandton, Harare",
            quantity: "10",
            date: "5 March 2023",
            amount: "$300",
            method: "Cash on Delivery"
        },
        {
            id: 1278835,
            product: "Rabbits",
            customer: "James Zinyuke",
            address: "BluffHill, Harare",
            quantity: "100",
            date: "10 March 2023",
            amount: "$3000",
            method: "Online Payment"
        },
        {
            id: 2709752,
            product: "Chickens",
            customer: "Michael Musarurwa",
            address: "Sandton, Harare",
            quantity: "100",
            date: "5 May 2023",
            amount: "$600",
            method: "Cash on Delivery"
        },
        {
            id: 2716181,
            product: "Mushroom",
            customer: "Pizza Inn",
            address: "Tynwald, Harare",
            quantity: "100",
            date: "10 May 2023",
            amount: "$100",
            method: "Online Payment"
        },

    ];

    return (
        <TableContainer component={Paper} className="table">
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell className="tableCell"> Order ID</TableCell>
                        <TableCell className="tableCell"> Product</TableCell>
                        <TableCell className="tableCell"> Customer</TableCell>
                        <TableCell className="tableCell"> Address</TableCell>
                        <TableCell className="tableCell"> Quantity</TableCell>
                        <TableCell className="tableCell"> Date</TableCell>
                        <TableCell className="tableCell"> Amount</TableCell>
                        <TableCell className="tableCell"> Payment Method</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell className="tableCell"> {row.id}</TableCell>
                            <TableCell className="tableCell">{row.product}</TableCell>
                            <TableCell className="tableCell">{row.customer}</TableCell>
                            <TableCell className="tableCell">{row.address}</TableCell>
                            <TableCell className="tableCell">{row.quantity}</TableCell>
                            <TableCell className="tableCell">{row.date}</TableCell>
                            <TableCell className="tableCell">{row.amount}</TableCell>
                            <TableCell className="tableCell">{row.method}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default Tables