import React, {useState} from "react";
import { TextField, Grid, Typography, Button, Paper } from '@material-ui/core';
import { KeyboardDatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import MomentUtils from '@date-io/moment';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Editor from 'for-editor';
import withStyles from "@material-ui/styles/withStyles";

const styles = theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.grey["100"],
        overflow: "hidden",
        //   background: `url(${backgroundShape}) no-repeat`,
        backgroundSize: "cover",
        backgroundPosition: "0 400px",
        paddingBottom: 200
    },
    grid: {
        width: 1200,
        margin: `0 ${theme.spacing(2)}px`,
        [theme.breakpoints.down("sm")]: {
            width: "calc(100% - 20px)"
        }
    },
    loadingState: {
        opacity: 0.05
    },
    paper: {
        padding: theme.spacing(3),
        margin: theme.spacing(2),
        textAlign: "left",
        color: theme.palette.text.secondary
    },
    rangeLabel: {
        display: "flex",
        justifyContent: "space-between",
        paddingTop: theme.spacing(2)
    },
    topBar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
    },
    outlinedButtom: {
        textTransform: "uppercase",
        margin: theme.spacing(1)
    },
    actionButtom: {
        textTransform: "uppercase",
        margin: theme.spacing(1),
        width: 152,
        height: 36
    },
    blockCenter: {
        padding: theme.spacing(2),
        textAlign: "center"
    },
    block: {
        padding: theme.spacing(2)
    },
    loanAvatar: {
        display: "inline-block",
        verticalAlign: "center",
        width: 16,
        height: 16,
        marginRight: 10,
        marginBottom: -2,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main
    },
    interestAvatar: {
        display: "inline-block",
        verticalAlign: "center",
        width: 16,
        height: 16,
        marginRight: 10,
        marginBottom: -2,
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.light
    },
    inlining: {
        display: "inline-block",
        marginRight: 10
    },
    buttonBar: {
        display: "flex"
    },
    noBorder: {
        borderBottomStyle: "hidden"
    },
    mainBadge: {
        textAlign: "center",
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(4)
    }
});

const Journal = ({ classes }) => {
    const initialState = {
        Title: "Journey Title",
        Slug: "",
        Date: new Date(),
        Body: "# Your day starts here"
    };
    const [journal, setJournal] = useState(initialState);

    function handleInputChange(event){
        const target = event.target;
        const name = target.name;
        const value = target.value;
        console.log(target, value);

        setJournal({[name]: value});
    };

    const handleTitleChange = (value, b, c) => {
        window.that = value;
        console.log("this", this);
        console.log("value", value)
        console.log("b", b)
        console.log("c", c)
        console.log({...journal, "Title": value});
        setJournal({...journal, "Title": value})
    };
    const handleSlugChange = (value) => setJournal({...journal, "Slug": value});
    const handleDateChange = (value) => setJournal({...journal, "Date": value});
    const handleBodyChange = (value) => setJournal({...journal, "Body": value});

    return (
        <div>
            <Grid container justify="center">
                <Grid
                    spacing={10}
                    alignItems="center"
                    justify="center"
                    container
                >
                    <Grid item xs={12}>
                        <div className={classes.topBar}>
                            <div className={classes.block}>
                                <Typography variant="h6" gutterBottom>
                                    Journal Entry
                                </Typography>
                                <Typography variant="body1">
                                    Jot your heart out here.
                                </Typography>
                            </div>
                            <div>
                                <Button
                                    variant="outlined"
                                    className={classes.outlinedButtom}
                                >
                                    Save
                    </Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={12}>
                        <Paper className={classes.paper} style={{ marginTop: `-60px` }} variant="outlined" square>
                            <Grid container direction="row" justify="flex-start" alignItems="flex-start" spacing={2}>
                                <Grid item xs={12}>
                                    <TextField label="Title" variant="outlined" fullWidth size="small" value={journal.Title} onChange={handleTitleChange}/>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Slug" variant="outlined" fullWidth size="small" value={journal.Slug} onChange={handleSlugChange}/>
                                </Grid>
                                <Grid item xs={4}>
                                    <MuiPickersUtilsProvider utils={MomentUtils}>
                                        <KeyboardDatePicker
                                            margin="none"
                                            id="date-picker-dialog"
                                            label="Date picker dialog"
                                            format="yyyy/MM/DD"
                                            size="small"
                                            value={journal.Date}
                                            onChange={handleDateChange}
                                            KeyboardButtonProps={{
                                                'aria-label': 'change date',
                                            }}
                                        />
                                    </MuiPickersUtilsProvider>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography variant="overline">Body</Typography>
                                    <Editor name={"Body"} value={journal.Body} onChange={handleBodyChange} />
                                    {/* <CKEditor
            editor={ ClassicEditor }
            data="<p>Hello from CKEditor 5!</p>"
        /> */}
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>


        </div>
    );
}

export default withStyles(styles)(Journal);