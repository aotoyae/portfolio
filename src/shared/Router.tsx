import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Home from '../pages/Home';
import Project from '../pages/Project';
import Detail from '../pages/Detail';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/project/:id" element={<Detail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
