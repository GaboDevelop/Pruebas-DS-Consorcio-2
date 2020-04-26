import { PrimaryGeneratedColumn, CreateDateColumn } from "typeorm";

export class EntidadBase{
    //autoincrement

    @PrimaryGeneratedColumn()
    id:number;
    
    @CreateDateColumn({nullable:true})
    createdAt: Date;
    
    @CreateDateColumn({nullable:true})
	updatedAt:Date;
}