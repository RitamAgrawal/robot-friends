import React from 'react';
// import { robots } from './robots';
import Card from '../container/card';

const CardList = ({ robots }) => {
    const CardArray = robots.map((user,i) => {
            return (
            <Card 
            key={i}
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