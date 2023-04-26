export const FreeDB = () => {
  return (
    <div className=" my-10 md:px-10 font-semibold">
      <p>
        There&apos;re many open-source softwares like Umami Analytics, Miniflux
        RSS Reader and n8n your can self-host on your own server, or use a free
        service like Vercel, Railway or Fly.io:
      </p>
      <div className="overflow-x-auto mt-8 ">
        <table className="border border-gray-900/10 dark:border-white/10 rounded-md min-w-min mx-auto shadow-lg">
          <thead className=" border-b border-gray-800/10 dark:border-white/10 bg-white dark:bg-app-gray">
            <tr>
              <th></th>
              <th className="p-2">
                <a href="https://vercel.com/" target="_blank">
                  Vercel
                </a>
              </th>
              <th className="px-4 ">
                <a href="https://railway.app/" target="_blank">
                  Railway
                </a>
              </th>
              <th className="px-4 ">
                <a href="https://fly.io/" target="_blank">
                  Fly.io
                </a>
              </th>
              <th className="px-4 ">
                <a href="https://supabase.com/" target="_blank">
                  Supabase
                </a>
              </th>
              <th className="px-4 pr-5">
                <a href="https://supabase.com/" target="_blank">
                  CockroachDB
                </a>
              </th>
            </tr>
          </thead>
          {/* body */}
          <tbody>
            <tr className="border-b border-gray-800/10 dark:border-white/10 bg-gray-100 dark:bg-gray-900">
              <td className="py-2 pl-5" align="left">
                Hosting
              </td>
              <td align="center">✅</td>
              <td align="center">✅</td>
              <td align="center">✅</td>
              <td align="center">❌</td>
              <td align="center">❌</td>
            </tr>
            <tr className="border-b border-gray-800/10 dark:border-white/10  bg-white dark:bg-app-gray">
              <td className="py-2 pl-5">Docker</td>
              <td align="center">❌</td>
              <td align="center">✅</td>
              <td align="center">✅</td>
              <td align="center">❌</td>
              <td align="center">❌</td>
            </tr>
            <tr className=" bg-gray-100 dark:bg-gray-900">
              <td className="py-2 pl-5">
                PostgreSQL <br />
                Storage
              </td>
              <td align="center">❌</td>
              <td align="center">1GB</td>
              <td align="center">3GB</td>
              <td align="center">500MB</td>
              <td align="center">5GB</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* content */}
      <div className="mt-8 space-y-8">
        <p>
          If the software you want to deploy supports Vercel (such as Umami
          Analytics), you still need to get a database from other database
          providers. Similarly, if you use Supabase as the database provider,
          you need to use another hosting service.
        </p>
        <p>
          <span className="font-bold">Railway </span>
          is the most convenient solution among the above options, you can
          deploy a service right from GitHub and create a database for it to
          use, no coding required. If 1GB of storage is not enough, you can
          create a database on <span className="font-bold">Fly.io </span>
          instead, you’ll have to create the database from CLI manually, but it
          won’t take you more than a few minutes. And you can actually deploy
          any type of database on Fly.io, be it PostgreSQL, MySQL or ClickHouse,
          you name it. Another option is{' '}
          <span className="font-bold">CockroachDB</span>, which is compatible
          with PostgreSQL.
        </p>
        <p>
          If you want to deploy a service that doesn&apos;t support Vercel, you
          can use <span className="font-bold">Fly.io</span> or{' '}
          <span className="font-bold">Railway</span> to host it, and use{' '}
          <span className="font-bold">Supabase</span> as the database provider.
          Supabase is a database service that&apos;s compatible with PostgreSQL
          and has a free plan with 500MB of storage. You can also use{' '}
          <span className="font-bold">CockroachDB</span> as the database
          provider, which is compatible with PostgreSQL and has a free plan with
          5GB of storage.
        </p>
        <p>
          If your project outgrows those free options and you can’t afford their
          premium plans, you can give Caprover a try. It’s a free and
          open-source PaaS (like Railway) for deploying services on your own
          servers, you can throw a few bucks to DigitalOcean or Hetzner to
          purchase a relatively powerful VPS and host your projects on it.
        </p>
      </div>
    </div>
  );
};
