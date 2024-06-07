export interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  quantity_available: number;
  image: Blob;
  categoryId: number;
}

export interface CreateProductDTO extends Omit<Product, 'id'>{ };

export interface UpdateProductDTO extends Partial<CreateProductDTO>{ };
