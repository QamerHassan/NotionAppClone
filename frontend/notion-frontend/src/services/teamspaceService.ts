import axios from 'axios';

const API_BASE_URL = 'http://localhost:5020/api';

export interface Teamspace {
    id: number;
    name: string;
    icon: string;
    userId: number;
    createdAt: string;
    updatedAt: string;
}

export interface CreateTeamspaceDto {
    name: string;
    icon: string;
}

export const teamspaceService = {
    // Get all teamspaces
    async getAll(): Promise<Teamspace[]> {
        const response = await axios.get<Teamspace[]>(`${API_BASE_URL}/teamspaces`);
        return response.data;
    },

    // Get a single teamspace by ID
    async getById(id: number): Promise<Teamspace> {
        const response = await axios.get<Teamspace>(`${API_BASE_URL}/teamspaces/${id}`);
        return response.data;
    },

    // Create a new teamspace
    async create(teamspace: CreateTeamspaceDto): Promise<Teamspace> {
        const response = await axios.post<Teamspace>(`${API_BASE_URL}/teamspaces`, teamspace);
        return response.data;
    },

    // Update an existing teamspace
    async update(id: number, teamspace: Partial<Teamspace>): Promise<void> {
        await axios.put(`${API_BASE_URL}/teamspaces/${id}`, teamspace);
    },

    // Delete a teamspace
    async delete(id: number): Promise<void> {
        await axios.delete(`${API_BASE_URL}/teamspaces/${id}`);
    }
};
