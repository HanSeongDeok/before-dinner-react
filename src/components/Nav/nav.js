import { memo } from 'react'

const DefaultNav = memo((topics) => {
    console.log(topics.topic)
    return (
      <nav>
        <ol>
          <li><a href='/read/1'>{topics.topic[0].title}</a></li>
          <li><a href='/read/2'>CSS</a></li>
          <li><a href='/read/3'>JS</a></li>
        </ol>
      </nav>
    );
});

export default DefaultNav;