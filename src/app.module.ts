import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import config, { validation } from './config/config';
import * as Joi from 'joi';
import { ClienteController } from './controllers/cliente.controller';
import { TestController } from './controllers/test.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movistar } from './entities/Operador.entity';
import { Claro } from './entities/Operador.entity';
import { Entel } from './entities/Operador.entity';
import { Bitel } from './entities/Operador.entity';
import { MovistarFijo } from './entities/Operador.entity';
import { ReniecConyuge } from './entities/Familiar.entity';
import { ReniecFamiliar } from './entities/Familiar.entity';
import { ReniecHermano } from './entities/Familiar.entity';
import { Reniec } from './entities/reniec.entity';
import { Essalud } from './entities/essalud.entity';
import { Correo } from './entities/correo.entity';
import { Sbs } from './entities/sbs.entitt';
import { SbsDetalle } from './entities/sbsDetalle.entity';
import { SbsDetalleService } from './services/sbsDetalle-export.service';

import { CorreoService } from './services/correo.service';

import {  ReniecService } from './services/Familiar-export.service';

import {  InfoCallService } from './services/movistar-export.service';

import {  ReniecService2018 } from './services/Reniec-export.service';

import {  EssaludService } from './services/essalud-export.service';

import { SBSService } from './services/sbs.service';

@Module({
	imports: [
		TypeOrmModule.forFeature([Movistar,Claro,Bitel,Entel,MovistarFijo,ReniecConyuge,ReniecFamiliar,ReniecHermano,Reniec,Essalud , Correo , Sbs , SbsDetalle]),
		ConfigModule.forRoot({
			// * Definimos que es global
			isGlobal: true,
			// * Definimos el archivo de configuracion
			envFilePath: '.env',
			// * Definimos el esquema y la validacion
			load: [config],
			validationSchema: Joi.object(validation),
		}),
		DatabaseModule,
	],
	providers: [InfoCallService,ReniecService,ReniecService2018,EssaludService, CorreoService , SBSService , SbsDetalleService],
	controllers: [AppController, ClienteController,TestController],
})
export class AppModule {}
