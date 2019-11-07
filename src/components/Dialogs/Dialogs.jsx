import React from 'react';
import s from './Dialogs.module.css';
const Dialogs = () =>{
  return (
      <div className={s.dialogs}>
          <div className={s.dialogsItems}>
            <div className={`${s.item} ${s.active}`}>Dima</div>
            <div className={s.item}>Sveta</div>
            <div className={s.item}>Ola</div>
          </div>
          <div className={s.massages}>
              <div className={s.massage}>Hi</div>
              <div className={s.massage}>How are u?</div>
              <div className={s.massage}>Good</div>
          </div>
      </div>
  )
};

export default Dialogs;