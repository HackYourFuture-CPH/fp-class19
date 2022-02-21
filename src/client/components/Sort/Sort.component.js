import React from 'react';
import PropTypes from 'prop-types';
import './Sort.styles.css';

const SORT_OPTION_MAPPING = {
  AlphabeticallyAZ: {
    label: 'A-Z',
    preference: {
      sortKey: 'name',
      sortOrder: 'asc',
    },
  },
  AlphabeticallyZA: {
    label: 'Z-A',
    preference: {
      sortKey: 'name',
      sortOrder: 'desc',
    },
  },
  PriceDescending: {
    label: 'Price ↑',
    preference: {
      sortKey: 'price',
      sortOrder: 'desc',
    },
  },
  PriceAscending: {
    label: 'Price ↓',
    preference: {
      sortKey: 'price',
      sortOrder: 'asc',
    },
  },
};

export default function Sort({ sortingPreferences, setSortingPreferences }) {
  const [option, setOption] = React.useState(null);

  React.useEffect(() => {
    if (!sortingPreferences) {
      return;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [_option, { preference }] of Object.entries(
      SORT_OPTION_MAPPING,
    )) {
      if (
        preference.sortKey === sortingPreferences.sortKey &&
        preference.sortOrder === sortingPreferences.sortOrder
      ) {
        setOption(_option);
      }
    }
  }, [sortingPreferences, setOption]);

  React.useEffect(() => {
    console.log(`option=${option}`);
    const { preference } = SORT_OPTION_MAPPING[option] || {};
    if (preference) {
      setSortingPreferences(preference);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, setSortingPreferences]);

  return (
    <div className="sorting-div">
      <select
        onChange={(e) => setOption(e.target.value)}
        className="sort-options"
      >
        <option value="DEFAULT" disabled hidden>
          SORT BY
        </option>
        {Object.entries(SORT_OPTION_MAPPING).map(([_option, { label }]) => (
          <option
            className="sort-value"
            value={_option}
            key={_option}
            selected={option === _option}
          >
            {label}
          </option>
        ))}
      </select>
    </div>
  );
}

Sort.propTypes = {
  sortingPreferences: PropTypes.shape({
    sortKey: PropTypes.string,
    sortOrder: PropTypes.string,
  }).isRequired,
  setSortingPreferences: PropTypes.func.isRequired,
};
