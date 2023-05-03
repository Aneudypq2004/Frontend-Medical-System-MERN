

const formatDate = date => {

    const options = {  year: 'numeric', month: 'long', day: 'numeric' };

    const newDate = new Date(date.split('T')[0])

    const format = newDate.toLocaleDateString('en-Es', options)

   return format

}

export default formatDate