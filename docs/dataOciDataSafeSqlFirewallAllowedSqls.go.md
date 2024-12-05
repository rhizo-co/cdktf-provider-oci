# `dataOciDataSafeSqlFirewallAllowedSqls` Submodule <a name="`dataOciDataSafeSqlFirewallAllowedSqls` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDataSafeSqlFirewallAllowedSqls <a name="DataOciDataSafeSqlFirewallAllowedSqls" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls oci_data_safe_sql_firewall_allowed_sqls}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqls(scope Construct, id *string, config DataOciDataSafeSqlFirewallAllowedSqlsConfig) DataOciDataSafeSqlFirewallAllowedSqls
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig">DataOciDataSafeSqlFirewallAllowedSqlsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig">DataOciDataSafeSqlFirewallAllowedSqlsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel">ResetAccessLevel</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree">ResetCompartmentIdInSubtree</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery">ResetScimQuery</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccessLevel` <a name="ResetAccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetAccessLevel"></a>

```go
func ResetAccessLevel()
```

##### `ResetCompartmentIdInSubtree` <a name="ResetCompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetCompartmentIdInSubtree"></a>

```go
func ResetCompartmentIdInSubtree()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetId"></a>

```go
func ResetId()
```

##### `ResetScimQuery` <a name="ResetScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.resetScimQuery"></a>

```go
func ResetScimQuery()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqls_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqls_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqls_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqls_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDataSafeSqlFirewallAllowedSqls resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDataSafeSqlFirewallAllowedSqls to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDataSafeSqlFirewallAllowedSqls that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDataSafeSqlFirewallAllowedSqls to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection">SqlFirewallAllowedSqlCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput">AccessLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput">ScimQueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filter"></a>

```go
func Filter() DataOciDataSafeSqlFirewallAllowedSqlsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList">DataOciDataSafeSqlFirewallAllowedSqlsFilterList</a>

---

##### `SqlFirewallAllowedSqlCollection`<sup>Required</sup> <a name="SqlFirewallAllowedSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.sqlFirewallAllowedSqlCollection"></a>

```go
func SqlFirewallAllowedSqlCollection() DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList</a>

---

##### `AccessLevelInput`<sup>Optional</sup> <a name="AccessLevelInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevelInput"></a>

```go
func AccessLevelInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ScimQueryInput`<sup>Optional</sup> <a name="ScimQueryInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQueryInput"></a>

```go
func ScimQueryInput() *string
```

- *Type:* *string

---

##### `AccessLevel`<sup>Required</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.accessLevel"></a>

```go
func AccessLevel() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ScimQuery`<sup>Required</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.scimQuery"></a>

```go
func ScimQuery() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqls.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsConfig <a name="DataOciDataSafeSqlFirewallAllowedSqlsConfig" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

&dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig {
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
	Id: *string,
	ScimQuery: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel">AccessLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery">ScimQuery</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id DataOciDataSafeSqlFirewallAllowedSqls#compartment_id}.

---

##### `AccessLevel`<sup>Optional</sup> <a name="AccessLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.accessLevel"></a>

```go
AccessLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#access_level DataOciDataSafeSqlFirewallAllowedSqls#access_level}.

---

##### `CompartmentIdInSubtree`<sup>Optional</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#compartment_id_in_subtree DataOciDataSafeSqlFirewallAllowedSqls#compartment_id_in_subtree}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#filter DataOciDataSafeSqlFirewallAllowedSqls#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#id DataOciDataSafeSqlFirewallAllowedSqls#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `ScimQuery`<sup>Optional</sup> <a name="ScimQuery" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsConfig.property.scimQuery"></a>

```go
ScimQuery *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#scim_query DataOciDataSafeSqlFirewallAllowedSqls#scim_query}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsFilter <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilter" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

&dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#name DataOciDataSafeSqlFirewallAllowedSqls#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#values DataOciDataSafeSqlFirewallAllowedSqls#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/data_safe_sql_firewall_allowed_sqls#regex DataOciDataSafeSqlFirewallAllowedSqls#regex}.

---

### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

&dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection {

}
```


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

&dataocidatasafesqlfirewallallowedsqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDataSafeSqlFirewallAllowedSqlsFilterList <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser">CurrentUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName">DbUserName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects">SqlAccessedObjects</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId">SqlFirewallPolicyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel">SqlLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected">TimeCollected</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version">Version</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CurrentUser`<sup>Required</sup> <a name="CurrentUser" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.currentUser"></a>

```go
func CurrentUser() *string
```

- *Type:* *string

---

##### `DbUserName`<sup>Required</sup> <a name="DbUserName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.dbUserName"></a>

```go
func DbUserName() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SqlAccessedObjects`<sup>Required</sup> <a name="SqlAccessedObjects" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlAccessedObjects"></a>

```go
func SqlAccessedObjects() *[]*string
```

- *Type:* *[]*string

---

##### `SqlFirewallPolicyId`<sup>Required</sup> <a name="SqlFirewallPolicyId" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlFirewallPolicyId"></a>

```go
func SqlFirewallPolicyId() *string
```

- *Type:* *string

---

##### `SqlLevel`<sup>Required</sup> <a name="SqlLevel" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlLevel"></a>

```go
func SqlLevel() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCollected`<sup>Required</sup> <a name="TimeCollected" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeCollected"></a>

```go
func TimeCollected() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.version"></a>

```go
func Version() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItems</a>

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get"></a>

```go
func Get(index *f64) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference <a name="DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatasafesqlfirewallallowedsqls"

dataocidatasafesqlfirewallallowedsqls.NewDataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDataSafeSqlFirewallAllowedSqls.DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection">DataOciDataSafeSqlFirewallAllowedSqlsSqlFirewallAllowedSqlCollection</a>

---



