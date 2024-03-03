import { AppRouter } from "./Routers/AppRouter";
import { DateProvider } from "./User/calendar/context/DateProvider";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <header className="align-center">Header</header>

      <main className="container">
        <UserProvider>
          <DateProvider>
          <AppRouter />
          </DateProvider>
        </UserProvider>
      </main>

      <footer className="align-center">footer</footer>
    </>
  );
}

export default App;
