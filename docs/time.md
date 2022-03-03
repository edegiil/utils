# Time

## `check-today`

check time whether today or not

### usage

```js
import { time } from '@edegiil/utils';

const time_obj = new Date();

const isToday = time.checkToday(time_obj);
```

### types

```ts
function checkToday(time: Date | string | number): boolean;
```

## `format-date`

format date

### time format

- year : `YYYY`(ex. 2022), `YY`(ex. 22)
- month : `MM`(ex. 02, 12), `M`(ex. 2, 12)
- day : `DD` (ex. 02, 22), `D`(ex. 2, 22)
- A : `A` (ex. 오전, 오후)
- hour : `hh` (ex. 14, 02), `h` (ex. 14, 2)
- minutes : `mm` (ex. 27, 07), `h` (ex. 27, 7)
- seconds : `ss` (ex. 36, 03), `s` (ex. 36, 3)

### usage

```js
import { time } from '@edegiil/utils';

const time_obj = new Date();
const timeString = time.formatDate(time_obj, 'YYYY MM DD A hh:mm:ss');
```

### types

```ts
function formatDate(time: Date, format: string): string;
```
