import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductsService {
  private products: CreateProductDto[] = [
    {
      id: 1,
      name: 'T Shirt',
      price: 200,
    },
    {
      id: 2,
      name: 'Shirt',
      price: 300,
    },
    {
      id: 3,
      name: 'Style Pants',
      price: 150,
    },
    {
      id: 4,
      name: 'Hoodie',
      price: 500,
    },
    {
      id: 5,
      name: 'Boots',
      price: 600,
    },
  ];

  getAllProducts(price: string): CreateProductDto[] {
    if (price) {
      const matchedProduct = this.products.filter(
        (product) => product.price === Number(price),
      );

      if (!matchedProduct.length)
        throw new NotFoundException('Product with that price does not exist.');

      return matchedProduct;
    }

    return this.products;
  }

  getProduct(id: number): CreateProductDto {
    return this.products.find((product) => product.id === id);
  }

  createProduct(product: CreateProductDto) {
    const newProduct = {
      ...product,
      id: this.products[this.products.length - 1].id + 1,
    };
    this.products = [...this.products, newProduct];

    return newProduct;
  }

  updateProduct(id: number, updateData: UpdateProductDto): UpdateProductDto {
    this.products = this.products.map((product) =>
      product.id === id ? { ...product, ...updateData } : product,
    );

    return this.getProduct(id);
  }

  deleteProduct(id: number): CreateProductDto {
    const deletedProduct = this.getProduct(id);

    this.products = this.products.filter((product) => product.id !== id);

    return deletedProduct;
  }
}
