# `dataOciCoreConsoleHistoryData` Submodule <a name="`dataOciCoreConsoleHistoryData` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCoreConsoleHistoryData <a name="DataOciCoreConsoleHistoryData" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data oci_core_console_history_data}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

dataocicoreconsolehistorydata.NewDataOciCoreConsoleHistoryData(scope Construct, id *string, config DataOciCoreConsoleHistoryDataConfig) DataOciCoreConsoleHistoryData
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig">DataOciCoreConsoleHistoryDataConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig">DataOciCoreConsoleHistoryDataConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetLength">ResetLength</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetOffset">ResetOffset</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetId"></a>

```go
func ResetId()
```

##### `ResetLength` <a name="ResetLength" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetLength"></a>

```go
func ResetLength()
```

##### `ResetOffset` <a name="ResetOffset" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.resetOffset"></a>

```go
func ResetOffset()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCoreConsoleHistoryData resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

dataocicoreconsolehistorydata.DataOciCoreConsoleHistoryData_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

dataocicoreconsolehistorydata.DataOciCoreConsoleHistoryData_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

dataocicoreconsolehistorydata.DataOciCoreConsoleHistoryData_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

dataocicoreconsolehistorydata.DataOciCoreConsoleHistoryData_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCoreConsoleHistoryData resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCoreConsoleHistoryData to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCoreConsoleHistoryData that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCoreConsoleHistoryData to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.consoleHistoryIdInput">ConsoleHistoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.lengthInput">LengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.offsetInput">OffsetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.consoleHistoryId">ConsoleHistoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.length">Length</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.offset">Offset</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Data`<sup>Required</sup> <a name="Data" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `ConsoleHistoryIdInput`<sup>Optional</sup> <a name="ConsoleHistoryIdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.consoleHistoryIdInput"></a>

```go
func ConsoleHistoryIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `LengthInput`<sup>Optional</sup> <a name="LengthInput" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.lengthInput"></a>

```go
func LengthInput() *f64
```

- *Type:* *f64

---

##### `OffsetInput`<sup>Optional</sup> <a name="OffsetInput" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.offsetInput"></a>

```go
func OffsetInput() *f64
```

- *Type:* *f64

---

##### `ConsoleHistoryId`<sup>Required</sup> <a name="ConsoleHistoryId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.consoleHistoryId"></a>

```go
func ConsoleHistoryId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Length`<sup>Required</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.length"></a>

```go
func Length() *f64
```

- *Type:* *f64

---

##### `Offset`<sup>Required</sup> <a name="Offset" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.offset"></a>

```go
func Offset() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryData.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCoreConsoleHistoryDataConfig <a name="DataOciCoreConsoleHistoryDataConfig" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicoreconsolehistorydata"

&dataocicoreconsolehistorydata.DataOciCoreConsoleHistoryDataConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ConsoleHistoryId: *string,
	Id: *string,
	Length: *f64,
	Offset: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.consoleHistoryId">ConsoleHistoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#console_history_id DataOciCoreConsoleHistoryData#console_history_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#id DataOciCoreConsoleHistoryData#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.length">Length</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#length DataOciCoreConsoleHistoryData#length}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.offset">Offset</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#offset DataOciCoreConsoleHistoryData#offset}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConsoleHistoryId`<sup>Required</sup> <a name="ConsoleHistoryId" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.consoleHistoryId"></a>

```go
ConsoleHistoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#console_history_id DataOciCoreConsoleHistoryData#console_history_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#id DataOciCoreConsoleHistoryData#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Length`<sup>Optional</sup> <a name="Length" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.length"></a>

```go
Length *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#length DataOciCoreConsoleHistoryData#length}.

---

##### `Offset`<sup>Optional</sup> <a name="Offset" id="rhizo-co-terraform-provider-oci.dataOciCoreConsoleHistoryData.DataOciCoreConsoleHistoryDataConfig.property.offset"></a>

```go
Offset *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/core_console_history_data#offset DataOciCoreConsoleHistoryData#offset}.

---



