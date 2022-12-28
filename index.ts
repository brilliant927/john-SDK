import axios from 'axios';
import {
  BookDto,
  ChapterDto,
  GetBookDto,
  GetChapterDto,
  PagenationResultDto,
} from './contants/interface';

const API_URL: string = 'https://the-one-api.dev/v2';

export function getBooks(
  getBookDto: GetBookDto = { skip: 0, take: 10 }
): Promise<PagenationResultDto<BookDto>> {
  let sortQuery = '';
  if (getBookDto.sort) {
    sortQuery = `&sort=${getBookDto.sort}`;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book?offset=${getBookDto.skip}&limit=${getBookDto.take}${sortQuery}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getBookById(id: number): Promise<PagenationResultDto<BookDto>> {
  return new Promise((resolve, reject) => {
    axios
      .get(`${API_URL}/book/${id}`)
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export function getBookChaptersById(
  id: number,
  getchapterDto: GetChapterDto = { skip: 0, take: 10 }
): Promise<PagenationResultDto<ChapterDto>> {
  let sortQuery = '';
  if (getchapterDto.sort) {
    sortQuery = `&sort=${getchapterDto.sort}`;
  }
  return new Promise((resolve, reject) => {
    axios
      .get(
        `${API_URL}/book/${id}/chapter?offset=${getchapterDto.skip}&limit=${getchapterDto.take}${sortQuery}`
      )
      .then((resp) => {
        resolve(resp.data);
      })
      .catch(reject);
  });
}

export default { getBooks, getBookById, getBookChaptersById };
