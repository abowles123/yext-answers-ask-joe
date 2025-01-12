import {
    useLocation,
  } from "react-router-dom";
import { VideoCardData } from '../cards/VideoCard';
import logoNintendo from '../assets/logo_nintendo.jpeg';
import logoWii from '../assets/logo_wii.jpg';
import Icon from "../components/icon";
import {
    renderHighlightedValue,
  } from '@yext/answers-react-components';
import PublisherIcon from "../components/publisher"
import PublisherDesc from "../components/publisherDesc"
import PlatformDesc from "../components/platformDesc"
import {getGameImage} from "../components/gameIGDB"

interface GameState {
    data: VideoCardData
}

export default function MyComponent () {
    let location = useLocation();
    const myState: GameState = location.state as GameState;
    console.log(location);
    getGameImage()
    return (
        <div>
            <div>
                <div className="flex flex-row justify-center bg-gradient-to-r from-blue-100 to-red-100 mt-5 mb-0 py-10">
                    <div className="pr-10 text-9xl font-medium text-center">
                        {myState.data.name && renderHighlightedValue(myState.data.name)}
                    </div>
                    <div className="text-6xl font-medium text-center ">
                         <div>
                            Global Sales: <span>{myState.data.sales}</span>
                         </div>
                    </div>
                </div>
                <div className="max-w-4xl mx-auto my-10 rounded-md bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="bg-black h-2">
                    </div>
                <div  className="container mx-auto my-10 flex flex-flow justify-center bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="mx-5">
                        <img src="https://place-hold.it/300x200" alt="" /> 
                    </div>
                    <div className="text-2xl font-medium">
                        game desc
                    </div>
                </div>
                <div>
                    
                </div>
                <div className="bg-black h-2">
                    </div>
                <div className="container mx-auto mt-10 flex flex-flow justify-center bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="mx-5">
                        <Icon platform={myState.data.platform[0]} />
                    </div>
                    <div className="text-2xl font-medium">
                        <PlatformDesc platform={myState.data.platform[0]}/>
                    </div>
                </div>
                <div className="bg-black h-2">
                    </div>
                <div className="container mx-auto my-10 flex flex-flow justify-center bg-gradient-to-r from-blue-100 to-red-100">
                    <div className="mx-5">
                        <PublisherIcon publisher={myState.data.publisher}/>
                    </div>
                    <div className="text-2xl font-medium">
                        <PublisherDesc publisher={myState.data.publisher}/>
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