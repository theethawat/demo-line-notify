import { Button } from '@chakra-ui/react'
import React from 'react'
import { clientID, redirectURL } from '../config.json'

export default function Home({ props }) {
  return (
    <div className='container mx-auto'>
      <div className=''>
        <a
          href={
            'https://notify-bot.line.me/oauth/authorize?response_type=code&client_id=' +
            clientID +
            '&redirect_uri=' +
            redirectURL +
            '&scope=notify&state=test'
          }
        >
          <Button size='lg'> Notify with Line</Button>
        </a>
      </div>
    </div>
  )
}
