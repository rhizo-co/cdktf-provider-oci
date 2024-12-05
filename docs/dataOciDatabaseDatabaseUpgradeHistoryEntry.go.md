# `dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule <a name="`dataOciDatabaseDatabaseUpgradeHistoryEntry` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntry <a name="DataOciDatabaseDatabaseUpgradeHistoryEntry" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry oci_database_database_upgrade_history_entry}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

dataocidatabasedatabaseupgradehistoryentry.NewDataOciDatabaseDatabaseUpgradeHistoryEntry(scope Construct, id *string, config DataOciDatabaseDatabaseUpgradeHistoryEntryConfig) DataOciDatabaseDatabaseUpgradeHistoryEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig">DataOciDatabaseDatabaseUpgradeHistoryEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig">DataOciDatabaseDatabaseUpgradeHistoryEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

dataocidatabasedatabaseupgradehistoryentry.DataOciDatabaseDatabaseUpgradeHistoryEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

dataocidatabasedatabaseupgradehistoryentry.DataOciDatabaseDatabaseUpgradeHistoryEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

dataocidatabasedatabaseupgradehistoryentry.DataOciDatabaseDatabaseUpgradeHistoryEntry_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

dataocidatabasedatabaseupgradehistoryentry.DataOciDatabaseDatabaseUpgradeHistoryEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDatabaseUpgradeHistoryEntry resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDatabaseUpgradeHistoryEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDatabaseUpgradeHistoryEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDatabaseUpgradeHistoryEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options">Options</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source">Source</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId">SourceDbHomeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId">TargetDatabaseSoftwareImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId">TargetDbHomeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion">TargetDbVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded">TimeEnded</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted">TimeStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput">DatabaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput">UpgradeHistoryEntryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId">DatabaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId">UpgradeHistoryEntryId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Options`<sup>Required</sup> <a name="Options" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.options"></a>

```go
func Options() *string
```

- *Type:* *string

---

##### `Source`<sup>Required</sup> <a name="Source" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

##### `SourceDbHomeId`<sup>Required</sup> <a name="SourceDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.sourceDbHomeId"></a>

```go
func SourceDbHomeId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TargetDatabaseSoftwareImageId`<sup>Required</sup> <a name="TargetDatabaseSoftwareImageId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDatabaseSoftwareImageId"></a>

```go
func TargetDatabaseSoftwareImageId() *string
```

- *Type:* *string

---

##### `TargetDbHomeId`<sup>Required</sup> <a name="TargetDbHomeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbHomeId"></a>

```go
func TargetDbHomeId() *string
```

- *Type:* *string

---

##### `TargetDbVersion`<sup>Required</sup> <a name="TargetDbVersion" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.targetDbVersion"></a>

```go
func TargetDbVersion() *string
```

- *Type:* *string

---

##### `TimeEnded`<sup>Required</sup> <a name="TimeEnded" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeEnded"></a>

```go
func TimeEnded() *string
```

- *Type:* *string

---

##### `TimeStarted`<sup>Required</sup> <a name="TimeStarted" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.timeStarted"></a>

```go
func TimeStarted() *string
```

- *Type:* *string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseIdInput"></a>

```go
func DatabaseIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `UpgradeHistoryEntryIdInput`<sup>Optional</sup> <a name="UpgradeHistoryEntryIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryIdInput"></a>

```go
func UpgradeHistoryEntryIdInput() *string
```

- *Type:* *string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.databaseId"></a>

```go
func DatabaseId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpgradeHistoryEntryId`<sup>Required</sup> <a name="UpgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.upgradeHistoryEntryId"></a>

```go
func UpgradeHistoryEntryId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDatabaseUpgradeHistoryEntryConfig <a name="DataOciDatabaseDatabaseUpgradeHistoryEntryConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedatabaseupgradehistoryentry"

&dataocidatabasedatabaseupgradehistoryentry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DatabaseId: *string,
	UpgradeHistoryEntryId: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId">DatabaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId">UpgradeHistoryEntryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.databaseId"></a>

```go
DatabaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#database_id DataOciDatabaseDatabaseUpgradeHistoryEntry#database_id}.

---

##### `UpgradeHistoryEntryId`<sup>Required</sup> <a name="UpgradeHistoryEntryId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.upgradeHistoryEntryId"></a>

```go
UpgradeHistoryEntryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#upgrade_history_entry_id DataOciDatabaseDatabaseUpgradeHistoryEntry#upgrade_history_entry_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDatabaseUpgradeHistoryEntry.DataOciDatabaseDatabaseUpgradeHistoryEntryConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_database_upgrade_history_entry#id DataOciDatabaseDatabaseUpgradeHistoryEntry#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



