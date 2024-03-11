import { Injectable } from '@nestjs/common';
import { CreateSoloonDto } from './dto/create-soloon.dto';
import { UpdateSoloonDto } from './dto/update-soloon.dto';
import axios from 'axios';
import { apiUrl, candidateId } from 'src/main';
import { RemoveSoloonDto } from './dto/remove-soloon.dto';

const endpoint = '/soloons';
const config = {
  headers: {
    'Content-Type': 'application/json'
  }
};

@Injectable()
export class SoloonsService {
  create = async({row, column, color}: CreateSoloonDto): Promise<boolean> => {
    try { 
      await axios.post(apiUrl + endpoint, {
        candidateId,
        row,
        column,
        color
      }, 
      config);

      return true
      
    } 
    
    catch (error) {
      return error.response?.data || error.message;
    }
   
  }

  remove = async({row, column}: RemoveSoloonDto): Promise<boolean> => {
    
    try {
      await axios.delete(apiUrl + endpoint, { data: {
        candidateId,
        row,
        column
      }})
  
      return true;

    } 
    
    catch (error) {
      return error.response?.data || error.message;
    }
    
  }
}
