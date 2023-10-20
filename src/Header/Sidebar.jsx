import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './Sidebar.css';


export default props => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        ثبت نام
      </a>
      <a className="menu-item" href="/">
        افزودن آگهی
      </a>
      <a className="menu-item" href="/">
        صفحات
      </a>
      <a className="menu-item" href="/">
        وبلاگ
      </a>
      <a className="menu-item" href="/">
        آگهی ها
      </a>
      <a className="menu-item" href="/">
        جزییات آگهی
      </a>
      <a className="menu-item" href="/">
        طرح بندی آگهی
      </a>
      <a className="menu-item" href="/">
        دموها
      </a>
    </Menu>
  );
};