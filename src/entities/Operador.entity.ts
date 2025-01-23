import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
//import { User } from './user.entity';
//import { Cliente } from './cliente.entity';

@Entity('movistar')
export class Movistar {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  documento: number;

  @Column({ type: 'varchar', length: 120 })
  nombre: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 100 })
  origen_data: string;

  @Column({ type: 'date' })
  fecha_data: Date;

  @Column({ type: 'varchar', length: 200 })
  plan: string;

  @Column({ type: 'date' })
  fecha_activacion: Date;

  @Column({ type: 'varchar', length: 200 })
  modelo: string;

  @Column({ type: 'tinyint', default: 0 })
  with_whatsapp: number;
  // Otros campos según la estructura de tu tabla
}

@Entity('claro')
export class Claro {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  documento: number;

  @Column({ type: 'varchar', length: 120 })
  nombre: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 100 })
  origen_data: string;

  @Column({ type: 'date' })
  fecha_data: Date;

  @Column({ type: 'varchar', length: 200 })
  plan: string;

  @Column({ type: 'date' })
  fecha_activacion: Date;

  @Column({ type: 'varchar', length: 200 })
  modelo: string;

  @Column({ type: 'tinyint', default: 0 })
  with_whatsapp: number;
  // Otros campos según la estructura de tu tabla
}

@Entity('entel')
export class Entel {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  documento: number;

  @Column({ type: 'varchar', length: 120 })
  nombre: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 100 })
  origen_data: string;

  @Column({ type: 'date' })
  fecha_data: Date;

  @Column({ type: 'varchar', length: 200 })
  plan: string;

  @Column({ type: 'date' })
  fecha_activacion: Date;

  @Column({ type: 'varchar', length: 200 })
  modelo: string;

  @Column({ type: 'tinyint', default: 0 })
  with_whatsapp: number;
  // Otros campos según la estructura de tu tabla
}

@Entity('bitel')
export class Bitel {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  documento: number;

  @Column({ type: 'varchar', length: 120 })
  nombre: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 100 })
  origen_data: string;

  @Column({ type: 'date' })
  fecha_data: Date;

  @Column({ type: 'varchar', length: 200 })
  plan: string;

  @Column({ type: 'date' })
  fecha_activacion: Date;

  @Column({ type: 'varchar', length: 200 })
  modelo: string;

  @Column({ type: 'tinyint', default: 0 })
  with_whatsapp: number;
  // Otros campos según la estructura de tu tabla
}

@Entity('movistar_fijo')
export class MovistarFijo {
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Column({ type: 'bigint' })
  documento: number;

  @Column({ type: 'varchar', length: 120 })
  nombre: string;

  @Column({ type: 'int' })
  numero: number;

  @Column({ type: 'varchar', length: 100 })
  origen_data: string;

  @Column({ type: 'date' })
  fecha_data: Date;

  @Column({ type: 'varchar', length: 200 })
  plan: string;

  @Column({ type: 'date' })
  fecha_activacion: Date;

  @Column({ type: 'varchar', length: 200 })
  modelo: string;

  @Column({ type: 'tinyint', default: 0 })
  with_whatsapp: number;
}