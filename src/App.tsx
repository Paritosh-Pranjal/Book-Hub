import HomePage from './pages/HomePage';
import React from 'react';

const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
        <Routes>
        <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<AboutPage />} />
        </Routes>
      </BrowserRouter> */}
      <HomePage /> 
    </div>
  );
};

export default App;
