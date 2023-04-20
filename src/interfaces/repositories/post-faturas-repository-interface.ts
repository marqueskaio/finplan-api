import {FaturasModel} from "@prisma/client";

export interface PostFaturasRepositoryInterface {
    create: (data: Omit<FaturasModel, 'id'>) => Promise<FaturasModel>
  }