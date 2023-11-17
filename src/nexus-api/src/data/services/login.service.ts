import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ILoginService } from 'src/business/services/login-impl.service';
import { loginQueries } from '../queries/login.queries';
import { LoginDto } from 'src/business/dtos/login.dto';

interface UserData {
  id: string;
  name: string;
  password: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
  email: string;
}


@Injectable()
export class LoginService implements ILoginService {
  constructor(private readonly prisma: PrismaService) {}

  public async login(logindto: LoginDto): Promise<object> {
    const { email, password } = logindto;

    if (!email || typeof email !== 'string') {
      throw new NotFoundException('Invalid email');
    }

    const isAnalyst = email.endsWith('@sou.inteli.edu.br');

    if (isAnalyst) {
      const userFound : UserData = await this.prisma.$queryRaw(
        loginQueries.findAnalystByEmail(email),
      );
      
      if (!userFound) {
        throw new NotFoundException('ANALYST not found');
      }
      
      return {
        userType: 'analyst',
        isConnected: true,
        userId: userFound[0].id,
      };
    } else {
      const userFound : UserData = await this.prisma.$queryRaw(
        loginQueries.findPartnerByEmail(email),
      );

      if (!userFound) {
        throw new NotFoundException('PARTNER not found');
      }

      return {
        userType: 'partner',
        isConnected: true,
        userId: userFound[0].id,
      };
    }
  }
}
