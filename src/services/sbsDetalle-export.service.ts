import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SbsDetalle } from 'src/entities/sbsDetalle.entity';

@Injectable()
export class SbsDetalleService {
    constructor(
        @InjectRepository(SbsDetalle)
        private readonly sbsDetalleRepository: Repository<SbsDetalle>,
    ) {}

    async findAll(): Promise<SbsDetalle[]> {
        return this.sbsDetalleRepository.find();
    }

    private parseToNumber(value: string | number): number {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue; // Retorna 0 si no se puede convertir
    }

    private parseToString(value: string | number | null | undefined): string {
        return value !== null && value !== undefined ? value.toString() : ''; // Maneja null y undefined
    }

    async findBySbsDetalle(documentos: (string | number)[]): Promise<any[]> {
        const parsedDocumentos = documentos.map(this.parseToNumber);

        const sbsDetalle = await this.sbsDetalleRepository
            .createQueryBuilder('sbs_detalle')
            .select([
                'sbs_detalle.documento',
                'sbs_detalle.fecha_reporte',
                'sbs_detalle.ruc',
                'sbs_detalle.cod_sbs',
                'sbs_detalle.entidad',
                'sbs_detalle.tipo_credito',
                'sbs_detalle.condicion',
                'sbs_detalle.saldo',
                'sbs_detalle.dias_atraso'
            ])
            .where('sbs_detalle.documento IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        return sbsDetalle.map(item => ({
            documento: this.parseToString(item.sbs_detalle_documento),
            fecha_reporte: this.parseToString(item.sbs_detalle_fecha_reporte),
            ruc: this.parseToString(item.sbs_detalle_ruc),
            cod_sbs: this.parseToString(item.sbs_detalle_cod_sbs),
            entidad: this.parseToString(item.sbs_detalle_entidad),
            tipo_credito: this.parseToString(item.sbs_detalle_tipo_credito),
            condicion: this.parseToString(item.sbs_detalle_condicion),
            saldo: this.parseToString(item.sbs_detalle_saldo),
            dias_atraso: this.parseToString(item.sbs_detalle_dias_atraso),
        }));
    }

    async create(sbsDetalle: SbsDetalle): Promise<SbsDetalle> {
        return this.sbsDetalleRepository.save(sbsDetalle);
    }
}
