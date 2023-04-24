export function dataWork(WORK_TIME_YEAR, WORK_TIME_MONTH, q) {
  const lang = {
    en: ['year', 'years', 'years', 'month', 'months', 'months'],
    ru: ['год', 'года', 'лет', 'месяц', 'месяца', 'месяцев'],
    ua: ['рік', 'роки', 'років', 'місяць', 'місяці', 'місяців'],
  };
  const now = new Date(); //Текущя дата
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate()); //Текущя дата без времени
  const WORK_TIME = new Date(WORK_TIME_YEAR, WORK_TIME_MONTH); //Дата последнего места работы (2019, 9)
  let workYear = today.getFullYear() - WORK_TIME.getFullYear();
  let workMonth = today.getMonth() + 1 - WORK_TIME.getMonth();
  if (workMonth < 0) {
    workYear = workYear - 1;
    workMonth = 12 - WORK_TIME_MONTH + today.getMonth() + 1;
  }

  function fTimeRuYear(period, title1, title2, title3) {
    if (period < 1) {
      return '';
    } else if (period === 1) {
      return `${period} ${title1} `;
    } else if (period > 1 && period < 5) {
      return `${period} ${title2} `;
    } else return `${period} ${title3} `;
  }

  return (
    fTimeRuYear(workYear, lang[q][0], lang[q][1], lang[q][2]) +
    fTimeRuYear(workMonth, lang[q][3], lang[q][4], lang[q][5])
  );
}
