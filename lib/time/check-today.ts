import generateError from '../utils/generate-error';

/**
 * check time whether today or not
 * @param {Date | string | number} time time to check
 * @return {boolean} is today
 */

function checkToday(time: Date | string | number): boolean {
  const time_obj = new Date(time);

  const is_valid_date = time_obj instanceof Date && !isNaN(time_obj.getTime());

  if (!is_valid_date) {
    throw generateError({ code: 'io/invalid-format', message: '' });
  }

  const now = new Date();

  const time_datestring = time_obj.toDateString();
  const now_datestring = now.toDateString();

  if (time_datestring !== now_datestring) {
    return false;
  }

  return true;
}

export default checkToday;
