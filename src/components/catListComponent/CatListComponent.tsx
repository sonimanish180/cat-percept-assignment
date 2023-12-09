import React, { useEffect, useState } from 'react';
import { fetchCatsData } from '../../api/fetchCatsData';
import { CatDetails } from '../../types/allTypes';
import { useSetRecoilState } from 'recoil';
import { currentCatState } from '../../recoil/atom';


export const CatListComponent = () => {
    const [tableData, setTableData] = useState<CatDetails[]>([]);
    const [pageNo, setPageNo] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);

    const setCurrectCatsData = useSetRecoilState<CatDetails | null>(currentCatState);
    
    const handleClick = (event: any, catInfo: CatDetails) => {
        event.stopPropagation();

        setCurrectCatsData(catInfo);
    }

    const updateCatsData = async (limit: number, pageNo: number) => {
        try {
            let data = await fetchCatsData(limit, pageNo);

            if (!!data) {
                let newData = data.map((el: any) => {
                    return  {
                        id: el?.id,
                        name: el?.name,
                        origin: el?.origin,
                        weight: el?.weight,
                        hairless: el?.hairless,
                        wikipediaUrl: el?.wikipedia_url,
                        imageUrl: el?.image?.url, 
                    }
                })

                setTableData([...newData])
            }
        }
         catch (error) {
            console.log({error})
        }
    }

    useEffect(() => {
        updateCatsData(limit, pageNo);
    }, [])

    return (
        <div className='cat-list-component'>
            <div className='table-container'>
                <table className='cat-list-table'>
                    <th className='table-head'>
                        <td className='table-cell first-col'>Breed Name</td>
                        <td className='table-cell'>Breed Origin</td>
                    </th>

                    <tbody className='table-body'>
                        {tableData && tableData?.map((el: CatDetails) => <tr className='table-row' onClick={(e: any) => handleClick(e, el)}>
                            <td className='table-cell first-col'>
                                {el.name}
                            </td>

                            <td className='table-cell'>
                                {el.origin}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}