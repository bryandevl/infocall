import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Reniec } from 'src/entities/reniec.entity';

@Injectable()
export class ReniecService2018 {
    constructor(
        @InjectRepository(Reniec)
        private readonly reniecRepository: Repository<Reniec>,
    ) {}

    async findAll(): Promise<Reniec[]> {
        return this.reniecRepository.find();
    }

    // Función para convertir valores a número
    private parseToNumber(value: string | number): number {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue; // Retorna 0 si no se puede convertir
    }

    // Función para convertir a string de manera segura
    private parseToString(value: string | number | undefined): string {
        return value !== undefined ? value.toString() : ''; // Si es undefined, retorna una cadena vacía
    }

    async findByDocumentos(documentos: (string | number)[]): Promise<any[]> {
        // Convertir documentos a números
        const parsedDocumentos = documentos.map(this.parseToNumber);

        // Consulta a la tabla reniec_2018
        const reniec = await this.reniecRepository
            .createQueryBuilder('reniec_2018')
            .select([
                'reniec_2018.documento',
                'reniec_2018.apellido_pat',
                'reniec_2018.apellido_mat',
                'reniec_2018.nombre',
                'reniec_2018.fec_nac',
                'reniec_2018.ubigeo',
                'reniec_2018.ubigeo_dir',
                'reniec_2018.direccion',
                'reniec_2018.sexo',
                'reniec_2018.edo_civil',
                'reniec_2018.dig_ruc',
                'reniec_2018.nombre_mad',
                'reniec_2018.nombre_pat',
            ])
            .where('reniec_2018.documento IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Convertir el campo 'documento' a cadena de manera segura antes de devolver los datos
        return reniec.map(item => ({
            ...item,
            reniec_2018_documento: this.parseToString(item.reniec_2018_documento), // Convertir 'documento' a string
        }));
    }

    async create(reniec: Reniec): Promise<Reniec> {
        return this.reniecRepository.save(reniec);
    }
}
