import { memo } from 'react'
import { NavEvent } from '../../events/alertEvent';
import { NavConvert } from '../../events/convertStateEvent'; 
import { useContent, NAV_MODE } from '../../states/modes';

const DefaultNav = memo((props) => {
    const { setCompo } = useContent();
    return (
      <nav>
        <ol>
          {props.topic.map((topic) => (
            <li key={topic.id}>
              <a href={`/read/${topic.id}`} onClick={(event)=>{
                NavEvent(props, event, topic.id);
                setCompo(NavConvert(NAV_MODE, {id: topic.id, topics: topic}));
              }}>
                {topic.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    );
});

export default DefaultNav;