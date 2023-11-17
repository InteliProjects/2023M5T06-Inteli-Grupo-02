import { Inject, Injectable } from '@nestjs/common';
import { IPartnerService } from 'src/business/services/partner-impl.service';
import { PartnerEntity } from 'src/business/entities/partner.entity';
import { PartnerDto } from 'src/business/dtos/partner.dto';
import { PartnerRepository } from '../repositories/partner.repository';
import { PrismaService } from '../prisma.service';
import { partnerQueries } from '../queries/partner.queries';
import { Cache } from 'cache-manager';

@Injectable()
export class PartnerService implements IPartnerService {
  constructor(
    private readonly repository: PartnerRepository,
    private readonly prisma: PrismaService,
  ) {}
  public async findPartnerByName(partnerName: string): Promise<PartnerEntity> {
    return this.prisma.$queryRaw(partnerQueries.findByPartnerName(partnerName));
  }

  public async getAllPartners(): Promise<PartnerEntity[]> {
    return await this.repository.findAll();
  }
  public async createPartner(partnerDto: PartnerDto): Promise<PartnerEntity> {
    return await this.repository.create(partnerDto);
  }
  public async updatePartner(
    partnerDto: PartnerDto,
    id: string,
  ): Promise<PartnerEntity> {
    return await this.repository.update(partnerDto, id);
  }
  public async deletePartner(id: string): Promise<PartnerEntity> {
    return await this.repository.delete(id);
  }
}
