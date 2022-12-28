import { EBookSort, EChapterSort } from './enum';
export interface PagenationDto {
    skip?: number;
    take?: number;
}
export interface PagenationResultDto<T> {
    docs: Array<T>;
    total: number;
    limit: number;
    offset: number;
    pages: number;
}
export interface GetBookDto extends PagenationDto {
    sort?: EBookSort;
}
export interface GetChapterDto extends PagenationDto {
    sort?: EChapterSort;
}
export interface BookDto {
    _id: string;
    name: string;
}
export interface ChapterDto {
    _id: string;
    chapterName: string;
}
