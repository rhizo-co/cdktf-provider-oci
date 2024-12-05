# `dataOciGenerativeAiAgentKnowledgeBase` Submodule <a name="`dataOciGenerativeAiAgentKnowledgeBase` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentKnowledgeBase <a name="DataOciGenerativeAiAgentKnowledgeBase" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_base oci_generative_ai_agent_knowledge_base}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBase(scope Construct, id *string, config DataOciGenerativeAiAgentKnowledgeBaseConfig) DataOciGenerativeAiAgentKnowledgeBase
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig">DataOciGenerativeAiAgentKnowledgeBaseConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig">DataOciGenerativeAiAgentKnowledgeBaseConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBase resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBase_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBase_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBase_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBase_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBase resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBase to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiAgentKnowledgeBase that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_base#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBase to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.indexConfig">IndexConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.indexConfig"></a>

```go
func IndexConfig() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBase.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentKnowledgeBaseConfig <a name="DataOciGenerativeAiAgentKnowledgeBaseConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	KnowledgeBaseId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_base#knowledge_base_id DataOciGenerativeAiAgentKnowledgeBase#knowledge_base_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseConfig.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_base#knowledge_base_id DataOciGenerativeAiAgentKnowledgeBase#knowledge_base_id}.

---

### DataOciGenerativeAiAgentKnowledgeBaseIndexConfig <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfig {

}
```


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection {

}
```


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions {

}
```


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes {

}
```


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema {

}
```


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

&dataocigenerativeaiagentknowledgebase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnection</a>

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctions</a>

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.schema">Schema</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.schema"></a>

```go
func Schema() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexes</a>

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.bodyKey">BodyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey">EmbeddingBodyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.titleKey">TitleKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.urlKey">UrlKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyKey`<sup>Required</sup> <a name="BodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.bodyKey"></a>

```go
func BodyKey() *string
```

- *Type:* *string

---

##### `EmbeddingBodyKey`<sup>Required</sup> <a name="EmbeddingBodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey"></a>

```go
func EmbeddingBodyKey() *string
```

- *Type:* *string

---

##### `TitleKey`<sup>Required</sup> <a name="TitleKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.titleKey"></a>

```go
func TitleKey() *string
```

- *Type:* *string

---

##### `UrlKey`<sup>Required</sup> <a name="UrlKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.urlKey"></a>

```go
func UrlKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesSchema</a>

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.databaseConnection">DatabaseConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.databaseFunctions">DatabaseFunctions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.indexConfigType">IndexConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.secretDetail">SecretDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.shouldEnableHybridSearch">ShouldEnableHybridSearch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfig">DataOciGenerativeAiAgentKnowledgeBaseIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DatabaseConnection`<sup>Required</sup> <a name="DatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.databaseConnection"></a>

```go
func DatabaseConnection() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseConnectionList</a>

---

##### `DatabaseFunctions`<sup>Required</sup> <a name="DatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.databaseFunctions"></a>

```go
func DatabaseFunctions() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigDatabaseFunctionsList</a>

---

##### `IndexConfigType`<sup>Required</sup> <a name="IndexConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.indexConfigType"></a>

```go
func IndexConfigType() *string
```

- *Type:* *string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.indexes"></a>

```go
func Indexes() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigIndexesList</a>

---

##### `SecretDetail`<sup>Required</sup> <a name="SecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.secretDetail"></a>

```go
func SecretDetail() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList</a>

---

##### `ShouldEnableHybridSearch`<sup>Required</sup> <a name="ShouldEnableHybridSearch" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.shouldEnableHybridSearch"></a>

```go
func ShouldEnableHybridSearch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfig">DataOciGenerativeAiAgentKnowledgeBaseIndexConfig</a>

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebase"

dataocigenerativeaiagentknowledgebase.NewDataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.idcsUrl">IdcsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.scopeUrl">ScopeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IdcsUrl`<sup>Required</sup> <a name="IdcsUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.idcsUrl"></a>

```go
func IdcsUrl() *string
```

- *Type:* *string

---

##### `ScopeUrl`<sup>Required</sup> <a name="ScopeUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.scopeUrl"></a>

```go
func ScopeUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBase.DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBaseIndexConfigSecretDetail</a>

---



