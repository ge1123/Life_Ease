import React from 'react'; 
import Sidebar from '@/_layout/components/sidebar';
import '@/_styles/menu.style.scss';

interface MainLayoutProps {
  children: React.ReactNode; // 使用 React.ReactNode 定義可接收任何React節點
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="mainLayout__container">
      <Sidebar />
      <div className="mainLayout__menu">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
