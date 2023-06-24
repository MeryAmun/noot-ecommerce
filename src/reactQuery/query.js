import { useQuery } from "react-query";

const { data, status } = useQuery("users", fetchUsers);

  