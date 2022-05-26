import { AnswersHeadlessProvider } from '@yext/answers-headless-react';
import { AnalyticsProvider } from '@yext/answers-react-components';
import PodcastPage from './pages/PodcastPage';
import GamePage from './pages/gamepage';
import CompanySingle from './pages/CompanySingle';
import CompanyVertical from './pages/companyVertical';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";



const config = {
  apiKey: 'c0538fc2321f45c2827b7a129b222905',
  experienceKey: 'video-game-sales',
  locale: 'en',
  experienceVersion: 'STAGING',
  businessId: 3159325,
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
          <main className="min-h-screen bg-gradient-to-r from-cyan-100 to-blue-100">
            <Router>
              <div>
                <nav>
                  <ul>
                    <li>
                      <div>
                      <Link to="/">Home</Link>
                      </div>
                      <div>
                      <Link to="/companies">Publishers and Platforms</Link>
                      </div>
                    </li>
                  </ul>
                </nav>
                <Routes>
                  <Route path="/" element={<PodcastPage/>} />
                  <Route path="/games/:id" element={<GamePage />}/>
                  <Route path="/companies" element={<CompanyVertical/>} />
                  <Route path="/ce_platform/:id" element={<CompanySingle/>}/>
                </Routes>
              </div>
            </Router>
          </main>
        </AnalyticsProvider>
      </AnswersHeadlessProvider>
    </div>
  );
}

export default App;
