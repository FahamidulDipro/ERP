import { Box, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./SearchList.css";

const SearchList = () => {
  //  data fetch from search history api
  const [searchData, setSearchData] = useState([]);
  const [shortValues, setShortValue] = useState([]);

  //  pagination handle
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);
  let size = 10;

  // Handle a page change.
  const handlePageChange = (event, value) => {
    setPage(value);
    setShortValue(searchData.slice((value - 1) * size, value * size));
  };

  useEffect(() => {
    fetch(`https://api.flyfarint.com/v.1.0.0/Admin/SearchHistory/all.php?all`)
      .then((res) => res.json())
      .then((data) => {
        const count = data.length;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
        setShortValue(data);
        setSearchData(data);
      });
  }, []);

  //  search part handle
  const handelSearchItems = (e) => {
    let searchInput = e.target.value;

    if (searchInput !== "") {
      const filterData = searchData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });

      setShortValue(filterData);
    } else if (searchInput === "") {
      setShortValue(searchData);
    }
  };

  return (
    <Box
      style={{ width: "98% " }}
      className="searchHistoryTable"
      marginTop={"20px"}
    >
      <Box className="searchList1" mb={2}>
        <input type="text" placeholder="search" onChange={handelSearchItems} />
      </Box>

      <table>
        <thead>
          <tr>
            <th>Search ID</th>
            <th>Company Name</th>
            <th>Search Date </th>
            <th>Type</th>
            <th colSpan={2}>Route</th>
            <th>Departure Date </th>
            <th>Arrival Date </th>
            <th colSpan={3}>Pax</th>
            <th>Class</th>
          </tr>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th style={{ backgroundColor: "#003566", width: "60px" }}>From </th>
            <th style={{ backgroundColor: "#003566", width: "60px" }}>To </th>
            <th> </th>
            <th></th>
            <th style={{ backgroundColor: "#003566" }}>Adult</th>
            <th style={{ backgroundColor: "#003566" }}>Child</th>
            <th style={{ backgroundColor: "#003566" }}>Infant</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {shortValues.slice(0, size).map((searchValue) => (
            <tr>
              <td>{searchValue?.searchId}</td>
              <td>{searchValue?.company}</td>
              <td>{searchValue?.searchTime.slice(0, 10)}</td>
              <td>{searchValue?.searchtype}</td>
              <td>{searchValue?.DepFrom}</td>
              <td>{searchValue?.ArrTo}</td>
              <td>{searchValue?.depTime}</td>
              <td>{searchValue?.returnTime}</td>
              <td>{searchValue?.adult}</td>
              <td>{searchValue?.child}</td>
              <td>{searchValue?.infant}</td>
              <td>{searchValue?.class}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Box
        sx={{
          width: "100%",
          my: 3,
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Stack spacing={2}>
          <Pagination
            count={pageCount}
            onChange={handlePageChange}
            shape="rounded"
          />
        </Stack>
      </Box>
    </Box>
  );
};

export default SearchList;
