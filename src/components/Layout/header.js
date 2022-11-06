import {Fragment} from "react";

import mealsImage from  '../../assets/meals.jpg';
import classes from './header.module.css'

const Header = props => {
    return <Fragment>
        <header>
            <h1 className={classes.header}>ReactMeals</h1>
            <button>Cart</button>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImage} alt="A table full of delicious food"/>
        </div>
    </Fragment>
}

export default Header;