import React from 'react';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

function Footer() {
    return (
        <footer style={{margin: 40}}>
            <Grid container alignItems="center" justify="center" spacing={10}>
                <Grid key="course" item>
                    <a href="https://rs.school/react/">
                        <img src="https://rs.school/images/rs_school_js.svg" height={50} width={50} alt="course link"/>
                    </a>
                </Grid>
                <Grid key="year" item>
                    <Typography variant="h6" align="center">2021</Typography>
                </Grid>
                <Grid key="git" item>
                    <a href="https://github.com/BurnTree1">
                        <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" height={50}
                             width={50}
                             alt="course link"/>
                    </a>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;