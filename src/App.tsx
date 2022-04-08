import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { AnalyticsProvider } from '@yext/answers-react-components';
import PodcastPage from './pages/PodcastPage';

const config = {
  apiKey: 'ec92413f7c7e5853a736f5750c70ec32',
  experienceKey: 'ask-joe',
  locale: 'en',
  experienceVersion: 'STAGING',
  businessId: 2479583,
  endpoints: {
    universalSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/answers/query?someparam=blah',
    verticalSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/query',
    questionSubmission: 'https://liveapi-sandbox.yext.com/v2/accounts/me/createQuestion',
    status: 'https://answersstatus.pagescdn.com',
    universalAutocomplete: 'https://liveapi-sandbox.yext.com/v2/accounts/me/answers/autocomplete',
    verticalAutocomplete: 'https://liveapi-sandbox.yext.com/v2/accounts/me/answers/vertical/autocomplete',
    filterSearch: 'https://liveapi-sandbox.yext.com/v2/accounts/me/answers/filtersearch'
  },
}

function App() {
  return (
    <div className="App">
      <AnswersHeadlessProvider {...config}>
        <AnalyticsProvider {...config}>
          <main className="min-h-screen bg-gray-50">
            <PodcastPage />
          </main>
        </AnalyticsProvider>
      </AnswersHeadlessProvider>
    </div>
  );
}

export default App;
