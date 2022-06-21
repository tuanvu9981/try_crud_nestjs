export interface IBaseService {
  findAll();

  findOne(id: string);

  remove(id: string);
}
