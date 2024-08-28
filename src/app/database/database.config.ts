import { DBConfig } from 'ngx-indexed-db';

export const DB_CONFIG: DBConfig = {
  name: 'toDoDB',
  version: 1,
  objectStoresMeta: [
    {
      store: 'tasks',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
        {
          name: 'name',
          keypath: 'name',
          options: { unique: false },
        },
        {
          name: 'description',
          keypath: 'description',
          options: { unique: false },
        },
        {
          name: 'completed',
          keypath: 'completed',
          options: { unique: false },
        },
        {
          name: 'startDate',
          keypath: 'startDate',
          options: { unique: false },
        },
        {
          name: 'endDate',
          keypath: 'endDate',
          options: { unique: false },
        },
      ],
    },
  ],
};
