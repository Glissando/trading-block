import React from 'react';

export default function News(props){

    return(
        <div className="Section">
            {
                props.news.map((news, index) =>
                    <a key={ index } href={ news.url } title={ news.source }><h2>{ news.headline }</h2></a>
                )}
        </div>
    );
}