import { useContext } from 'react';
import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage(){
const favoritesCtx = useContext(FavoritesContext);
let content
if (favoritesCtx.totalFavorites ===0 ){
    content = <p> You got no favorites yet. start adding some</p>
}else{
    content = <MeetupList meetups={favoritesCtx.favorites}></MeetupList>
}

    return <section>
        <h1>All Favorites</h1>
        {content}
    </section>
}

export default FavoritesPage;