import axios  from 'axios';

export default async function loadData(url, setFunction) {
    await axios.get(
      url
    ).then(
      ({data}) => {
        setFunction(data)
      }).catch(
        (err) => {
          console.log(err); 
          alert('Ошибка при получении информации!')}
      );
  }