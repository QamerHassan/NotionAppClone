import axios from 'axios';

const API_BASE_URL = 'http://localhost:5020/api';

export interface Page {
    id: number;
    title: string;
    icon?: string;
    content?: string;
    teamspaceId?: number;
    parentPageId?: number;
    // other fields can be added as needed
}

export interface CreatePageDto {
    title: string;
    content?: string;
    teamspaceId?: number;
    parentPageId?: number;
    // other fields as needed
}

export const pageService = {
    // Get pages, optionally filtered by teamspace
    async getAll(teamspaceId?: number): Promise<Page[]> {
        const url = teamspaceId ? `${API_BASE_URL}/pages?teamspaceId=${teamspaceId}` : `${API_BASE_URL}/pages`;
        const response = await axios.get<Page[]>(url);
        return response.data;
    },

    // Get a single page by ID
    async getById(id: number): Promise<Page> {
        const response = await axios.get<Page>(`${API_BASE_URL}/pages/${id}`);
        return response.data;
    },

    // Create a new page
    async create(page: CreatePageDto): Promise<Page> {
        const response = await axios.post<Page>(`${API_BASE_URL}/pages`, page);
        return response.data;
    },

    // Update an existing page
    async update(id: number, page: Partial<Page>): Promise<void> {
        await axios.put(`${API_BASE_URL}/pages/${id}`, page);
    },

    // Delete a page
    async delete(id: number): Promise<void> {
        await axios.delete(`${API_BASE_URL}/pages/${id}`);
    },

    // Get breadcrumbs for a page
    async getBreadcrumbs(id: number): Promise<Page[]> {
        const response = await axios.get<Page[]>(`${API_BASE_URL}/pages/${id}/breadcrumbs`);
        return response.data;
    }
};
