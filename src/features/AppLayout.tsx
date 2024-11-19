import { memo } from 'react';
import { Outlet } from 'react-router-dom';
// import Header from './Header/Header';
// import Footer from './Footer/footer';

const AppLayout = memo(() => {

  return (
    <>
      {/* <Header /> */}
      <main>
        <Outlet/>
      </main>
      {/* <Footer /> */}
    </>
  );
})

export default AppLayout;
