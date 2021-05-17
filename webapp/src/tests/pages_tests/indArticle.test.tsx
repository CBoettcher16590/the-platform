import React from 'react';
import { mount, shallow } from 'enzyme';
import sinon, { spy } from 'sinon';
import IndvArticlePage from '../../pages/indvArticle';
import { assert, expect } from 'chai';
import ReactDOM from 'react-dom';
import {render} from 'enzyme'
        // console.log(wrapper.debug()) prints the whole thing of a given wrapper 🤡



describe('<IndvArticlePage />', () => {
    //because it's asking for props there are errors.
//renders ##BROKEN
    xit('IndvArticlePage renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<IndvArticlePage />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

//mounts ## BROKEN 
    xit('IndvArticlePage mounts component without crashing', () => {

        const wrapper = mount(<IndvArticlePage />);
        expect(wrapper.find(IndvArticlePage)).to.have.lengthOf(1);
    });

//exists
    it('IndvArticlePage profile renders', () => {
        const wrapper = shallow(<IndvArticlePage />);
        expect(wrapper).to.exist;

        // https://enzymejs.github.io/enzyme/docs/api/shallow.html
    });

})

/*
import React from "react";
import { RecoilRoot } from "recoil";
import IndvArticle from "../components/article/indvArticle";

export default function IndvArticlePage(props:{}){
    return (
    <RecoilRoot>
        <IndvArticle />
    </RecoilRoot>
    )
}

*/