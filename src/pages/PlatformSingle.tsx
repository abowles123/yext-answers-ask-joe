import {
    useLocation,
  } from "react-router-dom";
import { CompanyCardData, LinkedEntity } from '../cards/CompanyCard';
import Icon from "../components/icon";
import {
    renderHighlightedValue,
  } from '@yext/answers-react-components';
import PublisherIcon from "../components/publisher"
import PublisherDesc from "../components/publisherDesc"
import PlatformDesc from "../components/platformDesc"


interface GameState {
    data: CompanyCardData
}



function listOfGames(games: LinkedEntity[]){
    return games.map((game: LinkedEntity) => {
        return (
            <li>{game.name}</li>
        );
    });
}

export default function MyComponent () {
    let location = useLocation();
    const myState: GameState = location.state as GameState;
    console.log({myState});
    return (
        <div>
            <div>
                <div className="flex flex-col my-5 py-10 text-9xl font-medium text-center bg-gradient-to-r from-blue-100 to-red-100 outline-2">
                    <div>
                    {myState.data.name && renderHighlightedValue(myState.data.name)} 
                    </div>
                    <div className="text-4xl my-5 underline text-blue-600">
                    {myState.data.website && <a href={myState.data.website}>Official Website</a>}
                    </div>
                </div>
                <div className="max-w-4xl mx-auto">
                <div className="bg-black h-2">
                    </div>
                <div className="container mx-auto py-10 px-5 flex flex-flow justify-center bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="mx-5">
                        <Icon platform={myState.data.deviceID}/>
                    </div>
                    <div className="text-4xl font-medium">
                        <PlatformDesc platform={myState.data.deviceID}/>
                    </div>
                </div>
                <div className="bg-black h-2">
                    </div>
                    <div className="text-4xl font-medium container mx-auto py-10 px-5 bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="pb-5 flex justify-center">
                        List of Games With This Publisher/Platform:
                    </div>
                    <div className="flex justify-center mb-10 text-3xl">
                        Games: {myState.data.gameList?.length}
                    </div>
                    <div className = "columns-3 text-2xl font-medium">
                    {myState.data.gameList.length && <ul>
                        {listOfGames(myState.data.gameList)}
                    </ul>}
                    </div>
                </div>
                <div className="bg-black h-2">
                    </div>
                </div>
            </div>
        </div>
        
        
        
        
        
        
        
        
        
        
        
        
        /*
      <div>
        <div className= "w-max text-3xl">
            {myState.data.name && renderHighlightedValue(myState.data.name)} 
                <div className="text-lg">
                    Released: <span>{myState.data.year}</span>  
                        <div>
                            Global Sales: <span>{myState.data.sales}</span>
                            <div>
                                Rank: <span>{myState.data.id}</span>
                            <div className= "flex">
                                Platform: <Icon platform={myState.data.platform[0]} />
                            </div>
                            <div>
                                Publisher: <PublisherIcon publisher={myState.data.publisher}/>
                            </div>
                            </div>
                        </div>
            </div>
        <div>
          <div>
            </div>
            <div>
            
             </div>
        </div>
        <div>

        </div>
      </div>
      <div>
      </div>
      <PublisherDesc publisher={myState.data.publisher}/>
      <PlatformDesc platform={myState.data.platform[0]}/>
    </div> */
    );
  }