import { Injectable } from '@nestjs/common';
import { PolyanetsService } from 'src/polyanets/polyanets.service';


const polyanetsService = new PolyanetsService()

@Injectable()
export class PhaseoneService {

    fillMap = async() => {
      try {
        for (let i = 2; i < 11; i++) {
          for (let j = 2; j < 9; j++) {
            if (i === j || j === (11 - i - 1)) {
              await polyanetsService.create({row: i, column: j});
            }
          }
        }
      } catch (error) {
        return error.response?.data || error.message;
      }
       
     }
}
