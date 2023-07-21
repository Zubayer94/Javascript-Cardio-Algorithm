<!-- 
    Builder is a creational design pattern that lets you construct complex objects step by step. 
    The pattern allows you to produce different types and representations of an object using the same construction code. 
-->

<?php

/* 
    The Problem:
    Let's take a look at an example of a Service class to calculate the price.
 */

// app/Services/PricingService.php:
class PricingService {
 
    function calculateTotalPrice($orderPrice, $discount, $taxPercent, $shippingFee) {
        // calculations
    }
}

// sample Order model class
class Order{
    public $price;
    public $discount;
    public $taxPercent;
    public $shippingFee;
}

// Then you would call this Service class in some Controller:
class OrderController {
    
    public function show(Order $order, PricingService $service) {
        $totalPrice = $service->calculateTotalPrice(
            $order->price,
            $order->discount,
            $order->taxPercent,
            $order->shippingFee
        );
    }
}
// But what if you have more parameters in the future? It's not fancy to have 5th, 6th, and other parameters, right?

/* 
    The Solution using Builder Pattern: 
    Instead, you may refactor those parameters as their own setter methods, returning the same PricingService object.
*/

// app/Services/PricingService2.php:
class PricingService2{
    private $orderPrice;
    private $discount;
    private $taxPercent;
    private $shippingFee;

    public function setOrderPrice($orderPrice): PricingService2
    {
        $this->orderPrice = $orderPrice;
        return $this;
    }

    public function setDiscount($discount): PricingService2 {
        $this->discount = $discount;
        return $this;
    }

    public function setTaxPercent($taxPercent): PricingService2
    {
        $this->taxPercent = $taxPercent;
        return $this;
    }
 
    public function setShippingFee($shippingFee): PricingService2
    {
        $this->shippingFee = $shippingFee;
        return $this;
    }

    function calculateTotalPrice() { // See, no parameters!
        return $price = $this->orderPrice - $this->discount - (($this->orderPrice/100) * $this->taxPercent) - $this->shippingFee;
    }
}

// And then, in your Controller, you would build the object, method by method:
class OrderController2 {
    public function show(Order $order, PricingService2 $service) {
        $totalPrice = $service->setOrderPrice($order->price)
            ->setDiscount($order->discount)
            ->setTaxPercent($order->taxPercent)
            ->setShippingFee($order->shippingFee)
            ->calculateTotalPrice();
    }
}

/* 
    Real World Example
    One of the best applications of the Builder pattern is an SQL query builder. The builder interface defines the common steps required to build a generic SQL query. On the other hand, concrete builders, corresponding to different SQL dialects, implement these steps by returning parts of SQL queries that can be executed in a particular database engine.
*/

// namespace RefactoringGuru\Builder\RealWorld;
/**
 * The Builder interface declares a set of methods to assemble an SQL query.
 *
 * All of the construction steps are returning the current builder object to
 * allow chaining: $builder->select(...)->where(...)
 */
interface SQLQueryBuilder
{
    public function select(string $table, array $fields): SQLQueryBuilder;

    public function where(string $field, string $value, string $operator = '='): SQLQueryBuilder;

    public function limit(int $start, int $offset): SQLQueryBuilder;

    // +100 other SQL syntax methods...

    public function getSQL(): string;
}

/**
 * Each Concrete Builder corresponds to a specific SQL dialect and may implement
 * the builder steps a little bit differently from the others.
 *
 * This Concrete Builder can build SQL queries compatible with MySQL.
 */
class MysqlQueryBuilder implements SQLQueryBuilder
{
    protected $query;

    protected function reset(): void
    {
        $this->query = new \stdClass();
    }

    /**
     * Build a base SELECT query.
     */
    public function select(string $table, array $fields): SQLQueryBuilder
    {
        $this->reset();
        $this->query->base = "SELECT " . implode(", ", $fields) . " FROM " . $table;
        $this->query->type = 'select';

        return $this;
    }

    /**
     * Add a WHERE condition.
     */
    public function where(string $field, string $value, string $operator = '='): SQLQueryBuilder
    {
        if (!in_array($this->query->type, ['select', 'update', 'delete'])) {
            throw new \Exception("WHERE can only be added to SELECT, UPDATE OR DELETE");
        }
        $this->query->where[] = "$field $operator '$value'";

        return $this;
    }

    /**
     * Add a LIMIT constraint.
     */
    public function limit(int $start, int $offset): SQLQueryBuilder
    {
        if (!in_array($this->query->type, ['select'])) {
            throw new \Exception("LIMIT can only be added to SELECT");
        }
        $this->query->limit = " LIMIT " . $start . ", " . $offset;

        return $this;
    }

    /**
     * Get the final query string.
     */
    public function getSQL(): string
    {
        $query = $this->query;
        $sql = $query->base;
        if (!empty($query->where)) {
            $sql .= " WHERE " . implode(' AND ', $query->where);
        }
        if (isset($query->limit)) {
            $sql .= $query->limit;
        }
        $sql .= ";";
        return $sql;
    }
}

/**
 * This Concrete Builder is compatible with PostgreSQL. While Postgres is very
 * similar to Mysql, it still has several differences. To reuse the common code,
 * we extend it from the MySQL builder, while overriding some of the building
 * steps.
 */
class PostgresQueryBuilder extends MysqlQueryBuilder
{
    /**
     * Among other things, PostgreSQL has slightly different LIMIT syntax.
     */
    public function limit(int $start, int $offset): SQLQueryBuilder
    {
        parent::limit($start, $offset);

        $this->query->limit = " LIMIT " . $start . " OFFSET " . $offset;

        return $this;
    }

    // + tons of other overrides...
}


/**
 * Note that the client code uses the builder object directly. A designated
 * Director class is not necessary in this case, because the client code needs
 * different queries almost every time, so the sequence of the construction
 * steps cannot be easily reused.
 *
 * Since all our query builders create products of the same type (which is a
 * string), we can interact with all builders using their common interface.
 * Later, if we implement a new Builder class, we will be able to pass its
 * instance to the existing client code without breaking it thanks to the
 * SQLQueryBuilder interface.
 */
function clientCode(SQLQueryBuilder $queryBuilder)
{
    // ...

    $query = $queryBuilder
        ->select("users", ["name", "email", "password"])
        ->where("age", 18, ">")
        ->where("age", 30, "<")
        ->limit(10, 20)
        ->getSQL();

    echo $query;

    // ...
}


/**
 * The application selects the proper query builder type depending on a current
 * configuration or the environment settings.
 */
// if ($_ENV['database_type'] == 'postgres') {
//     $builder = new PostgresQueryBuilder(); } else {
//     $builder = new MysqlQueryBuilder(); }
//
// clientCode($builder);


echo "Testing MySQL query builder:\n";
clientCode(new MysqlQueryBuilder());

echo "\n\n";

echo "Testing PostgresSQL query builder:\n";
clientCode(new PostgresQueryBuilder());

/* 
    Output.txt: Execution result
    Testing MySQL query builder:
    SELECT name, email, password FROM users WHERE age > '18' AND age < '30' LIMIT 10, 20;

    Testing PostgresSQL query builder:
    SELECT name, email, password FROM users WHERE age > '18' AND age < '30' LIMIT 10 OFFSET 20;
*/