import React from 'react';
import { CatListComponent } from '../../catListComponent/CatListComponent';
import { CatDetailComponent } from '../../catDetailComponent/CatDetailComponent';

export const HomePage = () => {

    return (
        <div className='homepage'>
            <CatListComponent />
            <CatDetailComponent />
        </div>
    )
}