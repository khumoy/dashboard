import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setAlbums } from '../../redux/action';



const Albums = () => {

    const { menu } = useParams();

    console.log("menu ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setAlbums(dispatch)
    }, []);

    const data = useSelector(state => state.albums)
    return (
        <div className="row py-4">
            {data.map(v =>
                <div className="col-sm-6 col-md-4">
                    <span>{v.id}</span>
                    <h3>{v.title}</h3>
                </div>)}
        </div>
    )
}

export default Albums
