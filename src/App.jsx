import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import './global.css'
import styles from './App.module.css'

export function App() {
  
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />

        <main>
          <Post 
          author="Gabriel Cardoso" 
          content="blablablablabla"
          />

          <Post 
          author="Kayo Oliveira" 
          content="blablablablabla"
          />
        </main>
      </div>
    </div>
  )
}

