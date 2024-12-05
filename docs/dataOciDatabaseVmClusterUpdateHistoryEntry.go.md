# `dataOciDatabaseVmClusterUpdateHistoryEntry` Submodule <a name="`dataOciDatabaseVmClusterUpdateHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntry <a name="DataOciDatabaseVmClusterUpdateHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry oci_database_vm_cluster_update_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

dataocidatabasevmclusterupdatehistoryentry.NewDataOciDatabaseVmClusterUpdateHistoryEntry(scope Construct, id *string, config DataOciDatabaseVmClusterUpdateHistoryEntryConfig) DataOciDatabaseVmClusterUpdateHistoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig">DataOciDatabaseVmClusterUpdateHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig">DataOciDatabaseVmClusterUpdateHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

dataocidatabasevmclusterupdatehistoryentry.DataOciDatabaseVmClusterUpdateHistoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

dataocidatabasevmclusterupdatehistoryentry.DataOciDatabaseVmClusterUpdateHistoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

dataocidatabasevmclusterupdatehistoryentry.DataOciDatabaseVmClusterUpdateHistoryEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

dataocidatabasevmclusterupdatehistoryentry.DataOciDatabaseVmClusterUpdateHistoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseVmClusterUpdateHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseVmClusterUpdateHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseVmClusterUpdateHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseVmClusterUpdateHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeCompleted">TimeCompleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateAction">UpdateAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateId">UpdateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateType">UpdateType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput">UpdateHistoryEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterIdInput">VmClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryId">UpdateHistoryEntryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCompleted`<sup>Required</sup> <a name="TimeCompleted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeCompleted"></a>

```go
func TimeCompleted() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `UpdateAction`<sup>Required</sup> <a name="UpdateAction" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateAction"></a>

```go
func UpdateAction() *string
```

- *Type:* *string

---

##### `UpdateId`<sup>Required</sup> <a name="UpdateId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateId"></a>

```go
func UpdateId() *string
```

- *Type:* *string

---

##### `UpdateType`<sup>Required</sup> <a name="UpdateType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateType"></a>

```go
func UpdateType() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UpdateHistoryEntryIdInput`<sup>Optional</sup> <a name="UpdateHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryIdInput"></a>

```go
func UpdateHistoryEntryIdInput() *string
```

- *Type:* *string

---

##### `VmClusterIdInput`<sup>Optional</sup> <a name="VmClusterIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterIdInput"></a>

```go
func VmClusterIdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdateHistoryEntryId`<sup>Required</sup> <a name="UpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.updateHistoryEntryId"></a>

```go
func UpdateHistoryEntryId() *string
```

- *Type:* *string

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.vmClusterId"></a>

```go
func VmClusterId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseVmClusterUpdateHistoryEntryConfig <a name="DataOciDatabaseVmClusterUpdateHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasevmclusterupdatehistoryentry"

&dataocidatabasevmclusterupdatehistoryentry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	UpdateHistoryEntryId: *string,
	VmClusterId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId">UpdateHistoryEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseVmClusterUpdateHistoryEntry#update_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.vmClusterId">VmClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntry#vm_cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#id DataOciDatabaseVmClusterUpdateHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `UpdateHistoryEntryId`<sup>Required</sup> <a name="UpdateHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.updateHistoryEntryId"></a>

```go
UpdateHistoryEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#update_history_entry_id DataOciDatabaseVmClusterUpdateHistoryEntry#update_history_entry_id}.

---

##### `VmClusterId`<sup>Required</sup> <a name="VmClusterId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.vmClusterId"></a>

```go
VmClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#vm_cluster_id DataOciDatabaseVmClusterUpdateHistoryEntry#vm_cluster_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseVmClusterUpdateHistoryEntry.DataOciDatabaseVmClusterUpdateHistoryEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_vm_cluster_update_history_entry#id DataOciDatabaseVmClusterUpdateHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



