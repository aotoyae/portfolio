import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Project from '../pages/Project';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Project />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
