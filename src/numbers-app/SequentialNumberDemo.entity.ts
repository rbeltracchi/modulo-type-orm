import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from 'typeorm';

@Entity('SequentialNumberDemo')
export class SequentialNumber {

    @PrimaryColumn()
    private SequentialNumber: number;
    
    @Column()
    private user: string;
    
    public constructor(SequentialNumber?: number, user?: string){
        this.SequentialNumber = SequentialNumber ;
        this.user = user;
    }

    public getSequentialNumber(): number {
        return this.SequentialNumber;
    }

    public setSequentialNumber(SequentialNumber: number): void {
        this.SequentialNumber = SequentialNumber;
    }

    public getUser(): string {
        return this.user;
    }

    public setUser(user: string): void {
        this.user = user;
    }




    

}  