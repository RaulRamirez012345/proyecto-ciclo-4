import {Entity, model, property, belongsTo, hasMany} from '@loopback/repository';
import {Sede} from './sede.model';
import {Vehiculo} from './vehiculo.model';

@model()
export class Propietario extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  idpropietario?: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'string',
    required: true,
  })
  telefono: string;

  @property({
    type: Date,
    required: false,
  })
  fechanacimiento: Date;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudadresidencia: string;

  @property({
    type: 'string',
    required: true,
  })
  correo: string;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  listavehiculo: string[];

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  listanotificaciones: string[];

  @belongsTo(() => Sede)
  sedeId: string;

  @hasMany(() => Vehiculo)
  vehiculos: Vehiculo[];

  constructor(data?: Partial<Propietario>) {
    super(data);
  }
}

export interface PropietarioRelations {
  // describe navigational properties here
}

export type PropietarioWithRelations = Propietario & PropietarioRelations;
