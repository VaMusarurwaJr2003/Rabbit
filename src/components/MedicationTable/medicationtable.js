import './medicationtable.scss'
import { Box, Button } from "@mui/material";
import { Link } from 'react-router-dom'
import { DataGrid } from '@mui/x-data-grid';
import Header from "../Header/Header"

const columns = [
  { field: "MedID", headerName: "ID", flex: 0.5 },

  {
    field: "Date",
    headerName: "Date",
    type: "Date",
    flex: 1,
    cellClassName: "name-column--cell",
  },
  {
    field: "Rabbit_Code",
    headerName: "Rabbit Code",
    headerAlign: "left",
    align: "left",
  },
  {
    field: "Vaccine",
    headerName: "Vaccine",
    flex: 1,
  },
  {
    field: "Normal_Routine",
    headerName: "Normal Routine",
    flex: 1,
  },
  {
    field: "Sick",
    headerName: "Sick",
    flex: 1,
  },
  {
    field: "Signs_symptoms",
    headerName: "Signs & Symptoms",
    flex: 1,
  },
  {
    field: "Disease",
    headerName: "Disease",
    flex: 1,
  },
  {
    field: "Applied_Medication",
    headerName: "Applied Medication",
    flex: 1,
  },
  {
    field: "Next_Vaccination_Date",
    headerName: "Next Vaccination Date",
    type: "Date",
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

const Medicationtable = () => {

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
    <div className='medicationtable'>
      <Box m="10px">
        <Header
          title="MEDICATION DETAILS TABLE"
          subtitle="Manage all the rabbits medication and vaccination details here!"
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
          <Link to={'/management/medication/medicationform'}>
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

export default Medicationtable

