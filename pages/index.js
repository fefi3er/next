import Head from 'next/head'
import { Box, Stack, Image, HStack } from '@chakra-ui/react'
import Logo from '../components/Logo'
import Search from '../components/Search'
import Tiles from '../components/Tiles'
// import logo from '../public/google.svg'

export default function Home({ tiles }) {
  return (
    <div>
      <Head>
        <title>新标签页</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box mx="auto">
        <Logo />
        <Search />
        <Tiles tiles={tiles}/>
      </Box>
    </div>
  )
}

export async function getServerSideProps () {
  return {
    props: {
      tiles: [
        {
          title: '百度一下',
          url: 'https://www.baidu.com'
        },
        {
          title: '拉勾教育',
          url: 'https://kaiwu.lagou.com'
        }
      ]
    }
  }
}