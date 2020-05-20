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
