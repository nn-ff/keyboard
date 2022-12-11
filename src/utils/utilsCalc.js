export const sizeCalc = (size) => {
  if (size == '100') {
    return <h2>Полноразмерные / 90-100%</h2>;
  }
  if (size == '80') {
    return <h2>Клавиатуры без нампада / 75-80%</h2>;
  }
  if (size == '60') {
    return <h2>Клавиатуры без F-ряда / 60-65%</h2>;
  }
  if (size == 'wireless') {
    return <h2>Беспроводные</h2>;
  }
  if (size == 'wired') {
    return <h2>Проводные</h2>;
  }
  if (size == 'RGB' || size == 'RGB-подсветка') {
    return <h2>RGB-подсветка</h2>;
  }
  if (
    size == 'varmilo' ||
    size == 'ducky' ||
    size == 'leopold' ||
    size == 'vortex' ||
    size == 'logitech' ||
    size == 'xtrfy'
  ) {
    return <h2>Бренд {size}</h2>;
  }
  return '';
};
