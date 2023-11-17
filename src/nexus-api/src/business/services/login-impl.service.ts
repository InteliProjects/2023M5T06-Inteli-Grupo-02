import { LoginDto } from "../dtos/login.dto";

export abstract class ILoginService{
   abstract login(loginDto: LoginDto): Promise<object> 
}