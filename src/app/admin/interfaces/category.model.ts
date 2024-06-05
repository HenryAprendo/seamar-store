export interface Category {
  id: number;
  name: string;
}

export interface CreateCategoryDTO extends Omit<Category, 'id'> { };

export interface UpdateCategoryDTO extends Partial<CreateCategoryDTO>{ };
