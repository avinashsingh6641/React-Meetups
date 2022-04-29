import FavoritesContext from '../../store/favorites-context'
import { Link } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import { useContext } from 'react';
function MainNavigation(){

    const favoritesCtx = useContext(FavoritesContext);
    return(
        <header className={classes.header}>
        <div className={classes.logo}>react meetups </div>
        <nav>
            <ul>
                <li>
                    <Link to="/">All Meetups</Link>
                </li>
                <li>
                    <Link to="/new-meetups">Add New Meetups</Link>
                </li>
                <li>
                    <Link to="/favorites">
                        My Favorites
                        <span className ={classes.badge}>{favoritesCtx.totalFavorites}</span>
                        </Link>
                </li>
            </ul>
        </nav>
        </header>


    )};
export default MainNavigation;