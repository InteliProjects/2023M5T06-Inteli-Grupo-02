import {ApiProperty} from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
export class CourseDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'course type',
        example: 'course type'
    })
    readonly courseType: string;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'director name',
        example: 'director name'
    })
    readonly director: string;
}