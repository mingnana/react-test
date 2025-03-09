import Layout from './components/Layout';
import styles from './styles/homepage.module.css';
import BlogSummaryCard from './components/BlogSummaryCard';
import mainPageImg from './assets/Main_Page_Img.png';
import useBlogPosts from './hooks/useBlogPosts';

function App() {
  const blogPosts = useBlogPosts();

  return (
    <Layout>
      <div className={styles.wrapper}>
        <h1>👋 안녕하세요, x 개발자 x 입니다.</h1>
        <img src={mainPageImg} className={styles.mainImage} />
        <h2 className={styles.mainHeading}>최근 올라온 글: </h2>
        {blogPosts.map((post) => (
          <BlogSummaryCard key={post.blogFileName} blogPost={post} />
        ))}
      </div>
    </Layout>
  );
}

export default App;
