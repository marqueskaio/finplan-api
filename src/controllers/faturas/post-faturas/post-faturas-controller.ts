import {ok} from "../../../helpers/http/http-helper";
import { Controller } from "interfaces/controllers/Controller";
import { HttpRequest } from "interfaces/http/http-request";
import { UsecaseInterface } from "interfaces/usecases/usecase-interface";

export class PostFaturasController implements Controller{

    constructor(private readonly postFaturasUsecase: UsecaseInterface) {

    }

   async handle (httpRequest: HttpRequest): Promise<any>{
    const result = await this.postFaturasUsecase.execute(httpRequest.body)
    return ok(result)
   }

}