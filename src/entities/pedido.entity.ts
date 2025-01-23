import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './user.entity';
import { Cliente } from './cliente.entity';

@Entity({ name: 'pedidos' })
export class Pedido {
	@PrimaryGeneratedColumn()
	id: number;

	@Column()
	correlativo: string;

	@ManyToOne(() => User, user => user.pedidos)
	@JoinColumn({ name: 'user_id' })
	user: User;

	@ManyToOne(() => Cliente, cliente => cliente.pedidos)
	@JoinColumn({ name: 'cliente_id' })
	cliente: Cliente;

	@Column()
	identificador: string;

	@Column()
	exidentificador: string;

	@Column()
	user_clavepedido: string;

	@Column()
	icelular_asesor: string;

	@Column()
	celular_cliente: string;

	@Column()
	icelular_cliente: string;

	@Column()
	creador: string;

	@Column()
	pago: number;

	@Column()
	pagado: string;

	@Column()
	editado: boolean;

	@Column()
	inflado: number;

	@Column()
	destino: string;

	@Column()
	trecking: string;

	@Column()
	direccion: string;

	@Column()
	condicion_envio: string;

	@Column()
	condicion_envio_code: number;

	@Column()
	condicion_envio_at: Date;

	@Column()
	condicion: string;

	@Column()
	condicion_code: number;

	@Column()
	condicion_int: number;

	@Column()
	guias: boolean;

	@Column()
	codigo: string;

	@Column()
	c_ruc: string;

	@Column()
	c_razonsocial: string;

	@Column()
	c_cantidad: number;

	@Column()
	c_tipo_banca: string;

	@Column()
	c_mes: string;

	@Column()
	c_anio: string;

	@Column()
	codigos_confirmados: string;

	@Column()
	notificacion: string;

	@Column()
	motivo: string;

	@Column()
	responsable: string;

	@Column()
	modificador: string;

	@Column()
	devuelto: number;

	@Column()
	cant_devuelto: number;

	@Column()
	observacion_devuelto: string;

	@Column()
	user_reg: number;

	@Column()
	estado: number;

	@Column()
	created_at: Date;
}
