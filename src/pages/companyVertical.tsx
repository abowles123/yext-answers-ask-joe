import { useAnswersActions, useAnswersState } from '@yext/answers-headless-react';
import { SearchBar, VerticalResults, StandardCard, Filters, AppliedFilters } from '@yext/answers-react-components';
import { useEffect } from 'react';
import { VideoCard } from '../cards/VideoCard';

export default function CompanyPage() {

    const answersActions = useAnswersActions();
    //set up vertical 
    useEffect(() => {
        //clear any existing filters
        const stateToClear = {
            filters: {},
            universal: {},
            vertical: {}
        }
        answersActions.setState({
            ...answersActions.state,
            ...stateToClear
        });
        //update the vertical
        answersActions.setVertical('companies');
        //determine number per page
        answersActions.setVerticalLimit(8);
        //fire an empty query on page load
        const executeQuery = async () => {
            answersActions.executeVerticalQuery();
        };
        executeQuery();
    }, []);

    //keep track of vertical results for no results
    const verticalResults = useAnswersState(state => state.vertical.results) || [""];

    return (
        <div>
            <header className="px-8 py-2 flex justify-between items-center bg-white">
                <h1 className="font-bold">
                    Video Game Sales
                </h1>
                <SearchBar placeholder='Search Here' customCssClasses={{ container: 'mb-0 w-full max-w-2xl' }}/>
                <nav>
                    <ul className="list-none">
                        <li>
                            <a href="https://yext.com" className="py-2 px-3 text-blue-600 border border-blue-600">
                                Learn More
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <div className="container mx-auto py-4 px-6">
                <Filters.Facets searchOnChange={true} className='mr-8 text-left min-w-[12rem]'>
                    {facets => facets.map((f, i) => {
                        if (f.options.length === 0) {
                            return null;
                        }
                        return (
                            <div key={f.fieldId} className='md:w-40 mr-10'>
                                <Filters.FilterGroup fieldId={f.fieldId}>
                                    <Filters.CollapsibleLabel label={f.displayName} />
                                    <Filters.CollapsibleSection>
                                        <Filters.SearchInput />
                                        {f.options.map(o =>
                                            <Filters.CheckboxOption
                                                key={o.displayName}
                                                value={o.value}
                                            />
                                        )}
                                    </Filters.CollapsibleSection>
                                </Filters.FilterGroup>
                            </div>
                        );
                    })}
                </Filters.Facets>
                <div className="w-96 mx-auto">
                    <AppliedFilters />
                    {verticalResults.length === 0 &&
                        <div>no results darn </div>
                    }
                    <VerticalResults
                        CardComponent={VideoCard}
                        displayAllOnNoResults={false}
                        customCssClasses={{
                            results: 'flex flex-col items-center'
                        }}
                    />
                </div>
            </div>
        </div>
    )
}