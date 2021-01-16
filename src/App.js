import './App.css';
import Container from "./components/Container";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <div className="App">
      <Container>
        <Header>
          <SearchForm>
            <EmployeeCard>
              
            </EmployeeCard>
          </SearchForm>
        </Header>
      </Container>
    </div>
  );
}

export default App;
