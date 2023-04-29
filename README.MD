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

    e.preventDefault()

    if (password !== repeatPassword) {
      toast.error('The password are diferent')
      return;
    }

    try {

      const { data } = await clientesAxios.post('/create', {
        name, email, password
      })

      toast.success(data.msg)

    } catch (error) {
      toast.error(error.response.data.msg)
    }
  }

```

Made with :heart: by [Aneudypq](https://t.me/Aneudypq2004)
