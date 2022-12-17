export const stringCalculartorPopular = (popular) => {
  return popular ? `popular=${true}` : '';
};

export const stringCalculartorSearch = (search) => {
  if (search.length >= 1) {
    return `?&title=${search}`;
  } else {
    return '';
  }
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

export const stringCalculatorKeyWire = (wire) => {
  if (wire == 'wireless' || wire == 'wired') {
    return `&wire=${wire}`;
  } else {
    return '';
  }
};
export const stringCalculartorAccType = (accType) => {
  if (
    accType == 'mousepad' ||
    accType == 'cables' ||
    accType == 'holders' ||
    accType == 'keycaps'
  ) {
    return `&accType=${accType}`;
  } else {
    return '';
  }
};
export const stringCalculatorBrand = (brand) => {
  if (
    brand == 'varmilo' ||
    brand == 'ducky' ||
    brand == 'vortex' ||
    brand == 'leopold' ||
    brand == 'logitech' ||
    brand == 'xtrfy'
  ) {
    return `&brand=${brand}`;
  } else {
    return '';
  }
};
export const stringCalculatorRGB = (backlight) => {
  if (backlight == 'RGB' || backlight == 'RGB-подсветка') {
    return `&backlight=RGB`;
  } else {
    return '';
  }
};

export const stringCalculatorDest = (dest) => {
  if (dest == 'forBoards' || dest == 'forMice' || dest == 'forTable') {
    return `&dest=${dest}`;
  } else {
    return '';
  }
};

export const stringCalculartorCategory = (param, category) => {
  if (param) {
    return '';
  } else {
    return `&category=${category}`;
  }
};
