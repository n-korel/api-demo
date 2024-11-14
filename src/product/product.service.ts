import { InjectModel } from '@m8a/nestjs-typegoose';
import { Injectable } from '@nestjs/common';
import { ProductModel } from './product.model';
import { ModelType } from '@typegoose/typegoose/lib/types';
import { CreateProductDto } from './dto/create-product.dto';

//Различные методы с базой данных
@Injectable()
export class ProductService {
	constructor(@InjectModel(ProductModel) private readonly productModel: ModelType<ProductModel>) {}
	async create(dto: CreateProductDto) {
		return this.productModel.create(dto);
	}

	async findbyId(id: string) {
		return this.productModel.findById(id).exec();
	}

	async delete(id: string) {
		return this.productModel.findByIdAndDelete(id).exec();
	}
}
