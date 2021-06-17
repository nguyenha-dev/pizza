import React, { lazy, Suspense } from 'react';
import { MenuList } from '../helpers/MenuList';

const MenuItem = lazy(() => import('../components/MenuItem'));

const Menu = () => (
    <div className='menu'>
        <h1 className='menu-title'>Our Menu</h1>
        <div className='menu-list'>
            <Suspense fallback={<div>Loading...</div>}>
                {MenuList.map((menuItem, key) =>
                    <MenuItem
                        key={key}
                        image={menuItem.image}
                        name={menuItem.name}
                        price={menuItem.price}
                    />
                )}
            </Suspense>
        </div>
    </div>
);

export default Menu;
