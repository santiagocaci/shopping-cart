import { Navigate, Route, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import { Home, About, Store } from './pages';

function App() {
  return (
    <Container className='mb-5'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/store' element={<Store />} />
        <Route path='/about' element={<About />} />

        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
    </Container>
  );
}

export default App;
