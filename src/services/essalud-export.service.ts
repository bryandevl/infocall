import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Essalud } from 'src/entities/essalud.entity';

@Injectable()
export class EssaludService {
    constructor(
        @InjectRepository(Essalud)
        private readonly essaludRepository: Repository<Essalud>,
    ) {}

    async findAll(): Promise<Essalud[]> {
        return this.essaludRepository.find();
    }

    private parseToNumber(value: string | number): number {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue; // Retorna 0 si no se puede convertir
    }

    // Función para convertir a string de manera segura
    private parseToString(value: string | number | null | undefined): string {
        return value !== null && value !== undefined ? value.toString() : ''; // Retorna cadena vacía si es null o undefined
    }

    // Método para encontrar registros por múltiples documentos
    async findByEssalud(documentos: (string | number)[]): Promise<any[]> {
        const parsedDocumentos = documentos.map(this.parseToNumber);

        const essalud = await this.essaludRepository
            .createQueryBuilder('essalud')
            .select([
                'essalud.documento',
                'essalud.empresa',
                'essalud.periodo',
                'essalud.ruc',
                'essalud.condicion',
                'essalud.sueldo',
            ])
            .where('essalud.documento IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Convertir todos los campos a string
        return essalud.map(item => ({
            documento: this.parseToString(item.essalud_documento),
            empresa: this.parseToString(item.essalud_empresa),
            periodo: this.parseToString(item.essalud_periodo),
            ruc: this.parseToString(item.essalud_ruc),
            condicion: this.parseToString(item.essalud_condicion),
            sueldo: this.parseToString(item.essalud_sueldo),
        }));
    }

    // Método para crear un registro en la tabla Essalud
    async create(essalud: Essalud): Promise<Essalud> {
        return this.essaludRepository.save(essalud);
    }
}
