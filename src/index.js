import dva from 'dva';
import './index.css';


// 1. Initialize
const app = dva();

app.model(require('./models/num').default);
app.model(require('./models/list').default);
app.model(require('./models/users').default);


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 4. Router
app.router(require('./router').default);

// 5. Start
app.start('#root');
