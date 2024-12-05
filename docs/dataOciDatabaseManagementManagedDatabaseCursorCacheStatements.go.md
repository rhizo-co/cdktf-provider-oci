# `dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule <a name="`dataOciDatabaseManagementManagedDatabaseCursorCacheStatements` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatements <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatements" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements oci_database_management_managed_database_cursor_cache_statements}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatements(scope Construct, id *string, config DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig) DataOciDatabaseManagementManagedDatabaseCursorCacheStatements
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit">ResetLimit</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId">ResetOpcNamedCredentialId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText">ResetSqlText</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetId"></a>

```go
func ResetId()
```

##### `ResetLimit` <a name="ResetLimit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetLimit"></a>

```go
func ResetLimit()
```

##### `ResetOpcNamedCredentialId` <a name="ResetOpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetOpcNamedCredentialId"></a>

```go
func ResetOpcNamedCredentialId()
```

##### `ResetSqlText` <a name="ResetSqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.resetSqlText"></a>

```go
func ResetSqlText()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedDatabaseCursorCacheStatements resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedDatabaseCursorCacheStatements that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedDatabaseCursorCacheStatements to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection">CursorCacheStatementCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput">LimitInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput">ManagedDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput">OpcNamedCredentialIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput">SqlTextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit">Limit</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CursorCacheStatementCollection`<sup>Required</sup> <a name="CursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.cursorCacheStatementCollection"></a>

```go
func CursorCacheStatementCollection() DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limitInput"></a>

```go
func LimitInput() *f64
```

- *Type:* *f64

---

##### `ManagedDatabaseIdInput`<sup>Optional</sup> <a name="ManagedDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseIdInput"></a>

```go
func ManagedDatabaseIdInput() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialIdInput`<sup>Optional</sup> <a name="OpcNamedCredentialIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialIdInput"></a>

```go
func OpcNamedCredentialIdInput() *string
```

- *Type:* *string

---

##### `SqlTextInput`<sup>Optional</sup> <a name="SqlTextInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlTextInput"></a>

```go
func SqlTextInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.limit"></a>

```go
func Limit() *f64
```

- *Type:* *f64

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.managedDatabaseId"></a>

```go
func ManagedDatabaseId() *string
```

- *Type:* *string

---

##### `OpcNamedCredentialId`<sup>Required</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.opcNamedCredentialId"></a>

```go
func OpcNamedCredentialId() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatements.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

&dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedDatabaseId: *string,
	Filter: interface{},
	Id: *string,
	Limit: *f64,
	OpcNamedCredentialId: *string,
	SqlText: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId">ManagedDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit">Limit</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId">OpcNamedCredentialId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText">SqlText</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedDatabaseId`<sup>Required</sup> <a name="ManagedDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.managedDatabaseId"></a>

```go
ManagedDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#managed_database_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#managed_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#filter DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Limit`<sup>Optional</sup> <a name="Limit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.limit"></a>

```go
Limit *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#limit DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#limit}.

---

##### `OpcNamedCredentialId`<sup>Optional</sup> <a name="OpcNamedCredentialId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.opcNamedCredentialId"></a>

```go
OpcNamedCredentialId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#opc_named_credential_id DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#opc_named_credential_id}.

---

##### `SqlText`<sup>Optional</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsConfig.property.sqlText"></a>

```go
SqlText *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#sql_text DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#sql_text}.

---

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

&dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection {

}
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

&dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems {

}
```


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

&dataocidatabasemanagementmanageddatabasecursorcachestatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#name DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#values DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_database_cursor_cache_statements#regex DataOciDatabaseManagementManagedDatabaseCursorCacheStatements#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema">Schema</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId">SqlId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText">SqlText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.schema"></a>

```go
func Schema() *string
```

- *Type:* *string

---

##### `SqlId`<sup>Required</sup> <a name="SqlId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlId"></a>

```go
func SqlId() *string
```

- *Type:* *string

---

##### `SqlText`<sup>Required</sup> <a name="SqlText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.sqlText"></a>

```go
func SqlText() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItems</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection">DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsCursorCacheStatementCollection</a>

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference <a name="DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanageddatabasecursorcachestatements"

dataocidatabasemanagementmanageddatabasecursorcachestatements.NewDataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedDatabaseCursorCacheStatements.DataOciDatabaseManagementManagedDatabaseCursorCacheStatementsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



