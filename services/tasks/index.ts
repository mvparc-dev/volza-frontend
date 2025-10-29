import apiClient from '@/lib/api-client';
import { Task } from '@/types/api';

const API_ENDPOINTS = {
  TASKS: '/tasks',
  TASK: (id: string) => `/tasks/${id}`,
  ASSIGN_TASK: (id: string) => `/tasks/${id}/assign`,
  UPDATE_STATUS: (id: string) => `/tasks/${id}/status`,
  ADD_COMMENT: (id: string) => `/tasks/${id}/comments`,
};

export const taskService = {
  // Get all tasks
  getTasks: async (filters?: {
    status?: string;
    assignee?: string;
    priority?: string;
    page?: number;
    limit?: number;
  }) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.TASKS, {
        params: filters,
      });

      return {
        success: true,
        data: response.data.data,
        pagination: response.data.pagination,
      };
    } catch (error: any) {
      console.error('Get tasks error:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch tasks');
    }
  },

  // Get single task
  getTask: async (id: string) => {
    try {
      const response = await apiClient.get(API_ENDPOINTS.TASK(id));

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Get task error:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch task');
    }
  },

  // Create task
  createTask: async (taskData: {
    title: string;
    description: string;
    priority: 'low' | 'medium' | 'high' | 'urgent';
    assignee?: string;
    dueDate?: string;
    tags?: string[];
  }) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.TASKS, taskData);

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Create task error:', error);
      throw new Error(error.response?.data?.message || 'Failed to create task');
    }
  },

  // Update task
  updateTask: async (id: string, taskData: Partial<Task>) => {
    try {
      const response = await apiClient.put(API_ENDPOINTS.TASK(id), taskData);

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Update task error:', error);
      throw new Error(error.response?.data?.message || 'Failed to update task');
    }
  },

  // Delete task
  deleteTask: async (id: string) => {
    try {
      const response = await apiClient.delete(API_ENDPOINTS.TASK(id));

      return {
        success: true,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Delete task error:', error);
      throw new Error(error.response?.data?.message || 'Failed to delete task');
    }
  },

  // Assign task
  assignTask: async (id: string, assigneeId: string) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ASSIGN_TASK(id), {
        assigneeId,
      });

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Assign task error:', error);
      throw new Error(error.response?.data?.message || 'Failed to assign task');
    }
  },

  // Update task status
  updateTaskStatus: async (id: string, status: 'pending' | 'in_progress' | 'completed' | 'cancelled') => {
    try {
      const response = await apiClient.patch(API_ENDPOINTS.UPDATE_STATUS(id), {
        status,
      });

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Update task status error:', error);
      throw new Error(error.response?.data?.message || 'Failed to update task status');
    }
  },

  // Add comment to task
  addComment: async (id: string, comment: string) => {
    try {
      const response = await apiClient.post(API_ENDPOINTS.ADD_COMMENT(id), {
        comment,
      });

      return {
        success: true,
        data: response.data.data,
        message: response.data.message,
      };
    } catch (error: any) {
      console.error('Add comment error:', error);
      throw new Error(error.response?.data?.message || 'Failed to add comment');
    }
  },

  // Get team members for assignment
  getTeamMembers: async () => {
    try {
      const response = await apiClient.get('/team/members');

      return {
        success: true,
        data: response.data.data,
      };
    } catch (error: any) {
      console.error('Get team members error:', error);
      throw new Error(error.response?.data?.message || 'Failed to fetch team members');
    }
  },
};

export default taskService;
