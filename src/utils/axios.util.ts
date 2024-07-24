import { config } from '@/providers/config.provider';
import Axios from 'axios';

export const axios = Axios.create({
  baseURL: config.CAT_HOSTNAME
})
