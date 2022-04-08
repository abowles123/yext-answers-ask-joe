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
  renderHighlightedValue,
} from '@yext/answers-react-components';

export interface VideoCardProps extends CardProps {

}

interface VideoCardData {
  id: string
  name?: HighlightedValue | string
  body?: HighlightedValue | string
  thumbnail?: string
  cta?: CtaData
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
 export function VideoCard(props: VideoCardProps): JSX.Element {
  const {
      result,
  } = props;
  const data = dataForRender(result);

  return (
    <article className="flex mb-4">
      <div className="w-96">
        <img src={data.thumbnail} alt="" />
      </div>
      <div className="px-4">
        <h2 className="text-lg font-medium">
          {data.name && renderHighlightedValue(data.name)}
        </h2>
      </div>
    </article>
  );
}

function getYoutubeThumbnail(url: string | unknown): string {
  if (typeof url !== 'string') return '';
  const videoID = url.replace('https://www.youtube.com/watch?v=', '');
  return `https://img.youtube.com/vi/${videoID}/maxresdefault.jpg`;
}

function dataForRender(result: Result): Partial<VideoCardData> {
  const data = {
      id: result.rawData.id,
      name: result.highlightedFields?.name ?? result.rawData.name,
      body: result.highlightedFields?.c_snippet ?? result.rawData.body,
      thumbnail: getYoutubeThumbnail(result.rawData.c_youtube),
      cta: {
        link: result.rawData.c_youtube,
        label: 'Watch on Youtube',
        linkType: 'URL',
      },
  };

  return validateData(data, {
      id: isString,
      name: isStringOrHighlightedValue,
      body: isStringOrHighlightedValue,
      thumbnail: isString,
      cta: isCtaData,
  });
}
