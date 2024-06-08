import React from 'react'; 
import Sidebar from '@/layout/components/sidebar';

interface MainLayoutProps {
  children: React.ReactNode; // 使用 React.ReactNode 定義可接收任何React節點
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <div className="flex-1">
        {children}
      </div>
    </div>
  );
}

export default MainLayout;
