import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { setTodos } from '../../redux/action';


const Todos = () => {
    const { menu } = useParams();
    console.log("todoni ichida", menu);

    const dispatch = useDispatch();

    useEffect(() => {
        setTodos(dispatch);
    }, [])

    const data = useSelector(state => state.todos);

    return (
        <div className="py-3">
            <h1 className="my-4">Todo</h1>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>id</TableCell>
                        {/* <TableCell>userId</TableCell> */}
                        <TableCell>title</TableCell>
                        <TableCell>completed</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(v =>
                        <TableRow key={v.id}>
                            <TableCell>{v.id}</TableCell>
                            {/* <TableCell>{v.userId}</TableCell> */}
                            <TableCell>{v.title}</TableCell>
                            <TableCell>
                                {v.completed && <FontAwesomeIcon icon={faCheck} color="green" /> || ""}
                            </TableCell>
                        </TableRow>
                    )}
                </TableBody>
            </Table>
        </div>
    )
}

export default Todos