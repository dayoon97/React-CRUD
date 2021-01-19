import React, { useEffect, useState } from 'react';

const NameList = () => {
    const [names, setNames] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
              "http://localhost:3000/api/list"
            );
            setNames(result.data.rows.Name);
          };
          fetchData();
        });

    return(

    );
}

export default NameList;