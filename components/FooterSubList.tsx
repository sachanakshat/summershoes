interface SubListProps {
    title: string;
    items: string[];
}

export default function FooterSubList({ title, items }: SubListProps) {
    return (
        <div className="footer-item py-3">
            <h2 className="footer-item__title text-font--primary text-size--regular font-bold text-weight--bold">{title}</h2>
            {items.map((item, index) => (
                <nav
                    key={index}
                    className="footer-item__menu  footer-item__menu--unstyled  rte"
                >
                    <a
                        href={item}
                        className="text-sm hover:text-gray-700"
                    >
                        {item}
                    </a>
                </nav>
            ))}
        </div>
    );
}
