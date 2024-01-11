import Layout from "@/components/Layout";
import Head from "next/head";
import React, { useContext, useEffect } from 'react'
import styles from '@/styles/pages/404.module.scss'
import { useRouter } from 'next/router';
import { useInView } from "react-intersection-observer";
import { SeenWelcomeScreenCtx } from '@/context/SeenWelcomePageCtx';

export default function Blog() {
     const { setSeenWelcomePage } = useContext(SeenWelcomeScreenCtx);
     const { ref, inView } = useInView({ triggerOnce: true });

  // Set seenWelcomePage to true so that the welcome screen is not shown
  // when user redirects to home page.
  useEffect(() => {
    setSeenWelcomePage(true);
  }, []);

  return (
    <Layout>
        <Head>
             <title>Blog</title>
        </Head>
        <div className={styles.container}>
          <p>
            <strong>Microverse Final Capstone Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails. Over the course of this module, students build and develop multiple projects using React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails, working both independently and while remotely pair-programming. -{" "}
            <a
              href="/files/.pdf"
             target="_blank"
              className={styles.link}
            >
              CERTIFICATE
            </a>
          </p>
           <p>
            <strong>Microverse Final Capstone Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails. Over the course of this module, students build and develop multiple projects using React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails, working both independently and while remotely pair-programming. -{" "}
            <a
              href="/files/.pdf"
             target="_blank"
              className={styles.link}
            >
              CERTIFICATE
            </a>
          </p>
           <p>
            <strong>Microverse Final Capstone Module</strong> - Students earn this credential after demonstrating thorough understanding and mastery of React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails. Over the course of this module, students build and develop multiple projects using React, Redux, JavaScript, Front End Web Development and connecting Back End Web Development using Ruby on Rails, working both independently and while remotely pair-programming. -{" "}
            <a
              href="/files/.pdf"
             target="_blank"
              className={styles.link}
            >
              CERTIFICATE
            </a>
          </p> 
        </div>
    </Layout>
)
}
