import axios from 'axios';

const ax = axios.create({
    baseURL: import.meta.env.BASE_URL,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
});

ax.defaults.withCredentials = true;
ax.defaults.xsrfCookieName = 'csrftoken'
ax.defaults.xsrfHeaderName = "X-CSRFToken"

export default ax;