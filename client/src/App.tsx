import { GetUsersDocument } from "./graphql/generated";
import { User } from "./types";
import UserDisplay from "./components/UserDisplay";
import { useQuery } from "urql";

function App() {
  const [results] = useQuery<{ users: User[] }>({ query: GetUsersDocument });
  const { data } = results;
  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center p-4 gap-y-12 overflow-scroll">
      {data?.users.map((user) => (
        <UserDisplay user={user} />
      ))}
    </div>
  );
}

export default App;
