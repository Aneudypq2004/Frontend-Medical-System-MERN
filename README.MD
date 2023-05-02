# FRONTEND CRUD Medical System

### The system have

* User authentication
* React
* Redux
* React-Router-Dom
* ChartJS
---
### To use and practice with the project follow these steps

1. Download the zip
2. Open the folder with Visual Studio Code or your favorite editor
3. Run in the terminal ``` npm install ``` to install the  dependencies
4. Run ``` npm run dev ``` to start the project in the backend
5. Follow the same steps with the Backend ZIP

---
   

```js
     const handleSubmit = async e => {

        setLoad(true)

        try {
            e.preventDefault()

            const emailValid = validEmail(email)

            if (!emailValid) {
                setLoad(false)
                toast.error('The email is invalid');
                return;
            }

            if (password.length < 8) {
                setLoad(false)
                toast.error('the password is very short it must be 8 characters');
                return;
            }
            const { data } = await clientesAxios.post('/login', { email, password });

            setAuth(data.response);

            localStorage.setItem('AneudyDevToken', data.response.token);

            navigate('/home');

            toast.success(data.msg)

        } catch (error) {
            setLoad(false)
            toast.error(error.response.data.msg);
        }

        setLoad(false)
    }

```

Made with :heart: by [Aneudypq](https://t.me/Aneudypq2004)
