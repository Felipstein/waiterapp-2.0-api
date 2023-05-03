import { app } from './app';
import { env } from './config/env.config';

const port = env.PORT || 3333;

app.listen(port, () => console.log(`🚀 Server running at port ${port}.`));
