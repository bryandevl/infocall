import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Sbs } from 'src/entities/sbs.entitt';

@Injectable()
export class SBSService {
    constructor(
        @InjectRepository(Sbs)
        private readonly SbsRepository: Repository<Sbs>,
    ) {}

    async findAll(): Promise<Sbs[]> {
        return this.SbsRepository.find();
    }

    private parseToNumber(value: string | number): number {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue; // Retorna 0 si no se puede convertir
    }

    // Función para convertir a string de manera segura
    private parseToString(value: string | number | undefined): string {
        return value !== undefined ? value.toString() : ''; // Si es undefined, retorna una cadena vacía
    }

    // Método para encontrar registros por múltiples documentos
    async findBySbs(documentos: (string | number)[]): Promise<any[]> {
        const parsedDocumentos = documentos.map(this.parseToNumber);

        const sbsRecords = await this.SbsRepository
            .createQueryBuilder('sbs')
            .select([
                'sbs.documento',
                'sbs.cod_sbs',
                'sbs.fecha_reporte_sbs',
                'sbs.ruc',
                'sbs.cant_empresas',
                'sbs.calificacion_normal',
                'sbs.calificacion_cpp',
                'sbs.calificacion_deficiente',
                'sbs.calificacion_dudoso',
                'sbs.calificacion_perdida',
            ])
            .where('sbs.documento IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Convertir todos los campos a string
        return sbsRecords.map(item => ({
            documento: this.parseToString(item.sbs_documento),
            cod_sbs: this.parseToString(item.sbs_cod_sbs),
            fecha_reporte_sbs: this.parseToString(item.sbs_fecha_reporte_sbs),
            ruc: this.parseToString(item.sbs_ruc),
            cant_empresas: this.parseToString(item.sbs_cant_empresas),
            calificacion_normal: this.parseToString(item.sbs_calificacion_normal),
            calificacion_cpp: this.parseToString(item.sbs_calificacion_cpp),
            calificacion_deficiente: this.parseToString(item.sbs_calificacion_deficiente),
            calificacion_dudoso: this.parseToString(item.sbs_calificacion_dudoso),
            calificacion_perdida: this.parseToString(item.sbs_calificacion_perdida),
        }));
    }

    // Método para crear un registro en la tabla SBS
    async create(sbs: Sbs): Promise<Sbs> {
        return this.SbsRepository.save(sbs);
    }
}
