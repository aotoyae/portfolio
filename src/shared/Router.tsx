import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Project from '../pages/Project';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Project />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
