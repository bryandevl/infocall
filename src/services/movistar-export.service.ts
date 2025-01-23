import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Movistar } from 'src/entities/Operador.entity';
import { Claro } from 'src/entities/Operador.entity';
import { Entel } from 'src/entities/Operador.entity';
import { Bitel } from 'src/entities/Operador.entity';
import { MovistarFijo } from 'src/entities/Operador.entity';

@Injectable()
export class InfoCallService {
  constructor(
    @InjectRepository(Movistar) private readonly movistarRepository: Repository<Movistar>,
    @InjectRepository(Claro) private readonly claroRepository: Repository<Claro>,
    @InjectRepository(Entel) private readonly entelRepository: Repository<Entel>,
    @InjectRepository(Bitel) private readonly bitelRepository: Repository<Bitel>,
    @InjectRepository(MovistarFijo) private readonly movistarFijoRepository: Repository<MovistarFijo>,
  ) {}

  async getInfoByDocumento(documento: number[]) {
	const movistarData = await this.movistarRepository
	  .createQueryBuilder('movistar')
	  .where('movistar.documento IN (:...documento)', { documento })
	  .getMany();
  
	const claroData = await this.claroRepository
	  .createQueryBuilder('claro')
	  .where('claro.documento IN (:...documento)', { documento })
	  .getMany();
  
	const entelData = await this.entelRepository
	  .createQueryBuilder('entel')
	  .where('entel.documento IN (:...documento)', { documento })
	  .getMany();
  
	const bitelData = await this.bitelRepository
	  .createQueryBuilder('bitel')
	  .where('bitel.documento IN (:...documento)', { documento })
	  .getMany();
  
	const movistarFijoData = await this.movistarFijoRepository
	  .createQueryBuilder('movistar_fijo')
	  .where('movistar_fijo.documento IN (:...documento)', { documento })
	  .getMany();
  
	// Combina todos los resultados
	return [
	  ...movistarData,
	  ...claroData,
	  ...entelData,
	  ...bitelData,
	  ...movistarFijoData,
	];
  }
  
}