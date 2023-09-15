import './matingtable.scss'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Header from "../Header/Header"

const columns = [
  { field: "MatingID", headerName: "ID", flex: 0.5 },

  {
    field: "Date",
    headerName: "Date",
    type: "Date",
    editable: true,
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "Father",
    headerName: "Father(Buck)",
    headerAlign: "left",
    editable: true,
    align: "left",
  },
  {
    field: "Mother",
    headerName: "Mother(Doe)",
    editable: true,
    flex: 1,
  },
  {
    field: "Shade",
    headerName: "Shade",
    editable: true,
    flex: 1,
  },
  {
    field: "Cage",
    headerName: "Cage",
    editable: true,
    flex: 1,
  },
  {
    field: "Compartment",
    headerName: "Compartment",
    editable: true,
    flex: 1,
  },
  {
    field: "Try1",
    headerName: "Mating Date Try1",
    type: "Date",
    editable: true,
    flex: 1,
  },
  {
    field: "Try2",
    headerName: "Expected Mating Date Try2",
    type: "Date",
    editable: true,
    flex: 1,
  },
  {
    field: "Delivery_Date",
    headerName: "Expected Delivery Date",
    type: "Date",
    editable: true,
    flex: 1,
  },
  {
    field: "Comment",
    headerName: "Comment",
    editable: true,
    flex: 1,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: 90 },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

const Matingtable = () => {

  const actionColumn = [
    {
      field: 'action',
      headerName: "Action",
      flex: 1,
      renderCell: () => {
        return (
          <div className='cellAction'>
            <div className='viewButton'>View</div>
            <div className='deleteButton'>Delete</div>
          </div>
        );
      },
    },
  ];
  return (
    <div className='matingtable'>
      <Box m="10px">
        <Header
          title="MATING DETAILS TABLE"
          subtitle="Manage all the rabbits mating details here!"
          className="header"
        />

        <DataGrid
          rows={rows}
          columns={columns.concat(actionColumn)}
          className='font'
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10, 25]}
        />
        <Box display="flex" justifyItems="end" justifyContent="space-between" mt="20px"  >
          <Link to={'/management/mating/matingform'}>
            <Button type="submit" variant="contained" className="btnadd" >
              Add
            </Button>
          </Link>



          <Link to={'/management'}>
            <Button type="submit" color="secondary" variant="contained" className="btnadd">
              Back
            </Button>
          </Link>
        </Box>

      </Box >
    </div>
  )
}

export default Matingtable

