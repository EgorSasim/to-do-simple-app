import { NgModule } from '@angular/core';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { DB_CONFIG } from './database.config';

@NgModule({
  imports: [NgxIndexedDBModule.forRoot(DB_CONFIG)],
})
export class DatabaseModule {}
