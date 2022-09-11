import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import SoupControl from './SoupControl';
import Header from './Header';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <Header />
        <Container>
          <SoupControl />
        </Container>
    </React.Fragment>
  );
}

export default App;
