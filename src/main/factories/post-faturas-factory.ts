import { FaturasRepository } from "../../repositories/faturas/faturas-repository";
import { PostFaturaUseCase } from "../../usecases/faturas/post-faturas/post-faturas-usecase";
import { PostFaturasController } from "../../controllers/faturas/post-faturas/post-faturas-controller";

const faturasRepository = new FaturasRepository()

const postFaturasUsecase = new PostFaturaUseCase(faturasRepository)

const postFaturasController = new PostFaturasController(postFaturasUsecase)

export {postFaturasController}

