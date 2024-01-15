import React, { useState } from 'react'
import MenuItem from './MenuItem';
import DISHES from '../../data/dishes';
import DishDetail from './DishDetail';

const Menu = () => {

    const [dishes, setDishes] = useState(DISHES);

    const menu = dishes.map((dish) => {
        return (<MenuItem  dish={dish} key={dish.id}/>)
    });

  return (

    <div className='container'>
        <div className='row'>

            <div className='col-5 '>
                { menu }
            </div>            
            
            <div className='col-7 '>
                <DishDetail />
            </div>

        </div>
    </div>
  )
}

export default Menu