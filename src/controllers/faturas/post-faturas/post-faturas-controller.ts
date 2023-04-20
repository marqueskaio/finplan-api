import { FaturasModel } from "@prisma/client";
import { Controller } from "interfaces/controllers/Controller";
import { HttpRequest } from "interfaces/http/http-request";
import { PostFaturasRepositoryInterface } from "interfaces/repositories/post-faturas-repository-interface";

export class PostFaturasController implements Controller{

    constructor(private readonly postFaturasUsecase: PostFaturasRepositoryInterface) {

    }

   async handle (httpRequest: HttpRequest): Promise<FaturasModel>{
    const result = await this.postFaturasUsecase.execute(httpRequest.body)
    return ok(result)
   }
}