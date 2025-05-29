import { useState } from "react"

const Folder = ({explorer}) => {
    const [expand, setExpand] = useState(true);


  return (
    <div style={{paddingLeft: "30px"}}>
      <div onClick={() => setExpand(prev => !prev)}>
        {explorer.isFolder ? '📁' : '📄'}{explorer.name}
      </div>
      {expand && explorer.items.map(item => <Folder key={item.id} explorer={item}/>) }
    </div>
  )
}

export default Folder
