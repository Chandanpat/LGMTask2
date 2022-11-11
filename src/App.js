import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
function App() {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(true);

  const getdata = async () => {
    const fetchs = await fetch("https://reqres.in/api/users?page=1");
    const actualData = await fetchs.json();
    console.log(actualData.data);
    setdata(actualData.data);
    setloading(false);
  }
  useEffect(() => {
    getdata();
  }, [])

  const clear = () => {
    setdata([]);
  }
  if (loading) {
    return (
      <Box sx={{ width: '100%' ,transition:"2s" }}>
        <LinearProgress />
      </Box>
    )
  }
  return (
    <>
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%", height: "70px",padding: "0px 10px", background: "#ddd", marginBottom: "20px" }}>
        <h3 style={{ marginLeft: "10nodepx", color: "black", fontFamily: "fantasy", fontSize: "40px" }}>User Guide</h3>
        <div>
          <button onClick={getdata} style={{ background: "#1714d7", padding: "8px", border: "0px", borderRadius: "20px", outline: "none", color: "#fff", margin: "15px" }} >GET DATA</button>
          <button onClick={clear} style={{ background: "red", padding: "8px", border: "0px", borderRadius: "20px", outline: "none", color: "#fff", margin: "15px" }} >CLEAR DATA</button>
        </div>
      </nav>

      <>
        <table className="table table-secondary table-striped">
          <thead>
            <tr>
              <th scope="col">EMAIL</th>
              <th scope="col">FIRST NAME</th>
              <th scope="col">LAST NAME</th>
              <th scope="col">AVTAR</th>
            </tr>
          </thead>
          <tbody>
            {
              // eslint-disable-next-line array-callback-return

              data.map(({ id, email, first_name, last_name, avatar }) => {
                return (
                  <tr key={id}>
                    <td>{email}</td>
                    <td className='recovered'>{first_name}</td>
                    <td className='death'>{last_name}</td>
                    <td className='click'>{avatar}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </>
    </>
  );
}

export default App;
