import { AppRouter } from "./Routers/AppRouter";
import { UserProvider } from "./context/UserProvider";

function App() {
  return (
    <>
      <header className="align-center">Header</header>

      <main className="container">
        <UserProvider>
          <AppRouter />
        </UserProvider>
      </main>

      <footer className="align-center">footer</footer>
    </>
  );
}

export default App;
