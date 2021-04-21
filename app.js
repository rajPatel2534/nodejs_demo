
const express = require('express')
const app = express();
const port = 8000;
const demoRouter = require('./routes/demo_route')
app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.use('/demo', demoRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    console.log("*******************404************************");
    // next(createError(404));
  });

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    // errLogHandler.createLog(err);
    res.send("Server error");
    // res.render('error');
  });
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});