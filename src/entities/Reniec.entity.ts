import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('reniec_2018')
export class Reniec {
    @PrimaryGeneratedColumn({ type: 'int', name: 'documento' })
    documento: number;

    @Column({ type: 'varchar', length: 45, nullable: true })
    apellido_pat: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    apellido_mat: string;

    @Column({ type: 'varchar', length: 60, nullable: true })
    nombre: string;

    @Column({ type: 'varchar', length: 10, nullable: true })
    fec_nac: string;

    @Column({ type: 'varchar', length: 6, nullable: true })
    ubigeo: string;

    @Column({ type: 'text', nullable: true })
    ubigeo_dir: string;

    @Column({ type: 'text', nullable: true })
    direccion: string;

    @Column({ type: 'int', nullable: true })
    sexo: number;

    @Column({ type: 'varchar', length: 10, nullable: true })
    edo_civil: string;

    @Column({ type: 'int', nullable: true })
    dig_ruc: number;

    @Column({ type: 'varchar', length: 45, nullable: true })
    nombre_mad: string;

    @Column({ type: 'varchar', length: 45, nullable: true })
    nombre_pat: string;

    @Column({ type: 'datetime', nullable: true })
    validata_updated_at: Date;

    @Column({ type: 'datetime', nullable: true })
    validata_created_at: Date;

    @Column({ type: 'datetime', nullable: true })
    created_at: Date;

    @Column({ type: 'datetime', nullable: true })
    updated_at: Date;
}
