import { RemunerationTypeRequest } from './RemunerationType';

export interface RemunerationResponse {
  id: number,
  remunerationValue: number,
  minimalFee: number,
  remunerationType: RemunerationTypeRequest
}