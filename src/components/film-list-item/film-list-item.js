import React, {useState} from 'react';

import './film-list-item.css';

const FilmListItem = ({filmData, handleCheckLine}) => {

    //const [name, setName] = useState('')

  const {id, name, description, genre, rating} = filmData
    return (
        <tr>
            <td>{id}</td>
            <td><textarea className="area">{name}</textarea></td>
            <td><textarea>{description}</textarea></td>
            <td><textarea>{genre}</textarea></td>
            <td><textarea className="rating-area">{rating}</textarea></td>
            <td><input type="checkbox" onClick={() => handleCheckLine(id)}/></td>
        </tr>
    )
}

export default FilmListItem;