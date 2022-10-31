export interface RepositoriesType {
    id: any;
    name: string;
    description: string;
    hasStar: boolean;
}

export interface RepositoriesTableProps {
    repositories: Array<RepositoriesType> | [];
    starredRepositories: Array<RepositoriesType> | [];
    viewMore: (tabs: number) => void;
    setActualRepositories: any;
    actualRepositories: Array<RepositoriesType> | [];
}
