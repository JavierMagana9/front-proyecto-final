import { Header } from "./Components/Header";
import { AppRouter } from "./Routers";
import { DateProvider } from "./User/calendar/context/DateProvider";
import { ReservationProvider } from "./context/ReservationProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <Header />

      <main className="container">
        <UserProvider>
        <ReservationProvider>
          <DateProvider>
            <AppRouter />
          </DateProvider>
          </ReservationProvider>
        </UserProvider>
      </main>

      <footer className="align-center color-block-red-dark">
        <p>2024 copyright ©</p>
      </footer>
    </>
  );
}

export default App;
