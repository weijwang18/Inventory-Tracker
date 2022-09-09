import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SoupControl from './SoupControl';
import Header from './Header';


function App() {
  return (
    <React.Fragment>
      <Container>
        <Header />
        <SoupControl />
      </Container>
    </React.Fragment>
  );
}

export default App;
