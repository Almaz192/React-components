import Button from "./components/button";
import Input from "./components/input";
import Typography from "./components/typography";
import Heading from "./components/heading";
import Tooltip from "./components/tooltip";
import Accordion from "./components/accordion";
function App() {
    return (
        <div className="App">
            <div className="ex1">
                <h2>Button Component</h2>
                <div className="primary-box">
                    <Button
                        size="lg"
                        variant="primary"
                        onClick={() => {
                            alert("Clicked");
                        }}
                    >
                        lg, Primary
                    </Button>
                    <Button
                        size="md"
                        variant="primary"
                        onClick={() => {
                            alert("Clicked");
                        }}
                    >
                        md, Primary
                    </Button>
                    <Button size="sm" variant="primary" disabled>
                        sm, Primary
                    </Button>
                </div>

                <div className="bordered-box">
                    <Button
                        size="lg"
                        variant="bordered"
                        onClick={() => {
                            alert("Clicked");
                        }}
                    >
                        sm, Bordered
                    </Button>
                    <Button
                        size="md"
                        variant="bordered"
                        onClick={() => {
                            alert("Clicked");
                        }}
                    >
                        md, Bordered
                    </Button>
                    <Button size="sm" variant="bordered" disabled>
                        sm, Bordered
                    </Button>
                </div>
            </div>
            <div className="ex2">
                <h2>Input Component</h2>
                <Input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => console.log(e.target.value)}
                    label="Name"
                    danger={false}
                />
                <Input
                    type="text"
                    placeholder="Enter your name"
                    onChange={(e) => console.log(e.target.value)}
                    label="Name"
                    danger={false}
                />
                <Input
                    type="text"
                    placeholder="Enter your name"
                    value="Danger"
                    onChange={(e) => console.log(e.target.value)}
                    label="Name"
                    danger={true}
                />
            </div>
            <div className="ex3">
                <h2>Typography Component</h2>
                <Typography textSize="sm">
                    SM. Our mission is to redefine the model of learning and
                    re-engineer its process by providing innovative
                    administrative and instructional technologies. Click here
                    for our beliefs. If you are a school administrator and would
                    like to use ecourse.org for your classes, please create
                    school profiles. Instructors and students may signup
                    independent user account. For questions, contact us.
                </Typography>
                <Typography textSize="md">
                    MD. Our mission is to redefine the model of learning and
                    re-engineer its process by providing innovative
                    administrative and instructional technologies. Click here
                    for our beliefs. If you are a school administrator and would
                    like to use ecourse.org for your classes, please create
                    school profiles. Instructors and students may signup
                    independent user account. For questions, contact us.
                </Typography>
                <Typography textSize="lg">
                    LG. Our mission is to redefine the model of learning and
                    re-engineer its process by providing innovative
                    administrative and instructional technologies. Click here
                    for our beliefs. If you are a school administrator and would
                    like to use ecourse.org for your classes, please create
                    school profiles. Instructors and students may signup
                    independent user account. For questions, contact us.
                </Typography>
            </div>
            <div className="ex4">
                <h2>Heading Component</h2>
                <Heading level={1}>Heading 1</Heading>
                <Heading level={2}>Heading 2</Heading>
                <Heading level={3}>Heading 3</Heading>
                <Heading level={4}>Heading 4</Heading>
                <Heading level={5}>Heading 5</Heading>
                <Heading level={6}>Heading 6</Heading>
            </div>
            <div className="ex5">
                <h2>Tooltip Component</h2>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "20px",
                        alignItems: "center",
                    }}
                >
                    <Tooltip text="Tooltip text" position="top">
                        Top Tooltip
                    </Tooltip>
                    <Tooltip text="Tooltip text" position="left">
                        Left Tooltip
                    </Tooltip>
                    <Tooltip text="Tooltip text" position="right">
                        Right Tooltip
                    </Tooltip>
                    <Tooltip text="Tooltip text" position="bottom">
                        Bottom Tooltip
                    </Tooltip>
                </div>
            </div>
            <div className="ex6">
                <h2>Accordion Component</h2>
                <Accordion title="Accordion">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Aperiam eaque voluptas accusantium natus, repellat sit,
                    illo, consequatur delectus cupiditate esse consequuntur
                    debitis minima temporibus sed repudiandae nulla deleniti
                    tenetur modi doloribus quod ipsam? Nostrum, necessitatibus.
                    Distinctio repellat, sequi sit nam laudantium blanditiis
                    consectetur dolor vel at? Voluptatibus facilis autem
                    voluptates ullam. Inventore deserunt, eligendi ratione ipsum
                    expedita eum vitae culpa praesentium modi, blanditiis
                    veritatis quia voluptatem. Sint ut impedit excepturi
                    distinctio eius illum inventore libero consectetur tempore
                    aliquid! Deserunt asperiores quidem quod explicabo
                    repudiandae eum itaque facere temporibus ratione rerum.
                </Accordion>
                <Accordion title="Accordion" defaultOpen>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </Accordion>
            </div>
        </div>
    );
}

export default App;
