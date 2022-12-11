export const stringCalculartorPopular = (popular) => {
  return popular ? `popular=${true}` : '';
};

export const stringCalculartorNews = (news) => {
  return news ? `news=${true}` : '';
};

export const stringCalculartorSize = (size) => {
  if (size == '100' || size == '80' || size == '60') {
    return `&size=${size}`;
  } else {
    return '';
  }
};

export const stringCalculartorCategory = (size, category) => {
  if (size) {
    return '';
  } else {
    return `&category=${category}`;
  }
};
