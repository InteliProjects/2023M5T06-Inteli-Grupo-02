import { IsString, IsNotEmpty, IsNumber, IsBoolean, IsOptional, IsEmpty } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

// Interface que serve como contrato de tipo
export interface InitiativeDto {
  readonly initiativeName: string;
  readonly scope: string;
  readonly courseId?: string | null;
  readonly moduleId?: string | null;
  readonly partnerRate: number;
  readonly analystRate: number;
  readonly analystId?: string | null;
  readonly partnerId: string;
  readonly allocated: boolean;
  readonly textFeedback: string;
  readonly stage: number;
  readonly status: string;
  readonly urlTAPI: string;
}

export class ConcreteInitiativeDto implements InitiativeDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Nome da iniciativa',
    example: 'Nome da iniciativa',
  })
  readonly initiativeName: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Descrição da iniciativa',
    example: 'Descrição da iniciativa',
  })
  readonly scope: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Taxa do parceiro',
    example: 10,
  })
  readonly partnerRate: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Taxa do analista',
    example: 15,
  })
  readonly analystRate: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'ID do parceiro',
    example: '5ac7412d-f571-4977-b09f-414beef7e000',
  })
  readonly partnerId: string | null;

  @IsBoolean()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Alocação',
    example: true,
  })
  readonly allocated: boolean;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Feedback de texto',
    example: 'Ótimo trabalho!',
  })
  readonly textFeedback: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Estágio',
    example: 2,
  })
  readonly stage: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Status',
    example: 'pendente',
  })
  readonly status: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'URL da TAPI',
    example: 'https://www.example.com/tapi',
  })
  readonly urlTAPI: string;
}

export class ApiResponseInitiativeDto extends ConcreteInitiativeDto {}
