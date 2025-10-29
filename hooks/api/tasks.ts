import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import toast from 'react-hot-toast';
import taskService from '@/services/tasks';

// Get Tasks Hook
export const useTasks = (filters?: {
  status?: string;
  assignee?: string;
  priority?: string;
  page?: number;
  limit?: number;
}) => {
  return useQuery({
    queryKey: ['tasks', filters],
    queryFn: () => taskService.getTasks(filters),
    staleTime: 2 * 60 * 1000, // 2 minutes
  });
};

// Get Single Task Hook
export const useTask = (id: string) => {
  return useQuery({
    queryKey: ['task', id],
    queryFn: () => taskService.getTask(id),
    enabled: !!id,
    staleTime: 2 * 60 * 1000,
  });
};

// Create Task Hook
export const useCreateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.createTask,
    onSuccess: (data) => {
      if (data.success) {
        toast.success('Task created successfully!');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
      } else {
        toast.error(data.message || 'Failed to create task');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Update Task Hook
export const useUpdateTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, data }: { id: string; data: any }) => 
      taskService.updateTask(id, data),
    onSuccess: (data, variables) => {
      if (data.success) {
        toast.success('Task updated successfully!');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
      } else {
        toast.error(data.message || 'Failed to update task');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Delete Task Hook
export const useDeleteTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: taskService.deleteTask,
    onSuccess: (data) => {
      if (data.success) {
        toast.success('Task deleted successfully!');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
      } else {
        toast.error(data.message || 'Failed to delete task');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Assign Task Hook
export const useAssignTask = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, assigneeId }: { id: string; assigneeId: string }) =>
      taskService.assignTask(id, assigneeId),
    onSuccess: (data, variables) => {
      if (data.success) {
        toast.success('Task assigned successfully!');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
      } else {
        toast.error(data.message || 'Failed to assign task');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Update Task Status Hook
export const useUpdateTaskStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, status }: { id: string; status: string }) =>
      taskService.updateTaskStatus(id, status as any),
    onSuccess: (data, variables) => {
      if (data.success) {
        toast.success('Task status updated successfully!');
        queryClient.invalidateQueries({ queryKey: ['tasks'] });
        queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
      } else {
        toast.error(data.message || 'Failed to update task status');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Add Comment Hook
export const useAddComment = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ id, comment }: { id: string; comment: string }) =>
      taskService.addComment(id, comment),
    onSuccess: (data, variables) => {
      if (data.success) {
        toast.success('Comment added successfully!');
        queryClient.invalidateQueries({ queryKey: ['task', variables.id] });
      } else {
        toast.error(data.message || 'Failed to add comment');
      }
    },
    onError: (error: Error) => {
      toast.error(error.message);
    },
  });
};

// Get Team Members Hook
export const useTeamMembers = () => {
  return useQuery({
    queryKey: ['team', 'members'],
    queryFn: taskService.getTeamMembers,
    staleTime: 10 * 60 * 1000, // 10 minutes
  });
};
