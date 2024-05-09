import React from 'react'; // 引入React，因为我们将使用React类型
import Sidebar from '../components/Sidebar';

interface MainLayoutProps {
  children: React.ReactNode; // 使用 React.ReactNode 类型来定义可以接收任何有效的React节点
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
