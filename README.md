About
-----

This app uses NodeJS, MongoDB and Edge templating to work.
Stylization is provided by Start Bootstrap library https://startbootstrap.com/themes/clean-blog/.

Installation
------------

Install MongoDB server (Ubuntu Linux) according to https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

```bash
$ sudo apt-get install -y mongodb-org
$ sudo service mongod start
```

Or download it from https://www.mongodb.com/download-center/community

Common Mongo commands can be found here: https://dzone.com/articles/top-10-most-common-commands-for-beginners

After that, install the app:

```bash
$ git clone https://github.com/nikstojanovic/js-team-blog.git
$ cd js-team-blog
$ npm install
$ npm start
```

Configure Storm for Edge files
-------

Configure PHPStorm/WebStorm for .edge templates. File -> Settings -> Editor -> File Types. In 'Recognized File Types'
select Blade, in right part of 'Registered patterns' click '+' sign and add *.edge

Authors
-------

The code was written by unknown author and published on https://vegibit.com/node-js-blog-tutorial/

It is updated and adjusted to use latest packages by Nikola Stojanovic (email: nikstojanovic84@gmail.com).
