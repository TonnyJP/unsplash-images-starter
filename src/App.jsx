import { toast } from "react-toastify";
import { Gallery } from "./Gallery";
import { SearchForm } from "./SearchForm";
import { ThemeToggle } from "./ThemeToggle";
import { useAppContext } from "./context/globalContext";

const App = () => {
  const { isError } = useAppContext()
  return <main>
  <ThemeToggle />
  <div>{isError && toast.error("please provide value")}</div>
  <SearchForm />
  <Gallery />
  </main>;
};
export default App;
