import { ReactNode } from 'react';
import Header from '../components/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-[85vw] h-[100vh] mx-auto bg-gray-200">
      <Header />
      <article className="flex justify-center h-[calc(100vh-24px)] place-items-center">
        {children}
      </article>
    </main>
  );
};

export default Layout;
