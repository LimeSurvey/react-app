import classNames from 'classnames'

const Card = ({ children, className = '', style = {} }) => {
    return (
        <div className={classNames(className, 'survey-card')} style={style}>
            {children}
        </div>
    )
}

export default Card
