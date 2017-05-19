import { Component } from '@angular/core';

import { Product } from './entity/product-class';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})

export class AppComponent {
	products: Product[]; //定义属性

	//	products:Array<Product>
	constructor() {
		this.products = [
			new Product(
				'新华书店',
				'Angular-2',
				'../assets/images/ng-book-2-minibook.png', ['Men', 'Shoes', 'Running Shoes'],
				59),
			new Product(
				'黄冈书店',
				'React',
				'../assets/images/ng-book-2-minibook.png', ['Men', 'Shoes', 'Running Shoes'],
				50),
			new Product(
				'清华教育',
				'Vue',
				'../assets/images/ng-book-2-minibook.png', ['Men', 'Shoes', 'Running Shoes'],
				54.5),
		];
	}

	productWasSelected(product: Product): void {
		console.log('Product clicked', product);
	}

	//内置指令所需方法和属性 
	heros: Array < string > = [
		"貂蝉",
		"安其拉",
		"娜可露露",
		"宫本武藏",
		"韩信",
		"赵云",
		"黄忠",
		"鲁班",
		"吕布",
		"程咬金",
		"孙悟空",
	]
	size: string;
	color: string;
	shadow: boolean;
	set(size: string, color: string) {
		this.size = size;
		this.color = color;
	}
	setShadow() {
		this.shadow = this.shadow ? false : true;
		console.log(this.shadow);
	}

	///表单所需属性和方法

}