import React from 'react';
import { useRecoilValue } from 'recoil';
import { CatDetails } from '../../types/allTypes';
import { currentCatState } from '../../recoil/atom';

export const CatDetailComponent = () => {
    const currentCatsData = useRecoilValue<CatDetails | null>(currentCatState);

    if (!!currentCatsData) return (
        <div className='cat-details-component'>
            <div className='image-container'>

                <img className='cats-image' src={currentCatsData?.imageUrl} alt='Cat Name' /> 
            </div>
            
            <div className='cat-details'>
                <div className='cat-item'>
                    <span className='label'>Name:</span>
                    <span className='value'>{currentCatsData?.name}</span>
                </div>
                <div className='cat-item'>
                    <span className='label'>Origin:</span>
                    <span className='value'>{currentCatsData?.origin}</span>
                </div>
                <div className='cat-item'>
                    <span className='label'>Weight:</span>
                    <span className='value'>Imperial: {currentCatsData?.weight?.imperial} Metric: {currentCatsData?.weight?.metric}</span>
                </div>
                <div className='cat-item'>
                    <span className='label'>Hairless:</span>
                    <span className='value'>{currentCatsData?.hairless}</span>
                </div>
            </div>


            <a className='wikipedia' href={currentCatsData?.wikipediaUrl} rel="noreferrer" target='_blank'>See in Wikipedia</a>
        </div>
    )  
    return  <div className='cat-details-component'></div>
}