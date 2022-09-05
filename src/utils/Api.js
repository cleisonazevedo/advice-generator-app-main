import axios from 'axios';

export async function getAdvice() {
    const res = await axios.get('https://api.adviceslip.com/advice');
    return res.data
}