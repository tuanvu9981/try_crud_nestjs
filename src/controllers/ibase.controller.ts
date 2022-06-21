export interface IBaseController {
  findAll(response);

  findOne(id: string, response);

  remove(id: string, response);
}
