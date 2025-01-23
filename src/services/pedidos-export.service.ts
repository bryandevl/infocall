import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from 'src/entities/pedido.entity';
import { User } from 'src/entities/user.entity';
//import { getBasesByUserId } from 'src/utils';
import { Repository } from 'typeorm';

@Injectable()
export class PedidosExportService {
	@InjectRepository(User) private readonly userRepository: Repository<User>;
	constructor(@InjectRepository(Pedido) private readonly pedidoRepository: Repository<Pedido>) {}

	async getPedidos(fechaa: string, fechab: string, deuda: boolean, usuarioId: number) {
		//var check_state=true;
		//const bases = await getBasesByUserId(usuarioId);

		const queryBuilder = this.pedidoRepository
			.createQueryBuilder('pedidos')
			.innerJoin('detalle_pedidos', 'dp', 'pedidos.id = dp.pedido_id')
			.innerJoin('users', 'u', 'pedidos.user_clavepedido = u.clave_pedidos')
			.innerJoin('clientes', 'c', 'c.id = pedidos.cliente_id')
			//.where('pedidos.codigo not like  :code1', { code1: '%-C%' })
			//.where('pedidos.codigo not like  :code2', { code2: '%B-%' })
			//.where('pedidos.codigo not like  :code3', { code3: '%BB-%' })
			//.where('pedidos.correccion = :correccion', { correccion: 0 })
			//.where('pedidos.borrador = :borrador', { borrador: 0 })
			.where('u.estado = :estado', { estado: 1 })
			//.where('c.tipo = :tipo', { tipo: 1 })
			.where('cast(pedidos.fecha_origen as date) BETWEEN :fechaa AND :fechab', { fechaa, fechab })
			.select([
				'pedidos.correlativo as correlativo',
				'c.nombre as nombres',
				'c.icelular as icelulares',
				'c.celular as celulares',
				'pedidos.user_clavepedido as asesor',
				'pedidos.codigo as codigos',
				'dp.mes as mespedido',
				'dp.anio as aniopedido',
				'dp.nombre_empresa as razon_social',
				'dp.ruc as ruc',
				'dp.tipo_banca as tipo_banca',
				'dp.cantidad as importe',
				'dp.porcentaje as porcentaje',
				'dp.ft as ft',
				'dp.courier as courier',
				'dp.total as total',
				'dp.saldo as diferencia',
				'cast(pedidos.fecha_origen as date) as fecha',
				'pedidos.pagado as condicion_pa',
				'pedidos.condicion_envio as condicion_env',
				'cast(pedidos.updated_at as date) as fecha_mod',
				'pedidos.modificador as modificador',
				'pedidos.motivo as motivo',
				'pedidos.responsable as responsable',
				'pedidos.estado as estado',
				'pedidos.pendiente_anulacion as pendiente_anulacion',
			]);
		//.limit(1);

		/*if (bases.length > 0) {
			queryBuilder.andWhere('pedidos.user_clavepedido IN (:bases)', { bases: bases });
		}*/

		if (deuda) {
			queryBuilder
				.andWhere('pedidos.estado = :estado', { estado: 1 }) // Agregar condición para estado
				.andWhere('pedidos.pendiente_anulacion = :pendienteAnulacion', { pendienteAnulacion: 0 }) // Agregar condición para pendiente_anulacion
				.andWhere('pedidos.pagado IN (:...pagado)', { pagado: [0, 1] }); // Agregar condición para pagado
		}

		const results = await queryBuilder.getRawMany();

		results.forEach(result => {
			result.condicion_pa =
				result.condicion_pa === 0 ? 'SIN PAGO' : result.condicion_pa === 1 ? 'ADELANTO' : 'PAGADO';
			result.porcentaje = result.porcentaje + '%';
			result.estado = result.estado === 1 ? 'ACTIVO' : 'INACTIVO';
			result.pendiente_anulacion =
				result.pendiente_anulacion === 0 ? 'NO TIENE SOLICITUD' : 'PENDIENTE DE ANULACION';
		});
		return results;
	}
}
