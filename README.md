# date-range-compressor

Reduces a date range to full years, full months, and days between two dates.

## Installation

Using npm, `npm i date-range-compressor`.

Using yarn, `yarn add date-range-compressor`.

## Usage

Using `import`

```javascript
import { compressDateRange } from 'date-range-compressor';

const compressedRange = compressDateRange('20191230', '20210203');

// compressedRange is {years: ['2020'], months: ['202101'], days: ['20191230', '20191231', '20210201', '20210202', '20210203']}
```

In a CommonJS environment

```javascript
const { compressDateRange } = require('date-range-compressor');

const compressedRange = compressDateRange('20191230', '20210203');

// compressedRange is {years: ['2020'], months: ['202101'], days: ['20191230', '20191231', '20210201', '20210202', '20210203']}
```

## Table of contents

### Interfaces

- [CompressedDateRange](#CompressedDateRange)

### Functions

- [compressDateRange](#compressdaterange)
- [getDaysInRange](#getdaysinrange)
- [getMonthsInRange](#getmonthsinrange)
- [getYearsInRange](#getyearsinrange)

## Functions

### compressDateRange

▸ **compressDateRange**(`start`, `end`): [`CompressedDateRange`](interfaces/CompressedDateRange.md)

Compresses a date range between two days expressed as string date expressions

**`Export`**

**`Link`**

https://day.js.org/docs/en/parse/string-format Possible date formats

#### Parameters

| Name    | Type     | Description                           |
| :------ | :------- | :------------------------------------ |
| `start` | `string` | Starting day as any valid date string |
| `end`   | `string` | End day as any valid date string      |

#### Returns

[`CompressedDateRange`](interfaces/CompressedDateRange.md)

The full years, full months and days included in that range

#### Defined in

[index.ts:21](https://github.com/alrico88/date-range-compressor/blob/master/src/index.ts#L21)

---

### getDaysInRange

▸ **getDaysInRange**(`start`, `end`, `excludedMonths?`, `excludedYears?`): `string`[]

Gets the days in range between to days

**`Export`**

#### Parameters

| Name              | Type       | Default value | Description                           |
| :---------------- | :--------- | :------------ | :------------------------------------ |
| `start`           | `string`   | `undefined`   | YYYYMMDD to start the range           |
| `end`             | `string`   | `undefined`   | YYYYMMDD to end the range             |
| `excludedMonths?` | `string`[] | `[]`          | The months to exclude in range YYYYMM |
| `excludedYears?`  | `string`[] | `[]`          | The years to exclude in range YYYY    |

#### Returns

`string`[]

The days range

#### Defined in

[helpers/days.ts:16](https://github.com/alrico88/date-range-compressor/blob/master/src/helpers/days.ts#L16)

---

### getMonthsInRange

▸ **getMonthsInRange**(`start`, `end`, `excludedYears?`): `string`[]

Gets all full months between two dates

**`Export`**

#### Parameters

| Name             | Type       | Default value | Description                                       |
| :--------------- | :--------- | :------------ | :------------------------------------------------ |
| `start`          | `string`   | `undefined`   | The start date as YYYYMMDD                        |
| `end`            | `string`   | `undefined`   | The end date as YYYYMMDD                          |
| `excludedYears?` | `string`[] | `[]`          | The list of years to exclude for checking as YYYY |

#### Returns

`string`[]

The list of full months included in the range

#### Defined in

[helpers/months.ts:53](https://github.com/alrico88/date-range-compressor/blob/master/src/helpers/months.ts#L53)

---

### getYearsInRange

▸ **getYearsInRange**(`start`, `end`): `string`[]

Gets full years in date range

**`Export`**

#### Parameters

| Name    | Type     | Description                |
| :------ | :------- | :------------------------- |
| `start` | `string` | The starting date YYYYMMDD |
| `end`   | `string` | The end date YYYYMMDD      |

#### Returns

`string`[]

Full years between start and end

#### Defined in

[helpers/years.ts:56](https://github.com/alrico88/date-range-compressor/blob/master/src/helpers/years.ts#L56)

## Interfaces

### CompressedDateRange

#### Properties

##### days

• `Optional` **days**: `string`[]

###### Defined in

[index.ts:9](https://github.com/alrico88/date-range-compressor/blob/master/src/index.ts#L9)

---

##### months

• `Optional` **months**: `string`[]

###### Defined in

[index.ts:8](https://github.com/alrico88/date-range-compressor/blob/master/src/index.ts#L8)

---

##### years

• `Optional` **years**: `string`[]

###### Defined in

[index.ts:7](https://github.com/alrico88/date-range-compressor/blob/master/src/index.ts#L7)
