[
![adityakarnik](https://img.shields.io/badge/blog-website-yellowgreen)
](https://adityakarnik.com/blog/exception_notifier)

# Exception Notifier

While working on our code in Jupyter Notebook we tend to forget after a while that we working, actually running some code, but there was an exception that interrupted the long running task. :angry::cry: 

COMEON!!!!!! NOT FARE

We again run it and have to wait and watch for another iteration to check if the fix worked or did it not.

Such a pain. :worried:

Why don't we think about a exception notifier. Wait, What?! Don't we already have a notifier? Ahh yes we do, but not an exception notifier.

Well we can use them in each the cells and all that, but that's a mess in the notebook.

We can have an extension, in the notebook where if there was an exception we will be notified like a normal notifier does.

## Installation:

```
pip install jupyter
```

```
pip install jupyter_contrib_nbextensions && jupyter contrib nbextensions install
```

```
pip show jupyter_contrib_nbextensions
```

Get the ``Location`` path from the pervious command

Copy the ``exception_notifier`` folder to
```
site-packages/jupyter_contrib_nbextensions/nbextensions/
```

```
jupyter contrib nbextensions install
```


Start up a ``jupyter notebook`` and navigate to the new Nbextensions tab:

![Exception Notifier Screenshot](exception_notifier_screenshot.png)

Enable the extensions you want and enjoy the productivity benefits.
(If you don’t see a tab, open a notebook and click Edit > nbextensions config)


## Donation

If this page helps you reduce time to develop, you can buy me a cup of coffee :coffee:

  

[![paypal](https://cdn-images-1.medium.com/max/738/1*G95uyokAH4JC5Ppvx4LmoQ@2x.png)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=ZJM97M6KBLHZY)
