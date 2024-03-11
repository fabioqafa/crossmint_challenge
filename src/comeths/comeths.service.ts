import { Injectable } from '@nestjs/common';
import { CreateComethDto } from './dto/create-cometh.dto';
import { UpdateComethDto } from './dto/update-cometh.dto';
import axios from 'axios';
import { apiUrl, candidateId } from 'src/main';
import { RemoveComethDto } from './dto/remove-cometh.dto';

const endpoint = '/comeths';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

const oppositeDirections: Record<string, string> = {
  'up': 'right',
  'down': 'left',
  'left': 'up',
  'right': 'down'
};

@Injectable()
export class ComethsService {
  create = async({row, column, direction}: CreateComethDto): Promise<boolean> => {
    try {
        
        const oppositeDirection = oppositeDirections[direction];
        await axios.post(apiUrl + endpoint, {
          candidateId,
          row,
          column,
          direction: oppositeDirection
        }, 
        config)
      return true;

    } catch (error) {
      return error.response?.data || error.message;
    }
  }

  remove = async({row, column}: RemoveComethDto): Promise<boolean> => {
    try {
      await axios.delete(apiUrl + endpoint, { data: {
        candidateId,
        row,
        column
      }});

      return true;

    } catch (error) {
      return error.response?.data || error.message;
    }
  }
}
