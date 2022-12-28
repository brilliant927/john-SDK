# The Lord of the Rings API

> This is the simple typescript sdk for the Lord of the Rings API.
This SDK cover only the books endpoints.

## Prerequisites

This project requires NodeJS (version 8 or later) and NPM.
[Node](http://nodejs.org/) and [NPM](https://npmjs.org/) are really easy to install.
To make sure you have them available on your machine,
try running the following command.

```sh
$ npm -v && node -v
6.4.1
v8.16.0
```
## Installation

**BEFORE YOU INSTALL:** please read the [prerequisites](#prerequisites)

Start with installing and set up the library, run:

```sh
$ npm install john-lor-sdk
```

Or if you prefer using Yarn:

```sh
$ yarn add --dev john-lor-sdk
```

## Usage

```sh
import bookApi from 'john-lor-sdk'

```

Or 

```sh
const bookApi = require('john-lor-sdk');

```

## API

### getBooks

```js
getBooks(pagenationParam: GetBookDto): PagenationDto<BookDto>;
```

Supported parmas and result fields for the `getBooks` function are listed below.

#### Params

`GetBookDto = {skip, take, sort}`

|  Key  | Type   | Default value | Enum value               | Optional |
|-------| ------ | ------------- |--------------------------|--------- |
|  skip | number | 0             |                          | Yes      |
|  take | number | 10            |                          | Yes      |
|  sort | Enum   | ''            | 'name:asc' or 'name:desc'| Yes      |

#### Result
`BookDto`

| Key  | Type   |
| ---- | ------ |
| _id  | string |
| name | string |

`PagenationDto<T>`

| Key    | Type      |
| -------| ----------|
| docs   | Array<T>  |
| total  | number    |
| limit  | number    |
| offset | number    |
| page   | number    |

```js
getBookById(id: string): BookDto;
```

Supported parmas and result fields for the `getBookById` function are listed below.

#### Params

`id`

| Key | Type   | Default value | Enum value | Optional |
| --- | ------ | ------------- | ---------- | -------- |
| id  | string |               |            | No       |

#### Result

`BookDto`

```js
getBookChaptersById(id: number, pagenationParam: GetChapterDto): PagenationDto<ChapterDto>;
```

Supported parmas and result fields for the `getBookChaptersById` function are listed below.

#### Params

`id`
| Key | Type   | Default value | Enum value | Optional |
| --- | ------ | ------------- | ---------- | -------- |
| id  | string |               |            | No       |


`GetChapterDto = {skip, take, sort}`

| Key  | Type   | Default value | Enum value                              | Optional |
| ---- | ------ | ------------- | ----------------------------------------| -------- |
| skip | number | 0             |                                         | Yes      |
| take | number | 10            |                                         | Yes      |
| sort | Enum   | ''            | 'chapterName:asc' or 'chapterName:desc' | Yes      |

#### Result

`ChapterDto`

| Key         | Type   |
| ----------- | ------ |
| _id         | string |
| chapterName | string |


## Authors

- **John**

## License

[ISC License](https://opensource.org/licenses/ISC)
