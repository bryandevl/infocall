import { Column, Entity, OneToMany, PrimaryColumn } from 'typeorm';
import { Cliente } from './cliente.entity';
import { Pedido } from './pedido.entity';

@Entity({ name: 'users' })
export class User {
	@PrimaryColumn()
	id: number;

	@Column()
	name: string;

	@Column()
	email: string;

	@Column()
	email_verified_at: Date;

	@Column()
	password: string;

	@Column()
	two_factor_secret: string;

	@Column()
	two_factor_recovery_codes: string;

	@Column()
	remember_token: string;

	@Column()
	letra: string;

	@Column()
	estado: number;

	@Column()
	rol: string;

	@Column()
	supervisor: string;

	@Column()
	operario: string;

	@Column()
	llamada: string;

	@Column()
	cobranza: string;

	@Column()
	jefe: string;

	@Column()
	identificador: string;

	@Column()
	exidentificador: string;

	@Column()
	clave_pedidos: string;

	@Column()
	unificado: string;

	@Column()
	meta_pedido: string;

	@Column()
	meta_pedido_2: string;

	@Column()
	meta_cobro: string;

	@Column()
	celular: number;

	@Column()
	provincia: string;

	@Column()
	distrito: string;

	@Column()
	direccion: string;

	@Column()
	referencia: string;

	@Column()
	current_team_id: number;

	@Column()
	profile_photo_path: string;

	@Column()
	excluir_meta: number;

	@Column()
	zona: string;

	@Column()
	created_at: Date;

	@Column()
	updated_at: Date;

	@Column()
	vidas_total: number;

	@Column()
	vidas_restantes: number;

	@Column()
	cant_vidas_cero: number;

	@Column()
	meta_quincena: number;

	@Column()
	birthday: Date;

	@Column()
	publicidad: number;

	@OneToMany(() => Cliente, cliente => cliente.user)
	clientes: Cliente[];

	@OneToMany(() => Pedido, pedido => pedido.user)
	pedidos: Pedido[];
}
