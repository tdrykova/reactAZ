import React, { useRef, useState } from 'react';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import PostItem from './components/PostItem';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';
import './styles/App.css';

function App() {


  const [posts2, setPosts2] = useState(
    [
      {id: 1, title: 'Python', body: 'Description'},
      {id: 2, title: 'Python 2', body: 'Description'},
      {id: 3, title: 'Python 3', body: 'Description'},
    ]
  )

  // 1) без объекта
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  // 2) через объекты
  const [post, setPost] = useState({title: '', body: ''})

  // const bodyInputRef = useRef(); 
  // доступ к DOM - элементу (для неуправляемого компонента)

  const addNewPost = (e) => { 
    // function addNewPost () {
    // }

      e.preventDefault();


      // без объекта
      // const newPost = {
      //   id: Date.now(),
      //   title,
      //   body
      // }
      // console.log(newPost)
      // setPosts2([...posts2, newPost]) // к уже существующему массиву постов добавляем новый
      
      setPosts2([...posts2, {...post, id: Date.now() }])
      // без объекта
      // setTitle('')
      // setBody('')

      setPost({title: '', body: ''})

      // console.log(title);
      // console.log(body);

     // console.log(bodyInputRef.current.value)
  }
  
  return (

    <div className="App">
      <form>
        {/* Управляемый компонент. Реализация двустороннего связывания - key : value */}
        <MyInput 
            // без объекта
            //value={title} 
            value={post.title}

            // без объекта
            // onChange={(e) => setTitle(e.target.value)} // value из инпута
            onChange={(e) => setPost({...post, title: e.target.value})}
            type="text"  
            placeholder="Название поста"
        />

        <MyInput 
            // без объекта
            // value={body}
            value={post.body}
           // onChange={(e) => setBody(e.target.value)}
            onChange={(e) => setPost({...post, body: e.target.value})}
            type="text"  
            placeholder="Описание поста"
        />

        {/* неуправляемый/неконтролируемый компонент */}
        {/* <input ref={bodyInputRef}></input> */}
        {/* <MyInput
          ref={bodyInputRef}
          type="text" 
          placeholder='Описание поста'
        /> */}
        
        <MyButton onClick={addNewPost}>Создать пост</MyButton> 
        {/* type="submit" по умолчанию - отправка данных на сервер => предотвращаем с помощью e.preventDefault(); */}
      </form>
      <PostList posts={posts2} title="Список постов 2"/>
    </div>
  );
}

export default App;
