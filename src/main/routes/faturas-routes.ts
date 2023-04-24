import { Router } from "express"
import { adaptRoute } from "../adapters/express-routes-adapter"
import { postFaturasController } from "../factories/post-faturas-factory"

export default (router: Router): void => {
    router.post('/faturas', adaptRoute(postFaturasController))
}