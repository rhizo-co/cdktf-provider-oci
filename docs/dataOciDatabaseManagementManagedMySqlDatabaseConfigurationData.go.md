# `dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule <a name="`dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data oci_database_management_managed_my_sql_database_configuration_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationData(scope Construct, id *string, config DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection">MySqlConfigurationDataCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput">ManagedMySqlDatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filter"></a>

```go
func Filter() DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList</a>

---

##### `MySqlConfigurationDataCollection`<sup>Required</sup> <a name="MySqlConfigurationDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.mySqlConfigurationDataCollection"></a>

```go
func MySqlConfigurationDataCollection() DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `ManagedMySqlDatabaseIdInput`<sup>Optional</sup> <a name="ManagedMySqlDatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseIdInput"></a>

```go
func ManagedMySqlDatabaseIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.managedMySqlDatabaseId"></a>

```go
func ManagedMySqlDatabaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

&dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ManagedMySqlDatabaseId: *string,
	Filter: interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId">ManagedMySqlDatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ManagedMySqlDatabaseId`<sup>Required</sup> <a name="ManagedMySqlDatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.managedMySqlDatabaseId"></a>

```go
ManagedMySqlDatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#managed_my_sql_database_id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#managed_my_sql_database_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#filter DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#id DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

&dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#name DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#values DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_management_managed_my_sql_database_configuration_data#regex DataOciDatabaseManagementManagedMySqlDatabaseConfigurationData#regex}.

---

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

&dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection {

}
```


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

&dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet">HostSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable">IsConfigurable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic">IsDynamic</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit">IsInit</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue">MaxValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue">MinValue</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions">SupportedVersions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet">TimeSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet">UserSet</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `HostSet`<sup>Required</sup> <a name="HostSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.hostSet"></a>

```go
func HostSet() *string
```

- *Type:* *string

---

##### `IsConfigurable`<sup>Required</sup> <a name="IsConfigurable" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isConfigurable"></a>

```go
func IsConfigurable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsDynamic`<sup>Required</sup> <a name="IsDynamic" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isDynamic"></a>

```go
func IsDynamic() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsInit`<sup>Required</sup> <a name="IsInit" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.isInit"></a>

```go
func IsInit() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxValue`<sup>Required</sup> <a name="MaxValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.maxValue"></a>

```go
func MaxValue() *f64
```

- *Type:* *f64

---

##### `MinValue`<sup>Required</sup> <a name="MinValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.minValue"></a>

```go
func MinValue() *f64
```

- *Type:* *f64

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SupportedVersions`<sup>Required</sup> <a name="SupportedVersions" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.supportedVersions"></a>

```go
func SupportedVersions() *string
```

- *Type:* *string

---

##### `TimeSet`<sup>Required</sup> <a name="TimeSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.timeSet"></a>

```go
func TimeSet() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `UserSet`<sup>Required</sup> <a name="UserSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.userSet"></a>

```go
func UserSet() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItems</a>

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference <a name="DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata"

dataocidatabasemanagementmanagedmysqldatabaseconfigurationdata.NewDataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseManagementManagedMySqlDatabaseConfigurationData.DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection">DataOciDatabaseManagementManagedMySqlDatabaseConfigurationDataMySqlConfigurationDataCollection</a>

---



