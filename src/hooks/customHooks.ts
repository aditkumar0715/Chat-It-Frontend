import { useCallback } from 'react'

type UseNavLink = (
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
) => () => void

export const useNavLink: UseNavLink = (setMenuOpen) => {
  return useCallback(() => {
    setMenuOpen(false) // Close menu when a link is clicked
  }, [setMenuOpen])
}
