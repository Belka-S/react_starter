import Select from 'react-select';
import { SAEARCH_OPTIONS } from 'pages/imgFinder/services/image-api';

// const customOptions = [{ value: 'custom', label: 'Select image type...' }];
const styles = {
  control: (baseStyles, state) => ({
    ...baseStyles,
    height: '48px',
    // width: '200px',
    minWidth: '200px',
    border: 'none',
    fontSize: '20px',
  }),
  option: (baseStyles, state) => ({
    ...baseStyles,
    border: `1px dotted gray`,
    height: '100%',
    fontSize: '20px',
    fontWeight: state.isFocused ? '600' : '400',
    color: state.isFocused ? 'white' : 'black',
    backgroundColor: state.isFocused ? '#a0adf7' : 'white',
    textTransform: 'capitalize',
  }),
  placeholder: baseStyles => ({
    ...baseStyles,
    color: 'gray',
  }),
  input: baseStyles => ({ ...baseStyles, textTransform: 'capitalize' }),
  singleValue: baseStyles => ({ ...baseStyles, textTransform: 'capitalize' }),
};

const stylesCategory = {
  ...styles,
  control: baseStyles => ({
    ...baseStyles,
    height: '48px',
    minWidth: '300px',
    border: 'none',
    fontSize: '20px',
  }),
};

const optionsPerPage = [
  { value: 12, label: '12 per page' },
  { value: 24, label: '24 per page' },
  { value: 96, label: '96 per page' },
  { value: 162, label: '162 per page' },
];

export const SelectPerPage = ({ handleSelect }) => (
  <Select
    onChange={(option, name) => handleSelect(option, name)}
    name="per_page"
    options={optionsPerPage}
    styles={styles}
    defaultValue={{ value: 24, label: '24 per page' }}
    // placeholder={'Select...'}
    // isClearable
    // isDisabled={true}
    // isMulti
    // getOptionLabel={option => `${option.label}`}
    // value={false}
  />
);

const optionsImagaType = SAEARCH_OPTIONS().image_type.map(el => ({
  value: el,
  label: el,
}));

export const SelectImageType = ({ handleSelect }) => (
  <Select
    onChange={(option, name) => handleSelect(option, name)}
    placeholder={'Select type...'}
    name="image_type"
    options={optionsImagaType}
    styles={styles}
  />
);

const optionsOrientation = SAEARCH_OPTIONS().orientation.map(el => ({
  value: el,
  label: el,
}));

export const SelectImageOrientation = ({ handleSelect }) => (
  <Select
    onChange={(option, name) => handleSelect(option, name)}
    name="orientation"
    options={optionsOrientation}
    styles={styles}
    defaultValue={{ value: 'horizontal', label: 'Horizontal' }}
  />
);

const optionsCategory = SAEARCH_OPTIONS().category.map(el => ({
  value: el,
  label: el,
}));

export const SelectCategory = ({ handleSelect, isLoading, searchQuery }) => (
  <Select
    onChange={(option, name) => handleSelect(option, name)}
    placeholder={
      searchQuery === '' ? 'Select category' : `Looking for "${searchQuery}"`
    }
    name="category"
    options={[{ value: searchQuery, label: searchQuery }, ...optionsCategory]}
    styles={stylesCategory}
    isLoading={isLoading}
    isSearchable={true}
    value={false}
  />
);
