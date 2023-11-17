import { Class } from "@prisma/client";
import {ApiProperty} from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsDate } from "class-validator";

export class ClassDto{
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'class name',
        example: 'class name'
    })
    customerName: string;
    @IsDate()
    @IsNotEmpty()
    @ApiProperty({
        description: 'class start date',
        example: '2021-05-01'
    })
    startYear: Date;
    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        description: 'id of the course that the class belongs to',
        example: '1'
    })
    courseId: string;
}
