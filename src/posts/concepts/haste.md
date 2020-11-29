---
layout: post
alias: haste
title: High-Altitude Software and Test Engineering
excerpt: An effort to eliminate toil of boilerplate and escape the technological treadmill that drains so much development time (and money). Ultimately it's an effort to supersede most programming altogether.
date: 2020-05-31
updatedDate: 2020-05-31
tags:
  - post
  - concept
---

High-Altitude Software and Test Engineering (or HASTE to coin a catchy backronym) is a theory for a new approach to software development.

It is an effort to eliminate toil of [boilerplate](/blog/boilerplate) and escape the [technological treadmill](/blog/technological-treadmill) that drains so much development time (and money). Ultimately it's an effort to supersede most programming altogether.

What follows is a brief summary. The key concepts will be explored separately in more detail.

#### What is "high-altitude"?

In this context, "altitude" refers to the abstractness of a task. "High-altitude" tasks are those that are most abstract, most removed from the details, and hopefully adding the most value. They are concerned with the "what" rather than the "how".

The tasks of a software engineer are many and varied. The conventional software development life cycle (SDLC) spans requirements, design, implementation, testing and deployment --- an increasingly concrete series of tasks. In traditional waterfall process, these happen in sequence and feed into one another. In more iterative/agile methodologies, they happen faster, more often and in parallel.

Rarely do we imagine how they might be avoided altogether.

In a "high-altitude" methodology, a software engineer focuses almost exclusively on requirements, design and testing. The implementation is generated from their specifications, and includes the scripts to automate deployment.

Clearly this is not practical for all projects. Google could not build a universal search engine without writing at least a little code and taking some interest in how it runs.

But it is feasible for small, relatively simple systems, or for experimental, prototypical features of larger products. Let's look at how it might work.

#### Let's get real

**How might we produce working software from high-level requirements and design?**

This is not a new question, and many techniques have been developed over the years.[^1] Here are some that might help (with some links to deeper dives):

An [**ontology**](https://en.wikipedia.org/wiki/Ontology_(information_science)) is a kind of system of classification and vocabulary for describing a domain. If we're not writing the code ourselves, we'll need an ontology for the elements of software in order to discuss higher-level concepts. We would then combine those elements into a system specification.

[**Design patterns**](https://en.wikipedia.org/wiki/Software_design_pattern) are a prominent technique for describing standard, abstract solutions to common software design problems. These would offer some well-known concepts to such an ontology.

[**Code generation**](https://tomassetti.me/code-generation/) is the process of transforming some data into executable source code. Clearly this will play the lead role in turning our system specification into an implementation.

Generated code will involve **languages**, **frameworks** and **libraries**: concrete components that can be reused by different projects. Since we're interested in the specification, not the implementation, we don't really care which of these are used; that's a concern of the code generation system.[^2]

Therefore the code generator will require an **encyclopedia** (an extensive catalogue) of the languages, frameworks and libraries that are available. Each entry must describe how the component corresponds to a concept in the ontology, and how to generate the code to implement that concept --- and integrate with other generated code.

So how do we interface with all this? [**Design diagrams**](https://en.wikipedia.org/wiki/Unified_Modeling_Language#Diagrams) are a standard means of communicating software designs. Tools to generate code from diagrams exist, but in practice software quickly becomes more complicated than a diagram can usefully describe. Perhaps by restricting ourselves to a sufficiently abstract ontology, we can avert such complication from the outset?

* * * * *

**If we suppose such an endeavour is possible, how would we build it?**

At first glance, an "ontology of software" may seem the least tractable. However it seems that as the universe of software grows, it grows increasingly regular. We could get a lot of bang-per-buck with a few simple concepts like "App", "Web Server" and "Database".

This is the kind of philosophical navel-gazing that entertains a certain kind of software engineer... so of course Motif is developing one such ontology called [Metal](/metal).

The world already contains many excellent patterns and languages, and a densely populated cross-product of frameworks and libraries.

In practice, the encyclopedia mapping the ontology onto the landscape of existing components --- along with how to generate their code --- will be the toughest challenge. Motif is tackling this with [Metro](/metro).

Even if the machinery can be built, the user interface presents a different kind of challenge. How can such a vast and technical problem space be condensed into a user-friendly app that fits on a screen? Motif seeks to answer this with [Mason](/mason).

Finally, all of content is going to need to be serialised to text for version control. Whether you're working with lines of code, an RDF [triplestore](https://en.wikipedia.org/wiki/Triplestore), or an ontology, you should be able to edit whatever representation you prefer: plain text, class diagram, flowchart, etc. [Mirror](/mirror) is that editor.

#### Let's give it a try

In the spirit of experimentation (and the absence of tooling), I invite you to try a thought experiment.

Consider some task you performed recently (at work or home) that could theoretically be improved by some magical software, be it some app, AI, or automation. What would that look like? What data would it use? How would using the software cause the data to change? How would you draw a diagram to explain it to someone else?

If it were as simple as just drawing that diagram, would you do it? How would it feel to solve your own problems with your own software?

Motif's mission is to make this possible; to bring software creation to the masses. If you're interested, [contact us](/contact) or get involved on [GitHub](https://github.com/motif-software).


[^1]: Many very smart people have tackled this problem, and I’m drawing a lot from their efforts. It is arguably the fundamental question of software engineering, as far back as the coining of the phrase in the late 1960s.

[^2]: You might be wondering about application-specific business logic. Surely no software is a pure aggregation of libraries and data? I’m skating around this objection for now. But in essence, such custom behaviours could at first be implemented as libraries themselves, and over time the set of truly novel behaviours would continue to shrink until useful software could be no more than libraries and data.
