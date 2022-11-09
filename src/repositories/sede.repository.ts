import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {MongodbDataSource} from '../datasources';
import {Sede, SedeRelations, Propietario} from '../models';
import {PropietarioRepository} from './propietario.repository';

export class SedeRepository extends DefaultCrudRepository<
  Sede,
  typeof Sede.prototype.idsede,
  SedeRelations
> {

  public readonly propietarios: HasManyRepositoryFactory<Propietario, typeof Sede.prototype.idsede>;

  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource, @repository.getter('PropietarioRepository') protected propietarioRepositoryGetter: Getter<PropietarioRepository>,
  ) {
    super(Sede, dataSource);
    this.propietarios = this.createHasManyRepositoryFactoryFor('propietarios', propietarioRepositoryGetter,);
    this.registerInclusionResolver('propietarios', this.propietarios.inclusionResolver);
  }
}
