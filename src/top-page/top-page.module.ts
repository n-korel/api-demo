import { Module } from '@nestjs/common';
import { TopPageController } from './top-page.controller';
import { TypegooseModule } from '@m8a/nestjs-typegoose';
import { TopPageModel } from './top-page.model';
import { TopPageService } from './top-page.service';
import { HhModule } from 'src/hh/hh.module';

@Module({
	controllers: [TopPageController],
	imports: [
		TypegooseModule.forFeature([
			{
				typegooseClass: TopPageModel,
				schemaOptions: {
					collection: 'TopPage',
				},
			},
		]),
		HhModule,
	],
	providers: [TopPageService],
	exports: [TopPageService],
})
export class TopPageModule {}
