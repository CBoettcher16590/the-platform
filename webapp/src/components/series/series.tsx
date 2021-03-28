import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router';
import MainLayout from '../../layouts/MainLayout';

interface Series {
    series_id:string,
    series_title:string,
    series_image:string,
    series_perview:string,
    series_description:string,
    series_admin:string,
    category:string  
}



const Series = () => {

    const params = useParams<{id:string}>();
    const numId = parseInt(params.id);

    const [series, setSeries] = useState<Series>();

    return (

        <MainLayout>


        </MainLayout>

    )

}

export default Series;
