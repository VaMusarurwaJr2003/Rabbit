import './breedingtable.scss'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Header from "../Header/Header"

const columns = [
  { field: "BreedingID", headerName: "ID", flex: 0.5 },

  {
    field: "Date",
    headerName: "Date",
    type: "Date",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "Father",
    headerName: "Father(Buck)",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Mother",
    headerName: "Mother(Doe)",
    flex: 1,
  },
  {
    field: "Shade",
    headerName: "Shade",
    flex: 1,
  },
  {
    field: "Cage",
    headerName: "Cage",
    flex: 1,
  },
  {
    field: "Compartment",
    headerName: "Compartment",
    flex: 1,
  },
  {
    field: "Birth_Date",
    headerName: "Birth Date",
    type: "Date",
    flex: 1,
  },
  {
    field: "Live",
    headerName: "Live",
    flex: 1,
  },
  {
    field: "Dead",
    headerName: "Dead",
    flex: 1,
  },
  {
    field: "Comment",
    headerName: "Comment",
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

const Breedingtable = () => {

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
    <div className='breedingtable'>
      <Box m="10px">
        <Header
          title="BREEDING DETAILS TABLE"
          subtitle="Manage all the rabbit breeding details here!"
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
          <Link to={'/management/breeding/breedingform'}>
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

export default Breedingtable

