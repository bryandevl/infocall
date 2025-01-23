import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'sbs'})
export class Sbs {
  @PrimaryColumn()
  documento: string;

  @Column()
  cod_sbs: string;

  @Column()
  fecha_reporte_sbs: string;

  @Column()
  ruc: string;

  @Column('int')
  cant_empresas: number;

  @Column('decimal', { precision: 10, scale: 2 })
  calificacion_normal: number;

  @Column('decimal', { precision: 10, scale: 2 })
  calificacion_cpp: number;

  @Column('decimal', { precision: 10, scale: 2 })
  calificacion_deficiente: number;

  @Column('decimal', { precision: 10, scale: 2 })
  calificacion_dudoso: number;

  @Column('decimal', { precision: 10, scale: 2 })
  calificacion_perdida: number;
}
