import "./Analytics.css";
import {BChart} from "../../Data/BChart.jsx";
import {LChart} from "../../Data/LChart.jsx";
import {PChart} from "../../Data/PChart.jsx";

export const Analytics = ({chart_i, chart_ii, chart_iii, title, value, illustration}) => {
    return (
        <div className="analytics">
            {chart_i && (
                <>
                    <header>
                        <span className="followers">Subscribers:</span>
                        <span className="earnings">Earnings:</span>
                    </header>
                    <BChart />
                </>
            )}
            {chart_ii && (
                <>
                    <header>
                        <span className="followers">Subscribers:</span>
                        <span className="earnings">Earnings:</span>
                    </header>
                    <LChart />
                </>
            )}
            {chart_iii && (
                <>
                    <header>
                        <span className="followers">Subscribers:</span>
                        <span className="earnings">Earnings:</span>
                    </header>
                    <PChart />
                </>
            )}
            {title && (
                <>
                    <h1 className="title">{title}</h1>
                    <h2 className="value">{value}</h2>
                    <h2 className="extra-text">
                        People are loving your content
                        <br />
                        🙌🎉🎆
                    </h2>
                    <img src={illustration} alt="illus" className="illustration" />
                </>
            )}
        </div>
    )
}