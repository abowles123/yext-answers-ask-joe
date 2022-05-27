import { HighlightedValue, Result } from '@yext/answers-headless-react';
import {
  CardProps,
  useCardAnalyticsCallback,
  useCardFeedbackCallback,
  validateData,
  CtaData,
  isString,
  isStringOrHighlightedValue,
  isCtaData,
  isNumber,
  renderHighlightedValue,
} from '@yext/answers-react-components';
import {Link} from 'react-router-dom';
import logoNintendo from '../assets/logo_nintendo.jpeg';
import logoWii from '../assets/logo_wii.jpg';
import Icon from "../components/icon";
import PublisherIcon from "../components/publisher"

export interface CompanyCardProps extends CardProps {

}

export interface LinkedEntity {
  entityId: string
  name: string
}

export interface CompanyCardData {
  id: string
  name: HighlightedValue | string
  year?: string
  sales?: string
  publisher: string
  platform: string[]
  slug: string
  type: string
  website: string
  platformName: string
  publisherName: string
  deviceID: string
  gameList: LinkedEntity[]
}

/**
 * This Component renders the base result card.
 *
 * @public
 *
 * @param props - An object containing the result itself and any additional information needed
 *                to render the card
 * @returns A React element for the result card
 */
 export function CompanyCard(props: CompanyCardProps): JSX.Element {
  const {
      result,
  } = props;
  const data = dataForRender(result);

  // console.log(data);

  const platformIcon = data.platform?.length ? (<Icon platform={data.platform[0]} />) : null;
  console.log({'companyCard': data});
  const path = data.type === 'ce_platform' ? '/platform/' : '/publisher/';

  function getImage(dataType: any, data: any){
    if(dataType === 'ce_platform'){
      return <Icon platform={data.deviceID}/>;
    }else if(dataType === 'ce_publisher'){
      return <PublisherIcon publisher={data.platformName}/>;
    }
  }

  return (
    <div className= "flex w-max mb-20">
      {getImage(data.type, data)}
      <div className="px-4">
        <div className="text-3xl font-medium mt-20">
        <Link to={path + data.slug} state={{data}}>
          {data.name && renderHighlightedValue(data.name)}
        </Link>
        <div>

        </div>
        </div>
        <div>
          <div className="mb-20">
            <span>{data.year}</span>
          </div>
          <div>
            
          </div>
        </div>
        <div>

        </div>
      </div>
      <div>
        
      </div>
    </div>
  );
}

function slugify(text: string)
{
    return text
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'')
        ;
}

function million(string = '3.53')
{
  let [whole, decimal] = string.split('.');
  // console.log({whole});
  // console.log({decimal});
  if(!decimal) decimal = '0';
  while(decimal.length < 3){
   decimal += '0';
  }
  return `$${whole},${decimal},000`;
}

 /*
function publisherLogo(thePublisher: string){
  thePublisher = data.publisher //Don't know where to get publisher string;
  if(thePublisher === ("Wii")){
    return logoWii;
  } else if(thePublisher === ("Insert Publisher")){
    //etc
  }
}
^^^Same concept for platformLogo except it's a string array
*/

function dataForRender(result: Result): Partial<CompanyCardData> {
  console.log({'dataForRender': result});
  const data = {
      id: result.rawData.uid,
      name: result.highlightedFields?.name ?? result.rawData.name,
      year: result.rawData.c_year || '2000',
      sales: typeof result.rawData.c_sales === 'string' ? million(result.rawData.c_sales) : 0,
      publisher: result.rawData.c_publisher,
      platform: result.rawData.name,
      slug: typeof result.rawData.name === 'string' ? slugify(result.rawData.name) : "Unamed",
      type: result.rawData.type,
      website: result.rawData.website,
      platformName: result.rawData.name,
      deviceID: result.rawData.id,
      gameList: result.rawData.c_games,
      // urlName: result.rawData.name === 'string' ? getUrl(result.rawData.type, result.rawData.slug) : 'Unknown',
  };

  return validateData(data, {
      id: isString,
      name: isStringOrHighlightedValue,
      year: isString,
      sales: isString,
      publisher: isString,
      platform: () => Array.isArray(data.platform),
      slug: isString,
      type: isString,
      website: isString,
      platformName: isString,
      deviceID: isString,
      gameList: () => Array.isArray(data.gameList),
  });
}
