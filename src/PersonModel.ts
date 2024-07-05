export interface PersonBase {
    name: string;  
    phone: string;
    address: string;   
}
export interface Person extends PersonBase {   
    id: number;   
    createdAt: string;
    updatedAt: string;
}
export interface PersonRequest extends PersonBase{}