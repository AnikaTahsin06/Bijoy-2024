import Login from "./pages/login";
import Signup from "./pages/signup";
import Table from "./pages/table";

export default function Home() {
  return (
    <main className="min-h-screen">
        <Login />
        <Signup />
        <Table />
    </main>
  );
}
