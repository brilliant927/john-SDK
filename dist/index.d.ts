import { BookDto, ChapterDto, GetBookDto, GetChapterDto, PagenationResultDto } from './contants/interface';
export declare function getBooks(getBookDto?: GetBookDto): Promise<PagenationResultDto<BookDto>>;
export declare function getBookById(id: number): Promise<PagenationResultDto<BookDto>>;
export declare function getBookChaptersById(id: number, getchapterDto?: GetChapterDto): Promise<PagenationResultDto<ChapterDto>>;
declare const _default: {
    getBooks: typeof getBooks;
    getBookById: typeof getBookById;
    getBookChaptersById: typeof getBookChaptersById;
};
export default _default;
