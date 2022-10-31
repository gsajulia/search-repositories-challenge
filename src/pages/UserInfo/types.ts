export interface MatchParams {
    username?: string;
}

export interface RepositoriesType {
    id: any;
    name: string;
    description: string;
    hasStar: boolean;
}

export interface UserType {
    name: string;
    description: string;
    img: string;
    id: string;
}
