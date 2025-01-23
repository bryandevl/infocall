import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('correo')
export class Correo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    documento: string;

    @Column()
    correo: string;

    @Column()
    validado: boolean;
}
