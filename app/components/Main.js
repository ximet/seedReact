import React from 'react';
import BaseComponent from './BaseComponent';

class Main extends BaseComponent  {

    constructor (props, context) {
        super(props, context);
        
        this.state = {
            data: null
        };

        this.router = context.router || null;
        
        this.handlerGetData = this.handlerGetData.bind(this);
    }

    handlerGetData () {
        window.dataService.fetchData().then(data =>
            this.setState({data: data})
        );
    }
    
    render () {
        
        if (this.state.data === null) {
            return (
                <div>
                    <div onClick={this.handlerGetData}>Get Data</div>
                </div>
            )
        }
        
        const articles = this.state.data.map(data => {
            const thumbUrl = null; //TODO Alex fix this url
            const caption = null; //TODO Alex fix this caption

            return (
                <article className="news-item">
                    <img className="news-item-thumbnail" width="75px" height="75px" src={thumbUrl} alt={caption}/>
                    <h2 className="news-item-title">${data.title}</h2>
                    <div className="news-item-contents">
                        ${data.abstract}
                    </div>
                    <a className="news-item-link-more" href={data.url}>More</a>
                </article>
            );
        });
        
        return (
            <div>
                {articles}
            </div>
        )
    }
    
}

Main.contextTypes = {
    router: React.PropTypes.func.isRequired
};

export default Main;
