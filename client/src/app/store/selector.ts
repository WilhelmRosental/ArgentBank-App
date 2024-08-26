import { RootState } from '@/app/store'

export const getUserToken = (state: RootState) => state?.user.token
export const getProfileData = (state: RootState) => state?.user.user
