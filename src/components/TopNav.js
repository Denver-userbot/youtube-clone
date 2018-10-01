import React from 'react'
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchSearchResult } from './../actions';


class TopNav extends React.Component {
    constructor(props) {
        super(props)
    }


        
    TopNavStyle = {
        height: "55px",
        padding:"0 16px",
        display: "flex",
        alignItems: "center",
        backgroundColor: "white",
        boxShadow: "0 1px #eee",
        width: "100%",
        boxSizing: "border-box",
        position: "fixed"
    }

    imageStyle = {
        height: "40px",
        marginTop: "7px",
        marginLeft: "10px"
    }

    searchForm = {
        width: "53%",
        margin: " 0 auto",
        display: "flex",
        justifyContent: "center"
    }

    searchIcon = {
        height: "15px",
        paddingTop: "2px",
        opacity: "0.5"
    }

    inputStyle = {
        height: "30px",
        width: "100%",
        maxWidth: "575px",
        padding: "0",
        border: "lightgray 1px solid",
        borderRight: "none",
        fontSize: "16px",
        paddingLeft: "9px"
    }

    buttonStyle = {
        boxSizing: "content-box",
        height: "28px",
        width: "51px",
        backgroundColor: "#f8f8f8",
        border: "lightgray 1px solid",
        cursor: "pointer"
    }

    linkStyle = {
        color: "#2793e6"
    }
        
    handleSearch = (event) => {
        event.preventDefault();
        const searchQuery = event.target.elements.searchBar.value.trim();
        if (searchQuery) {
            this.props.dispatch(fetchSearchResult(searchQuery));
            this.props.history.push('/results/' + searchQuery);
        }
    }

    componentDidUpdate() {
        window.onpopstate  = (e) => {
            let pathName = this.props.location.pathname;
            this.props.dispatch(fetchSearchResult(pathName.slice(9, pathName.length)));
        }
    }

    render() {
        return (
            <div style={this.TopNavStyle}>
                <Link to="/"><img style={this.imageStyle} src="https://mbtskoudsalg.com/images/like-png-youtube-2.png" alt="The YoutTUbe logo"/></Link>
                <form style={this.searchForm} onSubmit={this.handleSearch}>
                    <input name="searchBar" type="text" style={this.inputStyle} placeholder="Search"/>
                    <button type="submit" style={this.buttonStyle}><img src="https://cdn0.iconfinder.com/data/icons/education-volume-1-3/48/14-512.png" alt="Search logo" style={this.searchIcon} /></button>
                </form>
                <a style={this.linkStyle}><p>Sign In</p></a>
            </div>
        )
    }

}

export default withRouter(connect()(TopNav));
