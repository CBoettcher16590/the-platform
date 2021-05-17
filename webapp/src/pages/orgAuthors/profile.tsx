import React, { useEffect, useState } from 'react';
import { Navbar, Nav, Card, Button, Table, Dropdown, DropdownButton, Col, Row, Container, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavoriteArticles from '../../components/article/favoriteArticle';
import './style.css';
import { useHistory } from 'react-router';
import { IUser } from '../../../../services/crud-server/src/models/user';
import api from '../../api';
import { IArticle } from '../../../../services/crud-server/src/models/article';
import { ISeries } from '../../../../services/crud-server/src/models/series';


export default function OrgAuthorProfile() {
  const history = useHistory();
  const [loggedInUser, setLoggedInUser] = useState<IUser>();
  const [userArticles, setUserArticles] = useState<IArticle[]>();
  const [expiredSubscription, setSubscription] = useState<string>();
  const [userSeries, setUserSeries] = useState<ISeries[]>();
  const userID: string | null = localStorage.getItem("userID");

  function onClickLogout() {
    window.localStorage.clear();
    history.push('/');
    alert("Logged Out");
  }
  const handelAddToSeries = (seriesID: string, artID: string) => {
    return (event: React.MouseEvent) => {
      api.series.addArticleToSeries(seriesID, artID);
      event.preventDefault();
    }
  }
  // x

  useEffect(() => {


    api.users.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      if (foundUser.subscription == 1) {
        const newString = (foundUser.sub_end_date).substring(0, (foundUser.sub_end_date).length - 14)

        setSubscription('Subscription Ends ' + newString);

      }
    }).catch((err) => { console.log(`Error: ${err}`); });
    //find logged in user 
    //get user info, and set logged in user
    api.users.getById(userID).then((responce) => {
      const foundUser: IUser = responce.data[0];
      setLoggedInUser(foundUser);
    }).catch((err) => { console.log(`Error: ${err}`); });
  }, []);

  useEffect(() => {
    const userID = Number(localStorage.getItem("userID"));
    //find articles that belong to logged in user

    api.articles.get().then((responce) => {
      const allArticles: IArticle[] = responce.data;
      const userArt = allArticles.filter(_art => _art.user_user_id == userID);
      setUserArticles(userArt);
    }).catch((err) => { console.log(`Error: ${err}`); });

    //find series that belong to logged in user
    api.series.get().then((responce) => {
      const allSeries: ISeries[] = responce.data;
      const uSeries = allSeries.filter(series => parseInt(series.series_owner_id) == userID);
      setUserSeries(uSeries);
    })

  }, []);

  return (
    <div>

      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Navbar.Brand href="/">The Platform</Navbar.Brand>
          </Nav>
          <Nav>
            <Nav.Link id="account2" href="/orgAuthProfile">
              <div className="border1"></div>
              <div className="border1"></div>
                                        My Account</Nav.Link>
          </Nav>


          <Nav>
            <Nav.Link id="newartic" href="/newArticle">
              <div className="border1"></div>
              <div className="border1"></div>
              Submit An Article</Nav.Link>
            <Nav.Link id="newseries" href="/newSeries">
              <div className="border1"></div>
              <div className="border1"></div>
              Create New Series</Nav.Link>
            <Button id="logout" onClick={onClickLogout}>
              <div className="border1"></div>
              <div className="border1"></div>
                                        Logout</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


      <div className="userProf">
        <div className="userBox">
          <Card className="authorInfoCard">
            <Card.Img className="authorCardImg" variant="top" src={loggedInUser?.user_image_link} />
            <Card.Body className="authorInfo">
              <Card.Title className="authorProfileHead"><p>{loggedInUser?.first_name + " " + loggedInUser?.last_name} <br />{"  - An Author "} <br /> {" - Works for " + " " + loggedInUser?.org_name + " " + "Org."}</p></Card.Title>
              <Card.Title className="profBioTxt"><p>{loggedInUser?.bio}</p></Card.Title>
              <Nav.Link className="editProfTxt" href="/ORAUthUpdate" >  Edit Profile</Nav.Link>
              <Card.Text className="expSubText"> {expiredSubscription}  </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div id="articleInfo">

          <Container fluid>
            <Row>
              <Col>
                <Tabs className="tabsProfileCenter" defaultActiveKey="Favourites" id="uncontrolled-tab-example">
                  <Tab className="tabSpacingProfileL" eventKey="Favourites" title="Favourites">

                    <FavoriteArticles></FavoriteArticles>

                  </Tab>
                  <Tab eventKey="Articles" title="Articles">
                    <div>
                      <div className="setArticleInfoSize">
                        <Col >
                          <div id="myArticles"></div>
                          <div id="articleInfo">

                            <Table striped borderless hover variant="light">

                              <thead>
                                <tr>
                                  <th colSpan={4} id="myArticlesTableH1"><h3>My Articles</h3></th>
                                </tr>
                                <tr>
                                  <th> </th>
                                  <th>Title</th>
                                  <th>Series ID</th>
                                  <th>Add To Series</th>
                                </tr>
                              </thead>
                              <tbody>
                                {userArticles?.map(function (_art, index) {
                                  let number = index + 1;
                                  let articleTitle = _art.title;
                                  let series = _art.series_series_id;

                                  return (
                                    <tr key={_art.article_id}>
                                      <td>{number}</td>
                                      <td>{articleTitle}</td>
                                      <td>{series}</td>
                                      <td>
                                        <DropdownButton id="dropdownSeries" title="Add Article To Series">
                                          {userSeries?.map(function (serie, index) {
                                            let seriesTitle = serie.series_title;
                                            return (
                                              <Dropdown.Item
                                                value={serie.series_title}
                                                seriesid={serie.series_id}
                                                key={index}
                                                onClick={handelAddToSeries(String(serie.series_id), String(_art.article_id))}
                                              >{serie.series_title}</Dropdown.Item>
                                            )
                                          })}

                                        </DropdownButton></td>
                                    </tr>
                                  )
                                })}
                              </tbody>
                            </Table>
                          </div>
                        </Col>
                      </div>
                    </div>
                  </Tab>
                </Tabs>
              </Col>
            </Row>
          </Container>
        </div>



      </div>

      {/* ================= FAVORITED ARTICLES ================= */}

      <FavoriteArticles></FavoriteArticles>


      {/* ================= My ARTICLES ================= */}



    </div>
  )
}