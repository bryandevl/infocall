import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity('reniec_conyuges')
export class ReniecConyuge {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bigint' })
    documento: number;

    @Column({ type: 'bigint' })
    doc_parent: number;

    @Column({ type: 'varchar', length: 120 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    parentezco: string;
}

@Entity('reniec_familiares')
export class ReniecFamiliar {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bigint' })
    documento: number;

    @Column({ type: 'bigint' })
    doc_parent: number;

    @Column({ type: 'varchar', length: 120 })
    nombre: string;

    @Column({ type: 'varchar', length: 50 })
    tipo: string;
}


@Entity('reniec_hermanos')
export class ReniecHermano {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'bigint' })
    documento: number;

    @Column({ type: 'bigint' })
    doc_parent: number;

    @Column({ type: 'varchar', length: 120 })
    nombre: string;
}