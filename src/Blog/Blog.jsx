import React from 'react';
import { NavBar } from '../my-components';
import axios from 'axios';
import styles from './Blog.module.css';
import XMLParser from 'react-xml-parser';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

class Blog extends React.Component {
    state = {
        authors : []
    }
    
    componentDidMount() {
        var self = this;
        var link = "https://www.ecdc.europa.eu/en/taxonomy/term/2942/feed";
        axios
        .get(link, {
            "Content-Type": "application/xml; charset=utf-8"
        })
        .then(function(response) {
            console.log(response.data);
            console.log("abcd");
            var xml = new XMLParser().parseFromString(response.data);
            var xml2 = xml["children"][0]["children"];
            var xml3 = xml2.slice(4, xml2.length);
            // console.log(xml3);
            // console.log(xml2.slice(4, xml2.length));
            // console.log(xml2[5]["children"][0]["value"]);
            // console.log(xml2[5]["children"][1]["value"]);
            // console.log(xml2[5]["children"][2]["value"]);
            // console.log(xml2[5]["children"][3]["value"]);
            // console.log(xml2[5]["children"][4]["value"]);
            self.setState({ authors: xml3 });
        })
        .catch(function(error) {
            console.log(error);
        });
    }

    render() {
        const { authors } = this.state;
        console.log(authors);
        const elements = [];

        for(var i=0;i<authors.length;i++) {
            console.log(authors[i]["children"][0]["value"]);
            console.log(authors[i]["children"][1]["value"]);
            console.log(authors[i]["children"][2]["value"]);
            console.log(authors[i]["children"][3]["value"]);
            console.log(authors[i]["children"][4]["value"]);
        }

        for(var i = 0; i < authors.length; i++) {
            elements.push(<Card border="light" style={{  }}>
                <Card.Header as="h5">{authors[i]["children"][0]["value"]}</Card.Header>
                <Card.Body>
                    <Card.Title>Published by : {authors[i]["children"][4]["value"]}</Card.Title>
                    <Card.Text>
                    {authors[i]["children"][2]["value"]}
                    </Card.Text>
                    <a href={authors[i]["children"][1]["value"]}><Button variant="primary">View</Button></a>
                </Card.Body>
                <Card.Footer className="text-muted">{authors[i]["children"][3]["value"]}</Card.Footer>
            </Card>);
            elements.push(<br></br>)
        }

        return (
            <div style={{height: "100%"}}>
                <NavBar/>
                { elements }
            </div>
        );
    }
}

export {Blog};