import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ReniecConyuge } from 'src/entities/Familiar.entity';
import { ReniecFamiliar } from 'src/entities/Familiar.entity';
import { ReniecHermano } from 'src/entities/Familiar.entity';

@Injectable()
export class ReniecService {
    constructor(
        @InjectRepository(ReniecConyuge) private readonly conyugeRepository: Repository<ReniecConyuge>,

        @InjectRepository(ReniecFamiliar) private readonly familiarRepository: Repository<ReniecFamiliar>,

        @InjectRepository(ReniecHermano) private readonly hermanoRepository: Repository<ReniecHermano>,
    ) {}

    // Función para convertir valores a número
    private parseToNumber(value: string | number): number {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue; // Retorna 0 si no se puede convertir
    }

    // Función para convertir a string
    private parseToString(value: string | number): string {
        return value.toString();
    }

    // Función para aplicar la conversión a un array de datos
    private convertFamilyData(data: any[]) {
        return data.map(item => ({
            documento: this.parseToString(this.parseToNumber(item.documento)), // Convertir a string
            doc_parent: this.parseToString(this.parseToNumber(item.doc_parent)), // Convertir a string
            nombre: item.nombre,
            tipo: item.tipo,
        }));
    }

    async getFamilyInfoByDocumento(documentos: (string | number)[]) {
        // Convertir documentos a números
        const parsedDocumentos = documentos.map(this.parseToNumber);

        // Consulta a la tabla reniec_conyuges
        const conyugeData = await this.conyugeRepository
            .createQueryBuilder('reniec_conyuges')
            .select([
                'reniec_conyuges.documento AS documento',
                'reniec_conyuges.doc_parent AS doc_parent',
                'reniec_conyuges.nombre AS nombre',
                'reniec_conyuges.parentezco AS tipo',
            ])
            .where('reniec_conyuges.doc_parent IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Consulta a la tabla reniec_familiares
        const familiarData = await this.familiarRepository
            .createQueryBuilder('reniec_familiares')
            .select([
                'reniec_familiares.documento AS documento',
                'reniec_familiares.doc_parent AS doc_parent',
                'reniec_familiares.nombre AS nombre',
                'reniec_familiares.tipo AS tipo',
            ])
            .where('reniec_familiares.doc_parent IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Consulta a la tabla reniec_hermanos
        const hermanoData = await this.hermanoRepository
            .createQueryBuilder('reniec_hermanos')
            .select([
                'reniec_hermanos.documento AS documento',
                'reniec_hermanos.doc_parent AS doc_parent',
                'reniec_hermanos.nombre AS nombre',
                "'HERMANO' AS tipo", // Definido directamente
            ])
            .where('reniec_hermanos.doc_parent IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Combina los resultados de todas las consultas y aplica la conversión
        const familyInfo = [
            ...this.convertFamilyData(conyugeData),
            ...this.convertFamilyData(familiarData),
            ...this.convertFamilyData(hermanoData),
        ];

        return familyInfo;
    }
}
