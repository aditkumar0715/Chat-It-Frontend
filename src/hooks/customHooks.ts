import { useCallback, useEffect, useState } from 'react';

type UseNavLink = (
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
) => () => void;

export const useNavLink: UseNavLink = (setMenuOpen) => {
  return useCallback(() => {
    setMenuOpen(false); // Close menu when a link is clicked
  }, [setMenuOpen]);
};

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    const handler = () => setMatches(mediaQuery.matches);
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [query]);

  return matches;
};
