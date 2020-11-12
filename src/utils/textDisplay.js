export const navbarName = (name) => {
  return name.split(' ')[0];
};

export const displayDate = (timestamp) => {
  const date = new Date(timestamp);

  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // return day + ' ' + monthNames[monthIndex] + ' ' + year;
  return `${monthNames[monthIndex]} ${day}, ${year}`;
};

export const displayMoney = (n) => {
  const format = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'PHP',
  });

  // or use toLocaleString()
  return format.format(n);
};
