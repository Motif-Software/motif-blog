---
layout: post
title: Minimal Detail Principle
excerpt: The minimal detail principle is an observation in the style of the SOLID principles of software engineering, applied to an imagined world of high-altitude development.
date: 2020-06-01
updatedDate: 2020-06-01
tags:
  - post
  - concept
---

*The minimal detail principle is an observation in the style of the [SOLID principles](https://en.wikipedia.org/wiki/SOLID) of software engineering, applied to an imagined world of [high-altitude development](/blog/haste/).*

We are taught that a programmer's job is to precisely encode some desired logic and ensure that it exhibits exactly the right behaviour in a variety of edge cases. The devil is in the detail, and details as benign as a missing semicolon can make or break the entire system.

Architecture and design are important to structure our lines of code and keep them manageable. However so long as we're concerning ourselves with handwritten lines of code, then every one of them is a liability.

> "If debugging is the process of removing software bugs, then programming must be the process of putting them in."
>
> *Edsger W. Dijkstra*

Requiring every line of code to be perfect is a rather maximalist approach to software development. The difficulty of the job scales with the complexity of the system.

[High-altitude development](/blog/haste) is the notion of working only at the higher level of requirements, design and testing --- explicitly avoiding the responsibility of writing code. If feasible, this is not only more interesting, but opens up a new realm of possibilities.

* * * * *

[Truly antifragile software](/blog/antifragile-software) will be self-improving by some mechanism akin to evolution. This brings into play the concepts of [evolutionary](https://en.wikipedia.org/wiki/Evolutionary_programming) and [genetic programming](https://en.wikipedia.org/wiki/Genetic_programming).

What might these look like without code?

Imagine that we are able to take an abstract design and generate a working Java implementation. This is great, and we can now execute some software.

But if the design was language-agnostic, there's no need to restrict ourselves to Java. We could generate implementations of the same design in Python or Go or C. So long as we're not working with lines of code, it would make no difference to us --- but it would to a computer.

Perhaps the C implementation runs 10x faster. Fantastic! Let's ship that instead. Or maybe the Python implementation runs faster in tests because it doesn't need to be compiled.

The idea here is that by keeping our options open, we give ourselves more opportunities for improvement. If we have some sufficiently intelligent and powerful machine exploring the space of all possible improvements, then the more opportunities we give ourselves, the better off we'll be. In general:

#### > The fewer constraints we place on a software design, the better the most optimal implementation will be for any use case. Therefore antifragile software designs should specify as few details as possible (but no fewer).

* * * * *

*But surely lines of code are still being executed? An off-by-one error will still cause problems?* Of course. But by working at a high level, we become more interested in composing simple components that are already known to work, and reduce our exposure to those classes of programming error. There will still be some custom business logic, but it will be rarer and more heavily tested.

And in the not-too-distant future, the implementation may be able to fix any bugs within itself as well. In the spirit of Paul Graham's [Hundred-Year Language](http://www.paulgraham.com/hundred.html), let's see where we can get to by "aiming at some point in the distance".

*What about production and maintenance? Our developers don't understand the crash logs from C programs!* The operations space is already growing increasingly distant from the code, moving to containers and control planes. The information you need for debugging should be captured in more understandable logs and traces (don't worry, code generation will take care of that too).
