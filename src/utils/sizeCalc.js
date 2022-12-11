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
  return '';
};
