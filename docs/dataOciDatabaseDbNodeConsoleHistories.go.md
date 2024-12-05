# `dataOciDatabaseDbNodeConsoleHistories` Submodule <a name="`dataOciDatabaseDbNodeConsoleHistories` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDatabaseDbNodeConsoleHistories <a name="DataOciDatabaseDbNodeConsoleHistories" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories oci_database_db_node_console_histories}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistories(scope Construct, id *string, config DataOciDatabaseDbNodeConsoleHistoriesConfig) DataOciDatabaseDbNodeConsoleHistories
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig">DataOciDatabaseDbNodeConsoleHistoriesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig">DataOciDatabaseDbNodeConsoleHistoriesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistories_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistories_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistories_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistories_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciDatabaseDbNodeConsoleHistories resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciDatabaseDbNodeConsoleHistories to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciDatabaseDbNodeConsoleHistories that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDatabaseDbNodeConsoleHistories to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection">ConsoleHistoryCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput">DbNodeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId">DbNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `ConsoleHistoryCollection`<sup>Required</sup> <a name="ConsoleHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.consoleHistoryCollection"></a>

```go
func ConsoleHistoryCollection() DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filter"></a>

```go
func Filter() DataOciDatabaseDbNodeConsoleHistoriesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList">DataOciDatabaseDbNodeConsoleHistoriesFilterList</a>

---

##### `DbNodeIdInput`<sup>Optional</sup> <a name="DbNodeIdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeIdInput"></a>

```go
func DbNodeIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.dbNodeId"></a>

```go
func DbNodeId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistories.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConfig <a name="DataOciDatabaseDbNodeConsoleHistoriesConfig" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

&dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistoriesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DbNodeId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId">DbNodeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.dbNodeId"></a>

```go
DbNodeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#db_node_id DataOciDatabaseDbNodeConsoleHistories#db_node_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#display_name DataOciDatabaseDbNodeConsoleHistories#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#filter DataOciDatabaseDbNodeConsoleHistories#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#id DataOciDatabaseDbNodeConsoleHistories#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#state DataOciDatabaseDbNodeConsoleHistories#state}.

---

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

&dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection {

}
```


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

&dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems {

}
```


### DataOciDatabaseDbNodeConsoleHistoriesFilter <a name="DataOciDatabaseDbNodeConsoleHistoriesFilter" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

&dataocidatabasedbnodeconsolehistories.DataOciDatabaseDbNodeConsoleHistoriesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#name DataOciDatabaseDbNodeConsoleHistories#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#values DataOciDatabaseDbNodeConsoleHistories#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/database_db_node_console_histories#regex DataOciDatabaseDbNodeConsoleHistories#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId">DbNodeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DbNodeId`<sup>Required</sup> <a name="DbNodeId" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.dbNodeId"></a>

```go
func DbNodeId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItems</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.items"></a>

```go
func Items() DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection">DataOciDatabaseDbNodeConsoleHistoriesConsoleHistoryCollection</a>

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterList <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterList" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciDatabaseDbNodeConsoleHistoriesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get"></a>

```go
func Get(index *f64) DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference <a name="DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocidatabasedbnodeconsolehistories"

dataocidatabasedbnodeconsolehistories.NewDataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciDatabaseDbNodeConsoleHistories.DataOciDatabaseDbNodeConsoleHistoriesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



