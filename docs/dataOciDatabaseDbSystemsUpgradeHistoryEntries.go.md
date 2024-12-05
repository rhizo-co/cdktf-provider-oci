# `dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule <a name="`dataOciDatabaseDbSystemsUpgradeHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries oci_database_db_systems_upgrade_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.NewDataOciDatabaseDbSystemsUpgradeHistoryEntries(scope Construct, id *string, config DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig) DataOciDatabaseDbSystemsUpgradeHistoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig">DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction">ResetUpgradeAction</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetState"></a>

```go
func ResetState()
```

##### `ResetUpgradeAction` <a name="ResetUpgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.resetUpgradeAction"></a>

```go
func ResetUpgradeAction()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemsUpgradeHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDbSystemsUpgradeHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemsUpgradeHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries">DbSystemUpgradeHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput">UpgradeActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction">UpgradeAction</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DbSystemUpgradeHistoryEntries`<sup>Required</sup> <a name="DbSystemUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemUpgradeHistoryEntries"></a>

```go
func DbSystemUpgradeHistoryEntries() DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filter"></a>

```go
func Filter() DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList">DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList</a>

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `UpgradeActionInput`<sup>Optional</sup> <a name="UpgradeActionInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeActionInput"></a>

```go
func UpgradeActionInput() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpgradeAction`<sup>Required</sup> <a name="UpgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.upgradeAction"></a>

```go
func UpgradeAction() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

&dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbSystemId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	UpgradeAction: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction">UpgradeAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#db_system_id DataOciDatabaseDbSystemsUpgradeHistoryEntries#db_system_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#filter DataOciDatabaseDbSystemsUpgradeHistoryEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#id DataOciDatabaseDbSystemsUpgradeHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#state DataOciDatabaseDbSystemsUpgradeHistoryEntries#state}.

---

##### `UpgradeAction`<sup>Optional</sup> <a name="UpgradeAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesConfig.property.upgradeAction"></a>

```go
UpgradeAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#upgrade_action DataOciDatabaseDbSystemsUpgradeHistoryEntries#upgrade_action}.

---

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

&dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries {

}
```


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

&dataocidatabasedbsystemsupgradehistoryentries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#name DataOciDatabaseDbSystemsUpgradeHistoryEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#values DataOciDatabaseDbSystemsUpgradeHistoryEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_systems_upgrade_history_entries#regex DataOciDatabaseDbSystemsUpgradeHistoryEntries#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.NewDataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.NewDataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion">NewGiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion">NewOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion">OldGiVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion">OldOsVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays">SnapshotRetentionPeriodInDays</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NewGiVersion`<sup>Required</sup> <a name="NewGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newGiVersion"></a>

```go
func NewGiVersion() *string
```

- *Type:* *string

---

##### `NewOsVersion`<sup>Required</sup> <a name="NewOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.newOsVersion"></a>

```go
func NewOsVersion() *string
```

- *Type:* *string

---

##### `OldGiVersion`<sup>Required</sup> <a name="OldGiVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldGiVersion"></a>

```go
func OldGiVersion() *string
```

- *Type:* *string

---

##### `OldOsVersion`<sup>Required</sup> <a name="OldOsVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.oldOsVersion"></a>

```go
func OldOsVersion() *string
```

- *Type:* *string

---

##### `SnapshotRetentionPeriodInDays`<sup>Required</sup> <a name="SnapshotRetentionPeriodInDays" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.snapshotRetentionPeriodInDays"></a>

```go
func SnapshotRetentionPeriodInDays() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries">DataOciDatabaseDbSystemsUpgradeHistoryEntriesDbSystemUpgradeHistoryEntries</a>

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.NewDataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystemsupgradehistoryentries"

dataocidatabasedbsystemsupgradehistoryentries.NewDataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemsUpgradeHistoryEntries.DataOciDatabaseDbSystemsUpgradeHistoryEntriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



