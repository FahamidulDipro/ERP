import { Box } from '@mui/system';
import React from 'react';
import { useQuery } from 'react-query';
import GroupFare from './GroupFare';
 
const AllGroupFares = () => {
    const { isLoading, data,refetch } = useQuery("allPaymentData", () => {
        return fetch(
          "https://api.flyfarint.com/v.1.0.0/Admin/GroupFare/all.php?all"
        ).then((res) => res.json())
    
      })
    return (
        <Box>
            <GroupFare data={data} isLoading={isLoading} refetch={refetch}></GroupFare>
        </Box>
    );
};

export default AllGroupFares;