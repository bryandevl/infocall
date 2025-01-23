import { Entity, Column, PrimaryColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

@Entity('sbs_detalle')
export class SbsDetalle {
    @PrimaryColumn({ type: 'varchar', length: 45 }) // Establecemos 'documento' como clave primaria
    documento: string;

    @Column({ type: 'varchar', length: 45 })
    fecha_reporte: string;

    @Column({ type: 'varchar', length: 45 })
    ruc: string;

    @Column({ type: 'varchar', length: 45 })
    cod_sbs: string;

    @Column({ type: 'varchar', length: 45 })
    entidad: string;

    @Column({ type: 'varchar', length: 100 })
    tipo_credito: string;

    @Column({ type: 'varchar', length: 45 })
    condicion: string;

    @Column({ type: 'decimal', precision: 10, scale: 2 })
    saldo: number;

    @Column({ type: 'int', width: 10 })
    dias_atraso: number;

}
