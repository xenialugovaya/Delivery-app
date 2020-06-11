import { useState } from 'react';

export default function useItemDelete(){
  const [deletedItemIndex, setDeletedItemIndex] = useState([]);
  return {
    deletedItemIndex,
    setDeletedItemIndex
  }
}