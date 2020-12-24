import React from 'react';

const FilmListItem = ({filmData, handleCheckLine}) => {
  const {id, name, description, genre, rating} = filmData
    return (
        <tr>
            <td>{id}</td>
            <td><textarea>{name}</textarea></td>
            <td><textarea>{description}</textarea></td>
            <td>{genre}</td>
            <td>{rating}</td>
            <td><input type="checkbox" onClick={() => handleCheckLine(id)}/></td>
        </tr>
    )
}

export default FilmListItem;