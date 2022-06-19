import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import { format, formatDistanceToNow } from 'date-fns'
import ptBR from 'date-fns/esm/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import styles from './Post.module.css'

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [ comments, setComments ] = useState([
   'Post muito legal, ein?'
  ])
  const [ newCommentText, setNewCommentText ] = useState('')

  const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'd'", {
    locale: ptBR
  })

  const publishedDateRelativeNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(e: FormEvent) {
    e.preventDefault()
    
    setComments([...comments, newCommentText])
    setNewCommentText('')
  }

  function handleNewCommentChange(e: ChangeEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('')
    setNewCommentText(e.target.value)
  }

  function handleNewCommentInvalid(e: InvalidEvent<HTMLTextAreaElement>) {
    e.target.setCustomValidity('Esse campo é obrigatório')
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter(comment => {
      return comment !== commentToDelete
    })

    setComments(commentsWithoutDeleteOne)
  }

  return (
   <article className={styles.post}>
    <header>
      <div className={styles.author}>
        <Avatar hasBorder src={author.avatarUrl} />
      
        <div className={styles.authorInfo}>
          <strong>{author.name}</strong>
          <span>{author.role}</span>
        </div>
      </div>

      <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeNow}</time>
    </header>

    <div className={styles.content}>
      {content.map(line => {
        if (line.type === 'paragraph') {
          return <p key={line.content}>{line.content}</p>
        } else if (line.type === 'link') {
          return (
          <p key={line.content}>
            <a href={line.content} target='blank'>
              {line.content}
            </a>
          </p>
          )
        }
      })}
    </div>

    <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
      <strong>Deixe seu feedback</strong>

      <textarea 
      onChange={handleNewCommentChange} 
      value={newCommentText} 
      placeholder='Deixe um comentário'
      onInvalid={handleNewCommentInvalid}
      required
      />

      <footer>
        <button type='submit' disabled={newCommentText.length === 0}>Publicar</button>
      </footer>
    </form>

    <div className={styles.commentList}>
      {comments.map(comment => {
        return (
          <Comment 
          key={comment} 
          content={comment}
          onDeleteComment={deleteComment}
          />
        )
      })}
    </div>
   </article>
  )
}