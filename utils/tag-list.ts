const tagList = {
  fast: {
    icon: 'Lightning',
    label: 'Fast',
    color: 'red',
  },
  simple: {
    icon: 'Sun',
    label: 'Simple',
    color: 'green',
  },
};

export type TagKey = keyof typeof tagList;

export default tagList;
