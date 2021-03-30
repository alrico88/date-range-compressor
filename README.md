# date-range-compressor

Reduces a date range to full years, full months, and days between to dates.

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

### Functions

- [compressDateRange](#compressdaterange)

## Functions

### compressDateRange

▸ **compressDateRange**(`start`: _string_, `end`: _string_): CompressedDateRange

Compresses a date range between two days expressed as YYYYMMDD strings

**`export`**

#### Parameters:

| Name    | Type     | Description              |
| :------ | :------- | :----------------------- |
| `start` | _string_ | Starting day as YYYYMMDD |
| `end`   | _string_ | End day as YYYYMMDD      |

**Returns:** CompressedDateRange

The full years, full months and days included in that range

Defined in: index.ts:19
