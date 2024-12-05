# `dataOciOptimizerRecommendationStrategy` Submodule <a name="`dataOciOptimizerRecommendationStrategy` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOptimizerRecommendationStrategy <a name="DataOciOptimizerRecommendationStrategy" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy oci_optimizer_recommendation_strategy}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategy(scope Construct, id *string, config DataOciOptimizerRecommendationStrategyConfig) DataOciOptimizerRecommendationStrategy
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig">DataOciOptimizerRecommendationStrategyConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig">DataOciOptimizerRecommendationStrategyConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName">ResetRecommendationName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetId"></a>

```go
func ResetId()
```

##### `ResetName` <a name="ResetName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetName"></a>

```go
func ResetName()
```

##### `ResetRecommendationName` <a name="ResetRecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.resetRecommendationName"></a>

```go
func ResetRecommendationName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategy_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategy_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategy_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategy_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciOptimizerRecommendationStrategy resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciOptimizerRecommendationStrategy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciOptimizerRecommendationStrategy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOptimizerRecommendationStrategy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items">Items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput">CompartmentIdInSubtreeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput">RecommendationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName">RecommendationName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Items`<sup>Required</sup> <a name="Items" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.items"></a>

```go
func Items() DataOciOptimizerRecommendationStrategyItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList">DataOciOptimizerRecommendationStrategyItemsList</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtreeInput`<sup>Optional</sup> <a name="CompartmentIdInSubtreeInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtreeInput"></a>

```go
func CompartmentIdInSubtreeInput() interface{}
```

- *Type:* interface{}

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `RecommendationNameInput`<sup>Optional</sup> <a name="RecommendationNameInput" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationNameInput"></a>

```go
func RecommendationNameInput() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.compartmentIdInSubtree"></a>

```go
func CompartmentIdInSubtree() interface{}
```

- *Type:* interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `RecommendationName`<sup>Required</sup> <a name="RecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.recommendationName"></a>

```go
func RecommendationName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategy.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOptimizerRecommendationStrategyConfig <a name="DataOciOptimizerRecommendationStrategyConfig" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

&dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategyConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	CompartmentIdInSubtree: interface{},
	Id: *string,
	Name: *string,
	RecommendationName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree">CompartmentIdInSubtree</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName">RecommendationName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id DataOciOptimizerRecommendationStrategy#compartment_id}.

---

##### `CompartmentIdInSubtree`<sup>Required</sup> <a name="CompartmentIdInSubtree" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.compartmentIdInSubtree"></a>

```go
CompartmentIdInSubtree interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#compartment_id_in_subtree DataOciOptimizerRecommendationStrategy#compartment_id_in_subtree}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#id DataOciOptimizerRecommendationStrategy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#name DataOciOptimizerRecommendationStrategy#name}.

---

##### `RecommendationName`<sup>Optional</sup> <a name="RecommendationName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyConfig.property.recommendationName"></a>

```go
RecommendationName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/optimizer_recommendation_strategy#recommendation_name DataOciOptimizerRecommendationStrategy#recommendation_name}.

---

### DataOciOptimizerRecommendationStrategyItems <a name="DataOciOptimizerRecommendationStrategyItems" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

&dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategyItems {

}
```


### DataOciOptimizerRecommendationStrategyItemsStrategies <a name="DataOciOptimizerRecommendationStrategyItemsStrategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

&dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategyItemsStrategies {

}
```


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

&dataocioptimizerrecommendationstrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOptimizerRecommendationStrategyItemsList <a name="DataOciOptimizerRecommendationStrategyItemsList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerRecommendationStrategyItemsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get"></a>

```go
func Get(index *f64) DataOciOptimizerRecommendationStrategyItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOptimizerRecommendationStrategyItemsOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerRecommendationStrategyItemsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies">Strategies</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Strategies`<sup>Required</sup> <a name="Strategies" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.strategies"></a>

```go
func Strategies() DataOciOptimizerRecommendationStrategyItemsStrategiesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList">DataOciOptimizerRecommendationStrategyItemsStrategiesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOptimizerRecommendationStrategyItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItems">DataOciOptimizerRecommendationStrategyItems</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsStrategiesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerRecommendationStrategyItemsStrategiesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get"></a>

```go
func Get(index *f64) DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault">IsDefault</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition">ParametersDefinition</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName">StrategyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.isDefault"></a>

```go
func IsDefault() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `ParametersDefinition`<sup>Required</sup> <a name="ParametersDefinition" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.parametersDefinition"></a>

```go
func ParametersDefinition() DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList</a>

---

##### `StrategyName`<sup>Required</sup> <a name="StrategyName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.strategyName"></a>

```go
func StrategyName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOptimizerRecommendationStrategyItemsStrategies
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategies">DataOciOptimizerRecommendationStrategyItemsStrategies</a>

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get"></a>

```go
func Get(index *f64) DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference <a name="DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocioptimizerrecommendationstrategy"

dataocioptimizerrecommendationstrategy.NewDataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue">DefaultValue</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired">IsRequired</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues">PossibleValues</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.defaultValue"></a>

```go
func DefaultValue() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IsRequired`<sup>Required</sup> <a name="IsRequired" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.isRequired"></a>

```go
func IsRequired() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PossibleValues`<sup>Required</sup> <a name="PossibleValues" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.possibleValues"></a>

```go
func PossibleValues() *[]*string
```

- *Type:* *[]*string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinitionOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOptimizerRecommendationStrategy.DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition">DataOciOptimizerRecommendationStrategyItemsStrategiesParametersDefinition</a>

---



