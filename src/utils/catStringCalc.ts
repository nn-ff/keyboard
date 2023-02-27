export const stringCalculartorPopular = (popular: boolean) => {
  return popular ? `popular=${true}` : '';
};

export const stringCalculartorSearch = (search: string) => {
  if (search.length >= 1) {
    return `?&title=${search}`;
  } else {
    return '';
  }
};

export const stringCalculartorNews = (news: boolean) => {
  return news ? `news=${true}` : '';
};

export const stringCalculartorSize = (size: string) => {
  if (size === '100' || size === '80' || size === '60') {
    return `&size=${size}`;
  } else {
    return '';
  }
};

export const stringCalculatorKeyWire = (wire: string) => {
  if (wire === 'wireless' || wire === 'wired') {
    return `&wire=${wire}`;
  } else {
    return '';
  }
};
export const stringCalculartorAccType = (accType: string) => {
  if (
    accType === 'mousepad' ||
    accType === 'cables' ||
    accType === 'holders' ||
    accType === 'keycaps'
  ) {
    return `&accType=${accType}`;
  } else {
    return '';
  }
};
export const stringCalculatorBrand = (brand: string) => {
  if (
    brand === 'varmilo' ||
    brand === 'ducky' ||
    brand === 'vortex' ||
    brand === 'leopold' ||
    brand === 'logitech' ||
    brand === 'xtrfy'
  ) {
    return `&brand=${brand}`;
  } else {
    return '';
  }
};
export const stringCalculatorRGB = (backlight: string) => {
  if (backlight === 'RGB' || backlight === 'RGB-подсветка') {
    return `&backlight=RGB`;
  } else {
    return '';
  }
};

export const stringCalculatorDest = (dest: string) => {
  if (dest === 'forBoards' || dest === 'forMice' || dest === 'forTable') {
    return `&dest=${dest}`;
  } else {
    return '';
  }
};

export const stringCalculartorCategory = (param: string, category: string) => {
  if (param) {
    return '';
  } else {
    return `&category=${category}`;
  }
};
