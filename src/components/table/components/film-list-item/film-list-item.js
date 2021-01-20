import React from 'react';
import {connect} from 'react-redux'
import {handleCheckLine, filmCheckSelector, handleChangeData} from '../../../../models/currency'
import './film-list-item.scss';


const FilmListItem = ({filmData, handleCheckLine, checkedLines, handleChangeData}) => {

    const isChecked = checkedLines.includes(filmData.id)
    return (
      
        <tr>
          {Object.keys(filmData).map((item, key) => {
            if(item === 'isChecked'){
              return <td key={key}>
                  <input type="checkbox" checked={isChecked}  onChange={() => handleCheckLine(filmData.id)}/>
                </td>
            } else {
              if(isChecked && item !== 'id'){
                return <td key={key}>
                    <textarea  defaultValue={filmData[item]} onChange={event => handleChangeData(event.target.value, filmData.id, item)}></textarea>
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
{handleCheckLine, handleChangeData})(FilmListItem);