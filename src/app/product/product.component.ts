import { Component, OnInit } from '@angular/core';
import { Product } from "../entity/product-class"
@Component({
	selector: 'app-product',
	templateUrl: './product.component.html',
	styleUrls: ['./product.component.css'],
	inputs: ['product'],
	host: {
		'class': 'card'
	}
})

export class ProductComponent implements OnInit {
	product: Product;
	constructor() {}
	ngOnInit() {}

}