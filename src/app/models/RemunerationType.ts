export interface RemunerationTypeRequest {
    id: number,
    description: String;
}
export interface RemunerationTypeResponse {
  content: {
    id: number,
    description: String;
  }
}