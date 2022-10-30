export interface RepositoriesType {
    id: any;
    name: string;
    description: string;
    hasStar: boolean;
}

export interface RepositoriesTableProps {
    repositories: Array<RepositoriesType> | [];
}
