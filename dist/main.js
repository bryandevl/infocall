/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),
/* 2 */
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generateDocumentacion = void 0;
const swagger_1 = __webpack_require__(4);
const app_module_1 = __webpack_require__(5);
function generateDocumentacion(app) {
    const pdfMod = new swagger_1.DocumentBuilder()
        .setTitle('Exports')
        .setDescription('Exports')
        .setVersion(process.env.APP_VERSION)
        .build();
    const pdfDocument = swagger_1.SwaggerModule.createDocument(app, pdfMod, {
        include: [app_module_1.AppModule],
    });
    swagger_1.SwaggerModule.setup('docs/exports', app, pdfDocument);
}
exports.generateDocumentacion = generateDocumentacion;


/***/ }),
/* 4 */
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),
/* 5 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(2);
const app_controller_1 = __webpack_require__(6);
const database_module_1 = __webpack_require__(13);
const config_1 = __webpack_require__(16);
const config_2 = __webpack_require__(15);
const Joi = __webpack_require__(17);
const cliente_controller_1 = __webpack_require__(18);
const test_controller_1 = __webpack_require__(37);
const typeorm_1 = __webpack_require__(14);
const Operador_entity_1 = __webpack_require__(25);
const Operador_entity_2 = __webpack_require__(25);
const Operador_entity_3 = __webpack_require__(25);
const Operador_entity_4 = __webpack_require__(25);
const Operador_entity_5 = __webpack_require__(25);
const Familiar_entity_1 = __webpack_require__(27);
const Familiar_entity_2 = __webpack_require__(27);
const Familiar_entity_3 = __webpack_require__(27);
const reniec_entity_1 = __webpack_require__(29);
const essalud_entity_1 = __webpack_require__(31);
const correo_entity_1 = __webpack_require__(23);
const sbs_entitt_1 = __webpack_require__(21);
const sbsDetalle_entity_1 = __webpack_require__(33);
const sbsDetalle_export_service_1 = __webpack_require__(32);
const correo_service_1 = __webpack_require__(22);
const Familiar_export_service_1 = __webpack_require__(26);
const movistar_export_service_1 = __webpack_require__(24);
const Reniec_export_service_1 = __webpack_require__(28);
const essalud_export_service_1 = __webpack_require__(30);
const sbs_service_1 = __webpack_require__(19);
let AppModule = exports.AppModule = class AppModule {
};
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([Operador_entity_1.Movistar, Operador_entity_2.Claro, Operador_entity_4.Bitel, Operador_entity_3.Entel, Operador_entity_5.MovistarFijo, Familiar_entity_1.ReniecConyuge, Familiar_entity_2.ReniecFamiliar, Familiar_entity_3.ReniecHermano, reniec_entity_1.Reniec, essalud_entity_1.Essalud, correo_entity_1.Correo, sbs_entitt_1.Sbs, sbsDetalle_entity_1.SbsDetalle]),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env',
                load: [config_2.default],
                validationSchema: Joi.object(config_2.validation),
            }),
            database_module_1.DatabaseModule,
        ],
        providers: [movistar_export_service_1.InfoCallService, Familiar_export_service_1.ReniecService, Reniec_export_service_1.ReniecService2018, essalud_export_service_1.EssaludService, correo_service_1.CorreoService, sbs_service_1.SBSService, sbsDetalle_export_service_1.SbsDetalleService],
        controllers: [app_controller_1.AppController, cliente_controller_1.ClienteController, test_controller_1.TestController],
    })
], AppModule);


/***/ }),
/* 6 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppController = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const excel_dto_1 = __webpack_require__(7);
const node_1 = __webpack_require__(10);
const response_1 = __webpack_require__(11);
const utils_1 = __webpack_require__(12);
let AppController = exports.AppController = class AppController {
    async getExcel(dto) {
        const schema = (0, utils_1.convertRows)(dto.schema);
        const data = dto.data;
        const buffer = await (0, node_1.default)(data, {
            schema,
            buffer: true,
        });
        return (0, response_1.customResponse)('excel', buffer.toString('base64'));
    }
};
__decorate([
    (0, common_1.Post)('excel'),
    (0, swagger_1.ApiOperation)({ summary: 'Reporte de RUCs' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_a = typeof excel_dto_1.ExcelDto !== "undefined" && excel_dto_1.ExcelDto) === "function" ? _a : Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "getExcel", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);


/***/ }),
/* 7 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExcelDto = exports.SchemaDto = void 0;
const swagger_1 = __webpack_require__(4);
const class_transformer_1 = __webpack_require__(8);
const class_validator_1 = __webpack_require__(9);
class SchemaDto {
}
exports.SchemaDto = SchemaDto;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "column", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)({ type: String }),
    __metadata("design:type", Object)
], SchemaDto.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", Number)
], SchemaDto.prototype, "width", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiPropertyOptional)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "format", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, swagger_1.ApiProperty)(),
    __metadata("design:type", String)
], SchemaDto.prototype, "value", void 0);
class ExcelDto {
}
exports.ExcelDto = ExcelDto;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => SchemaDto),
    (0, swagger_1.ApiProperty)({ type: [SchemaDto] }),
    __metadata("design:type", Array)
], ExcelDto.prototype, "schema", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => Object),
    (0, swagger_1.ApiProperty)({ type: [Object] }),
    __metadata("design:type", Array)
], ExcelDto.prototype, "data", void 0);


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),
/* 9 */
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),
/* 10 */
/***/ ((module) => {

module.exports = require("write-excel-file/node");

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.customResponse = void 0;
const customResponse = (message = 'Operacion Exitosa', body = null, statusCode = 200) => {
    return {
        statusCode,
        message,
        body,
    };
};
exports.customResponse = customResponse;


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HeadReniec2018 = exports.HeadSBS = exports.HeadSBSDetalle = exports.HeadEssalud = exports.HeadMovistar = exports.HeadFamiliar = exports.HeadCorreo = exports.convertRows = void 0;
const convertRows = (schema) => {
    const newData = [];
    schema.forEach(e => {
        const dd = {};
        for (const key in e) {
            if (Object.prototype.hasOwnProperty.call(e, key)) {
                if (key === 'value') {
                    dd[key] = d => d[e[key]];
                    continue;
                }
                if (key === 'type') {
                    switch (e[key]) {
                        case 'string':
                            dd[key] = String;
                            break;
                        case 'date':
                            dd[key] = Date;
                            break;
                        case 'number':
                            dd[key] = Number;
                            break;
                        case 'boolean':
                            dd[key] = Boolean;
                            break;
                        default:
                            dd[key] = String;
                            break;
                    }
                }
                else {
                    dd[key] = e[key];
                }
            }
        }
        newData.push(dd);
    });
    return newData;
};
exports.convertRows = convertRows;
exports.HeadCorreo = [
    {
        column: 'DOCUMENTO',
        type: 'string',
        format: '',
        value: 'documento',
        width: 15,
    },
    {
        column: 'CORREO',
        type: 'string',
        format: '',
        value: 'correo',
        width: 50,
    },
    {
        column: 'VALIDADO',
        type: 'string',
        format: '',
        value: 'validado',
        width: 3,
    }
];
exports.HeadFamiliar = [
    {
        column: 'DOCUMENTO',
        type: 'string',
        format: '',
        value: 'documento',
        width: 15,
    },
    {
        column: 'DOCUMENTO PARIENTE',
        type: 'string',
        format: '',
        value: 'doc_parent',
        width: 15,
    },
    {
        column: 'NOMBRE',
        type: 'string',
        format: '',
        value: 'nombre',
        width: 50,
    },
    {
        column: 'TIPO',
        type: 'string',
        format: '',
        value: 'tipo',
        width: 10,
    },
];
exports.HeadMovistar = [
    {
        column: 'Documento',
        type: 'number',
        format: '',
        value: 'documento',
        width: 15,
    },
    {
        column: 'NOMBRE',
        type: 'number',
        format: '',
        value: 'nombre',
        width: 50,
    },
    {
        column: 'NUMERO',
        type: 'number',
        format: '',
        value: 'numero',
        width: 10,
    },
    {
        column: 'ORIGEN DATA',
        type: 'string',
        format: '',
        value: 'origen_data',
        width: 45,
    },
    {
        column: 'FECHA DATA',
        type: 'string',
        format: '',
        value: 'fecha_data',
        width: 15,
    },
    {
        column: 'WSP',
        type: 'number',
        format: '',
        value: 'with_whatsapp',
        width: 5,
    },
];
exports.HeadEssalud = [
    {
        column: 'DOCUMENTO',
        type: 'number',
        format: '',
        value: 'documento',
        width: 10,
    },
    {
        column: 'EMPRESA',
        type: 'string',
        format: '',
        value: 'empresa',
        width: 60,
    },
    {
        column: 'PERIODO',
        type: 'string',
        format: '',
        value: 'periodo',
        width: 7,
    },
    {
        column: 'RUC',
        type: 'string',
        format: '',
        value: 'ruc',
        width: 13,
    },
    {
        column: 'CONDICION',
        type: 'string',
        format: '',
        value: 'condicion',
        width: 3,
    },
    {
        column: 'SUELDO',
        type: 'string',
        format: '',
        value: 'sueldo',
        width: 12,
    },
];
exports.HeadSBSDetalle = [
    {
        column: 'DOCUMENTO',
        type: 'string',
        format: '',
        value: 'documento',
        width: 15,
    },
    {
        column: 'FECHA REPORTE',
        type: 'string',
        format: '',
        value: 'fecha_reporte',
        width: 15,
    },
    {
        column: 'RUC',
        type: 'string',
        format: '',
        value: 'ruc',
        width: 15,
    },
    {
        column: 'CÓDIGO SBS',
        type: 'string',
        format: '',
        value: 'cod_sbs',
        width: 15,
    },
    {
        column: 'ENTIDAD',
        type: 'string',
        format: '',
        value: 'entidad',
        width: 25,
    },
    {
        column: 'TIPO CRÉDITO',
        type: 'string',
        format: '',
        value: 'tipo_credito',
        width: 25,
    },
    {
        column: 'CONDICIÓN',
        type: 'string',
        format: '',
        value: 'condicion',
        width: 15,
    },
    {
        column: 'SALDO',
        type: 'number',
        format: '#,##0.00',
        value: 'saldo',
        width: 15,
    },
    {
        column: 'DÍAS DE ATRASO',
        type: 'number',
        format: '',
        value: 'dias_atraso',
        width: 15,
    },
];
exports.HeadSBS = [
    {
        column: 'DOCUMENTO',
        type: 'string',
        format: '',
        value: 'sbs_documento',
        width: 15,
    },
    {
        column: 'CÓDIGO SBS',
        type: 'string',
        format: '',
        value: 'sbs_cod_sbs',
        width: 15,
    },
    {
        column: 'FECHA REPORTE SBS',
        type: 'string',
        format: '',
        value: 'sbs_fecha_reporte_sbs',
        width: 20,
    },
    {
        column: 'RUC',
        type: 'string',
        format: '',
        value: 'sbs_ruc',
        width: 15,
    },
    {
        column: 'CANTIDAD DE EMPRESAS',
        type: 'number',
        format: '',
        value: 'sbs_cant_empresas',
        width: 20,
    },
    {
        column: 'CALIFICACIÓN NORMAL',
        type: 'number',
        format: '0.00',
        value: 'sbs_calificacion_normal',
        width: 20,
    },
    {
        column: 'CALIFICACIÓN CPP',
        type: 'number',
        format: '0.00',
        value: 'sbs_calificacion_cpp',
        width: 20,
    },
    {
        column: 'CALIFICACIÓN DEFICIENTE',
        type: 'number',
        format: '0.00',
        value: 'sbs_calificacion_deficiente',
        width: 20,
    },
    {
        column: 'CALIFICACIÓN DUDOSO',
        type: 'number',
        format: '0.00',
        value: 'sbs_calificacion_dudoso',
        width: 20,
    },
    {
        column: 'CALIFICACIÓN PÉRDIDA',
        type: 'number',
        format: '0.00',
        value: 'sbs_calificacion_perdida',
        width: 20,
    }
];
exports.HeadReniec2018 = [
    {
        column: 'DOCUMENTO',
        type: 'number',
        format: '',
        value: 'reniec_2018_documento',
        width: 10,
    },
    {
        column: 'APELLIDO PATERNO',
        type: 'string',
        format: '',
        value: 'reniec_2018_apellido_pat',
        width: 20,
    },
    {
        column: 'APELLIDO MATERNO',
        type: 'string',
        format: '',
        value: 'reniec_2018_apellido_mat',
        width: 20,
    },
    {
        column: 'NOMBRE',
        type: 'string',
        format: '',
        value: 'reniec_2018_nombre',
        width: 20,
    },
    {
        column: 'FECHA NACIMIENTO',
        type: 'string',
        format: '',
        value: 'reniec_2018_fec_nac',
        width: 20,
    },
    {
        column: 'UBIGEO',
        type: 'string',
        format: '',
        value: 'reniec_2018_ubigeo',
        width: 10,
    },
    {
        column: 'UBIGEO DIRECCION',
        type: 'string',
        format: '',
        value: 'reniec_2018_ubigeo_dir',
        width: 30,
    },
    {
        column: 'DIRECCION',
        type: 'string',
        format: '',
        value: 'reniec_2018_direccion',
        width: 45,
    },
    {
        column: 'SEXO',
        type: 'number',
        format: '',
        value: 'reniec_2018_sexo',
        width: 3,
    },
    {
        column: 'E.CIVIL',
        type: 'string',
        format: '',
        value: 'reniec_2018_edo_civil',
        width: 8,
    },
    {
        column: 'DIG.RUC',
        type: 'number',
        format: '',
        value: 'reniec_2018_dig_ruc',
        width: 3,
    },
    {
        column: 'NOM.MADRE',
        type: 'string',
        format: '',
        value: 'reniec_2018_nombre_mad',
        width: 15,
    },
    {
        column: 'NOM.PADRE',
        type: 'string',
        format: '',
        value: 'reniec_2018_nombre_pat',
        width: 15,
    },
];


/***/ }),
/* 13 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DatabaseModule = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const config_1 = __webpack_require__(15);
let DatabaseModule = exports.DatabaseModule = class DatabaseModule {
};
exports.DatabaseModule = DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                useFactory: (configService) => {
                    return {
                        type: 'mariadb',
                        host: configService.host,
                        port: parseInt(configService.port_db),
                        username: configService.user_name,
                        password: configService.password,
                        database: configService.database,
                        autoLoadEntities: true,
                        synchronize: false,
                    };
                },
                inject: [config_1.default.KEY],
            }),
        ],
    })
], DatabaseModule);


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = require("@nestjs/typeorm");

/***/ }),
/* 15 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validation = void 0;
const config_1 = __webpack_require__(16);
const Joi = __webpack_require__(17);
exports["default"] = (0, config_1.registerAs)('config', () => ({
    port: process.env.PORT,
    host: process.env.HOST,
    port_db: process.env.PORT_DB,
    user_name: process.env.USER_NAME,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
}));
exports.validation = {
    PORT: Joi.number().required(),
    HOST: Joi.string().required(),
    PORT_DB: Joi.number().required(),
    USER_NAME: Joi.string().required(),
    PASSWORD: Joi.string().required(),
    DATABASE: Joi.string().required(),
};


/***/ }),
/* 16 */
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),
/* 17 */
/***/ ((module) => {

module.exports = require("joi");

/***/ }),
/* 18 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ClienteController = void 0;
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const sbs_service_1 = __webpack_require__(19);
const correo_service_1 = __webpack_require__(22);
const movistar_export_service_1 = __webpack_require__(24);
const Familiar_export_service_1 = __webpack_require__(26);
const Reniec_export_service_1 = __webpack_require__(28);
const essalud_export_service_1 = __webpack_require__(30);
const sbsDetalle_export_service_1 = __webpack_require__(32);
const exceljs_1 = __webpack_require__(34);
const express_1 = __webpack_require__(35);
const utils_1 = __webpack_require__(12);
const JSZip = __webpack_require__(36);
let ClienteController = exports.ClienteController = class ClienteController {
    constructor(movistarExportsService, FamiliarReniecExportsService, ReniecExportsService, EssaludExportsService, CorreoExportsService, SbsExportsService, SbsDetalleExportsService) {
        this.movistarExportsService = movistarExportsService;
        this.FamiliarReniecExportsService = FamiliarReniecExportsService;
        this.ReniecExportsService = ReniecExportsService;
        this.EssaludExportsService = EssaludExportsService;
        this.CorreoExportsService = CorreoExportsService;
        this.SbsExportsService = SbsExportsService;
        this.SbsDetalleExportsService = SbsDetalleExportsService;
    }
    async getOperadorAndFamiliar(data, res) {
        const results = [];
        const services = [
            this.movistarExportsService.getInfoByDocumento(data.documento),
            this.FamiliarReniecExportsService.getFamilyInfoByDocumento(data.documento),
            this.ReniecExportsService.findByDocumentos(data.documento),
            this.EssaludExportsService.findByEssalud(data.documento),
            this.CorreoExportsService.findByCorreo(data.documento),
            this.SbsExportsService.findBySbs(data.documento),
            this.SbsDetalleExportsService.findBySbsDetalle(data.documento),
        ];
        for (const service of services) {
            results.push(await service);
        }
        const [movistar, familiar, reniec_2018, essalud, correo, sbs, sbsDetalle] = results;
        const workbook = new exceljs_1.Workbook();
        const writeToExcel = async (data, worksheet, headers) => {
            worksheet.addRow(headers);
            for (const item of data) {
                worksheet.addRow(item);
            }
        };
        if (reniec_2018 && reniec_2018.length > 0) {
            const reniecesSheet = workbook.addWorksheet('DATOS PERSONALES');
            await writeToExcel(reniec_2018.map(item => [
                item.reniec_2018_documento,
                item.reniec_2018_apellido_pat,
                item.reniec_2018_apellido_mat,
                item.reniec_2018_nombre,
                item.reniec_2018_fec_nac,
                item.reniec_2018_ubigeo,
                item.reniec_2018_ubigeo_dir,
                item.reniec_2018_direccion,
                item.reniec_2018_sexo === 1 ? 'Masculino' : 'Femenino',
                item.reniec_2018_edo_civil,
                item.reniec_2018_dig_ruc,
                item.reniec_2018_nombre_mad,
                item.reniec_2018_nombre_pat,
            ]), reniecesSheet, utils_1.HeadReniec2018.map(head => head.column));
        }
        if (movistar && movistar.length > 0) {
            const operadoresSheet = workbook.addWorksheet('OPERADORES');
            await writeToExcel(movistar.map(item => [
                item.documento,
                item.nombre,
                item.numero,
                item.origen_data,
                item.fecha_data,
                item.with_whatsapp === 1 ? 'SI' : 'NO',
            ]), operadoresSheet, utils_1.HeadMovistar.map(head => head.column));
        }
        if (familiar && familiar.length > 0) {
            const familiarSheet = workbook.addWorksheet('FAMILIAR');
            await writeToExcel(familiar.map(item => [
                item.documento,
                item.doc_parent,
                item.nombre,
                item.tipo,
            ]), familiarSheet, utils_1.HeadFamiliar.map(head => head.column));
        }
        if (essalud && essalud.length > 0) {
            const essaludSheet = workbook.addWorksheet('ESSALUD');
            await writeToExcel(essalud.map(item => [
                item.documento,
                item.empresa,
                item.periodo,
                item.ruc,
                item.condicion,
                item.sueldo,
            ]), essaludSheet, utils_1.HeadEssalud.map(head => head.column));
        }
        if (correo && correo.length > 0) {
            const correoSheet = workbook.addWorksheet('CORREO');
            await writeToExcel(correo.map(item => [
                item.documento,
                item.correo,
                item.validado === '1' ? 'SI' : 'NO',
            ]), correoSheet, utils_1.HeadCorreo.map(head => head.column));
        }
        if (sbs && sbs.length > 0) {
            const sbsSheet = workbook.addWorksheet('SBS');
            await writeToExcel(sbs.map(item => [
                item.documento,
                item.cod_sbs,
                item.fecha_reporte_sbs,
                item.ruc,
                item.cant_empresas,
                item.calificacion_normal,
                item.calificacion_cpp,
                item.calificacion_deficiente,
                item.calificacion_dudoso,
                item.calificacion_perdida,
            ]), sbsSheet, utils_1.HeadSBS.map(head => head.column));
        }
        if (sbsDetalle && sbsDetalle.length > 0) {
            const sbsDetalleSheet = workbook.addWorksheet('SBS DETALLE');
            await writeToExcel(sbsDetalle.map(item => [
                item.documento,
                item.fecha_reporte,
                item.ruc,
                item.cod_sbs,
                item.entidad,
                item.tipo_credito,
                item.condicion,
                item.saldo,
                item.dias_atraso,
            ]), sbsDetalleSheet, utils_1.HeadSBSDetalle.map(head => head.column));
        }
        const buffer = await workbook.xlsx.writeBuffer();
        const zip = new JSZip();
        zip.file('SERCHR.xlsx', buffer);
        const zipBuffer = await zip.generateAsync({ type: 'nodebuffer' });
        res.setHeader('Content-Type', 'application/zip');
        res.setHeader('Content-Disposition', 'attachment; filename=export.zip');
        res.setHeader('Content-Length', zipBuffer.length);
        res.end(zipBuffer);
    }
};
__decorate([
    (0, common_1.Post)('getOperadorAndFamiliar'),
    (0, swagger_1.ApiOperation)({ summary: 'getMovistarAndFamiliar' }),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_k = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _k : Object]),
    __metadata("design:returntype", Promise)
], ClienteController.prototype, "getOperadorAndFamiliar", null);
exports.ClienteController = ClienteController = __decorate([
    (0, common_1.Controller)('cliente'),
    (0, swagger_1.ApiTags)('cliente'),
    __metadata("design:paramtypes", [typeof (_a = typeof movistar_export_service_1.InfoCallService !== "undefined" && movistar_export_service_1.InfoCallService) === "function" ? _a : Object, typeof (_b = typeof Familiar_export_service_1.ReniecService !== "undefined" && Familiar_export_service_1.ReniecService) === "function" ? _b : Object, typeof (_c = typeof Reniec_export_service_1.ReniecService2018 !== "undefined" && Reniec_export_service_1.ReniecService2018) === "function" ? _c : Object, typeof (_d = typeof essalud_export_service_1.EssaludService !== "undefined" && essalud_export_service_1.EssaludService) === "function" ? _d : Object, typeof (_e = typeof correo_service_1.CorreoService !== "undefined" && correo_service_1.CorreoService) === "function" ? _e : Object, typeof (_f = typeof sbs_service_1.SBSService !== "undefined" && sbs_service_1.SBSService) === "function" ? _f : Object, typeof (_g = typeof sbsDetalle_export_service_1.SbsDetalleService !== "undefined" && sbsDetalle_export_service_1.SbsDetalleService) === "function" ? _g : Object])
], ClienteController);


/***/ }),
/* 19 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SBSService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const sbs_entitt_1 = __webpack_require__(21);
let SBSService = exports.SBSService = class SBSService {
    constructor(SbsRepository) {
        this.SbsRepository = SbsRepository;
    }
    async findAll() {
        return this.SbsRepository.find();
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value !== undefined ? value.toString() : '';
    }
    async findBySbs(documentos) {
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
    async create(sbs) {
        return this.SbsRepository.save(sbs);
    }
};
exports.SBSService = SBSService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sbs_entitt_1.Sbs)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SBSService);


/***/ }),
/* 20 */
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),
/* 21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sbs = void 0;
const typeorm_1 = __webpack_require__(20);
let Sbs = exports.Sbs = class Sbs {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], Sbs.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sbs.prototype, "cod_sbs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sbs.prototype, "fecha_reporte_sbs", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Sbs.prototype, "ruc", void 0);
__decorate([
    (0, typeorm_1.Column)('int'),
    __metadata("design:type", Number)
], Sbs.prototype, "cant_empresas", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sbs.prototype, "calificacion_normal", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sbs.prototype, "calificacion_cpp", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sbs.prototype, "calificacion_deficiente", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sbs.prototype, "calificacion_dudoso", void 0);
__decorate([
    (0, typeorm_1.Column)('decimal', { precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], Sbs.prototype, "calificacion_perdida", void 0);
exports.Sbs = Sbs = __decorate([
    (0, typeorm_1.Entity)({ name: 'sbs' })
], Sbs);


/***/ }),
/* 22 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CorreoService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const correo_entity_1 = __webpack_require__(23);
let CorreoService = exports.CorreoService = class CorreoService {
    constructor(CorreoRepository) {
        this.CorreoRepository = CorreoRepository;
    }
    async findAll() {
        return this.CorreoRepository.find();
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value !== undefined ? value.toString() : '';
    }
    async findByCorreo(documentos) {
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
        return correo.map(item => ({
            documento: this.parseToString(item.correo_documento),
            correo: this.parseToString(item.correo_correo),
            validado: this.parseToString(item.correo_validado),
        }));
    }
    async create(correo) {
        return this.CorreoRepository.save(correo);
    }
};
exports.CorreoService = CorreoService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(correo_entity_1.Correo)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], CorreoService);


/***/ }),
/* 23 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Correo = void 0;
const typeorm_1 = __webpack_require__(20);
let Correo = exports.Correo = class Correo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Correo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Correo.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Correo.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Correo.prototype, "validado", void 0);
exports.Correo = Correo = __decorate([
    (0, typeorm_1.Entity)('correo')
], Correo);


/***/ }),
/* 24 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InfoCallService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const Operador_entity_1 = __webpack_require__(25);
const Operador_entity_2 = __webpack_require__(25);
const Operador_entity_3 = __webpack_require__(25);
const Operador_entity_4 = __webpack_require__(25);
const Operador_entity_5 = __webpack_require__(25);
let InfoCallService = exports.InfoCallService = class InfoCallService {
    constructor(movistarRepository, claroRepository, entelRepository, bitelRepository, movistarFijoRepository) {
        this.movistarRepository = movistarRepository;
        this.claroRepository = claroRepository;
        this.entelRepository = entelRepository;
        this.bitelRepository = bitelRepository;
        this.movistarFijoRepository = movistarFijoRepository;
    }
    async getInfoByDocumento(documento) {
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
        return [
            ...movistarData,
            ...claroData,
            ...entelData,
            ...bitelData,
            ...movistarFijoData,
        ];
    }
};
exports.InfoCallService = InfoCallService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Operador_entity_1.Movistar)),
    __param(1, (0, typeorm_1.InjectRepository)(Operador_entity_2.Claro)),
    __param(2, (0, typeorm_1.InjectRepository)(Operador_entity_3.Entel)),
    __param(3, (0, typeorm_1.InjectRepository)(Operador_entity_4.Bitel)),
    __param(4, (0, typeorm_1.InjectRepository)(Operador_entity_5.MovistarFijo)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object, typeof (_d = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _d : Object, typeof (_e = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _e : Object])
], InfoCallService);


/***/ }),
/* 25 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MovistarFijo = exports.Bitel = exports.Entel = exports.Claro = exports.Movistar = void 0;
const typeorm_1 = __webpack_require__(20);
let Movistar = exports.Movistar = class Movistar {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Movistar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Movistar.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Movistar.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Movistar.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Movistar.prototype, "origen_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Movistar.prototype, "fecha_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Movistar.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Movistar.prototype, "fecha_activacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Movistar.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Movistar.prototype, "with_whatsapp", void 0);
exports.Movistar = Movistar = __decorate([
    (0, typeorm_1.Entity)('movistar')
], Movistar);
let Claro = exports.Claro = class Claro {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Claro.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Claro.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Claro.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Claro.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Claro.prototype, "origen_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Claro.prototype, "fecha_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Claro.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Claro.prototype, "fecha_activacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Claro.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Claro.prototype, "with_whatsapp", void 0);
exports.Claro = Claro = __decorate([
    (0, typeorm_1.Entity)('claro')
], Claro);
let Entel = exports.Entel = class Entel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Entel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Entel.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Entel.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Entel.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Entel.prototype, "origen_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_e = typeof Date !== "undefined" && Date) === "function" ? _e : Object)
], Entel.prototype, "fecha_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Entel.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_f = typeof Date !== "undefined" && Date) === "function" ? _f : Object)
], Entel.prototype, "fecha_activacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Entel.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Entel.prototype, "with_whatsapp", void 0);
exports.Entel = Entel = __decorate([
    (0, typeorm_1.Entity)('entel')
], Entel);
let Bitel = exports.Bitel = class Bitel {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Bitel.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], Bitel.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], Bitel.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], Bitel.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], Bitel.prototype, "origen_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_g = typeof Date !== "undefined" && Date) === "function" ? _g : Object)
], Bitel.prototype, "fecha_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Bitel.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_h = typeof Date !== "undefined" && Date) === "function" ? _h : Object)
], Bitel.prototype, "fecha_activacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], Bitel.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], Bitel.prototype, "with_whatsapp", void 0);
exports.Bitel = Bitel = __decorate([
    (0, typeorm_1.Entity)('bitel')
], Bitel);
let MovistarFijo = exports.MovistarFijo = class MovistarFijo {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint' }),
    __metadata("design:type", Number)
], MovistarFijo.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], MovistarFijo.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], MovistarFijo.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int' }),
    __metadata("design:type", Number)
], MovistarFijo.prototype, "numero", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], MovistarFijo.prototype, "origen_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_j = typeof Date !== "undefined" && Date) === "function" ? _j : Object)
], MovistarFijo.prototype, "fecha_data", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], MovistarFijo.prototype, "plan", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'date' }),
    __metadata("design:type", typeof (_k = typeof Date !== "undefined" && Date) === "function" ? _k : Object)
], MovistarFijo.prototype, "fecha_activacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 200 }),
    __metadata("design:type", String)
], MovistarFijo.prototype, "modelo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'tinyint', default: 0 }),
    __metadata("design:type", Number)
], MovistarFijo.prototype, "with_whatsapp", void 0);
exports.MovistarFijo = MovistarFijo = __decorate([
    (0, typeorm_1.Entity)('movistar_fijo')
], MovistarFijo);


/***/ }),
/* 26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReniecService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const Familiar_entity_1 = __webpack_require__(27);
const Familiar_entity_2 = __webpack_require__(27);
const Familiar_entity_3 = __webpack_require__(27);
let ReniecService = exports.ReniecService = class ReniecService {
    constructor(conyugeRepository, familiarRepository, hermanoRepository) {
        this.conyugeRepository = conyugeRepository;
        this.familiarRepository = familiarRepository;
        this.hermanoRepository = hermanoRepository;
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value.toString();
    }
    convertFamilyData(data) {
        return data.map(item => ({
            documento: this.parseToString(this.parseToNumber(item.documento)),
            doc_parent: this.parseToString(this.parseToNumber(item.doc_parent)),
            nombre: item.nombre,
            tipo: item.tipo,
        }));
    }
    async getFamilyInfoByDocumento(documentos) {
        const parsedDocumentos = documentos.map(this.parseToNumber);
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
        const hermanoData = await this.hermanoRepository
            .createQueryBuilder('reniec_hermanos')
            .select([
            'reniec_hermanos.documento AS documento',
            'reniec_hermanos.doc_parent AS doc_parent',
            'reniec_hermanos.nombre AS nombre',
            "'HERMANO' AS tipo",
        ])
            .where('reniec_hermanos.doc_parent IN (:...documentos)', { documentos: parsedDocumentos })
            .getRawMany();
        const familyInfo = [
            ...this.convertFamilyData(conyugeData),
            ...this.convertFamilyData(familiarData),
            ...this.convertFamilyData(hermanoData),
        ];
        return familyInfo;
    }
};
exports.ReniecService = ReniecService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(Familiar_entity_1.ReniecConyuge)),
    __param(1, (0, typeorm_1.InjectRepository)(Familiar_entity_2.ReniecFamiliar)),
    __param(2, (0, typeorm_1.InjectRepository)(Familiar_entity_3.ReniecHermano)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object, typeof (_b = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _b : Object, typeof (_c = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _c : Object])
], ReniecService);


/***/ }),
/* 27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReniecHermano = exports.ReniecFamiliar = exports.ReniecConyuge = void 0;
const typeorm_1 = __webpack_require__(20);
let ReniecConyuge = exports.ReniecConyuge = class ReniecConyuge {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReniecConyuge.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecConyuge.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecConyuge.prototype, "doc_parent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], ReniecConyuge.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ReniecConyuge.prototype, "parentezco", void 0);
exports.ReniecConyuge = ReniecConyuge = __decorate([
    (0, typeorm_1.Entity)('reniec_conyuges')
], ReniecConyuge);
let ReniecFamiliar = exports.ReniecFamiliar = class ReniecFamiliar {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReniecFamiliar.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecFamiliar.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecFamiliar.prototype, "doc_parent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], ReniecFamiliar.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 50 }),
    __metadata("design:type", String)
], ReniecFamiliar.prototype, "tipo", void 0);
exports.ReniecFamiliar = ReniecFamiliar = __decorate([
    (0, typeorm_1.Entity)('reniec_familiares')
], ReniecFamiliar);
let ReniecHermano = exports.ReniecHermano = class ReniecHermano {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ReniecHermano.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecHermano.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint' }),
    __metadata("design:type", Number)
], ReniecHermano.prototype, "doc_parent", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120 }),
    __metadata("design:type", String)
], ReniecHermano.prototype, "nombre", void 0);
exports.ReniecHermano = ReniecHermano = __decorate([
    (0, typeorm_1.Entity)('reniec_hermanos')
], ReniecHermano);


/***/ }),
/* 28 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ReniecService2018 = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const reniec_entity_1 = __webpack_require__(29);
let ReniecService2018 = exports.ReniecService2018 = class ReniecService2018 {
    constructor(reniecRepository) {
        this.reniecRepository = reniecRepository;
    }
    async findAll() {
        return this.reniecRepository.find();
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value !== undefined ? value.toString() : '';
    }
    async findByDocumentos(documentos) {
        const parsedDocumentos = documentos.map(this.parseToNumber);
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
        return reniec.map(item => ({
            ...item,
            reniec_2018_documento: this.parseToString(item.reniec_2018_documento),
        }));
    }
    async create(reniec) {
        return this.reniecRepository.save(reniec);
    }
};
exports.ReniecService2018 = ReniecService2018 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(reniec_entity_1.Reniec)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], ReniecService2018);


/***/ }),
/* 29 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Reniec = void 0;
const typeorm_1 = __webpack_require__(20);
let Reniec = exports.Reniec = class Reniec {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', name: 'documento' }),
    __metadata("design:type", Number)
], Reniec.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "apellido_pat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "apellido_mat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 60, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "fec_nac", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 6, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "ubigeo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "ubigeo_dir", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "direccion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Reniec.prototype, "sexo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 10, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "edo_civil", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: true }),
    __metadata("design:type", Number)
], Reniec.prototype, "dig_ruc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "nombre_mad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45, nullable: true }),
    __metadata("design:type", String)
], Reniec.prototype, "nombre_pat", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Reniec.prototype, "validata_updated_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Reniec.prototype, "validata_created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Reniec.prototype, "created_at", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', nullable: true }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Reniec.prototype, "updated_at", void 0);
exports.Reniec = Reniec = __decorate([
    (0, typeorm_1.Entity)('reniec_2018')
], Reniec);


/***/ }),
/* 30 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EssaludService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const essalud_entity_1 = __webpack_require__(31);
let EssaludService = exports.EssaludService = class EssaludService {
    constructor(essaludRepository) {
        this.essaludRepository = essaludRepository;
    }
    async findAll() {
        return this.essaludRepository.find();
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value !== null && value !== undefined ? value.toString() : '';
    }
    async findByEssalud(documentos) {
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
        return essalud.map(item => ({
            documento: this.parseToString(item.essalud_documento),
            empresa: this.parseToString(item.essalud_empresa),
            periodo: this.parseToString(item.essalud_periodo),
            ruc: this.parseToString(item.essalud_ruc),
            condicion: this.parseToString(item.essalud_condicion),
            sueldo: this.parseToString(item.essalud_sueldo),
        }));
    }
    async create(essalud) {
        return this.essaludRepository.save(essalud);
    }
};
exports.EssaludService = EssaludService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(essalud_entity_1.Essalud)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], EssaludService);


/***/ }),
/* 31 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Essalud = void 0;
const typeorm_1 = __webpack_require__(20);
let Essalud = exports.Essalud = class Essalud {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'bigint', name: 'id' }),
    __metadata("design:type", Number)
], Essalud.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'documento' }),
    __metadata("design:type", Number)
], Essalud.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 120, name: 'empresa' }),
    __metadata("design:type", String)
], Essalud.prototype, "empresa", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', name: 'periodo' }),
    __metadata("design:type", Number)
], Essalud.prototype, "periodo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'bigint', name: 'ruc' }),
    __metadata("design:type", Number)
], Essalud.prototype, "ruc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 1, name: 'condicion' }),
    __metadata("design:type", String)
], Essalud.prototype, "condicion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 18, scale: 2, name: 'sueldo' }),
    __metadata("design:type", Number)
], Essalud.prototype, "sueldo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'validata_updated_at', nullable: true }),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Essalud.prototype, "validataUpdatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'datetime', name: 'validata_created_at', nullable: true }),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], Essalud.prototype, "validataCreatedAt", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'datetime', name: 'created_at' }),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], Essalud.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ type: 'datetime', name: 'updated_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Essalud.prototype, "updatedAt", void 0);
exports.Essalud = Essalud = __decorate([
    (0, typeorm_1.Entity)('essalud')
], Essalud);


/***/ }),
/* 32 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SbsDetalleService = void 0;
const common_1 = __webpack_require__(2);
const typeorm_1 = __webpack_require__(14);
const typeorm_2 = __webpack_require__(20);
const sbsDetalle_entity_1 = __webpack_require__(33);
let SbsDetalleService = exports.SbsDetalleService = class SbsDetalleService {
    constructor(sbsDetalleRepository) {
        this.sbsDetalleRepository = sbsDetalleRepository;
    }
    async findAll() {
        return this.sbsDetalleRepository.find();
    }
    parseToNumber(value) {
        const parsedValue = typeof value === 'string' ? parseInt(value, 10) : value;
        return isNaN(parsedValue) ? 0 : parsedValue;
    }
    parseToString(value) {
        return value !== null && value !== undefined ? value.toString() : '';
    }
    async findBySbsDetalle(documentos) {
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
    async create(sbsDetalle) {
        return this.sbsDetalleRepository.save(sbsDetalle);
    }
};
exports.SbsDetalleService = SbsDetalleService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(sbsDetalle_entity_1.SbsDetalle)),
    __metadata("design:paramtypes", [typeof (_a = typeof typeorm_2.Repository !== "undefined" && typeorm_2.Repository) === "function" ? _a : Object])
], SbsDetalleService);


/***/ }),
/* 33 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SbsDetalle = void 0;
const typeorm_1 = __webpack_require__(20);
let SbsDetalle = exports.SbsDetalle = class SbsDetalle {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "documento", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "fecha_reporte", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "ruc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "cod_sbs", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "entidad", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "tipo_credito", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 45 }),
    __metadata("design:type", String)
], SbsDetalle.prototype, "condicion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'decimal', precision: 10, scale: 2 }),
    __metadata("design:type", Number)
], SbsDetalle.prototype, "saldo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', width: 10 }),
    __metadata("design:type", Number)
], SbsDetalle.prototype, "dias_atraso", void 0);
exports.SbsDetalle = SbsDetalle = __decorate([
    (0, typeorm_1.Entity)('sbs_detalle')
], SbsDetalle);


/***/ }),
/* 34 */
/***/ ((module) => {

module.exports = require("exceljs");

/***/ }),
/* 35 */
/***/ ((module) => {

module.exports = require("express");

/***/ }),
/* 36 */
/***/ ((module) => {

module.exports = require("jszip");

/***/ }),
/* 37 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TestController = void 0;
const essalud_export_service_1 = __webpack_require__(30);
const correo_service_1 = __webpack_require__(22);
const sbs_service_1 = __webpack_require__(19);
const sbsDetalle_export_service_1 = __webpack_require__(32);
const common_1 = __webpack_require__(2);
const swagger_1 = __webpack_require__(4);
const sbs_dto_1 = __webpack_require__(38);
const sbsDetalle_dto_1 = __webpack_require__(39);
let TestController = exports.TestController = class TestController {
    constructor(EssaludExportsService, CorreoExportsService, SbsExportsService, SbsDetalleExportsService) {
        this.EssaludExportsService = EssaludExportsService;
        this.CorreoExportsService = CorreoExportsService;
        this.SbsExportsService = SbsExportsService;
        this.SbsDetalleExportsService = SbsDetalleExportsService;
    }
    async getTest(data) {
        const movistar = await this.SbsExportsService.findBySbs(data.documento);
        return movistar;
    }
    async getSBSDETALLE(data) {
        const movistar = await this.SbsDetalleExportsService.findBySbsDetalle(data.documento);
        return movistar;
    }
};
__decorate([
    (0, common_1.Post)('getSBS'),
    (0, swagger_1.ApiOperation)({ summary: 'getTest' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof sbs_dto_1.SbsDTO !== "undefined" && sbs_dto_1.SbsDTO) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getTest", null);
__decorate([
    (0, common_1.Post)('getSBSDETALLE'),
    (0, swagger_1.ApiOperation)({ summary: 'getSBSDETALLE' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof sbsDetalle_dto_1.SbsDetalleDTO !== "undefined" && sbsDetalle_dto_1.SbsDetalleDTO) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], TestController.prototype, "getSBSDETALLE", null);
exports.TestController = TestController = __decorate([
    (0, common_1.Controller)('test'),
    (0, swagger_1.ApiTags)('test'),
    __metadata("design:paramtypes", [typeof (_a = typeof essalud_export_service_1.EssaludService !== "undefined" && essalud_export_service_1.EssaludService) === "function" ? _a : Object, typeof (_b = typeof correo_service_1.CorreoService !== "undefined" && correo_service_1.CorreoService) === "function" ? _b : Object, typeof (_c = typeof sbs_service_1.SBSService !== "undefined" && sbs_service_1.SBSService) === "function" ? _c : Object, typeof (_d = typeof sbsDetalle_export_service_1.SbsDetalleService !== "undefined" && sbsDetalle_export_service_1.SbsDetalleService) === "function" ? _d : Object])
], TestController);


/***/ }),
/* 38 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SbsDTO = void 0;
const class_validator_1 = __webpack_require__(9);
class SbsDTO {
}
exports.SbsDTO = SbsDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], SbsDTO.prototype, "documento", void 0);


/***/ }),
/* 39 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SbsDetalleDTO = void 0;
const class_validator_1 = __webpack_require__(9);
class SbsDetalleDTO {
}
exports.SbsDetalleDTO = SbsDetalleDTO;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)({}, { each: true }),
    __metadata("design:type", Array)
], SbsDetalleDTO.prototype, "documento", void 0);


/***/ }),
/* 40 */
/***/ ((module) => {

module.exports = require("body-parser");

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(1);
const common_1 = __webpack_require__(2);
const documentacion_1 = __webpack_require__(3);
const bodyParser = __webpack_require__(40);
const app_module_1 = __webpack_require__(5);
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const logger = new common_1.Logger('Main');
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: false,
        transformOptions: {
            enableImplicitConversion: true,
        },
    }));
    app.useGlobalInterceptors(new common_1.ClassSerializerInterceptor(app.get(core_1.Reflector)));
    app.enableCors();
    (0, documentacion_1.generateDocumentacion)(app);
    app.use(bodyParser.json({ limit: '50mb' }));
    app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
    await app.listen(process.env.PORT || 3000, () => {
        logger.log(`Server running on port ${process.env.PORT || 3000}`);
        logger.log(`Modo ${process.env.NODE_ENV ? process.env.NODE_ENV : 'Desarrollo'}`);
        logger.log(__dirname);
    });
}
bootstrap();

})();

/******/ })()
;