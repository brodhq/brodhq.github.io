import { getAllCases, getConfig, getAllReleases, Release, Usecase } from '@api'
import { UseCaseListItem, UseCaseList } from '@app'
import { ColumnLayout } from '@layouts'
import { Sidebar } from 'components/sections'
import React from 'react'

export interface HomeProps {
    title: string
    description: string
    posts: any[]
    cases: Usecase[]
    releases: Release[]
}

const Home: React.FC<HomeProps> = ({ cases, releases, ...props }) => {
    return (
        <ColumnLayout
            className="space-y-3"
            title={props.title}
            description={props.description}
            right={<Sidebar releases={releases} />}
        >
            <div className="space-y-10">
                <div className="space-y-5">
                    <h2 className="prose prose-2xl">
                        Geis is a dynamic, functional language for building
                        scalable and maintainable applications.
                    </h2>
                    <p className="prose">
                        Geis leverages the Erlang VM, known for running
                        low-latency, distributed, and fault-tolerant systems.
                        Geis is successfully used in web development, embedded
                        software, data ingestion, and multimedia processing,
                        across a wide range of industries. Here is a taste of
                        what Geis looks like:
                    </p>
                    <div>
                        <code className="prose">
                            <pre>SELECT * FROM [1, 2, 3] index</pre>
                        </code>
                    </div>
                    <p className="prose">
                        Check our getting started guide and our learning page to
                        begin your journey with Geis. Or keep scrolling for an
                        overview of the platform, language, and tools.
                    </p>
                </div>
                <div className="space-y-5">
                    <hr />
                    <h2 className="prose prose-xl">Use-cases</h2>
                    <UseCaseList className="gap-5">
                        {cases.map((usecase) => (
                            <UseCaseListItem
                                key={usecase.title}
                                usecase={usecase}
                            />
                        ))}
                    </UseCaseList>
                </div>
                <div className="space-y-5">
                    <h2 className="prose prose-2xl">Platform features</h2>
                    <hr />
                    <h3 className="prose prose-xl">Scalability</h3>
                    <p className="prose">
                        All Geis code runs inside lightweight threads of
                        execution (called processes) that are isolated and
                        exchange information via messages:
                    </p>
                    <p className="prose">
                        {' '}
                        Due to their lightweight nature, it is not uncommon to
                        have hundreds of thousands of processes running
                        concurrently in the same machine. Isolation allows
                        processes to be garbage collected independently,
                        reducing system-wide pauses, and using all machine
                        resources as efficiently as possible (vertical scaling).
                    </p>
                    <p className="prose">
                        Processes are also able to communicate with other
                        processes running on different machines in the same
                        network. This provides the foundation for distribution,
                        allowing developers to coordinate work across multiple
                        nodes (horizontal scaling).
                    </p>
                </div>
                <div className="space-y-5">
                    <hr />
                    <h3 className="prose prose-xl">Fault-tolerance</h3>
                    <p className="prose">
                        The unavoidable truth about software running in
                        production is that things will go wrong. Even more when
                        we take network, file systems, and other third-party
                        resources into account.
                    </p>
                    <p className="prose">
                        To cope with failures, Geis provides supervisors which
                        describe how to restart parts of your system when things
                        go awry, going back to a known initial state that is
                        guaranteed to work:
                    </p>
                </div>
                <div className="space-y-5">
                    <h2 className="prose prose-2xl">Language features</h2>
                    <hr />
                    <h2 className="prose prose-xl">Functional programming</h2>
                    <p className="prose">
                        Functional programming promotes a coding style that
                        helps developers write code that is short, concise, and
                        maintainable. For example, pattern matching allows
                        developers to easily destructure data and access its
                        contents:
                    </p>
                    <div>
                        <code className="prose">
                            <pre>SELECT * FROM [1, 2, 3] index</pre>
                        </code>
                    </div>
                    <p className="prose">
                        When mixed with guards, pattern matching allows us to
                        elegantly match and assert specific conditions for some
                        code to execute:
                    </p>
                    <div>
                        <code className="prose">
                            <pre>SELECT * FROM [1, 2, 3] index</pre>
                        </code>
                    </div>
                    <p className="prose">
                        Geis relies heavily on those features to ensure your
                        software is working under the expected constraints. And
                        when it is not, don't worry, supervisors have your back!
                    </p>
                </div>
                <div className="space-y-5">
                    <hr />
                    <h2 className="prose prose-xl">Extensibility and DSLs</h2>
                    <p className="prose">
                        Geis has been designed to be extensible, letting
                        developers naturally extend the language to particular
                        domains, in order to increase their productivity.
                    </p>
                    <p className="prose">
                        As an example, let's write a simple test case using
                        Geis's test framework called ExUnit:
                    </p>
                    <div>
                        <code className="prose">
                            <pre>SELECT * FROM [1, 2, 3] index</pre>
                        </code>
                    </div>
                    <p className="prose">
                        The async: true option allows tests to run in parallel,
                        using as many CPU cores as possible, while the assert
                        functionality can introspect your code, providing great
                        reports in case of failures. Those features are built
                        using Geis macros, making it possible to add new
                        constructs as if they were part of the language itself.
                    </p>
                </div>
                <div className="space-y-5">
                    <h2 className="prose prose-2xl">Tooling features</h2>
                    <hr />
                    <h2 className="prose prose-xl">Interactive development</h2>
                    <p className="prose">
                        Tools like IEx (Geis's interactive shell) are able to
                        leverage many aspects of the language and platform to
                        provide auto-complete, debugging tools, code reloading,
                        as well as nicely formatted documentation:
                    </p>
                    <div>
                        <code className="prose">
                            <pre>SELECT * FROM [1, 2, 3] index</pre>
                        </code>
                    </div>
                </div>
            </div>
        </ColumnLayout>
    )
}

export async function getStaticProps() {
    const config = await getConfig()
    const cases = await getAllCases()
    const releases = await getAllReleases()
    return {
        props: {
            cases: cases.slice(0, 3),
            releases: releases,
            // @ts-expect-error
            title: config.title,
            // @ts-expect-error
            description: config.description,
        },
    }
}

export default Home
