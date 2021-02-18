import { createAuth } from '@keystone-next/auth';
import { User } from './schemas/User';
import 'dotenv/config';
import { config, createSchema } from '@keystone-next/keystone/schema';
import {
  withItemData,
  statelessSessions,
} from '@keystone-next/keystone/session';

const databaseURL =
  process.env.DATABASE_URL || 'mongodb://localhost/keystone-sick-fits-tutorial';

// this method make user has to login as admin to the database.
const { withAuth } = createAuth({
  listKey: 'User',
  identityField: 'email',
  secretField: 'password',
  initFirstItem: {
    fields: ['name', 'email', 'password'],
    // TODO: add in initial role here
  },
});

const sessionConfig = {
  maxAge: 60 * 60 * 24 * 360, // hong long should user stay signed in?
  secret: process.env.COOKIE_SECRET,
};

export default withAuth(
  config({
    server: {
      cors: {
        origin: [process.env.FRONTEND_URL],
        credentials: true,
      },
    },
    db: {
      adapter: 'mongoose',
      url: databaseURL,
      // TODO: add data seeding here
    },
    lists: createSchema({
      User,
    }),
    ui: {
      // isAccessAllowed: () => true, //if true, allow every body can see the UI, we must show only to some body who pass this test
      isAccessAllowed: ({ session }) => {
        console.log(session);
        // if there is a session AND there is a session.data
        // to convert session?.data into boolean just put !! in the front !!session?.data
        return !!session?.data;
      },
    },

    session: withItemData(statelessSessions(sessionConfig), {
      User: 'id',
    }),
  })
);
