import { Injectable } from '@nestjs/common';
import { FileElementResponse } from './dto/file-element.response';
import { format } from 'date-fns';
import { path } from 'app-root-path';
import { ensureDir, writeFile } from 'fs-extra';

@Injectable()
export class FilesService {
	async saveFiles(files: Express.Multer.File[]): Promise<FileElementResponse[]> {
		const dateFolder = format(new Date(), 'yyyy-MM-dd');
		const uploadFodler = `${path}/uploads/${dateFolder}`;
		await ensureDir(uploadFodler);
		const res: FileElementResponse[] = [];
		for (const file of files) {
			await writeFile(`${uploadFodler}/${file.originalname}`, file.buffer);
			res.push({ url: `${dateFolder}/${file.originalname}`, name: file.originalname });
		}
		return res;
	}
}
