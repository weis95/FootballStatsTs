import fs from 'fs';

export abstract class CsvFileReader<T> { //T = Type of data, T for convention
    data: T[] = [];
    
    constructor(public filename: string) {} //to get argument 
    
    abstract mapRow(row: string[] ) : T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        })
        .split('\n')
        .map(
            (row: string): string[] => {
            return row.split(',');
            }
        )
        .map(this.mapRow);
    }
}