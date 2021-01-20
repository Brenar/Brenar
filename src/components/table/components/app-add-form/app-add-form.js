import React, {useState, useCallback} from 'react';

import './app-add-form.scss'

const AddForm = ({filmList, addFilm}) => {

  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [genre, setGenre] = useState("")
  const [rating, setRating] = useState("")


  const handle = useCallback( function() {
        if(!name || name.length > 15 || !description || description.length > 25 || !genre || genre.length > 10 || !rating || rating > 10 || rating < 1 || isNaN(rating)) {
            return
        }
        addFilm({name, description, genre, rating}, filmList)
        setName('')
        setDescription('')
        setGenre('')
        setRating('')
    }, [name, description, genre, rating, setName, setDescription, setGenre, setRating, addFilm, filmList]
  )
    console.log('render')
    return (
        <div className="addForm">
            <input
                className="add-input"
                type="text"
                placeholder="enter name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="enter description"
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="add genre"
                value={genre}
                onChange={(event) => setGenre(event.target.value)}
            />
            <input
                className="add-input"
                type="text"
                placeholder="add rating"
                value={rating}
                onChange={(event) => setRating(event.target.value)}
            />
            <button
                className="add-btn"
                onClick={handle}
            >Добавить</button>
        </div>
    )
};

export default AddForm;