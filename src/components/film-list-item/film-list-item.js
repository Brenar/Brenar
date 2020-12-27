import React from 'react';
import './film-list-item.css';

const FilmListItem = ({filmData, handleCheckLine, checkedLines, setChangeTempTableData}) => {

    const handleChangeData = (value, lineId, fieldName) => {
        setChangeTempTableData(prevData => {
            console.log(prevData)
            prevData.map((line, key) => {
                if(line.id === lineId) {
                    prevData[key][fieldName] = value
                }
            })

            return prevData
        })
    }

    return (
        <tr>
          {Object.keys(filmData).map((item, key) => {
            if(item === 'isChecked'){
              return <td key={key}><input type="checkbox" onClick={() => handleCheckLine(filmData.id)}/></td>
            } else {
              if(checkedLines.includes(filmData.id) && item !== 'id'){
                return <td key={key}>
                    <textarea onChange={event => handleChangeData(event.target.value, filmData.id, item)}>
                        {filmData[item]}
                    </textarea>
                </td>
              } else {
                return <td key={key}>{filmData[item]}</td>
              }
            }
          })}
        </tr>
    )
}

export default FilmListItem;