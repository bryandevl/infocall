import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Correo } from 'src/entities/correo.entity';

@Injectable()
export class CorreoService {
    constructor(
        @InjectRepository(Correo)
        private readonly CorreoRepository: Repository<Correo>,
    ) {}

    async findAll(): Promise<Correo[]> {
        return this.CorreoRepository.find();
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
    async findByCorreo(documentos: (string | number)[]): Promise<any[]> {
        const parsedDocumentos = documentos.map(this.parseToNumber);

        const correo = await this.CorreoRepository
            .createQueryBuilder('correo')
            .select([
                'correo.documento',
                'correo.correo',
                'correo.validado',
                
            ])
            .where('correo.documento IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();

        // Convertir todos los campos a string
        return correo.map(item => ({
            documento: this.parseToString(item.correo_documento),
            correo: this.parseToString(item.correo_correo),
            validado: this.parseToString(item.correo_validado),
          
        }));
    }

    // Método para crear un registro en la tabla Essalud
    async create(correo: Correo): Promise<Correo> {
        return this.CorreoRepository.save(correo);
    }
}
