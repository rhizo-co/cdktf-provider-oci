# `dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule <a name="`dataOciDatabaseVmClusterUpdateHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries oci_database_vm_cluster_update_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.NewDataOciDatabaseVmClusterUpdateHistoryEntries(scope Construct, id *string, config DataOciDatabaseVmClusterUpdateHistoryEntriesConfig) DataOciDatabaseVmClusterUpdateHistoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig">DataOciDatabaseVmClusterUpdateHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig">DataOciDatabaseVmClusterUpdateHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType">ResetUpdateType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetState"></a>

```go
func ResetState()
```

##### `ResetUpdateType` <a name="ResetUpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.resetUpdateType"></a>

```go
func ResetUpdateType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdateHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusterUpdateHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdateHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries">VmClusterUpdateHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput">UpdateTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filter"></a>

```go
func Filter() DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList">DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList</a>

---

##### `VmClusterUpdateHistoryEntries`<sup>Required</sup> <a name="VmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterUpdateHistoryEntries"></a>

```go
func VmClusterUpdateHistoryEntries() DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList</a>

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `UpdateTypeInput`<sup>Optional</sup> <a name="UpdateTypeInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateTypeInput"></a>

```go
func UpdateTypeInput() *string
```

- *Type:* *string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterIdInput"></a>

```go
func VmClusterIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesConfig <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

&dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	VmClusterId: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
	UpdateType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType">UpdateType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.vmClusterId"></a>

```go
VmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntries#vm_cluster_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#filter DataOciDatabaseVmClusterUpdateHistoryEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#id DataOciDatabaseVmClusterUpdateHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#state DataOciDatabaseVmClusterUpdateHistoryEntries#state}.

---

##### `UpdateType`<sup>Optional</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesConfig.property.updateType"></a>

```go
UpdateType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#update_type DataOciDatabaseVmClusterUpdateHistoryEntries#update_type}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilter <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

&dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#name DataOciDatabaseVmClusterUpdateHistoryEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#values DataOciDatabaseVmClusterUpdateHistoryEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entries#regex DataOciDatabaseVmClusterUpdateHistoryEntries#regex}.

---

### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

&dataocidatabasevmclusterupdatehistoryentries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.NewDataOciDatabaseVmClusterUpdateHistoryEntriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.NewDataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.NewDataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference <a name="DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentries"

dataocidatabasevmclusterupdatehistoryentries.NewDataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted">TimeCompleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction">UpdateAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId">UpdateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeCompleted"></a>

```go
func TimeCompleted() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `UpdateAction`<sup>Required</sup> <a name="UpdateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateAction"></a>

```go
func UpdateAction() *string
```

- *Type:* *string

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateId"></a>

```go
func UpdateId() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntries.DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries">DataOciDatabaseVmClusterUpdateHistoryEntriesVmClusterUpdateHistoryEntries</a>

---



