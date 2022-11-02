import React, { useEffect, useState } from "react";

import { columns } from "./columns";
import { UserData } from "./types";
import Table from "../Table";

const UsersTable = () => {
  const showInConsole = (selectedRows: UserData[]) => {
    console.log(selectedRows);
  };
  const [users, setUsers] = useState<UserData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [offset, setOffset] = useState(0);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=${limit}&_start=${offset}`
    )
      .then((response) => response.json())
      .then((json) => setUsers(json))
      .finally(() => setIsLoading(false));
  }, [offset, limit]);
  // здесь правильно получить данные из стора, например с помощью useSelector
  return (
    <div
      style={{
        height: "calc(100vh - 230px)",
        width: "100%",
      }}
    >
      {isLoading ? (
        "Loading..."
      ) : (
        <Table<UserData> // <-- тут указываем тип для данных, которые приходят с бэка в эту таблицу
          columns={columns}
          data={users} // <-- то есть тип для вот этой data
          isSelectable
          onChangeSelectedRows={showInConsole}
          setOffset={setOffset}
          offset={offset}
          limit={limit}
          setLimit={setLimit}
        />
      )}
    </div>
  );
};

export default UsersTable;
