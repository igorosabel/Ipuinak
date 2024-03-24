export interface CharacterInterface {
  id: number | null;
  idTale: number | null;
  name: string | null;
  hasImage: boolean;
  color: string | null;
  data?: string | null;
}

export interface CharactersResult {
  status: string;
  list: CharacterInterface[];
}
