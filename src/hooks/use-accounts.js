import { useEffect, useState } from 'react';
import UserApi from '@/libs/api/user';
import { useRouter } from 'next/router';

const api = new UserApi();

export const useAccounts = (single = false) => {
  const [data, setData] = useState([]);
  const [singleData, setSingleData] = useState(null);
  const [loading, setLoading] = useState(false);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        if (single) {
          const { data: responseData }= await api.get(query.id);
          setSingleData(responseData);
        } else {
          const { data: responseData }= await api.list();
          setData(responseData);
        }

      } catch (e) {
      } finally {
        setLoading(false);
      }
    })();
  }, [single, query]);

  return {
    data,
    loading,
    singleData,
  };
};
