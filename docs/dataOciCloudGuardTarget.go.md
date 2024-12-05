# `dataOciCloudGuardTarget` Submodule <a name="`dataOciCloudGuardTarget` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCloudGuardTarget <a name="DataOciCloudGuardTarget" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target oci_cloud_guard_target}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTarget(scope Construct, id *string, config DataOciCloudGuardTargetConfig) DataOciCloudGuardTarget
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig">DataOciCloudGuardTargetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig">DataOciCloudGuardTargetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataOciCloudGuardTarget resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.DataOciCloudGuardTarget_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.DataOciCloudGuardTarget_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.DataOciCloudGuardTarget_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.DataOciCloudGuardTarget_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataOciCloudGuardTarget resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataOciCloudGuardTarget to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataOciCloudGuardTarget that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCloudGuardTarget to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.inheritedByCompartments">InheritedByCompartments</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.recipeCount">RecipeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetails">TargetDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList">DataOciCloudGuardTargetTargetDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetectorRecipes">TargetDetectorRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList">DataOciCloudGuardTargetTargetDetectorRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceId">TargetResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResponderRecipes">TargetResponderRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList">DataOciCloudGuardTargetTargetResponderRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetIdInput">TargetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetId">TargetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InheritedByCompartments`<sup>Required</sup> <a name="InheritedByCompartments" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.inheritedByCompartments"></a>

```go
func InheritedByCompartments() *[]*string
```

- *Type:* *[]*string

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `RecipeCount`<sup>Required</sup> <a name="RecipeCount" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.recipeCount"></a>

```go
func RecipeCount() *f64
```

- *Type:* *f64

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetDetails`<sup>Required</sup> <a name="TargetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetails"></a>

```go
func TargetDetails() DataOciCloudGuardTargetTargetDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList">DataOciCloudGuardTargetTargetDetailsList</a>

---

##### `TargetDetectorRecipes`<sup>Required</sup> <a name="TargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetDetectorRecipes"></a>

```go
func TargetDetectorRecipes() DataOciCloudGuardTargetTargetDetectorRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList">DataOciCloudGuardTargetTargetDetectorRecipesList</a>

---

##### `TargetResourceId`<sup>Required</sup> <a name="TargetResourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceId"></a>

```go
func TargetResourceId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `TargetResponderRecipes`<sup>Required</sup> <a name="TargetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetResponderRecipes"></a>

```go
func TargetResponderRecipes() DataOciCloudGuardTargetTargetResponderRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList">DataOciCloudGuardTargetTargetResponderRecipesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `TargetIdInput`<sup>Optional</sup> <a name="TargetIdInput" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetIdInput"></a>

```go
func TargetIdInput() *string
```

- *Type:* *string

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.targetId"></a>

```go
func TargetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTarget.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCloudGuardTargetConfig <a name="DataOciCloudGuardTargetConfig" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	TargetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.targetId">TargetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#target_id DataOciCloudGuardTarget#target_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TargetId`<sup>Required</sup> <a name="TargetId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetConfig.property.targetId"></a>

```go
TargetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/cloud_guard_target#target_id DataOciCloudGuardTarget#target_id}.

---

### DataOciCloudGuardTargetTargetDetails <a name="DataOciCloudGuardTargetTargetDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetails {

}
```


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipes <a name="DataOciCloudGuardTargetTargetDetectorRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipes {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues {

}
```


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings {

}
```


### DataOciCloudGuardTargetTargetResponderRecipes <a name="DataOciCloudGuardTargetTargetResponderRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipes {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRules <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails {

}
```


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

&dataocicloudguardtarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCloudGuardTargetTargetDetailsList <a name="DataOciCloudGuardTargetTargetDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName">SecurityZoneDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneId">SecurityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetResourceType">TargetResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes">TargetSecurityZoneRecipes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails">DataOciCloudGuardTargetTargetDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SecurityZoneDisplayName`<sup>Required</sup> <a name="SecurityZoneDisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneDisplayName"></a>

```go
func SecurityZoneDisplayName() *string
```

- *Type:* *string

---

##### `SecurityZoneId`<sup>Required</sup> <a name="SecurityZoneId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.securityZoneId"></a>

```go
func SecurityZoneId() *string
```

- *Type:* *string

---

##### `TargetResourceType`<sup>Required</sup> <a name="TargetResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetResourceType"></a>

```go
func TargetResourceType() *string
```

- *Type:* *string

---

##### `TargetSecurityZoneRecipes`<sup>Required</sup> <a name="TargetSecurityZoneRecipes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.targetSecurityZoneRecipes"></a>

```go
func TargetSecurityZoneRecipes() DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetails">DataOciCloudGuardTargetTargetDetails</a>

---


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference <a name="DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies">SecurityPolicies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SecurityPolicies`<sup>Required</sup> <a name="SecurityPolicies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.securityPolicies"></a>

```go
func SecurityPolicies() *[]*string
```

- *Type:* *[]*string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes">DataOciCloudGuardTargetTargetDetailsTargetSecurityZoneRecipes</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups">ConditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionGroups`<sup>Required</sup> <a name="ConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```go
func ConditionGroups() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConditionGroupsList</a>

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsConfigurationsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRules</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroups</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType">DataType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values">Values</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `DataType`<sup>Required</sup> <a name="DataType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.dataType"></a>

```go
func DataType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.values"></a>

```go
func Values() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType">ListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType">ManagedListType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ListType`<sup>Required</sup> <a name="ListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.listType"></a>

```go
func ListType() *string
```

- *Type:* *string

---

##### `ManagedListType`<sup>Required</sup> <a name="ManagedListType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.managedListType"></a>

```go
func ManagedListType() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValuesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsValues</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups">ConditionGroups</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed">IsConfigurationAllowed</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels">Labels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel">RiskLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConditionGroups`<sup>Required</sup> <a name="ConditionGroups" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.conditionGroups"></a>

```go
func ConditionGroups() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConditionGroupsList</a>

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsConfigurationsList</a>

---

##### `IsConfigurationAllowed`<sup>Required</sup> <a name="IsConfigurationAllowed" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isConfigurationAllowed"></a>

```go
func IsConfigurationAllowed() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Labels`<sup>Required</sup> <a name="Labels" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.labels"></a>

```go
func Labels() *[]*string
```

- *Type:* *[]*string

---

##### `RiskLevel`<sup>Required</sup> <a name="RiskLevel" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.riskLevel"></a>

```go
func RiskLevel() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetails</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType">EntityType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField">QueryField</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntityType`<sup>Required</sup> <a name="EntityType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.entityType"></a>

```go
func EntityType() *string
```

- *Type:* *string

---

##### `QueryField`<sup>Required</sup> <a name="QueryField" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.queryField"></a>

```go
func QueryField() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappings</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId">DataSourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId">DetectorRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings">EntitiesMappings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes">ManagedListTypes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation">Recommendation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType">ServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DataSourceId`<sup>Required</sup> <a name="DataSourceId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.dataSourceId"></a>

```go
func DataSourceId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesDetailsList</a>

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRuleId`<sup>Required</sup> <a name="DetectorRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.detectorRuleId"></a>

```go
func DetectorRuleId() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EntitiesMappings`<sup>Required</sup> <a name="EntitiesMappings" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.entitiesMappings"></a>

```go
func EntitiesMappings() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesEntitiesMappingsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `ManagedListTypes`<sup>Required</sup> <a name="ManagedListTypes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.managedListTypes"></a>

```go
func ManagedListTypes() *[]*string
```

- *Type:* *[]*string

---

##### `Recommendation`<sup>Required</sup> <a name="Recommendation" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.recommendation"></a>

```go
func Recommendation() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `ServiceType`<sup>Required</sup> <a name="ServiceType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.serviceType"></a>

```go
func ServiceType() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRules</a>

---


### DataOciCloudGuardTargetTargetDetectorRecipesList <a name="DataOciCloudGuardTargetTargetDetectorRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetDetectorRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetDetectorRecipesOutputReference <a name="DataOciCloudGuardTargetTargetDetectorRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetDetectorRecipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetDetectorRecipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detector">Detector</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId">DetectorRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType">DetectorRecipeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules">DetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules">EffectiveDetectorRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes">DataOciCloudGuardTargetTargetDetectorRecipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Detector`<sup>Required</sup> <a name="Detector" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detector"></a>

```go
func Detector() *string
```

- *Type:* *string

---

##### `DetectorRecipeId`<sup>Required</sup> <a name="DetectorRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeId"></a>

```go
func DetectorRecipeId() *string
```

- *Type:* *string

---

##### `DetectorRecipeType`<sup>Required</sup> <a name="DetectorRecipeType" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRecipeType"></a>

```go
func DetectorRecipeType() *string
```

- *Type:* *string

---

##### `DetectorRules`<sup>Required</sup> <a name="DetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.detectorRules"></a>

```go
func DetectorRules() DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesDetectorRulesList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveDetectorRules`<sup>Required</sup> <a name="EffectiveDetectorRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.effectiveDetectorRules"></a>

```go
func EffectiveDetectorRules() DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList">DataOciCloudGuardTargetTargetDetectorRecipesEffectiveDetectorRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetDetectorRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetDetectorRecipes">DataOciCloudGuardTargetTargetDetectorRecipes</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsConfigurationsList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetails</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId">ResponderRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes">SupportedModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `ResponderRuleId`<sup>Required</sup> <a name="ResponderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.responderRuleId"></a>

```go
func ResponderRuleId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedModes`<sup>Required</sup> <a name="SupportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.supportedModes"></a>

```go
func SupportedModes() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRules</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesList <a name="DataOciCloudGuardTargetTargetResponderRecipesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules">EffectiveResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId">ResponderRecipeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules">ResponderRules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes">DataOciCloudGuardTargetTargetResponderRecipes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EffectiveResponderRules`<sup>Required</sup> <a name="EffectiveResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.effectiveResponderRules"></a>

```go
func EffectiveResponderRules() DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesEffectiveResponderRulesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `ResponderRecipeId`<sup>Required</sup> <a name="ResponderRecipeId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRecipeId"></a>

```go
func ResponderRecipeId() *string
```

- *Type:* *string

---

##### `ResponderRules`<sup>Required</sup> <a name="ResponderRules" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.responderRules"></a>

```go
func ResponderRules() DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipes">DataOciCloudGuardTargetTargetResponderRecipes</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey">ConfigKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigKey`<sup>Required</sup> <a name="ConfigKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.configKey"></a>

```go
func ConfigKey() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurations</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition">Condition</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations">Configurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled">IsEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Condition`<sup>Required</sup> <a name="Condition" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.condition"></a>

```go
func Condition() *string
```

- *Type:* *string

---

##### `Configurations`<sup>Required</sup> <a name="Configurations" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.configurations"></a>

```go
func Configurations() DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsConfigurationsList</a>

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.isEnabled"></a>

```go
func IsEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetails</a>

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get"></a>

```go
func Get(index *f64) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference <a name="DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/dataocicloudguardtarget"

dataocicloudguardtarget.NewDataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details">Details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies">Policies</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId">ResponderRuleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes">SupportedModes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules">DataOciCloudGuardTargetTargetResponderRecipesResponderRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Details`<sup>Required</sup> <a name="Details" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.details"></a>

```go
func Details() DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList">DataOciCloudGuardTargetTargetResponderRecipesResponderRulesDetailsList</a>

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.policies"></a>

```go
func Policies() *[]*string
```

- *Type:* *[]*string

---

##### `ResponderRuleId`<sup>Required</sup> <a name="ResponderRuleId" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.responderRuleId"></a>

```go
func ResponderRuleId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SupportedModes`<sup>Required</sup> <a name="SupportedModes" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.supportedModes"></a>

```go
func SupportedModes() *[]*string
```

- *Type:* *[]*string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataOciCloudGuardTargetTargetResponderRecipesResponderRules
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCloudGuardTarget.DataOciCloudGuardTargetTargetResponderRecipesResponderRules">DataOciCloudGuardTargetTargetResponderRecipesResponderRules</a>

---



