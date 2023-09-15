import './datatable.scss'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', flex: 0.5 },

  {
    field: 'firstName',
    headerName: 'First name',
    flex: 1,
    headerAlign: "left",
    align: "left",
  },

  {
    field: 'lastName',
    headerName: 'Last name',
    flex: 1,
  },

  {
    field: 'age',
    headerName: 'Age',
    cellClassName: "name-column--cell",
    flex: 1,
  },

  {
    field: 'Address',
    headerName: 'Address',
    type: 'text',
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

const Datatable = () => {

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
    <div className='datatable'>
      <DataGrid
        rows={rows}
        columns={columns.concat(actionColumn)}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10, 25]}
        checkboxSelection
      />
      <Box display="flex" justifyItems="end" justifyContent="space-between" mt="20px"  >
        <Link to={'/rabbitform'}>
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
    </div>
  )
}

export default Datatable