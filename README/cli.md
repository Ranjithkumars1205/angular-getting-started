Angular CLI Command Syntax:

ng g an

ng <command> <args> --<options>

ng new hello-world --prefix hw

ng update [packages..] - one version to another automatically

ng serve -o

ng build - this will make build as well as minify/uglify the code - perform something called tree shaking.

Tree shaking shakes up our code to drop out any dead branches, which basically means that it removes any unused pieces.

after build complete, notice that they have a hash as part of the final name(ployfills.c0e7d97rd0).
this is done for cache busting.

more about angular CLI - look at John papa course in plural sight.
