import React from 'react';
import {connect} from 'react-redux'

import {handleCheckLine, filmCheckSelector} from '../../models/currency'
import './film-list-item.scss';


const FilmListItem = ({filmData, handleCheckLine, checkedLines, setChangeTempTableData}) => {


    const handleChangeData = (value, lineId, fieldName) => {
        setChangeTempTableData(prevData => {
            prevData.map((line, key) => {
                if(line.id === lineId) {
                    prevData[key][fieldName] = value
                }
            })

            return prevData
        })
    }

    const isChecked = checkedLines.includes(filmData.id)
    return (
        <tr>
          {Object.keys(filmData).map((item, key) => {
            if(item === 'isChecked'){
              return <td key={key}>
                  <input type="checkbox" checked={isChecked} onClick={() => handleCheckLine(filmData.id)}/>
              </td>
            } else {
              if(isChecked && item !== 'id'){
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

export default connect(state => ({
  checkedLines: filmCheckSelector(state)
}),
{handleCheckLine})(FilmListItem);