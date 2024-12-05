# `dataOciGenerativeAiAgentDataSources` Submodule <a name="`dataOciGenerativeAiAgentDataSources` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentDataSources <a name="DataOciGenerativeAiAgentDataSources" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources oci_generative_ai_agent_data_sources}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSources(scope Construct, id *string, config DataOciGenerativeAiAgentDataSourcesConfig) DataOciGenerativeAiAgentDataSources
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig">DataOciGenerativeAiAgentDataSourcesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig">DataOciGenerativeAiAgentDataSourcesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetKnowledgeBaseId">ResetKnowledgeBaseId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetId"></a>

```go
func ResetId()
```

##### `ResetKnowledgeBaseId` <a name="ResetKnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetKnowledgeBaseId"></a>

```go
func ResetKnowledgeBaseId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentDataSources resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSources_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSources_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSources_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSources_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentDataSources resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiAgentDataSources to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiAgentDataSources that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentDataSources to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dataSourceCollection">DataSourceCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList">DataOciGenerativeAiAgentDataSourcesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `DataSourceCollection`<sup>Required</sup> <a name="DataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.dataSourceCollection"></a>

```go
func DataSourceCollection() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList</a>

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filter"></a>

```go
func Filter() DataOciGenerativeAiAgentDataSourcesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList">DataOciGenerativeAiAgentDataSourcesFilterList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSources.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentDataSourcesConfig <a name="DataOciGenerativeAiAgentDataSourcesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DisplayName: *string,
	Filter: interface{},
	Id: *string,
	KnowledgeBaseId: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#compartment_id DataOciGenerativeAiAgentDataSources#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#display_name DataOciGenerativeAiAgentDataSources#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#id DataOciGenerativeAiAgentDataSources#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#knowledge_base_id DataOciGenerativeAiAgentDataSources#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#state DataOciGenerativeAiAgentDataSources#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#compartment_id DataOciGenerativeAiAgentDataSources#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#display_name DataOciGenerativeAiAgentDataSources#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#filter DataOciGenerativeAiAgentDataSources#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#id DataOciGenerativeAiAgentDataSources#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `KnowledgeBaseId`<sup>Optional</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#knowledge_base_id DataOciGenerativeAiAgentDataSources#knowledge_base_id}.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#state DataOciGenerativeAiAgentDataSources#state}.

---

### DataOciGenerativeAiAgentDataSourcesDataSourceCollection <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection {

}
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems {

}
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig {

}
```


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes {

}
```


### DataOciGenerativeAiAgentDataSourcesFilter <a name="DataOciGenerativeAiAgentDataSourcesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

&dataocigenerativeaiagentdatasources.DataOciGenerativeAiAgentDataSourcesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#name DataOciGenerativeAiAgentDataSources#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#values DataOciGenerativeAiAgentDataSources#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#regex DataOciGenerativeAiAgentDataSources#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#name DataOciGenerativeAiAgentDataSources#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#values DataOciGenerativeAiAgentDataSources#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_data_sources#regex DataOciGenerativeAiAgentDataSources#regex}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix">Prefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.prefix"></a>

```go
func Prefix() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixes</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.dataSourceConfigType">DataSourceConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.objectStoragePrefixes">ObjectStoragePrefixes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceConfigType`<sup>Required</sup> <a name="DataSourceConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.dataSourceConfigType"></a>

```go
func DataSourceConfigType() *string
```

- *Type:* *string

---

##### `ObjectStoragePrefixes`<sup>Required</sup> <a name="ObjectStoragePrefixes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.objectStoragePrefixes"></a>

```go
func ObjectStoragePrefixes() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigObjectStoragePrefixesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfig</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceConfig">DataSourceConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataSourceConfig`<sup>Required</sup> <a name="DataSourceConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.dataSourceConfig"></a>

```go
func DataSourceConfig() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsDataSourceConfigList</a>

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItems</a>

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference <a name="DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection">DataOciGenerativeAiAgentDataSourcesDataSourceCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList">DataOciGenerativeAiAgentDataSourcesDataSourceCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentDataSourcesDataSourceCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesDataSourceCollection">DataOciGenerativeAiAgentDataSourcesDataSourceCollection</a>

---


### DataOciGenerativeAiAgentDataSourcesFilterList <a name="DataOciGenerativeAiAgentDataSourcesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentDataSourcesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentDataSourcesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGenerativeAiAgentDataSourcesFilterOutputReference <a name="DataOciGenerativeAiAgentDataSourcesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentdatasources"

dataocigenerativeaiagentdatasources.NewDataOciGenerativeAiAgentDataSourcesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentDataSourcesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentDataSources.DataOciGenerativeAiAgentDataSourcesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



