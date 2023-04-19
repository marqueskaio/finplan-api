import {FaturasModel} from "@prisma/client";

export interface PostFaturasRepositoryInterface {
    save: (data: Omit<FaturasModel, 'id'>) => Promise<FaturasModel>
  }