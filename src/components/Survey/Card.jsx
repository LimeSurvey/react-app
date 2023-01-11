import classNames from 'classnames'

const Card = ({ children }) => {
    return (
        <div className={classNames('survey-card')}>
            {children}
        </div>
    )
}

export default Card
