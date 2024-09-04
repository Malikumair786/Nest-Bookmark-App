import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService extends PrismaClient {
    constructor(){
        super({                 //call the constructor of the class (PrismClient)
            datasources: {
                db:{
                    url:`mysql://root:M@liks321@localhost:3306/bookmarkdb`
                }
            }
        });
    }
}
