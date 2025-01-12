import { Filters } from '@yext/answers-react-components';
import { Fragment } from 'react';

export const hierarchicalFacetFieldIds = ['c_hierarchicalFacet'];

export function Facets() {
  return (
    <Filters.Facets searchOnChange={true}>
      {facets => {
        const filteredFacets = facets.filter(f => f.options.length > 0);
        filteredFacets.sort((a,b) => {
          const aValue = hierarchicalFacetFieldIds.includes(a.fieldId) ? 1 : 0;
          const bValue = hierarchicalFacetFieldIds.includes(b.fieldId) ? 1 : 0
          return bValue - aValue;
        });
        return (
          <>
            {
              filteredFacets.map((f, i) => {
                if (hierarchicalFacetFieldIds.includes(f.fieldId)) {
                  return <Fragment key={f.fieldId}>
                    <Filters.HierarchicalFacet facet={f}  />
                  </Fragment>
                }

                return (
                  <Filters.FilterGroup key={f.fieldId} fieldId={f.fieldId}>
                    <Filters.CollapsibleLabel label={f.displayName} />
                    <Filters.CollapsibleSection>
                      <Filters.SearchInput />
                      {f.options.map(o =>
                        <Filters.CheckboxOption
                          key={o.displayName}
                          value={o.value}
                          matcher={o.matcher}
                          label={o.displayName}
                        />
                      )}
                    </Filters.CollapsibleSection>
                  </Filters.FilterGroup>
                )
              })
            }
            {/* {filteredFacets.length > 0 && <Filters.ApplyFiltersButton />} */}
          </>
        )
      }}
    </Filters.Facets>
  )
}