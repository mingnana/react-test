import Layout from './Layout';
import { useParams } from 'react-router-dom';
import styles from '../styles/blogPost.module.css';
import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';

import useBlogPost from '../hooks/useBlogPost';
import { humanizeDate } from '../utils/date';
import Comment from './Comment';

function BlogPost() {
  const { fileName } = useParams();
  const post = useBlogPost(fileName);

  if (!post) {
    return null;
  }

  return (
    <Layout>
      <article className={styles.pageWrapper}>
        <header className={styles.wrapper}>
          <div className={styles.content}>
            <h1>{post.blogTitle}</h1>
            <p>
              <time dateTime={post.blogPublishedAt}>
                작성일: {humanizeDate(post.blogPublishedAt)}
              </time>
            </p>
          </div>
        </header>

        <div className={styles.page}>
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              code(props) {
                const { children, className, ...rest } = props;
                const match = /language-(\w+)/.exec(className || '');
                return match ? (
                  <SyntaxHighlighter
                    {...rest}
                    PreTag='div'
                    children={String(children).replace(/\n$/, '')}
                    language={match[1]}
                    style={docco}
                  />
                ) : (
                  <code {...rest} className={className}>
                    {children}
                  </code>
                );
              },
            }}
          >
            {post.blogContent}
          </Markdown>
        </div>
      </article>

      <Comment />
    </Layout>
  );
}
export default BlogPost;
