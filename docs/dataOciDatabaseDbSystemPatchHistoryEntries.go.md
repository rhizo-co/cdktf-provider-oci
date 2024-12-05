# `dataOciDatabaseDbSystemPatchHistoryEntries` Submodule <a name="`dataOciDatabaseDbSystemPatchHistoryEntries` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbSystemPatchHistoryEntries <a name="DataOciDatabaseDbSystemPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries oci_database_db_system_patch_history_entries}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.NewDataOciDatabaseDbSystemPatchHistoryEntries(scope Construct, id *string, config DataOciDatabaseDbSystemPatchHistoryEntriesConfig) DataOciDatabaseDbSystemPatchHistoryEntries
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig">DataOciDatabaseDbSystemPatchHistoryEntriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig">DataOciDatabaseDbSystemPatchHistoryEntriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbSystemPatchHistoryEntries resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntries_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntries_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntries_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntries_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDbSystemPatchHistoryEntries resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDbSystemPatchHistoryEntries to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDbSystemPatchHistoryEntries that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbSystemPatchHistoryEntries to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList">DataOciDatabaseDbSystemPatchHistoryEntriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.patchHistoryEntries">PatchHistoryEntries</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemIdInput">DbSystemIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filter"></a>

```go
func Filter() DataOciDatabaseDbSystemPatchHistoryEntriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList">DataOciDatabaseDbSystemPatchHistoryEntriesFilterList</a>

---

##### `PatchHistoryEntries`<sup>Required</sup> <a name="PatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.patchHistoryEntries"></a>

```go
func PatchHistoryEntries() DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList</a>

---

##### `DbSystemIdInput`<sup>Optional</sup> <a name="DbSystemIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemIdInput"></a>

```go
func DbSystemIdInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.dbSystemId"></a>

```go
func DbSystemId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntries.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbSystemPatchHistoryEntriesConfig <a name="DataOciDatabaseDbSystemPatchHistoryEntriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

&dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig {
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
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dbSystemId">DbSystemId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#db_system_id DataOciDatabaseDbSystemPatchHistoryEntries#db_system_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#id DataOciDatabaseDbSystemPatchHistoryEntries#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbSystemId`<sup>Required</sup> <a name="DbSystemId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.dbSystemId"></a>

```go
DbSystemId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#db_system_id DataOciDatabaseDbSystemPatchHistoryEntries#db_system_id}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#filter DataOciDatabaseDbSystemPatchHistoryEntries#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#id DataOciDatabaseDbSystemPatchHistoryEntries#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciDatabaseDbSystemPatchHistoryEntriesFilter <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

&dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#name DataOciDatabaseDbSystemPatchHistoryEntries#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#values DataOciDatabaseDbSystemPatchHistoryEntries#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#regex DataOciDatabaseDbSystemPatchHistoryEntries#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#name DataOciDatabaseDbSystemPatchHistoryEntries#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#values DataOciDatabaseDbSystemPatchHistoryEntries#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_system_patch_history_entries#regex DataOciDatabaseDbSystemPatchHistoryEntries#regex}.

---

### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

&dataocidatabasedbsystempatchhistoryentries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbSystemPatchHistoryEntriesFilterList <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.NewDataOciDatabaseDbSystemPatchHistoryEntriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemPatchHistoryEntriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference <a name="DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.NewDataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.NewDataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference <a name="DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbsystempatchhistoryentries"

dataocidatabasedbsystempatchhistoryentries.NewDataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId">PatchId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType">PatchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PatchId`<sup>Required</sup> <a name="PatchId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchId"></a>

```go
func PatchId() *string
```

- *Type:* *string

---

##### `PatchType`<sup>Required</sup> <a name="PatchType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.patchType"></a>

```go
func PatchType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntriesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbSystemPatchHistoryEntries.DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries">DataOciDatabaseDbSystemPatchHistoryEntriesPatchHistoryEntries</a>

---



