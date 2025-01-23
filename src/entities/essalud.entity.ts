import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@Entity('essalud') // Nombre de la tabla en la base de datos
export class Essalud {
    @PrimaryGeneratedColumn({ type: 'bigint', name: 'id' })
    id: number;

    @Column({ type: 'bigint', name: 'documento' })
    documento: number;

    @Column({ type: 'varchar', length: 120, name: 'empresa' })
    empresa: string;

    @Column({ type: 'int', name: 'periodo' })
    periodo: number;

    @Column({ type: 'bigint', name: 'ruc' })
    ruc: number;

    @Column({ type: 'varchar', length: 1, name: 'condicion' })
    condicion: string;

    @Column({ type: 'decimal', precision: 18, scale: 2, name: 'sueldo' })
    sueldo: number;

    @Column({ type: 'datetime', name: 'validata_updated_at', nullable: true })
    validataUpdatedAt: Date;

    @Column({ type: 'datetime', name: 'validata_created_at', nullable: true })
    validataCreatedAt: Date;

    @CreateDateColumn({ type: 'datetime', name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ type: 'datetime', name: 'updated_at' })
    updatedAt: Date;
}
