# `dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqlAnalytics` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalytics <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalytics" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics oci_data_safe_sql_firewall_allowed_sql_analytics}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalytics(scope Construct, id *string, config DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig) DataOciDataSafeSqlFirewallAllowedSqlAnalytics
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy">ResetGroupBy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery">ResetScimQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetGroupBy` <a name="ResetGroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetGroupBy"></a>

```go
func ResetGroupBy()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetId"></a>

```go
func ResetId()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.resetScimQuery"></a>

```go
func ResetScimQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqlAnalytics resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSqlFirewallAllowedSqlAnalytics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqlAnalytics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection">SqlFirewallAllowedSqlAnalyticsCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput">GroupByInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput">ScimQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filter"></a>

```go
func Filter() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList</a>

---

##### `SqlFirewallAllowedSqlAnalyticsCollection`<sup>Required</sup> <a name="SqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.sqlFirewallAllowedSqlAnalyticsCollection"></a>

```go
func SqlFirewallAllowedSqlAnalyticsCollection() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `GroupByInput`<sup>Optional</sup> <a name="GroupByInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupByInput"></a>

```go
func GroupByInput() *[]*string
```

- *Type:* *[]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQueryInput"></a>

```go
func ScimQueryInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `GroupBy`<sup>Required</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.groupBy"></a>

```go
func GroupBy() *[]*string
```

- *Type:* *[]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.scimQuery"></a>

```go
func ScimQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalytics.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

&dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	AccessLevel: *string,
	CompartmentIdInSubtree: interface{},
	Filter: interface{},
	GroupBy: *[]*string,
	Id: *string,
	ScimQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy">GroupBy</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#access_level DataOciDataSafeSqlFirewallAllowedSqlAnalytics#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqlAnalytics#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#filter DataOciDataSafeSqlFirewallAllowedSqlAnalytics#filter}

---

##### `GroupBy`<sup>Optional</sup> <a name="GroupBy" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.groupBy"></a>

```go
GroupBy *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#group_by DataOciDataSafeSqlFirewallAllowedSqlAnalytics#group_by}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#id DataOciDataSafeSqlFirewallAllowedSqlAnalytics#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsConfig.property.scimQuery"></a>

```go
ScimQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#scim_query DataOciDataSafeSqlFirewallAllowedSqlAnalytics#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

&dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#name DataOciDataSafeSqlFirewallAllowedSqlAnalytics#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#values DataOciDataSafeSqlFirewallAllowedSqlAnalytics#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sql_analytics#regex DataOciDataSafeSqlFirewallAllowedSqlAnalytics#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

&dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection {

}
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

&dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems {

}
```


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

&dataocidatasafesqlfirewallallowedsqlanalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel">SqlLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlFirewallPolicyId"></a>

```go
func SqlFirewallPolicyId() *string
```

- *Type:* *string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.sqlLevel"></a>

```go
func SqlLevel() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensions</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions">Dimensions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount">SqlFirewallAllowedSqlAnalyticCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dimensions`<sup>Required</sup> <a name="Dimensions" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.dimensions"></a>

```go
func Dimensions() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsDimensionsList</a>

---

##### `SqlFirewallAllowedSqlAnalyticCount`<sup>Required</sup> <a name="SqlFirewallAllowedSqlAnalyticCount" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.sqlFirewallAllowedSqlAnalyticCount"></a>

```go
func SqlFirewallAllowedSqlAnalyticCount() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqlanalytics"

dataocidatasafesqlfirewallallowedsqlanalytics.NewDataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqlAnalytics.DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection">DataOciDataSafeSqlFirewallAllowedSqlAnalyticsSqlFirewallAllowedSqlAnalyticsCollection</a>

---



