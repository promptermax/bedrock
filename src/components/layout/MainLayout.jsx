import React from 'react';
import Header from './Header';
import Footer from './Footer';

function MainLayout({ children }) {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main style={{ paddingTop: '116px' }}>{children}</main>
      <Footer />
    </div>
  );
}

export default MainLayout;
