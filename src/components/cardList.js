import React from 'react';
// import { robots } from './robots';
import Card from '../container/card';

const CardList = ({ robots }) => {
    const CardArray = robots.map((user,i) => {
            return (
            <Card 
            key={i} 
            // id={robots[i].id} 
            // name={robots[i].name} 
            // email={robots[i].email}
            // username={robots[i].username}
            // phone={robots[i].phone}
            // website={robots[i].website}
            {...robots[i]}
            />
            );
        });
    return (
        <div>
            {CardArray}
        </div>
    );
}
export default CardList;