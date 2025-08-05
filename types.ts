
export interface Recipe {
  nome: string;
  descricao: string;
  ingredientes: string[];
  instrucoes: string[];
}

export interface RecipeWithImage extends Recipe {
  imageUrl: string;
}
