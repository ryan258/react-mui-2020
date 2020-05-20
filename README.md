[Material UI 2020 Playlist](https://www.youtube.com/playlist?list=PLQg6GaokU5CwiVmsZ0d_9Zsg_DnIP_xwr)

## #1 Introduction

### Custom Theme

- Set up a theme.js using createMuiTheme
- Override defaul theme styles in an object inside the createMuiTheme()
- Import theme into index.js
- Wrap <App /> in <ThemeProvider theme={theme}> since Mui is pretty much Context based.

### makeStyles

- Import makeStyles into a component
- Use makeStyles() by defining an object inside where you can defne the name of a set of styles and the set's styles.
- const useStyles = makeStyles({...})
- Inside the component function const classes = UseStyles()
- Use it in className of desired element i.e. className={classes.buttonStyles}

## #2 Coding a UX Design

[GitHub](https://github.com/AtotheY/material-ui-ux-video)

- Typically you break whatever design down into it's UI components. (All components come out of @material-ui/core)
- Also look at the layout.

### Getting Started

- Clean up the boiler plate
- Install @material-ui/icons @material-ui/styles
- Typically you're want to add a margin:0 to the body

### Creating the Grid

- Make a <Grid container ... >
- Inside it go items <Grid item> and you can make items containers as well
- Use breakpoints to determine width of items at different screen sizes.

### Create Components to Plug Into the Grid

- Map out cards with data, don't forget to add a key
