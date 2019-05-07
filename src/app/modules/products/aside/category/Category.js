import React from 'react';
import { HeaderTitleMedium } from '../../../shared/header-title/HeaderTitle';
import AsideCategoryListUl from './ListUl';

const AsideCategory = ({ category }) => {
  const renderListUl = menu => {
    return menu.map(item => {
      const { id, title, menu } = item;
      return <AsideCategoryListUl title={title} menu={menu} key={id} />;
    })
  }

  return (
    <section className="aside-menu">
      <HeaderTitleMedium title="Danh mục sản phẩm" path="/" />
      {renderListUl(category)}
    </section>
  )
}

export default AsideCategory;
