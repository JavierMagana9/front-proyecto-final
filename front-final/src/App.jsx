import { Header } from "./Components/Header";
import { AppRouter } from "./Routers/AppRouter";
import { UserProvider } from "./context/UserProvider";

function App() {
  console.log(import.meta.env)
  return (
    <>
      <Header />

      <main className="container">
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </main>

      <footer className="align-center color-block-red-dark">
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
