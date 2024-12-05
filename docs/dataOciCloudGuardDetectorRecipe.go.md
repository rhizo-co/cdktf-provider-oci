# `dataOciCloudGuardDetectorRecipe` Submodule <a name="`dataOciCloudGuardDetectorRecipe` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardDetectorRecipe <a name="DataOciCloudGuardDetectorRecipe" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe oci_cloud_guard_detector_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipe(scope Construct, id *string, config DataOciCloudGuardDetectorRecipeConfig) DataOciCloudGuardDetectorRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig">DataOciCloudGuardDetectorRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig">DataOciCloudGuardDetectorRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipe_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipe_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardDetectorRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardDetectorRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardDetectorRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardDetectorRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.sourceDetectorRecipeId">SourceDetectorRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.targetIds">TargetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeIdInput">DetectorRecipeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeType"></a>

```go
func DetectorRecipeType() *string
```

- *Type:* *string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRules"></a>

```go
func DetectorRules() DataOciCloudGuardDetectorRecipeDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.effectiveDetectorRules"></a>

```go
func EffectiveDetectorRules() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList</a>

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SourceDetectorRecipeId`<sup>Required</sup> <a name="SourceDetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.sourceDetectorRecipeId"></a>

```go
func SourceDetectorRecipeId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetIds`<sup>Required</sup> <a name="TargetIds" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.targetIds"></a>

```go
func TargetIds() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `DetectorRecipeIdInput`<sup>Optional</sup> <a name="DetectorRecipeIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeIdInput"></a>

```go
func DetectorRecipeIdInput() *string
```

- *Type:* *string

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.detectorRecipeId"></a>

```go
func DetectorRecipeId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardDetectorRecipeConfig <a name="DataOciCloudGuardDetectorRecipeConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	DetectorRecipeId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeConfig.property.detectorRecipeId"></a>

```go
DetectorRecipeId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_detector_recipe#detector_recipe_id DataOciCloudGuardDetectorRecipe#detector_recipe_id}.

---

### DataOciCloudGuardDetectorRecipeDetectorRules <a name="DataOciCloudGuardDetectorRecipeDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRules {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRules <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings {

}
```


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

&dataocicloudguarddetectorrecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails">DataOciCloudGuardDetectorRecipeDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetails">DataOciCloudGuardDetectorRecipeDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeDetectorRulesList <a name="DataOciCloudGuardDetectorRecipeDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules">DataOciCloudGuardDetectorRecipeDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeDetectorRules">DataOciCloudGuardDetectorRecipeDetectorRules</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred">IsPreferred</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsPreferred`<sup>Required</sup> <a name="IsPreferred" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.isPreferred"></a>

```go
func IsPreferred() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRules</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsEntitiesMappingsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguarddetectorrecipe"

dataocicloudguarddetectorrecipe.NewDataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules">CandidateResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CandidateResponderRules`<sup>Required</sup> <a name="CandidateResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.candidateResponderRules"></a>

```go
func CandidateResponderRules() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesCandidateResponderRulesList</a>

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardDetectorRecipeEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardDetectorRecipe.DataOciCloudGuardDetectorRecipeEffectiveDetectorRules">DataOciCloudGuardDetectorRecipeEffectiveDetectorRules</a>

---



