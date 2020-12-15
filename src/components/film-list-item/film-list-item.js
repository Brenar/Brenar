import React from 'react';

const FilmListItem = ({filmData}) => {
  const {id, name, description, genre, rating} = filmData
    return (
        <tr>
            <td>{id}</td>
            <td>{name}</td>
            <td>{description}</td>
            <td>{genre}</td>
            <td>{rating}</td>
            <td><input type="checkbox"/></td>
        </tr>
    )
}

export default FilmListItem;