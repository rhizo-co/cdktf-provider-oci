# `dataOciMysqlMysqlDbSystems` Submodule <a name="`dataOciMysqlMysqlDbSystems` Submodule" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciMysqlMysqlDbSystems <a name="DataOciMysqlMysqlDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems oci_mysql_mysql_db_systems}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystems(scope Construct, id *string, config DataOciMysqlMysqlDbSystemsConfig) DataOciMysqlMysqlDbSystems
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig">DataOciMysqlMysqlDbSystemsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId">ResetConfigurationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement">ResetDatabaseManagement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId">ResetDbSystemId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached">ResetIsHeatWaveClusterAttached</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate">ResetIsUpToDate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetConfigurationId` <a name="ResetConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetConfigurationId"></a>

```go
func ResetConfigurationId()
```

##### `ResetDatabaseManagement` <a name="ResetDatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDatabaseManagement"></a>

```go
func ResetDatabaseManagement()
```

##### `ResetDbSystemId` <a name="ResetDbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDbSystemId"></a>

```go
func ResetDbSystemId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetId"></a>

```go
func ResetId()
```

##### `ResetIsHeatWaveClusterAttached` <a name="ResetIsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsHeatWaveClusterAttached"></a>

```go
func ResetIsHeatWaveClusterAttached()
```

##### `ResetIsUpToDate` <a name="ResetIsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetIsUpToDate"></a>

```go
func ResetIsUpToDate()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystems_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystems_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystems_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystems_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciMysqlMysqlDbSystems resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciMysqlMysqlDbSystems to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciMysqlMysqlDbSystems that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciMysqlMysqlDbSystems to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems">DbSystems</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput">ConfigurationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput">DatabaseManagementInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput">IsHeatWaveClusterAttachedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput">IsUpToDateInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement">DatabaseManagement</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate">IsUpToDate</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystems`<sup>Required</sup> <a name="DbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystems"></a>

```go
func DbSystems() DataOciMysqlMysqlDbSystemsDbSystemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList">DataOciMysqlMysqlDbSystemsDbSystemsList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filter"></a>

```go
func Filter() DataOciMysqlMysqlDbSystemsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList">DataOciMysqlMysqlDbSystemsFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationIdInput`<sup>Optional</sup> <a name="ConfigurationIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationIdInput"></a>

```go
func ConfigurationIdInput() *string
```

- *Type:* *string

---

##### `DatabaseManagementInput`<sup>Optional</sup> <a name="DatabaseManagementInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagementInput"></a>

```go
func DatabaseManagementInput() *[]*string
```

- *Type:* *[]*string

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsHeatWaveClusterAttachedInput`<sup>Optional</sup> <a name="IsHeatWaveClusterAttachedInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttachedInput"></a>

```go
func IsHeatWaveClusterAttachedInput() interface{}
```

- *Type:* interface{}

---

##### `IsUpToDateInput`<sup>Optional</sup> <a name="IsUpToDateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDateInput"></a>

```go
func IsUpToDateInput() interface{}
```

- *Type:* interface{}

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.databaseManagement"></a>

```go
func DatabaseManagement() *[]*string
```

- *Type:* *[]*string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isHeatWaveClusterAttached"></a>

```go
func IsHeatWaveClusterAttached() interface{}
```

- *Type:* interface{}

---

##### `IsUpToDate`<sup>Required</sup> <a name="IsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.isUpToDate"></a>

```go
func IsUpToDate() interface{}
```

- *Type:* interface{}

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystems.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciMysqlMysqlDbSystemsConfig <a name="DataOciMysqlMysqlDbSystemsConfig" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	ConfigurationId: *string,
	DatabaseManagement: *[]*string,
	DbSystemId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	IsHeatWaveClusterAttached: interface{},
	IsUpToDate: interface{},
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement">DatabaseManagement</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate">IsUpToDate</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#compartment_id DataOciMysqlMysqlDbSystems#compartment_id}.

---

##### `ConfigurationId`<sup>Optional</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.configurationId"></a>

```go
ConfigurationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#configuration_id DataOciMysqlMysqlDbSystems#configuration_id}.

---

##### `DatabaseManagement`<sup>Optional</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.databaseManagement"></a>

```go
DatabaseManagement *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#database_management DataOciMysqlMysqlDbSystems#database_management}.

---

##### `DbSystemId`<sup>Optional</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#db_system_id DataOciMysqlMysqlDbSystems#db_system_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#display_name DataOciMysqlMysqlDbSystems#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#filter DataOciMysqlMysqlDbSystems#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#id DataOciMysqlMysqlDbSystems#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IsHeatWaveClusterAttached`<sup>Optional</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isHeatWaveClusterAttached"></a>

```go
IsHeatWaveClusterAttached interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_heat_wave_cluster_attached DataOciMysqlMysqlDbSystems#is_heat_wave_cluster_attached}.

---

##### `IsUpToDate`<sup>Optional</sup> <a name="IsUpToDate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.isUpToDate"></a>

```go
IsUpToDate interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#is_up_to_date DataOciMysqlMysqlDbSystems#is_up_to_date}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#state DataOciMysqlMysqlDbSystems#state}.

---

### DataOciMysqlMysqlDbSystemsDbSystems <a name="DataOciMysqlMysqlDbSystemsDbSystems" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystems {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannels <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorage <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsEndpoints <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenance <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections {

}
```


### DataOciMysqlMysqlDbSystemsDbSystemsSource <a name="DataOciMysqlMysqlDbSystemsDbSystemsSource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsDbSystemsSource {

}
```


### DataOciMysqlMysqlDbSystemsFilter <a name="DataOciMysqlMysqlDbSystemsFilter" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

&dataocimysqlmysqldbsystems.DataOciMysqlMysqlDbSystemsFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#name DataOciMysqlMysqlDbSystems#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#values DataOciMysqlMysqlDbSystems#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/mysql_mysql_db_systems#regex DataOciMysqlMysqlDbSystems#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy">PitrPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays">RetentionInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `PitrPolicy`<sup>Required</sup> <a name="PitrPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.pitrPolicy"></a>

```go
func PitrPolicy() DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList</a>

---

##### `RetentionInDays`<sup>Required</sup> <a name="RetentionInDays" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.retentionInDays"></a>

```go
func RetentionInDays() *f64
```

- *Type:* *f64

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyPitrPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target">Target</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.source"></a>

```go
func Source() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Target`<sup>Required</sup> <a name="Target" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.target"></a>

```go
func Target() DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannels
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannels">DataOciMysqlMysqlDbSystemsDbSystemsChannels</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename">LastConfiguredLogFilename</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset">LastConfiguredLogOffset</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy">Policy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid">Uuid</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LastConfiguredLogFilename`<sup>Required</sup> <a name="LastConfiguredLogFilename" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogFilename"></a>

```go
func LastConfiguredLogFilename() *string
```

- *Type:* *string

---

##### `LastConfiguredLogOffset`<sup>Required</sup> <a name="LastConfiguredLogOffset" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.lastConfiguredLogOffset"></a>

```go
func LastConfiguredLogOffset() *string
```

- *Type:* *string

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.policy"></a>

```go
func Policy() *string
```

- *Type:* *string

---

##### `Uuid`<sup>Required</sup> <a name="Uuid" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.uuid"></a>

```go
func Uuid() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandling</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling">AnonymousTransactionsHandling</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate">SslCaCertificate</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode">SslMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AnonymousTransactionsHandling`<sup>Required</sup> <a name="AnonymousTransactionsHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.anonymousTransactionsHandling"></a>

```go
func AnonymousTransactionsHandling() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceAnonymousTransactionsHandlingList</a>

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SslCaCertificate`<sup>Required</sup> <a name="SslCaCertificate" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslCaCertificate"></a>

```go
func SslCaCertificate() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList</a>

---

##### `SslMode`<sup>Required</sup> <a name="SslMode" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.sslMode"></a>

```go
func SslMode() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSource</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType">CertificateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents">Contents</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateType`<sup>Required</sup> <a name="CertificateType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.certificateType"></a>

```go
func CertificateType() *string
```

- *Type:* *string

---

##### `Contents`<sup>Required</sup> <a name="Contents" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.contents"></a>

```go
func Contents() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificateOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate">DataOciMysqlMysqlDbSystemsDbSystemsChannelsSourceSslCaCertificate</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFilters</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername">ApplierUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds">DelayInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters">Filters</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling">TablesWithoutPrimaryKeyHandling</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType">TargetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApplierUsername`<sup>Required</sup> <a name="ApplierUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.applierUsername"></a>

```go
func ApplierUsername() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `DelayInSeconds`<sup>Required</sup> <a name="DelayInSeconds" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.delayInSeconds"></a>

```go
func DelayInSeconds() *f64
```

- *Type:* *f64

---

##### `Filters`<sup>Required</sup> <a name="Filters" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.filters"></a>

```go
func Filters() DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetFiltersList</a>

---

##### `TablesWithoutPrimaryKeyHandling`<sup>Required</sup> <a name="TablesWithoutPrimaryKeyHandling" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.tablesWithoutPrimaryKeyHandling"></a>

```go
func TablesWithoutPrimaryKeyHandling() *string
```

- *Type:* *string

---

##### `TargetType`<sup>Required</sup> <a name="TargetType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.targetType"></a>

```go
func TargetType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget">DataOciMysqlMysqlDbSystemsDbSystemsChannelsTarget</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacement</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email">Email</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Email`<sup>Required</sup> <a name="Email" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.email"></a>

```go
func Email() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContacts</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsDataStorageList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs">AllocatedStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs">DataStorageSizeLimitInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled">IsAutoExpandStorageEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs">MaxStorageSizeInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AllocatedStorageSizeInGbs`<sup>Required</sup> <a name="AllocatedStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.allocatedStorageSizeInGbs"></a>

```go
func AllocatedStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DataStorageSizeLimitInGbs`<sup>Required</sup> <a name="DataStorageSizeLimitInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.dataStorageSizeLimitInGbs"></a>

```go
func DataStorageSizeLimitInGbs() *f64
```

- *Type:* *f64

---

##### `IsAutoExpandStorageEnabled`<sup>Required</sup> <a name="IsAutoExpandStorageEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.isAutoExpandStorageEnabled"></a>

```go
func IsAutoExpandStorageEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MaxStorageSizeInGbs`<sup>Required</sup> <a name="MaxStorageSizeInGbs" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.maxStorageSizeInGbs"></a>

```go
func MaxStorageSizeInGbs() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsDataStorage
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorage">DataOciMysqlMysqlDbSystemsDbSystemsDataStorage</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention">AutomaticBackupRetention</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup">FinalBackup</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected">IsDeleteProtected</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutomaticBackupRetention`<sup>Required</sup> <a name="AutomaticBackupRetention" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.automaticBackupRetention"></a>

```go
func AutomaticBackupRetention() *string
```

- *Type:* *string

---

##### `FinalBackup`<sup>Required</sup> <a name="FinalBackup" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.finalBackup"></a>

```go
func FinalBackup() *string
```

- *Type:* *string

---

##### `IsDeleteProtected`<sup>Required</sup> <a name="IsDeleteProtected" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.isDeleteProtected"></a>

```go
func IsDeleteProtected() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicy</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsEndpointsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname">Hostname</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes">Modes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX">PortX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails">StatusDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.hostname"></a>

```go
func Hostname() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `Modes`<sup>Required</sup> <a name="Modes" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.modes"></a>

```go
func Modes() *[]*string
```

- *Type:* *[]*string

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.portX"></a>

```go
func PortX() *f64
```

- *Type:* *f64

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusDetails`<sup>Required</sup> <a name="StatusDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.statusDetails"></a>

```go
func StatusDetails() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsEndpoints
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpoints">DataOciMysqlMysqlDbSystemsDbSystemsEndpoints</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize">ClusterSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled">IsLakehouseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterSize`<sup>Required</sup> <a name="ClusterSize" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.clusterSize"></a>

```go
func ClusterSize() *f64
```

- *Type:* *f64

---

##### `IsLakehouseEnabled`<sup>Required</sup> <a name="IsLakehouseEnabled" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.isLakehouseEnabled"></a>

```go
func IsLakehouseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveCluster</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime">WindowStartTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WindowStartTime`<sup>Required</sup> <a name="WindowStartTime" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.windowStartTime"></a>

```go
func WindowStartTime() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsMaintenance
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenance">DataOciMysqlMysqlDbSystemsDbSystemsMaintenance</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword">AdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername">AdminUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy">BackupPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels">Channels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId">ConfigurationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery">CrashRecovery</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement">CurrentPlacement</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts">CustomerContacts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement">DatabaseManagement</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage">DataStorage</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb">DataStorageSizeInGb</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy">DeletionPolicy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints">Endpoints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster">HeatWaveCluster</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel">HostnameLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress">IpAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached">IsHeatWaveClusterAttached</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable">IsHighlyAvailable</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance">Maintenance</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion">MysqlVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails">PointInTimeRecoveryDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX">PortX</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections">SecureConnections</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName">ShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType">ShutdownType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source">Source</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdminPassword`<sup>Required</sup> <a name="AdminPassword" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminPassword"></a>

```go
func AdminPassword() *string
```

- *Type:* *string

---

##### `AdminUsername`<sup>Required</sup> <a name="AdminUsername" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.adminUsername"></a>

```go
func AdminUsername() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `BackupPolicy`<sup>Required</sup> <a name="BackupPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.backupPolicy"></a>

```go
func BackupPolicy() DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsBackupPolicyList</a>

---

##### `Channels`<sup>Required</sup> <a name="Channels" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.channels"></a>

```go
func Channels() DataOciMysqlMysqlDbSystemsDbSystemsChannelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsChannelsList">DataOciMysqlMysqlDbSystemsDbSystemsChannelsList</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ConfigurationId`<sup>Required</sup> <a name="ConfigurationId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.configurationId"></a>

```go
func ConfigurationId() *string
```

- *Type:* *string

---

##### `CrashRecovery`<sup>Required</sup> <a name="CrashRecovery" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.crashRecovery"></a>

```go
func CrashRecovery() *string
```

- *Type:* *string

---

##### `CurrentPlacement`<sup>Required</sup> <a name="CurrentPlacement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.currentPlacement"></a>

```go
func CurrentPlacement() DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList">DataOciMysqlMysqlDbSystemsDbSystemsCurrentPlacementList</a>

---

##### `CustomerContacts`<sup>Required</sup> <a name="CustomerContacts" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.customerContacts"></a>

```go
func CustomerContacts() DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList">DataOciMysqlMysqlDbSystemsDbSystemsCustomerContactsList</a>

---

##### `DatabaseManagement`<sup>Required</sup> <a name="DatabaseManagement" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.databaseManagement"></a>

```go
func DatabaseManagement() *string
```

- *Type:* *string

---

##### `DataStorage`<sup>Required</sup> <a name="DataStorage" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorage"></a>

```go
func DataStorage() DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList">DataOciMysqlMysqlDbSystemsDbSystemsDataStorageList</a>

---

##### `DataStorageSizeInGb`<sup>Required</sup> <a name="DataStorageSizeInGb" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.dataStorageSizeInGb"></a>

```go
func DataStorageSizeInGb() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DeletionPolicy`<sup>Required</sup> <a name="DeletionPolicy" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.deletionPolicy"></a>

```go
func DeletionPolicy() DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList">DataOciMysqlMysqlDbSystemsDbSystemsDeletionPolicyList</a>

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Endpoints`<sup>Required</sup> <a name="Endpoints" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.endpoints"></a>

```go
func Endpoints() DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList">DataOciMysqlMysqlDbSystemsDbSystemsEndpointsList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `HeatWaveCluster`<sup>Required</sup> <a name="HeatWaveCluster" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.heatWaveCluster"></a>

```go
func HeatWaveCluster() DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList">DataOciMysqlMysqlDbSystemsDbSystemsHeatWaveClusterList</a>

---

##### `HostnameLabel`<sup>Required</sup> <a name="HostnameLabel" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.hostnameLabel"></a>

```go
func HostnameLabel() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddress`<sup>Required</sup> <a name="IpAddress" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.ipAddress"></a>

```go
func IpAddress() *string
```

- *Type:* *string

---

##### `IsHeatWaveClusterAttached`<sup>Required</sup> <a name="IsHeatWaveClusterAttached" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHeatWaveClusterAttached"></a>

```go
func IsHeatWaveClusterAttached() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHighlyAvailable`<sup>Required</sup> <a name="IsHighlyAvailable" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.isHighlyAvailable"></a>

```go
func IsHighlyAvailable() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Maintenance`<sup>Required</sup> <a name="Maintenance" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.maintenance"></a>

```go
func Maintenance() DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList">DataOciMysqlMysqlDbSystemsDbSystemsMaintenanceList</a>

---

##### `MysqlVersion`<sup>Required</sup> <a name="MysqlVersion" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.mysqlVersion"></a>

```go
func MysqlVersion() *string
```

- *Type:* *string

---

##### `PointInTimeRecoveryDetails`<sup>Required</sup> <a name="PointInTimeRecoveryDetails" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.pointInTimeRecoveryDetails"></a>

```go
func PointInTimeRecoveryDetails() DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList</a>

---

##### `Port`<sup>Required</sup> <a name="Port" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `PortX`<sup>Required</sup> <a name="PortX" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.portX"></a>

```go
func PortX() *f64
```

- *Type:* *f64

---

##### `SecureConnections`<sup>Required</sup> <a name="SecureConnections" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.secureConnections"></a>

```go
func SecureConnections() DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList</a>

---

##### `ShapeName`<sup>Required</sup> <a name="ShapeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shapeName"></a>

```go
func ShapeName() *string
```

- *Type:* *string

---

##### `ShutdownType`<sup>Required</sup> <a name="ShutdownType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.shutdownType"></a>

```go
func ShutdownType() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.source"></a>

```go
func Source() DataOciMysqlMysqlDbSystemsDbSystemsSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList">DataOciMysqlMysqlDbSystemsDbSystemsSourceList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystems">DataOciMysqlMysqlDbSystemsDbSystems</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint">TimeEarliestRecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint">TimeLatestRecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeEarliestRecoveryPoint`<sup>Required</sup> <a name="TimeEarliestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeEarliestRecoveryPoint"></a>

```go
func TimeEarliestRecoveryPoint() *string
```

- *Type:* *string

---

##### `TimeLatestRecoveryPoint`<sup>Required</sup> <a name="TimeLatestRecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.timeLatestRecoveryPoint"></a>

```go
func TimeLatestRecoveryPoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails">DataOciMysqlMysqlDbSystemsDbSystemsPointInTimeRecoveryDetails</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType">CertificateGenerationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId">CertificateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateGenerationType`<sup>Required</sup> <a name="CertificateGenerationType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateGenerationType"></a>

```go
func CertificateGenerationType() *string
```

- *Type:* *string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.certificateId"></a>

```go
func CertificateId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnectionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections">DataOciMysqlMysqlDbSystemsDbSystemsSecureConnections</a>

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceList <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference <a name="DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId">BackupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint">RecoveryPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl">SourceUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackupId`<sup>Required</sup> <a name="BackupId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.backupId"></a>

```go
func BackupId() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `RecoveryPoint`<sup>Required</sup> <a name="RecoveryPoint" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.recoveryPoint"></a>

```go
func RecoveryPoint() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `SourceUrl`<sup>Required</sup> <a name="SourceUrl" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.sourceUrl"></a>

```go
func SourceUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciMysqlMysqlDbSystemsDbSystemsSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsDbSystemsSource">DataOciMysqlMysqlDbSystemsDbSystemsSource</a>

---


### DataOciMysqlMysqlDbSystemsFilterList <a name="DataOciMysqlMysqlDbSystemsFilterList" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciMysqlMysqlDbSystemsFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get"></a>

```go
func Get(index *f64) DataOciMysqlMysqlDbSystemsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciMysqlMysqlDbSystemsFilterOutputReference <a name="DataOciMysqlMysqlDbSystemsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocimysqlmysqldbsystems"

dataocimysqlmysqldbsystems.NewDataOciMysqlMysqlDbSystemsFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciMysqlMysqlDbSystemsFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciMysqlMysqlDbSystems.DataOciMysqlMysqlDbSystemsFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



