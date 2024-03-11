import { Injectable } from '@nestjs/common';
import axios from 'axios';
import { ComethsService } from 'src/comeths/comeths.service';
import { apiUrl, candidateId } from 'src/main';
import { PolyanetsService } from 'src/polyanets/polyanets.service';
import { SoloonsService } from 'src/soloons/soloons.service';

const comethsService = new ComethsService();
const polyanetsService = new PolyanetsService();
const soloonsService = new SoloonsService();

@Injectable()
export class PhasetwoService {
    getGoalMap = async() => {
        const goalMap = await axios.get(apiUrl + `/map/${candidateId}/goal`);

        return goalMap;
    }

    fillMapWithPolyanets = async (): Promise<boolean> => {
        try {
            const goalMap = await this.getGoalMap();
            const promises: Promise<void>[] = [];
            goalMap.data.goal.forEach((elements, row: number) => {
                elements.forEach((element, column: number) => {
                    if (element === 'POLYANET') {
                        // Ensure that polyanetsService.create returns a promise
                        const promise = polyanetsService.create({ row, column });
                        promises.push(promise);
                    }
                });
            });
        
            await Promise.all(promises);
            return true;
        } catch (error) {
            return error.response?.data || error.message;
        }
        
    }
    

    fillMapWithSoloons = async (): Promise<boolean> => {
        try {
            const goalMap = await this.getGoalMap();
            for (let row = 0; row < goalMap.data.goal.length; row++) {
                for (let column = 0; column < goalMap.data.goal[row].length; column++) {
                    const element = goalMap.data.goal[row][column];
                    switch (element) {
                        case 'RED_SOLOON':
                            await soloonsService.create({ row, column, color: 'red' });
                            break;
                        case 'BLUE_SOLOON':
                            await soloonsService.create({ row, column, color: 'blue' });
                            break;
                        case 'WHITE_SOLOON':
                            await soloonsService.create({ row, column, color: 'white' });
                            break;
                        case 'PURPLE_SOLOON':
                            await soloonsService.create({ row, column, color: 'purple' });
                            break;
                        default:
                            break;
                    }
                }
        }
        return true;
        } catch (error) {
            return error.response?.data || error.message;
        }
        
    }

    fillMapWithComeths = async (): Promise<boolean> => {
        try {
            const goalMap = await this.getGoalMap();
        
            for (let row = 0; row < goalMap.data.goal.length; row++) {
            const elements = goalMap.data.goal[row];
    
                for (let column = 0; column < elements.length; column++) {
                    const element = elements[column];
    
                    switch (element) {
                        case 'RIGHT_COMETH':
                            await comethsService.create({ row, column, direction: 'up' });
                            break;
                        case 'LEFT_COMETH':
                            await comethsService.create({ row, column, direction: 'down' });
                            break;
                           case 'UP_COMETH':
                            await comethsService.create({ row, column, direction: 'left' });
                            break;
                        case 'DOWN_COMETH':
                            await comethsService.create({ row, column, direction: 'right' });
                            break;
                        default:
                            break;
                    }
                }
            }
        
        return true;
        } catch (error) {
            return error.response?.data || error.message;
        }
        
    }
    
    clearAllComeths = async(): Promise<boolean> => {
        try {
            const map = axios.get(apiUrl + `/map/${candidateId}`)
            const mapContent = (await map).data.map.content
            mapContent.forEach((elements, row: number) => {
                elements.forEach(async(element, column: number) => {
                    if (element != null) {
                        await comethsService.remove({row, column})
                    }
                })
            });
    
            return true;
        } catch (error) {
            return error.response?.data || error.message;
        }
        
    }

}
