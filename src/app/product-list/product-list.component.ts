import { Component, OnInit, EventEmitter } from '@angular/core';
import { Product } from "../entity/product-class"
@Component({
	selector: 'app-product-list',
	templateUrl: './product-list.component.html',
	styleUrls: ['./product-list.component.css'],
	inputs: ['productList'],
	outputs: ['onProductSelected'],
})
export class ProductListComponent implements OnInit {
	productList: Product[];

	onProductSelected: EventEmitter < Product > ;

	private currentProduct: Product;

	constructor() {
		this.onProductSelected = new EventEmitter();
	}

	viewDetail(pro: Product): void {
		this.currentProduct = pro;
		//把产品传递出去
		this.onProductSelected.emit(pro);
	}

	isSelected(pro: Product): boolean {
		if(!pro || !this.currentProduct) {
			return false;
		}
		
		return pro.sku === this.currentProduct.sku;
	}
	ngOnInit() {}
}