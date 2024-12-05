# `dataOciGenerativeAiModel` Submodule <a name="`dataOciGenerativeAiModel` Submodule" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciGenerativeAiModel <a name="DataOciGenerativeAiModel" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_model oci_generative_ai_model}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModel(scope Construct, id *string, config DataOciGenerativeAiModelConfig) DataOciGenerativeAiModel
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig">DataOciGenerativeAiModelConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig">DataOciGenerativeAiModelConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciGenerativeAiModel resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.DataOciGenerativeAiModel_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.DataOciGenerativeAiModel_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.DataOciGenerativeAiModel_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.DataOciGenerativeAiModel_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciGenerativeAiModel resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciGenerativeAiModel to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciGenerativeAiModel that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_model#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciGenerativeAiModel to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.baseModelId">BaseModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.fineTuneDetails">FineTuneDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList">DataOciGenerativeAiModelFineTuneDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.isLongTermSupported">IsLongTermSupported</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelMetrics">ModelMetrics</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList">DataOciGenerativeAiModelModelMetricsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeDeprecated">TimeDeprecated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.vendor">Vendor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelIdInput">ModelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelId">ModelId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `BaseModelId`<sup>Required</sup> <a name="BaseModelId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.baseModelId"></a>

```go
func BaseModelId() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FineTuneDetails`<sup>Required</sup> <a name="FineTuneDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.fineTuneDetails"></a>

```go
func FineTuneDetails() DataOciGenerativeAiModelFineTuneDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList">DataOciGenerativeAiModelFineTuneDetailsList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsLongTermSupported`<sup>Required</sup> <a name="IsLongTermSupported" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.isLongTermSupported"></a>

```go
func IsLongTermSupported() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ModelMetrics`<sup>Required</sup> <a name="ModelMetrics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelMetrics"></a>

```go
func ModelMetrics() DataOciGenerativeAiModelModelMetricsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList">DataOciGenerativeAiModelModelMetricsList</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeDeprecated`<sup>Required</sup> <a name="TimeDeprecated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeDeprecated"></a>

```go
func TimeDeprecated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `Vendor`<sup>Required</sup> <a name="Vendor" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.vendor"></a>

```go
func Vendor() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `ModelIdInput`<sup>Optional</sup> <a name="ModelIdInput" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelIdInput"></a>

```go
func ModelIdInput() *string
```

- *Type:* *string

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.modelId"></a>

```go
func ModelId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModel.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciGenerativeAiModelConfig <a name="DataOciGenerativeAiModelConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

&dataocigenerativeaimodel.DataOciGenerativeAiModelConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ModelId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.modelId">ModelId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_model#model_id DataOciGenerativeAiModel#model_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ModelId`<sup>Required</sup> <a name="ModelId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelConfig.property.modelId"></a>

```go
ModelId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/generative_ai_model#model_id DataOciGenerativeAiModel#model_id}.

---

### DataOciGenerativeAiModelFineTuneDetails <a name="DataOciGenerativeAiModelFineTuneDetails" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

&dataocigenerativeaimodel.DataOciGenerativeAiModelFineTuneDetails {

}
```


### DataOciGenerativeAiModelFineTuneDetailsTrainingConfig <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

&dataocigenerativeaimodel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfig {

}
```


### DataOciGenerativeAiModelFineTuneDetailsTrainingDataset <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingDataset" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDataset"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDataset.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

&dataocigenerativeaimodel.DataOciGenerativeAiModelFineTuneDetailsTrainingDataset {

}
```


### DataOciGenerativeAiModelModelMetrics <a name="DataOciGenerativeAiModelModelMetrics" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetrics"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetrics.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

&dataocigenerativeaimodel.DataOciGenerativeAiModelModelMetrics {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciGenerativeAiModelFineTuneDetailsList <a name="DataOciGenerativeAiModelFineTuneDetailsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiModelFineTuneDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiModelFineTuneDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiModelFineTuneDetailsOutputReference <a name="DataOciGenerativeAiModelFineTuneDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiModelFineTuneDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId">DedicatedAiClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig">TrainingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList">DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset">TrainingDataset</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList">DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetails">DataOciGenerativeAiModelFineTuneDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DedicatedAiClusterId`<sup>Required</sup> <a name="DedicatedAiClusterId" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.dedicatedAiClusterId"></a>

```go
func DedicatedAiClusterId() *string
```

- *Type:* *string

---

##### `TrainingConfig`<sup>Required</sup> <a name="TrainingConfig" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.trainingConfig"></a>

```go
func TrainingConfig() DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList">DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList</a>

---

##### `TrainingDataset`<sup>Required</sup> <a name="TrainingDataset" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.trainingDataset"></a>

```go
func TrainingDataset() DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList">DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiModelFineTuneDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetails">DataOciGenerativeAiModelFineTuneDetails</a>

---


### DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsTrainingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience">EarlyStoppingPatience</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold">EarlyStoppingThreshold</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate">LearningRate</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps">LogModelMetricsIntervalInSteps</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha">LoraAlpha</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout">LoraDropout</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR">LoraR</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers">NumOfLastLayers</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs">TotalTrainingEpochs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize">TrainingBatchSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType">TrainingConfigType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfig">DataOciGenerativeAiModelFineTuneDetailsTrainingConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EarlyStoppingPatience`<sup>Required</sup> <a name="EarlyStoppingPatience" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingPatience"></a>

```go
func EarlyStoppingPatience() *f64
```

- *Type:* *f64

---

##### `EarlyStoppingThreshold`<sup>Required</sup> <a name="EarlyStoppingThreshold" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.earlyStoppingThreshold"></a>

```go
func EarlyStoppingThreshold() *f64
```

- *Type:* *f64

---

##### `LearningRate`<sup>Required</sup> <a name="LearningRate" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.learningRate"></a>

```go
func LearningRate() *f64
```

- *Type:* *f64

---

##### `LogModelMetricsIntervalInSteps`<sup>Required</sup> <a name="LogModelMetricsIntervalInSteps" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.logModelMetricsIntervalInSteps"></a>

```go
func LogModelMetricsIntervalInSteps() *f64
```

- *Type:* *f64

---

##### `LoraAlpha`<sup>Required</sup> <a name="LoraAlpha" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraAlpha"></a>

```go
func LoraAlpha() *f64
```

- *Type:* *f64

---

##### `LoraDropout`<sup>Required</sup> <a name="LoraDropout" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraDropout"></a>

```go
func LoraDropout() *f64
```

- *Type:* *f64

---

##### `LoraR`<sup>Required</sup> <a name="LoraR" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.loraR"></a>

```go
func LoraR() *f64
```

- *Type:* *f64

---

##### `NumOfLastLayers`<sup>Required</sup> <a name="NumOfLastLayers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.numOfLastLayers"></a>

```go
func NumOfLastLayers() *f64
```

- *Type:* *f64

---

##### `TotalTrainingEpochs`<sup>Required</sup> <a name="TotalTrainingEpochs" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.totalTrainingEpochs"></a>

```go
func TotalTrainingEpochs() *f64
```

- *Type:* *f64

---

##### `TrainingBatchSize`<sup>Required</sup> <a name="TrainingBatchSize" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingBatchSize"></a>

```go
func TrainingBatchSize() *f64
```

- *Type:* *f64

---

##### `TrainingConfigType`<sup>Required</sup> <a name="TrainingConfigType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.trainingConfigType"></a>

```go
func TrainingConfigType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiModelFineTuneDetailsTrainingConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingConfig">DataOciGenerativeAiModelFineTuneDetailsTrainingConfig</a>

---


### DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference <a name="DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket">Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType">DatasetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace">Namespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object">Object</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDataset">DataOciGenerativeAiModelFineTuneDetailsTrainingDataset</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.bucket"></a>

```go
func Bucket() *string
```

- *Type:* *string

---

##### `DatasetType`<sup>Required</sup> <a name="DatasetType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.datasetType"></a>

```go
func DatasetType() *string
```

- *Type:* *string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.namespace"></a>

```go
func Namespace() *string
```

- *Type:* *string

---

##### `Object`<sup>Required</sup> <a name="Object" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.object"></a>

```go
func Object() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDatasetOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiModelFineTuneDetailsTrainingDataset
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelFineTuneDetailsTrainingDataset">DataOciGenerativeAiModelFineTuneDetailsTrainingDataset</a>

---


### DataOciGenerativeAiModelModelMetricsList <a name="DataOciGenerativeAiModelModelMetricsList" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelModelMetricsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciGenerativeAiModelModelMetricsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.get"></a>

```go
func Get(index *f64) DataOciGenerativeAiModelModelMetricsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciGenerativeAiModelModelMetricsOutputReference <a name="DataOciGenerativeAiModelModelMetricsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocigenerativeaimodel"

dataocigenerativeaimodel.NewDataOciGenerativeAiModelModelMetricsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciGenerativeAiModelModelMetricsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.finalAccuracy">FinalAccuracy</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.finalLoss">FinalLoss</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.modelMetricsType">ModelMetricsType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetrics">DataOciGenerativeAiModelModelMetrics</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FinalAccuracy`<sup>Required</sup> <a name="FinalAccuracy" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.finalAccuracy"></a>

```go
func FinalAccuracy() *f64
```

- *Type:* *f64

---

##### `FinalLoss`<sup>Required</sup> <a name="FinalLoss" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.finalLoss"></a>

```go
func FinalLoss() *f64
```

- *Type:* *f64

---

##### `ModelMetricsType`<sup>Required</sup> <a name="ModelMetricsType" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.modelMetricsType"></a>

```go
func ModelMetricsType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetricsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciGenerativeAiModelModelMetrics
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciGenerativeAiModel.DataOciGenerativeAiModelModelMetrics">DataOciGenerativeAiModelModelMetrics</a>

---



