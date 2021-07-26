import React from 'react'

export const List = () => {
    let listt=[{
        id:1,
        name:"abu",
        hobby:"anime"
    },{
        id:2,
        name:"abdul",
        hobby:"series"
    },{
        id:3,
        name:"ausaf",
        hobby:"pubg"
    }];
    let list_html=listt.map((list_item)=>{
        return <h1 key={listt.id}>My name is {list_item.name} and hobby is {list_item.hobby}</h1>
    });
    return (
        <div>
            {list_html}
        </div>
    )
}
