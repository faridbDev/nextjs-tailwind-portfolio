const HeaderInfo = ({ Icon, title }) => {
  return (
    <div className="flex items-center space-x-2">
      <span className="capitalize text-sm md:text-base font-semibold text-zinc-900 dark:text-zinc-400">
        {title}
      </span>
      {Icon}
    </div>
  );
};

export default HeaderInfo;
