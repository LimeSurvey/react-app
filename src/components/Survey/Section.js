import classNames from 'classnames'

const Section = ({ children }) => {
    return (
        <div className={classNames('survey-section')}>
            {children}
        </div>
    )
}

export default Section
