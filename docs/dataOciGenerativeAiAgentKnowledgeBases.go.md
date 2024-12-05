# `dataOciGenerativeAiAgentKnowledgeBases` Submodule <a name="`dataOciGenerativeAiAgentKnowledgeBases` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiAgentKnowledgeBases <a name="DataOciGenerativeAiAgentKnowledgeBases" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases oci_generative_ai_agent_knowledge_bases}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBases(scope Construct, id *string, config DataOciGenerativeAiAgentKnowledgeBasesConfig) DataOciGenerativeAiAgentKnowledgeBases
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig">DataOciGenerativeAiAgentKnowledgeBasesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter">PutFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId">ResetCompartmentId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter">ResetFilter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState">ResetState</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `PutFilter` <a name="PutFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter"></a>

```go
func PutFilter(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.putFilter.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCompartmentId` <a name="ResetCompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetCompartmentId"></a>

```go
func ResetCompartmentId()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFilter` <a name="ResetFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetFilter"></a>

```go
func ResetFilter()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.resetState"></a>

```go
func ResetState()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBases_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBases_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBases_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBases_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiAgentKnowledgeBases resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiAgentKnowledgeBases to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiAgentKnowledgeBases that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiAgentKnowledgeBases to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter">Filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection">KnowledgeBaseCollection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput">FilterInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Filter`<sup>Required</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filter"></a>

```go
func Filter() DataOciGenerativeAiAgentKnowledgeBasesFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList">DataOciGenerativeAiAgentKnowledgeBasesFilterList</a>

---

##### `KnowledgeBaseCollection`<sup>Required</sup> <a name="KnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.knowledgeBaseCollection"></a>

```go
func KnowledgeBaseCollection() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FilterInput`<sup>Optional</sup> <a name="FilterInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.filterInput"></a>

```go
func FilterInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBases.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiAgentKnowledgeBasesConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesConfig {
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
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter">Filter</a></code> | <code>interface{}</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Optional</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#compartment_id DataOciGenerativeAiAgentKnowledgeBases#compartment_id}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#display_name DataOciGenerativeAiAgentKnowledgeBases#display_name}.

---

##### `Filter`<sup>Optional</sup> <a name="Filter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.filter"></a>

```go
Filter interface{}
```

- *Type:* interface{}

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#filter DataOciGenerativeAiAgentKnowledgeBases#filter}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#id DataOciGenerativeAiAgentKnowledgeBases#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#state DataOciGenerativeAiAgentKnowledgeBases#state}.

---

### DataOciGenerativeAiAgentKnowledgeBasesFilter <a name="DataOciGenerativeAiAgentKnowledgeBasesFilter" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesFilter {
	Name: *string,
	Values: *[]*string,
	Regex: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex">Regex</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#name DataOciGenerativeAiAgentKnowledgeBases#name}.

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#values DataOciGenerativeAiAgentKnowledgeBases#values}.

---

##### `Regex`<sup>Optional</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilter.property.regex"></a>

```go
Regex interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_agent_knowledge_bases#regex DataOciGenerativeAiAgentKnowledgeBases#regex}.

---

### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema {

}
```


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

&dataocigenerativeaiagentknowledgebases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiAgentKnowledgeBasesFilterList <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesFilterList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesFilterList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex">ResetRegex</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegex` <a name="ResetRegex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.resetRegex"></a>

```go
func ResetRegex()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput">RegexInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex">Regex</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RegexInput`<sup>Optional</sup> <a name="RegexInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regexInput"></a>

```go
func RegexInput() interface{}
```

- *Type:* interface{}

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.regex"></a>

```go
func Regex() interface{}
```

- *Type:* interface{}

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesFilterOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId">ConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType">ConnectionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionId`<sup>Required</sup> <a name="ConnectionId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionId"></a>

```go
func ConnectionId() *string
```

- *Type:* *string

---

##### `ConnectionType`<sup>Required</sup> <a name="ConnectionType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.connectionType"></a>

```go
func ConnectionType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnection</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctions</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema">Schema</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.schema"></a>

```go
func Schema() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexes</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey">BodyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey">EmbeddingBodyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey">TitleKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey">UrlKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyKey`<sup>Required</sup> <a name="BodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.bodyKey"></a>

```go
func BodyKey() *string
```

- *Type:* *string

---

##### `EmbeddingBodyKey`<sup>Required</sup> <a name="EmbeddingBodyKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.embeddingBodyKey"></a>

```go
func EmbeddingBodyKey() *string
```

- *Type:* *string

---

##### `TitleKey`<sup>Required</sup> <a name="TitleKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.titleKey"></a>

```go
func TitleKey() *string
```

- *Type:* *string

---

##### `UrlKey`<sup>Required</sup> <a name="UrlKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.urlKey"></a>

```go
func UrlKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchemaOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesSchema</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection">DatabaseConnection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions">DatabaseFunctions</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType">IndexConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes">Indexes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail">SecretDetail</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch">ShouldEnableHybridSearch</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `DatabaseConnection`<sup>Required</sup> <a name="DatabaseConnection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseConnection"></a>

```go
func DatabaseConnection() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseConnectionList</a>

---

##### `DatabaseFunctions`<sup>Required</sup> <a name="DatabaseFunctions" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.databaseFunctions"></a>

```go
func DatabaseFunctions() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigDatabaseFunctionsList</a>

---

##### `IndexConfigType`<sup>Required</sup> <a name="IndexConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexConfigType"></a>

```go
func IndexConfigType() *string
```

- *Type:* *string

---

##### `Indexes`<sup>Required</sup> <a name="Indexes" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.indexes"></a>

```go
func Indexes() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigIndexesList</a>

---

##### `SecretDetail`<sup>Required</sup> <a name="SecretDetail" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.secretDetail"></a>

```go
func SecretDetail() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList</a>

---

##### `ShouldEnableHybridSearch`<sup>Required</sup> <a name="ShouldEnableHybridSearch" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.shouldEnableHybridSearch"></a>

```go
func ShouldEnableHybridSearch() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfig</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl">IdcsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl">ScopeUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId">VaultSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `IdcsUrl`<sup>Required</sup> <a name="IdcsUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.idcsUrl"></a>

```go
func IdcsUrl() *string
```

- *Type:* *string

---

##### `ScopeUrl`<sup>Required</sup> <a name="ScopeUrl" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.scopeUrl"></a>

```go
func ScopeUrl() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `VaultSecretId`<sup>Required</sup> <a name="VaultSecretId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.vaultSecretId"></a>

```go
func VaultSecretId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetailOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigSecretDetail</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig">IndexConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IndexConfig`<sup>Required</sup> <a name="IndexConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.indexConfig"></a>

```go
func IndexConfig() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsIndexConfigList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItems</a>

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference <a name="DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaiagentknowledgebases"

dataocigenerativeaiagentknowledgebases.NewDataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.items"></a>

```go
func Items() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionItemsList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollectionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiAgentKnowledgeBases.DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection">DataOciGenerativeAiAgentKnowledgeBasesKnowledgeBaseCollection</a>

---



