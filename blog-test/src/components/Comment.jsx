import { useEffect, useRef } from 'react';

{
  /* <script src="https://utteranc.es/client.js"
        repo="heesungjang/sparta-blog-project"
        issue-term="pathname"
        theme="boxy-light"
        crossorigin="anonymous"
        async>
</script> */
}

const Comment = () => {
  const ref = useRef(null);

  useEffect(() => {
    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'heesungjang/sparta-blog-project');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', 'github-light');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.crossOrigin = 'anonymous';
    if (ref.current) {
      ref.current.appendChild(scriptElem);
    }

    return () => {
      if (ref.current) {
        ref.current.removeChild(scriptElem);
      }
    };
  }, []);

  return (
    <section
      style={{ width: '100%', marginBottom: '50px' }}
      ref={ref}
    ></section>
  );
};

export default Comment;
