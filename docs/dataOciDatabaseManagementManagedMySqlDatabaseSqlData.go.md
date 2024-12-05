# `dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseSqlData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlData <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data oci_database_management_managed_my_sql_database_sql_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlData(scope Construct, id *string, config DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig) DataOciDatabaseManagementManagedMySqlDatabaseSqlData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn">ResetFilterColumn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetFilterColumn` <a name="ResetFilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetFilterColumn"></a>

```go
func ResetFilterColumn()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseSqlData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseSqlData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseSqlData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection">MySqlDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput">EndTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput">FilterColumnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput">ManagedMySqlDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput">StartTimeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime">EndTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn">FilterColumn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime">StartTime</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList</a>

---

##### `MySqlDataCollection`<sup>Required</sup> <a name="MySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.mySqlDataCollection"></a>

```go
func MySqlDataCollection() DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList</a>

---

##### `EndTimeInput`<sup>Optional</sup> <a name="EndTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTimeInput"></a>

```go
func EndTimeInput() *string
```

- *Type:* *string

---

##### `FilterColumnInput`<sup>Optional</sup> <a name="FilterColumnInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumnInput"></a>

```go
func FilterColumnInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="ManagedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseIdInput"></a>

```go
func ManagedMySqlDatabaseIdInput() *string
```

- *Type:* *string

---

##### `StartTimeInput`<sup>Optional</sup> <a name="StartTimeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTimeInput"></a>

```go
func StartTimeInput() *string
```

- *Type:* *string

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.endTime"></a>

```go
func EndTime() *string
```

- *Type:* *string

---

##### `FilterColumn`<sup>Required</sup> <a name="FilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.filterColumn"></a>

```go
func FilterColumn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.managedMySqlDatabaseId"></a>

```go
func ManagedMySqlDatabaseId() *string
```

- *Type:* *string

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.startTime"></a>

```go
func StartTime() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

&dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	EndTime: *string,
	ManagedMySqlDatabaseId: *string,
	StartTime: *string,
	Filter: interface{},
	FilterColumn: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime">EndTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime">StartTime</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn">FilterColumn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndTime`<sup>Required</sup> <a name="EndTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.endTime"></a>

```go
EndTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#end_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#end_time}.

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.managedMySqlDatabaseId"></a>

```go
ManagedMySqlDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#managed_my_sql_database_id}.

---

##### `StartTime`<sup>Required</sup> <a name="StartTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.startTime"></a>

```go
StartTime *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#start_time DataOciDatabaseManagementManagedMySqlDatabaseSqlData#start_time}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter}

---

##### `FilterColumn`<sup>Optional</sup> <a name="FilterColumn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.filterColumn"></a>

```go
FilterColumn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#filter_column DataOciDatabaseManagementManagedMySqlDatabaseSqlData#filter_column}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#id DataOciDatabaseManagementManagedMySqlDatabaseSqlData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

&dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#name DataOciDatabaseManagementManagedMySqlDatabaseSqlData#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#values DataOciDatabaseManagementManagedMySqlDatabaseSqlData#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_sql_data#regex DataOciDatabaseManagementManagedMySqlDatabaseSqlData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

&dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection {

}
```


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

&dataocidatabasemanagementmanagedmysqldatabasesqldata.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait">AvgTimerWait</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar">CountStar</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest">Digest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText">DigestText</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen">FirstSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded">HeatWaveOffloaded</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory">HeatWaveOutOfMemory</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen">LastSeen</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait">MaxTimerWait</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait">MinTimerWait</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95">Quantile95</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99">Quantile99</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999">Quantile999</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName">SchemaName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables">SumCreatedTempDiskTables</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables">SumCreatedTempTables</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors">SumErrors</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime">SumLockTime</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed">SumNoGoodIndexUsed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed">SumNoIndexUsed</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected">SumRowsAffected</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined">SumRowsExamined</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent">SumRowsSent</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin">SumSelectFullJoin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin">SumSelectFullRangeJoin</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange">SumSelectRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck">SumSelectRangeCheck</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan">SumSelectScan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses">SumSortMergePasses</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange">SumSortRange</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows">SumSortRows</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan">SumSortScan</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait">SumTimerWait</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings">SumWarnings</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvgTimerWait`<sup>Required</sup> <a name="AvgTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.avgTimerWait"></a>

```go
func AvgTimerWait() *f64
```

- *Type:* *f64

---

##### `CountStar`<sup>Required</sup> <a name="CountStar" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.countStar"></a>

```go
func CountStar() *f64
```

- *Type:* *f64

---

##### `Digest`<sup>Required</sup> <a name="Digest" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digest"></a>

```go
func Digest() *string
```

- *Type:* *string

---

##### `DigestText`<sup>Required</sup> <a name="DigestText" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.digestText"></a>

```go
func DigestText() *string
```

- *Type:* *string

---

##### `FirstSeen`<sup>Required</sup> <a name="FirstSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.firstSeen"></a>

```go
func FirstSeen() *string
```

- *Type:* *string

---

##### `HeatWaveOffloaded`<sup>Required</sup> <a name="HeatWaveOffloaded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOffloaded"></a>

```go
func HeatWaveOffloaded() *f64
```

- *Type:* *f64

---

##### `HeatWaveOutOfMemory`<sup>Required</sup> <a name="HeatWaveOutOfMemory" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.heatWaveOutOfMemory"></a>

```go
func HeatWaveOutOfMemory() *f64
```

- *Type:* *f64

---

##### `LastSeen`<sup>Required</sup> <a name="LastSeen" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.lastSeen"></a>

```go
func LastSeen() *string
```

- *Type:* *string

---

##### `MaxTimerWait`<sup>Required</sup> <a name="MaxTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.maxTimerWait"></a>

```go
func MaxTimerWait() *f64
```

- *Type:* *f64

---

##### `MinTimerWait`<sup>Required</sup> <a name="MinTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.minTimerWait"></a>

```go
func MinTimerWait() *f64
```

- *Type:* *f64

---

##### `Quantile95`<sup>Required</sup> <a name="Quantile95" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile95"></a>

```go
func Quantile95() *f64
```

- *Type:* *f64

---

##### `Quantile99`<sup>Required</sup> <a name="Quantile99" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile99"></a>

```go
func Quantile99() *f64
```

- *Type:* *f64

---

##### `Quantile999`<sup>Required</sup> <a name="Quantile999" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.quantile999"></a>

```go
func Quantile999() *f64
```

- *Type:* *f64

---

##### `SchemaName`<sup>Required</sup> <a name="SchemaName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.schemaName"></a>

```go
func SchemaName() *string
```

- *Type:* *string

---

##### `SumCreatedTempDiskTables`<sup>Required</sup> <a name="SumCreatedTempDiskTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempDiskTables"></a>

```go
func SumCreatedTempDiskTables() *f64
```

- *Type:* *f64

---

##### `SumCreatedTempTables`<sup>Required</sup> <a name="SumCreatedTempTables" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumCreatedTempTables"></a>

```go
func SumCreatedTempTables() *f64
```

- *Type:* *f64

---

##### `SumErrors`<sup>Required</sup> <a name="SumErrors" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumErrors"></a>

```go
func SumErrors() *f64
```

- *Type:* *f64

---

##### `SumLockTime`<sup>Required</sup> <a name="SumLockTime" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumLockTime"></a>

```go
func SumLockTime() *f64
```

- *Type:* *f64

---

##### `SumNoGoodIndexUsed`<sup>Required</sup> <a name="SumNoGoodIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoGoodIndexUsed"></a>

```go
func SumNoGoodIndexUsed() *f64
```

- *Type:* *f64

---

##### `SumNoIndexUsed`<sup>Required</sup> <a name="SumNoIndexUsed" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumNoIndexUsed"></a>

```go
func SumNoIndexUsed() *f64
```

- *Type:* *f64

---

##### `SumRowsAffected`<sup>Required</sup> <a name="SumRowsAffected" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsAffected"></a>

```go
func SumRowsAffected() *f64
```

- *Type:* *f64

---

##### `SumRowsExamined`<sup>Required</sup> <a name="SumRowsExamined" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsExamined"></a>

```go
func SumRowsExamined() *f64
```

- *Type:* *f64

---

##### `SumRowsSent`<sup>Required</sup> <a name="SumRowsSent" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumRowsSent"></a>

```go
func SumRowsSent() *f64
```

- *Type:* *f64

---

##### `SumSelectFullJoin`<sup>Required</sup> <a name="SumSelectFullJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullJoin"></a>

```go
func SumSelectFullJoin() *f64
```

- *Type:* *f64

---

##### `SumSelectFullRangeJoin`<sup>Required</sup> <a name="SumSelectFullRangeJoin" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectFullRangeJoin"></a>

```go
func SumSelectFullRangeJoin() *f64
```

- *Type:* *f64

---

##### `SumSelectRange`<sup>Required</sup> <a name="SumSelectRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRange"></a>

```go
func SumSelectRange() *f64
```

- *Type:* *f64

---

##### `SumSelectRangeCheck`<sup>Required</sup> <a name="SumSelectRangeCheck" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectRangeCheck"></a>

```go
func SumSelectRangeCheck() *f64
```

- *Type:* *f64

---

##### `SumSelectScan`<sup>Required</sup> <a name="SumSelectScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSelectScan"></a>

```go
func SumSelectScan() *f64
```

- *Type:* *f64

---

##### `SumSortMergePasses`<sup>Required</sup> <a name="SumSortMergePasses" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortMergePasses"></a>

```go
func SumSortMergePasses() *f64
```

- *Type:* *f64

---

##### `SumSortRange`<sup>Required</sup> <a name="SumSortRange" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRange"></a>

```go
func SumSortRange() *f64
```

- *Type:* *f64

---

##### `SumSortRows`<sup>Required</sup> <a name="SumSortRows" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortRows"></a>

```go
func SumSortRows() *f64
```

- *Type:* *f64

---

##### `SumSortScan`<sup>Required</sup> <a name="SumSortScan" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumSortScan"></a>

```go
func SumSortScan() *f64
```

- *Type:* *f64

---

##### `SumTimerWait`<sup>Required</sup> <a name="SumTimerWait" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumTimerWait"></a>

```go
func SumTimerWait() *f64
```

- *Type:* *f64

---

##### `SumWarnings`<sup>Required</sup> <a name="SumWarnings" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.sumWarnings"></a>

```go
func SumWarnings() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabasesqldata"

dataocidatabasemanagementmanagedmysqldatabasesqldata.NewDataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseSqlData.DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseSqlDataMySqlDataCollection</a>

---



