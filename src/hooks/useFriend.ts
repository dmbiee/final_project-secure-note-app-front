import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { FriendService } from '../api/FriendSrevice';

export function useFriends() {
  const queryClient = useQueryClient();

  // 🔹 Отримати список своїх друзів
  const friendsQuery = useQuery({
    queryKey: ['friends'],
    queryFn: FriendService.getMyFriends,
  });

  // 🔹 Отримати список користувачів, які додали мене
  const whoAddedMeQuery = useQuery({
    queryKey: ['friends-who-added-me'],
    queryFn: FriendService.getWhoAddedMe,
  });

  // 🔹 Додати друга
  const addFriend = useMutation({
    mutationFn: (username: string) => FriendService.addFriend(username),
    onSuccess: () => {
      // оновлюємо кеш
      queryClient.invalidateQueries({ queryKey: ['friends'] });
      queryClient.invalidateQueries({ queryKey: ['friends-who-added-me'] });
    },
  });

  // 🔹 Видалити друга
  const deleteFriend = useMutation({
    mutationFn: (username: string) => FriendService.deleteFriend(username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['friends'] });
      queryClient.invalidateQueries({ queryKey: ['friends-who-added-me'] });
    },
  });

  return {
    friendsQuery,
    whoAddedMeQuery,
    addFriend,
    deleteFriend,
  };
}
