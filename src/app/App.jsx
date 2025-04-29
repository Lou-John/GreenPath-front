import AppRoutes from "./routes";
import { Header } from "../features/header";
import { AuthProvider } from "../features/auth";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-col h-screen">
        <Header />
        <AppRoutes />
      </div>
    </AuthProvider>
  );
}

export default App;
