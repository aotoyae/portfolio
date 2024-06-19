import { ReactNode } from 'react';
import Header from '../components/Header';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="w-[85vw] mx-auto my-4 bg-gray-200">
      <Header />
      <article>{children}</article>
    </main>
  );
};

export default Layout;
