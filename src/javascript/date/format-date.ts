/**
 * format Date into string
 * @param {Date} time time to format
 * @param {string} format format (ex. YYYY-MM-DD A hh:mm:ss)
 * @return {string} time string
 */

function formatDate(time: Date, format: string): string {
  let year = time.getFullYear().toString();
  let month = (time.getMonth() + 1).toString();
  let date = time.getDate().toString();
  let hour = time.getHours().toString();
  let min = time.getMinutes().toString();
  let sec = time.getSeconds().toString();
  let a = '';

  const year_regex = /Y{2,4}/g;
  const month_regex = /M{1,2}/g;
  const date_regex = /D{1,2}/g;
  const hour_regex = /h{1,2}/g;
  const min_regex = /m{1,2}/g;
  const sec_regex = /s{1,2}/g;
  const a_regex = /A{1}/g;

  const matched_year = format.match(year_regex);
  const matched_month = format.match(month_regex);
  const matched_date = format.match(date_regex);
  const matched_hour = format.match(hour_regex);
  const matched_min = format.match(min_regex);
  const matched_sec = format.match(sec_regex);
  const matched_a = format.match(a_regex);

  const is_valid_year = matched_year?.length === 1 && (matched_year[0]?.length === 2 || matched_year[0]?.length === 4);
  const is_valid_month =
    matched_month?.length === 1 && (matched_month[0]?.length === 1 || matched_month[0]?.length === 2);
  const is_valid_date = matched_date?.length === 1 && (matched_date[0]?.length === 1 || matched_date[0]?.length === 2);
  const is_valid_hour = matched_hour?.length === 1 && (matched_hour[0]?.length === 1 || matched_hour[0]?.length === 2);
  const is_valid_min = matched_min?.length === 1 && (matched_min[0]?.length === 1 || matched_min[0]?.length === 2);
  const is_valid_sec = matched_sec?.length === 1 && (matched_sec[0]?.length === 1 || matched_sec[0]?.length === 2);
  const is_valid_a = matched_a?.length === 1 && matched_a[0] === 'A';

  if (is_valid_year) {
    const year_format_length = matched_year[0].length;
    if (year_format_length === 2) {
      year = year.slice(2, 4);
    }
  }

  if (is_valid_month) {
    const month_format_length = matched_month[0].length;
    if (month_format_length === 2 && +month < 10) {
      month = `0${month}`;
    }
  }

  if (is_valid_date) {
    const date_format_length = matched_date[0].length;
    if (date_format_length === 2 && +date < 10) {
      date = `0${date}`;
    }
  }

  if (is_valid_hour) {
    const hour_format_length = matched_hour[0].length;
    if (is_valid_a) {
      if (+hour < 12) a = '오전';
      else {
        a = '오후';
        if (+hour > 12) hour = `${+hour - 12}`;
      }
    }

    if (hour_format_length === 2 && +hour < 10) {
      hour = `0${hour}`;
    }
  }

  if (is_valid_min) {
    const min_format_length = matched_min[0].length;
    if (min_format_length === 2 && +min < 10) {
      min = `0${min}`;
    }
  }

  if (is_valid_sec) {
    const sec_format_length = matched_sec[0].length;
    if (sec_format_length === 2 && +sec < 10) {
      sec = `0${sec}`;
    }
  }

  let date_string = format;

  date_string = date_string.replace(year_regex, year);
  date_string = date_string.replace(month_regex, month);
  date_string = date_string.replace(date_regex, date);
  date_string = date_string.replace(hour_regex, hour);
  date_string = date_string.replace(min_regex, min);
  date_string = date_string.replace(sec_regex, sec);
  date_string = date_string.replace(a_regex, a);

  return date_string;
}

export default formatDate;
