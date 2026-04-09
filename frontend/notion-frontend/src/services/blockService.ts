import axios from 'axios';

const API_BASE_URL = 'http://localhost:5020/api';

export const BlockType = {
    Text: 0,
    Heading1: 1,
    Heading2: 2,
    Heading3: 3,
    BulletList: 4,
    NumberedList: 5,
    Todo: 6,
    Image: 7,
    Code: 8,
    Divider: 9,
    Page: 10
} as const;

export type BlockType = typeof BlockType[keyof typeof BlockType];

export interface Block {
    id: number;
    type: BlockType;
    content: string;
    metadata?: string;
    pageId: number;
    order: number;
    createdAt?: string;
    updatedAt?: string;
}

export interface CreateBlockDto {
    type: BlockType;
    content: string;
    pageId: number;
    order: number;
    metadata?: string;
}

export const blockService = {
    // Get all blocks for a page
    async getByPage(pageId: number): Promise<Block[]> {
        const response = await axios.get<Block[]>(`${API_BASE_URL}/blocks/page/${pageId}`);
        return response.data;
    },

    // Create a new block
    async create(block: CreateBlockDto): Promise<Block> {
        const response = await axios.post<Block>(`${API_BASE_URL}/blocks`, block);
        return response.data;
    },

    // Update an existing block
    async update(id: number, block: Partial<Block>): Promise<void> {
        await axios.put(`${API_BASE_URL}/blocks/${id}`, block);
    },

    // Delete a block
    async delete(id: number): Promise<void> {
        await axios.delete(`${API_BASE_URL}/blocks/${id}`);
    },

    // Batch update blocks
    async batchUpdate(updates: Partial<Block>[]): Promise<void> {
        await axios.post(`${API_BASE_URL}/blocks/batch`, updates);
    }
};
