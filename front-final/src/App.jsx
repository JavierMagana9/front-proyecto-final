import { Header } from "./Components/Header";
import { AppRouter } from "./Routers/AppRouter";
import { DateProvider } from "./User/calendar/context/DateProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  console.log(import.meta.env)
  return (
    <>
      <Header />

      <main className="container">
        <UserProvider>
          <DateProvider>
          <AppRouter />
          </DateProvider>
        </UserProvider>
      </main>

      <footer className="align-center color-block-red-dark">
        <p>footer</p>
      </footer>
    </>
  );
}

export default App;
