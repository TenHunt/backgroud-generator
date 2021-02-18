import React from 'react';

import { Card } from '../card-components/card.components';

import './card-list.style.css';

export const Cardlist = (props) => {
    console.log(props);
    return(<div className = 'test-list'>      
    {
        props.monsters.map(monster => (
          <Card key= {monster.id} monster = {monster}/>  
        ))
    }
    </div>);
}
