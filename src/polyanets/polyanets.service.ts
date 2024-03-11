import { Injectable } from '@nestjs/common';
import { CreatePolyanetDto } from './dto/create-polyanet.dto';
import { UpdatePolyanetDto } from './dto/update-polyanet.dto';
import { apiUrl, candidateId } from 'src/main';
import axios from 'axios';
import { RemovePolyanetDto } from './dto/remove-polyanet.dto';

const endpoint = '/polyanets'
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
}

@Injectable()
export class PolyanetsService {

  create = async({row, column}: CreatePolyanetDto): Promise<void> => {
    try {
      await axios.post(apiUrl + endpoint, {
          candidateId,
          row,
          column
        }, 
        config
        );
    } catch (error) {
      return error.response?.data || error.message;
    }

  }

  remove = async({row, column}: RemovePolyanetDto): Promise<boolean> => {    
    try {
      await axios.delete(apiUrl + endpoint, { data: {
          candidateId,
          row,
          column
        }} );

      return true;
    } catch (error) {
      return error.response?.data || error.message;
    }
  }
}
