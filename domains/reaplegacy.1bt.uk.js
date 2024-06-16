// for more details watch the file `./domains.d.ts`

addSubDomain({
    description: 'Minecraft', // describe your project in this field
    domain: '1bt.uk', // aka "root-domain". select between '1bt.uk' and 'is-an.app'
    subdomain: 'reaplegacy', // desired subdomain name
    owner: {
      repo: 'https://github.com/kez10228/free-domains',
      email: 'zhankevin8@gmail.com',
    },
    record: {
      NS: ['ns1.desec.io', 'ns2.desec.org'],
    },
  })