import { useEffect } from 'react';
import { collection, onSnapshot } from 'firebase/firestore';
import { useDispatch } from 'react-redux';
import { db } from '../../config/firebase-config';
import { setComments } from '../features/comments/commentsSlice';

const useFirebaseComments = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "comments"), (snapshot) => {
      const comments = snapshot.docs.map(doc => ({
        id: doc.id,
        name: doc.data().name,
        rating: doc.data().rating,
        comment: doc.data().comment,
        date: doc.data().date ? doc.data().date.toDate().toISOString() : null
      }));
      dispatch(setComments(comments));
    }, (error) => {
      console.error("Error al acceder a los comentarios:", error);
    });

    return () => unsubscribe();
  }, [dispatch]);

  return null;
};

export default useFirebaseComments;
