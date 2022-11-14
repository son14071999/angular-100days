import { ProductModel } from "../models/ProductModel";

export interface CartItem {
    product: ProductModel;
    quantity: number;
}