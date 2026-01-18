import { useMemo } from 'react';

const Placeholder = () => {
    const spans = useMemo(() => {
        const spanAmount = Math.floor(Math.random() * 2) + 1;
        return [...Array(spanAmount)].map(() => ({
            width: Math.random() < 0.5 ? 50 : 75
        }));
    }, []);

    return (
        <div className="card-body placeholder-task">
            {spans.map((span, index) => (
                <span
                    className={`placeholder placeholder-span w-${span.width}`}
                    key={index}
                >
                    test
                </span>
            ))}
        </div>
    );
};

export default Placeholder;
