export interface Ingredient {
  name: string;
  amount: string;
  category: 'spirit' | 'mixer' | 'sweetener' | 'bitter' | 'garnish' | 'other';
}

export interface Cocktail {
  id: string;
  name: string;
  description: string;
  ingredients: Ingredient[];
  instructions: string[];
  glassware: string;
  garnish?: string;
  tags: string[];
  imageUrl?: string;
}

export interface PartyTheme {
  primaryColor: string;
  secondaryColor: string;
}

export interface PartyMenu {
  slug: string;
  name: string;
  date: string;
  description: string;
  theme: PartyTheme;
  cocktails: Cocktail[];
}
