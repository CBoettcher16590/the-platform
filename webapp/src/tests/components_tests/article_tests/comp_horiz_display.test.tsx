import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import HorazontalDisplay from '../../../components/article/horazontalDisplay';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
//the amount of libaries and toolkits interacting is something else.... 
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<HorazontalDisplay />', () => {

//renders
    it('HorazontalDisplay renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<HorazontalDisplay />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts
    it('HorazontalDisplay mounts component without crashing', () => {

        const wrapper = mount(<HorazontalDisplay />);
        expect(wrapper.find(HorazontalDisplay)).to.have.lengthOf(1);
    });

//exists
    it('HorazontalDisplay profile renders', () => {
        const wrapper = shallow(<HorazontalDisplay />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})



/*
import React, { useEffect, useState } from 'react';      
import { CardDeck, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import api from '../../api';
import FavButton from '../FavButton';

export default function HorazontalDisplay(){

const [featuredArticles, setFeaturedArticles] = useState<IArticle[]>();
const history = useHistory();
  //Here we use a useEffect to bring in ALL the articles
  useEffect(() => {
    api.articles.get().then((responce) => {
    const featuredArt:IArticle[] = responce.data.filter((_art: IArticle) => _art.feature_tag === "featured")
    setFeaturedArticles(featuredArt);
    }).catch((error: any) => console.error(`Error: ${error}`)); 
        },[]);

  const GoToArticle = (article:IArticle) => (event:any) => {
    //here we find the article id for our Title, Link
    let articleId = article.article_id;
    //then We use history.push to redirect to that page
    history.push(`/article/${articleId}`)
    }

return <>
<section className="homeStories">
  {featuredArticles?.map(function(_art, index){
    let image = _art.image_link;
    let title = _art.title;
    let preview = _art.preview;
    let createdOn = _art.created_on.slice(0,10);

    return (
      <div className="homeCard">

      <img className="cardImage" src={image} />

      <div className="article">

        <h2 onClick={GoToArticle(_art)}>{title}</h2>

        <p>{preview}</p>

        <p>Date Posted: {createdOn}</p>

        <FavButton/>

      </div>
    </div>
    )
  })}
</section> 
      
</>
 }

*/

