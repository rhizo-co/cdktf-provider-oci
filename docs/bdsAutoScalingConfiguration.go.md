# `bdsAutoScalingConfiguration` Submodule <a name="`bdsAutoScalingConfiguration` Submodule" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BdsAutoScalingConfiguration <a name="BdsAutoScalingConfiguration" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration oci_bds_auto_scaling_configuration}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfiguration(scope Construct, id *string, config BdsAutoScalingConfigurationConfig) BdsAutoScalingConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig">BdsAutoScalingConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig">BdsAutoScalingConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy">PutPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails">PutPolicyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicy">ResetPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicyDetails">ResetPolicyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicy` <a name="PutPolicy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy"></a>

```go
func PutPolicy(value BdsAutoScalingConfigurationPolicy)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicy.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

---

##### `PutPolicyDetails` <a name="PutPolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails"></a>

```go
func PutPolicyDetails(value BdsAutoScalingConfigurationPolicyDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putPolicyDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts"></a>

```go
func PutTimeouts(value BdsAutoScalingConfigurationTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>

---

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetId"></a>

```go
func ResetId()
```

##### `ResetPolicy` <a name="ResetPolicy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicy"></a>

```go
func ResetPolicy()
```

##### `ResetPolicyDetails` <a name="ResetPolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetPolicyDetails"></a>

```go
func ResetPolicyDetails()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a BdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.BdsAutoScalingConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.BdsAutoScalingConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.BdsAutoScalingConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.BdsAutoScalingConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a BdsAutoScalingConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BdsAutoScalingConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BdsAutoScalingConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the BdsAutoScalingConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference">BdsAutoScalingConfigurationPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetails">PolicyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference">BdsAutoScalingConfigurationPolicyDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference">BdsAutoScalingConfigurationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceIdInput">BdsInstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPasswordInput">ClusterAdminPasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabledInput">IsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeTypeInput">NodeTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetailsInput">PolicyDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyInput">PolicyInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeType">NodeType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Policy`<sup>Required</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policy"></a>

```go
func Policy() BdsAutoScalingConfigurationPolicyOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference">BdsAutoScalingConfigurationPolicyOutputReference</a>

---

##### `PolicyDetails`<sup>Required</sup> <a name="PolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetails"></a>

```go
func PolicyDetails() BdsAutoScalingConfigurationPolicyDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference">BdsAutoScalingConfigurationPolicyDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeouts"></a>

```go
func Timeouts() BdsAutoScalingConfigurationTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference">BdsAutoScalingConfigurationTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `BdsInstanceIdInput`<sup>Optional</sup> <a name="BdsInstanceIdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceIdInput"></a>

```go
func BdsInstanceIdInput() *string
```

- *Type:* *string

---

##### `ClusterAdminPasswordInput`<sup>Optional</sup> <a name="ClusterAdminPasswordInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPasswordInput"></a>

```go
func ClusterAdminPasswordInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsEnabledInput`<sup>Optional</sup> <a name="IsEnabledInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabledInput"></a>

```go
func IsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NodeTypeInput`<sup>Optional</sup> <a name="NodeTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeTypeInput"></a>

```go
func NodeTypeInput() *string
```

- *Type:* *string

---

##### `PolicyDetailsInput`<sup>Optional</sup> <a name="PolicyDetailsInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyDetailsInput"></a>

```go
func PolicyDetailsInput() BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

---

##### `PolicyInput`<sup>Optional</sup> <a name="PolicyInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.policyInput"></a>

```go
func PolicyInput() BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.bdsInstanceId"></a>

```go
func BdsInstanceId() *string
```

- *Type:* *string

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.clusterAdminPassword"></a>

```go
func ClusterAdminPassword() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.isEnabled"></a>

```go
func IsEnabled() interface{}
```

- *Type:* interface{}

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.nodeType"></a>

```go
func NodeType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BdsAutoScalingConfigurationConfig <a name="BdsAutoScalingConfigurationConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BdsInstanceId: *string,
	ClusterAdminPassword: *string,
	IsEnabled: interface{},
	NodeType: *string,
	DisplayName: *string,
	Id: *string,
	Policy: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy,
	PolicyDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.bdsInstanceId">BdsInstanceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.clusterAdminPassword">ClusterAdminPassword</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.isEnabled">IsEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.nodeType">NodeType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policy">Policy</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | policy block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policyDetails">PolicyDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | policy_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BdsInstanceId`<sup>Required</sup> <a name="BdsInstanceId" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.bdsInstanceId"></a>

```go
BdsInstanceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#bds_instance_id BdsAutoScalingConfiguration#bds_instance_id}.

---

##### `ClusterAdminPassword`<sup>Required</sup> <a name="ClusterAdminPassword" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.clusterAdminPassword"></a>

```go
ClusterAdminPassword *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#cluster_admin_password BdsAutoScalingConfiguration#cluster_admin_password}.

---

##### `IsEnabled`<sup>Required</sup> <a name="IsEnabled" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.isEnabled"></a>

```go
IsEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#is_enabled BdsAutoScalingConfiguration#is_enabled}.

---

##### `NodeType`<sup>Required</sup> <a name="NodeType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.nodeType"></a>

```go
NodeType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#node_type BdsAutoScalingConfiguration#node_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#display_name BdsAutoScalingConfiguration#display_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#id BdsAutoScalingConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Policy`<sup>Optional</sup> <a name="Policy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policy"></a>

```go
Policy BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy BdsAutoScalingConfiguration#policy}

---

##### `PolicyDetails`<sup>Optional</sup> <a name="PolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.policyDetails"></a>

```go
PolicyDetails BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

policy_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_details BdsAutoScalingConfiguration#policy_details}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationConfig.property.timeouts"></a>

```go
Timeouts BdsAutoScalingConfigurationTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts">BdsAutoScalingConfigurationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timeouts BdsAutoScalingConfiguration#timeouts}

---

### BdsAutoScalingConfigurationPolicy <a name="BdsAutoScalingConfigurationPolicy" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicy {
	PolicyType: *string,
	Rules: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.rules">Rules</a></code> | <code>interface{}</code> | rules block. |

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy.property.rules"></a>

```go
Rules interface{}
```

- *Type:* interface{}

rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#rules BdsAutoScalingConfiguration#rules}

---

### BdsAutoScalingConfigurationPolicyDetails <a name="BdsAutoScalingConfigurationPolicyDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetails {
	PolicyType: *string,
	ScaleDownConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig,
	ScaleInConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig,
	ScaleOutConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig,
	ScaleUpConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig,
	ScheduleDetails: interface{},
	Timezone: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.policyType">PolicyType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleDownConfig">ScaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | scale_down_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleInConfig">ScaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | scale_in_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleOutConfig">ScaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | scale_out_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleUpConfig">ScaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | scale_up_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scheduleDetails">ScheduleDetails</a></code> | <code>interface{}</code> | schedule_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.timezone">Timezone</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}. |

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.policyType"></a>

```go
PolicyType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#policy_type BdsAutoScalingConfiguration#policy_type}.

---

##### `ScaleDownConfig`<sup>Optional</sup> <a name="ScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleDownConfig"></a>

```go
ScaleDownConfig BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

scale_down_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_down_config BdsAutoScalingConfiguration#scale_down_config}

---

##### `ScaleInConfig`<sup>Optional</sup> <a name="ScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleInConfig"></a>

```go
ScaleInConfig BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

scale_in_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_in_config BdsAutoScalingConfiguration#scale_in_config}

---

##### `ScaleOutConfig`<sup>Optional</sup> <a name="ScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleOutConfig"></a>

```go
ScaleOutConfig BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

scale_out_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_out_config BdsAutoScalingConfiguration#scale_out_config}

---

##### `ScaleUpConfig`<sup>Optional</sup> <a name="ScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scaleUpConfig"></a>

```go
ScaleUpConfig BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

scale_up_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#scale_up_config BdsAutoScalingConfiguration#scale_up_config}

---

##### `ScheduleDetails`<sup>Optional</sup> <a name="ScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.scheduleDetails"></a>

```go
ScheduleDetails interface{}
```

- *Type:* interface{}

schedule_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_details BdsAutoScalingConfiguration#schedule_details}

---

##### `Timezone`<sup>Optional</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails.property.timezone"></a>

```go
Timezone *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#timezone BdsAutoScalingConfiguration#timezone}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig {
	MemoryStepSize: *f64,
	Metric: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric,
	MinMemoryPerNode: *f64,
	MinOcpusPerNode: *f64,
	OcpuStepSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minMemoryPerNode">MinMemoryPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minOcpusPerNode">MinOcpusPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}. |

---

##### `MemoryStepSize`<sup>Optional</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.memoryStepSize"></a>

```go
MemoryStepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.metric"></a>

```go
Metric BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `MinMemoryPerNode`<sup>Optional</sup> <a name="MinMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minMemoryPerNode"></a>

```go
MinMemoryPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_memory_per_node BdsAutoScalingConfiguration#min_memory_per_node}.

---

##### `MinOcpusPerNode`<sup>Optional</sup> <a name="MinOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.minOcpusPerNode"></a>

```go
MinOcpusPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_ocpus_per_node BdsAutoScalingConfiguration#min_ocpus_per_node}.

---

##### `OcpuStepSize`<sup>Optional</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig.property.ocpuStepSize"></a>

```go
OcpuStepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric {
	MetricType: *string,
	Threshold: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | threshold block. |

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric.property.threshold"></a>

```go
Threshold BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold {
	DurationInMinutes: *f64,
	Operator: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig {
	Metric: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric,
	MinNodeCount: *f64,
	StepSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.stepSize">StepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}. |

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.metric"></a>

```go
Metric BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `MinNodeCount`<sup>Optional</sup> <a name="MinNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.minNodeCount"></a>

```go
MinNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#min_node_count BdsAutoScalingConfiguration#min_node_count}.

---

##### `StepSize`<sup>Optional</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig.property.stepSize"></a>

```go
StepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric {
	MetricType: *string,
	Threshold: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | threshold block. |

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric.property.threshold"></a>

```go
Threshold BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold {
	DurationInMinutes: *f64,
	Operator: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig {
	MaxNodeCount: *f64,
	Metric: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric,
	StepSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.stepSize">StepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}. |

---

##### `MaxNodeCount`<sup>Optional</sup> <a name="MaxNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.maxNodeCount"></a>

```go
MaxNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_node_count BdsAutoScalingConfiguration#max_node_count}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.metric"></a>

```go
Metric BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `StepSize`<sup>Optional</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig.property.stepSize"></a>

```go
StepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#step_size BdsAutoScalingConfiguration#step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric {
	MetricType: *string,
	Threshold: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | threshold block. |

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric.property.threshold"></a>

```go
Threshold BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold {
	DurationInMinutes: *f64,
	Operator: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig {
	MaxMemoryPerNode: *f64,
	MaxOcpusPerNode: *f64,
	MemoryStepSize: *f64,
	Metric: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric,
	OcpuStepSize: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxMemoryPerNode">MaxMemoryPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxOcpusPerNode">MaxOcpusPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | metric block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}. |

---

##### `MaxMemoryPerNode`<sup>Optional</sup> <a name="MaxMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxMemoryPerNode"></a>

```go
MaxMemoryPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_memory_per_node BdsAutoScalingConfiguration#max_memory_per_node}.

---

##### `MaxOcpusPerNode`<sup>Optional</sup> <a name="MaxOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.maxOcpusPerNode"></a>

```go
MaxOcpusPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#max_ocpus_per_node BdsAutoScalingConfiguration#max_ocpus_per_node}.

---

##### `MemoryStepSize`<sup>Optional</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.memoryStepSize"></a>

```go
MemoryStepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#memory_step_size BdsAutoScalingConfiguration#memory_step_size}.

---

##### `Metric`<sup>Optional</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.metric"></a>

```go
Metric BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

##### `OcpuStepSize`<sup>Optional</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig.property.ocpuStepSize"></a>

```go
OcpuStepSize *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#ocpu_step_size BdsAutoScalingConfiguration#ocpu_step_size}.

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric {
	MetricType: *string,
	Threshold: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | threshold block. |

---

##### `MetricType`<sup>Optional</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `Threshold`<sup>Optional</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric.property.threshold"></a>

```go
Threshold BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold {
	DurationInMinutes: *f64,
	Operator: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetails <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails {
	ScheduleType: *string,
	TimeAndHorizontalScalingConfig: interface{},
	TimeAndVerticalScalingConfig: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_type BdsAutoScalingConfiguration#schedule_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndHorizontalScalingConfig">TimeAndHorizontalScalingConfig</a></code> | <code>interface{}</code> | time_and_horizontal_scaling_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndVerticalScalingConfig">TimeAndVerticalScalingConfig</a></code> | <code>interface{}</code> | time_and_vertical_scaling_config block. |

---

##### `ScheduleType`<sup>Optional</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.scheduleType"></a>

```go
ScheduleType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#schedule_type BdsAutoScalingConfiguration#schedule_type}.

---

##### `TimeAndHorizontalScalingConfig`<sup>Optional</sup> <a name="TimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndHorizontalScalingConfig"></a>

```go
TimeAndHorizontalScalingConfig interface{}
```

- *Type:* interface{}

time_and_horizontal_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_and_horizontal_scaling_config BdsAutoScalingConfiguration#time_and_horizontal_scaling_config}

---

##### `TimeAndVerticalScalingConfig`<sup>Optional</sup> <a name="TimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetails.property.timeAndVerticalScalingConfig"></a>

```go
TimeAndVerticalScalingConfig interface{}
```

- *Type:* interface{}

time_and_vertical_scaling_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_and_vertical_scaling_config BdsAutoScalingConfiguration#time_and_vertical_scaling_config}

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig {
	TargetNodeCount: *f64,
	TimeRecurrence: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.targetNodeCount">TargetNodeCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_node_count BdsAutoScalingConfiguration#target_node_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}. |

---

##### `TargetNodeCount`<sup>Optional</sup> <a name="TargetNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.targetNodeCount"></a>

```go
TargetNodeCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_node_count BdsAutoScalingConfiguration#target_node_count}.

---

##### `TimeRecurrence`<sup>Optional</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfig.property.timeRecurrence"></a>

```go
TimeRecurrence *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}.

---

### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig {
	TargetMemoryPerNode: *f64,
	TargetOcpusPerNode: *f64,
	TargetShape: *string,
	TimeRecurrence: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetMemoryPerNode">TargetMemoryPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_memory_per_node BdsAutoScalingConfiguration#target_memory_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetOcpusPerNode">TargetOcpusPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_ocpus_per_node BdsAutoScalingConfiguration#target_ocpus_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetShape">TargetShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_shape BdsAutoScalingConfiguration#target_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}. |

---

##### `TargetMemoryPerNode`<sup>Optional</sup> <a name="TargetMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetMemoryPerNode"></a>

```go
TargetMemoryPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_memory_per_node BdsAutoScalingConfiguration#target_memory_per_node}.

---

##### `TargetOcpusPerNode`<sup>Optional</sup> <a name="TargetOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetOcpusPerNode"></a>

```go
TargetOcpusPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_ocpus_per_node BdsAutoScalingConfiguration#target_ocpus_per_node}.

---

##### `TargetShape`<sup>Optional</sup> <a name="TargetShape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.targetShape"></a>

```go
TargetShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#target_shape BdsAutoScalingConfiguration#target_shape}.

---

##### `TimeRecurrence`<sup>Optional</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfig.property.timeRecurrence"></a>

```go
TimeRecurrence *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#time_recurrence BdsAutoScalingConfiguration#time_recurrence}.

---

### BdsAutoScalingConfigurationPolicyRules <a name="BdsAutoScalingConfigurationPolicyRules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyRules {
	Action: *string,
	Metric: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.action">Action</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#action BdsAutoScalingConfiguration#action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | metric block. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.action"></a>

```go
Action *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#action BdsAutoScalingConfiguration#action}.

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRules.property.metric"></a>

```go
Metric BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

metric block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric BdsAutoScalingConfiguration#metric}

---

### BdsAutoScalingConfigurationPolicyRulesMetric <a name="BdsAutoScalingConfigurationPolicyRulesMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyRulesMetric {
	MetricType: *string,
	Threshold: github.com/rhizo-co/cdktf-provider-oci-go/oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.metricType">MetricType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | threshold block. |

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.metricType"></a>

```go
MetricType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#metric_type BdsAutoScalingConfiguration#metric_type}.

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric.property.threshold"></a>

```go
Threshold BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

threshold block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#threshold BdsAutoScalingConfiguration#threshold}

---

### BdsAutoScalingConfigurationPolicyRulesMetricThreshold <a name="BdsAutoScalingConfigurationPolicyRulesMetricThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold {
	DurationInMinutes: *f64,
	Operator: *string,
	Value: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.operator">Operator</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.value">Value</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}. |

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#duration_in_minutes BdsAutoScalingConfiguration#duration_in_minutes}.

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.operator"></a>

```go
Operator *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#operator BdsAutoScalingConfiguration#operator}.

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold.property.value"></a>

```go
Value *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#value BdsAutoScalingConfiguration#value}.

---

### BdsAutoScalingConfigurationTimeouts <a name="BdsAutoScalingConfigurationTimeouts" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

&bdsautoscalingconfiguration.BdsAutoScalingConfigurationTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#create BdsAutoScalingConfiguration#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#delete BdsAutoScalingConfiguration#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/bds_auto_scaling_configuration#update BdsAutoScalingConfiguration#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### BdsAutoScalingConfigurationPolicyDetailsOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig">PutScaleDownConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig">PutScaleInConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig">PutScaleOutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig">PutScaleUpConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails">PutScheduleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleDownConfig">ResetScaleDownConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleInConfig">ResetScaleInConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleOutConfig">ResetScaleOutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleUpConfig">ResetScaleUpConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScheduleDetails">ResetScheduleDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetTimezone">ResetTimezone</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutScaleDownConfig` <a name="PutScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig"></a>

```go
func PutScaleDownConfig(value BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleDownConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---

##### `PutScaleInConfig` <a name="PutScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig"></a>

```go
func PutScaleInConfig(value BdsAutoScalingConfigurationPolicyDetailsScaleInConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleInConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---

##### `PutScaleOutConfig` <a name="PutScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig"></a>

```go
func PutScaleOutConfig(value BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleOutConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---

##### `PutScaleUpConfig` <a name="PutScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig"></a>

```go
func PutScaleUpConfig(value BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScaleUpConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---

##### `PutScheduleDetails` <a name="PutScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails"></a>

```go
func PutScheduleDetails(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.putScheduleDetails.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScaleDownConfig` <a name="ResetScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleDownConfig"></a>

```go
func ResetScaleDownConfig()
```

##### `ResetScaleInConfig` <a name="ResetScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleInConfig"></a>

```go
func ResetScaleInConfig()
```

##### `ResetScaleOutConfig` <a name="ResetScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleOutConfig"></a>

```go
func ResetScaleOutConfig()
```

##### `ResetScaleUpConfig` <a name="ResetScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScaleUpConfig"></a>

```go
func ResetScaleUpConfig()
```

##### `ResetScheduleDetails` <a name="ResetScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetScheduleDetails"></a>

```go
func ResetScheduleDetails()
```

##### `ResetTimezone` <a name="ResetTimezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.resetTimezone"></a>

```go
func ResetTimezone()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType">ActionType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig">ScaleDownConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig">ScaleInConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig">ScaleOutConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig">ScaleUpConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails">ScheduleDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType">TriggerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfigInput">ScaleDownConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfigInput">ScaleInConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfigInput">ScaleOutConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfigInput">ScaleUpConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetailsInput">ScheduleDetailsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezoneInput">TimezoneInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone">Timezone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActionType`<sup>Required</sup> <a name="ActionType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.actionType"></a>

```go
func ActionType() *string
```

- *Type:* *string

---

##### `ScaleDownConfig`<sup>Required</sup> <a name="ScaleDownConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfig"></a>

```go
func ScaleDownConfig() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference</a>

---

##### `ScaleInConfig`<sup>Required</sup> <a name="ScaleInConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfig"></a>

```go
func ScaleInConfig() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference</a>

---

##### `ScaleOutConfig`<sup>Required</sup> <a name="ScaleOutConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfig"></a>

```go
func ScaleOutConfig() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference</a>

---

##### `ScaleUpConfig`<sup>Required</sup> <a name="ScaleUpConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfig"></a>

```go
func ScaleUpConfig() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference</a>

---

##### `ScheduleDetails`<sup>Required</sup> <a name="ScheduleDetails" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetails"></a>

```go
func ScheduleDetails() BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList</a>

---

##### `TriggerType`<sup>Required</sup> <a name="TriggerType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.triggerType"></a>

```go
func TriggerType() *string
```

- *Type:* *string

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `ScaleDownConfigInput`<sup>Optional</sup> <a name="ScaleDownConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleDownConfigInput"></a>

```go
func ScaleDownConfigInput() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---

##### `ScaleInConfigInput`<sup>Optional</sup> <a name="ScaleInConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleInConfigInput"></a>

```go
func ScaleInConfigInput() BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---

##### `ScaleOutConfigInput`<sup>Optional</sup> <a name="ScaleOutConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleOutConfigInput"></a>

```go
func ScaleOutConfigInput() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---

##### `ScaleUpConfigInput`<sup>Optional</sup> <a name="ScaleUpConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scaleUpConfigInput"></a>

```go
func ScaleUpConfigInput() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---

##### `ScheduleDetailsInput`<sup>Optional</sup> <a name="ScheduleDetailsInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.scheduleDetailsInput"></a>

```go
func ScheduleDetailsInput() interface{}
```

- *Type:* interface{}

---

##### `TimezoneInput`<sup>Optional</sup> <a name="TimezoneInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezoneInput"></a>

```go
func TimezoneInput() *string
```

- *Type:* *string

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `Timezone`<sup>Required</sup> <a name="Timezone" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.timezone"></a>

```go
func Timezone() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetails">BdsAutoScalingConfigurationPolicyDetails</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold"></a>

```go
func PutThreshold(value BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---

##### `ResetMetricType` <a name="ResetMetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetMetricType"></a>

```go
func ResetMetricType()
```

##### `ResetThreshold` <a name="ResetThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference</a>

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetOperator` <a name="ResetOperator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMemoryStepSize">ResetMemoryStepSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinMemoryPerNode">ResetMinMemoryPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinOcpusPerNode">ResetMinOcpusPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetOcpuStepSize">ResetOcpuStepSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric"></a>

```go
func PutMetric(value BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---

##### `ResetMemoryStepSize` <a name="ResetMemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMemoryStepSize"></a>

```go
func ResetMemoryStepSize()
```

##### `ResetMetric` <a name="ResetMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMinMemoryPerNode` <a name="ResetMinMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinMemoryPerNode"></a>

```go
func ResetMinMemoryPerNode()
```

##### `ResetMinOcpusPerNode` <a name="ResetMinOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetMinOcpusPerNode"></a>

```go
func ResetMinOcpusPerNode()
```

##### `ResetOcpuStepSize` <a name="ResetOcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.resetOcpuStepSize"></a>

```go
func ResetOcpuStepSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSizeInput">MemoryStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNodeInput">MinMemoryPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNodeInput">MinOcpusPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSizeInput">OcpuStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode">MinMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode">MinOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metric"></a>

```go
func Metric() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetricOutputReference</a>

---

##### `MemoryStepSizeInput`<sup>Optional</sup> <a name="MemoryStepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSizeInput"></a>

```go
func MemoryStepSizeInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.metricInput"></a>

```go
func MetricInput() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigMetric</a>

---

##### `MinMemoryPerNodeInput`<sup>Optional</sup> <a name="MinMemoryPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNodeInput"></a>

```go
func MinMemoryPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MinOcpusPerNodeInput`<sup>Optional</sup> <a name="MinOcpusPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNodeInput"></a>

```go
func MinOcpusPerNodeInput() *f64
```

- *Type:* *f64

---

##### `OcpuStepSizeInput`<sup>Optional</sup> <a name="OcpuStepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSizeInput"></a>

```go
func OcpuStepSizeInput() *f64
```

- *Type:* *f64

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.memoryStepSize"></a>

```go
func MemoryStepSize() *f64
```

- *Type:* *f64

---

##### `MinMemoryPerNode`<sup>Required</sup> <a name="MinMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minMemoryPerNode"></a>

```go
func MinMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `MinOcpusPerNode`<sup>Required</sup> <a name="MinOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.minOcpusPerNode"></a>

```go
func MinOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.ocpuStepSize"></a>

```go
func OcpuStepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig">BdsAutoScalingConfigurationPolicyDetailsScaleDownConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold"></a>

```go
func PutThreshold(value BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---

##### `ResetMetricType` <a name="ResetMetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetMetricType"></a>

```go
func ResetMetricType()
```

##### `ResetThreshold` <a name="ResetThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference</a>

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetOperator` <a name="ResetOperator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMinNodeCount">ResetMinNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetStepSize">ResetStepSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric"></a>

```go
func PutMetric(value BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---

##### `ResetMetric` <a name="ResetMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetMinNodeCount` <a name="ResetMinNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetMinNodeCount"></a>

```go
func ResetMinNodeCount()
```

##### `ResetStepSize` <a name="ResetStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.resetStepSize"></a>

```go
func ResetStepSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCountInput">MinNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSizeInput">StepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount">MinNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize">StepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metric"></a>

```go
func Metric() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetricOutputReference</a>

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.metricInput"></a>

```go
func MetricInput() BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleInConfigMetric</a>

---

##### `MinNodeCountInput`<sup>Optional</sup> <a name="MinNodeCountInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCountInput"></a>

```go
func MinNodeCountInput() *f64
```

- *Type:* *f64

---

##### `StepSizeInput`<sup>Optional</sup> <a name="StepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSizeInput"></a>

```go
func StepSizeInput() *f64
```

- *Type:* *f64

---

##### `MinNodeCount`<sup>Required</sup> <a name="MinNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.minNodeCount"></a>

```go
func MinNodeCount() *f64
```

- *Type:* *f64

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.stepSize"></a>

```go
func StepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleInConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleInConfig">BdsAutoScalingConfigurationPolicyDetailsScaleInConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold"></a>

```go
func PutThreshold(value BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---

##### `ResetMetricType` <a name="ResetMetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetMetricType"></a>

```go
func ResetMetricType()
```

##### `ResetThreshold` <a name="ResetThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference</a>

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetOperator` <a name="ResetOperator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMaxNodeCount">ResetMaxNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetStepSize">ResetStepSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric"></a>

```go
func PutMetric(value BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---

##### `ResetMaxNodeCount` <a name="ResetMaxNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMaxNodeCount"></a>

```go
func ResetMaxNodeCount()
```

##### `ResetMetric` <a name="ResetMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetStepSize` <a name="ResetStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.resetStepSize"></a>

```go
func ResetStepSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCountInput">MaxNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSizeInput">StepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount">MaxNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize">StepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metric"></a>

```go
func Metric() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetricOutputReference</a>

---

##### `MaxNodeCountInput`<sup>Optional</sup> <a name="MaxNodeCountInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCountInput"></a>

```go
func MaxNodeCountInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.metricInput"></a>

```go
func MetricInput() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigMetric</a>

---

##### `StepSizeInput`<sup>Optional</sup> <a name="StepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSizeInput"></a>

```go
func StepSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxNodeCount`<sup>Required</sup> <a name="MaxNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.maxNodeCount"></a>

```go
func MaxNodeCount() *f64
```

- *Type:* *f64

---

##### `StepSize`<sup>Required</sup> <a name="StepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.stepSize"></a>

```go
func StepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig">BdsAutoScalingConfigurationPolicyDetailsScaleOutConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetMetricType">ResetMetricType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetThreshold">ResetThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold"></a>

```go
func PutThreshold(value BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---

##### `ResetMetricType` <a name="ResetMetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetMetricType"></a>

```go
func ResetMetricType()
```

##### `ResetThreshold` <a name="ResetThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.resetThreshold"></a>

```go
func ResetThreshold()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.threshold"></a>

```go
func Threshold() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference</a>

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetOperator` <a name="ResetOperator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetOperator"></a>

```go
func ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric">PutMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxMemoryPerNode">ResetMaxMemoryPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxOcpusPerNode">ResetMaxOcpusPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMemoryStepSize">ResetMemoryStepSize</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMetric">ResetMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetOcpuStepSize">ResetOcpuStepSize</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric"></a>

```go
func PutMetric(value BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---

##### `ResetMaxMemoryPerNode` <a name="ResetMaxMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxMemoryPerNode"></a>

```go
func ResetMaxMemoryPerNode()
```

##### `ResetMaxOcpusPerNode` <a name="ResetMaxOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMaxOcpusPerNode"></a>

```go
func ResetMaxOcpusPerNode()
```

##### `ResetMemoryStepSize` <a name="ResetMemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMemoryStepSize"></a>

```go
func ResetMemoryStepSize()
```

##### `ResetMetric` <a name="ResetMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetMetric"></a>

```go
func ResetMetric()
```

##### `ResetOcpuStepSize` <a name="ResetOcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.resetOcpuStepSize"></a>

```go
func ResetOcpuStepSize()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNodeInput">MaxMemoryPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNodeInput">MaxOcpusPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSizeInput">MemoryStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSizeInput">OcpuStepSizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode">MaxMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode">MaxOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize">MemoryStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize">OcpuStepSize</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metric"></a>

```go
func Metric() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetricOutputReference</a>

---

##### `MaxMemoryPerNodeInput`<sup>Optional</sup> <a name="MaxMemoryPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNodeInput"></a>

```go
func MaxMemoryPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MaxOcpusPerNodeInput`<sup>Optional</sup> <a name="MaxOcpusPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNodeInput"></a>

```go
func MaxOcpusPerNodeInput() *f64
```

- *Type:* *f64

---

##### `MemoryStepSizeInput`<sup>Optional</sup> <a name="MemoryStepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSizeInput"></a>

```go
func MemoryStepSizeInput() *f64
```

- *Type:* *f64

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.metricInput"></a>

```go
func MetricInput() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigMetric</a>

---

##### `OcpuStepSizeInput`<sup>Optional</sup> <a name="OcpuStepSizeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSizeInput"></a>

```go
func OcpuStepSizeInput() *f64
```

- *Type:* *f64

---

##### `MaxMemoryPerNode`<sup>Required</sup> <a name="MaxMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxMemoryPerNode"></a>

```go
func MaxMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `MaxOcpusPerNode`<sup>Required</sup> <a name="MaxOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.maxOcpusPerNode"></a>

```go
func MaxOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `MemoryStepSize`<sup>Required</sup> <a name="MemoryStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.memoryStepSize"></a>

```go
func MemoryStepSize() *f64
```

- *Type:* *f64

---

##### `OcpuStepSize`<sup>Required</sup> <a name="OcpuStepSize" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.ocpuStepSize"></a>

```go
func OcpuStepSize() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig">BdsAutoScalingConfigurationPolicyDetailsScaleUpConfig</a>

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get"></a>

```go
func Get(index *f64) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig">PutTimeAndHorizontalScalingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig">PutTimeAndVerticalScalingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetScheduleType">ResetScheduleType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndHorizontalScalingConfig">ResetTimeAndHorizontalScalingConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndVerticalScalingConfig">ResetTimeAndVerticalScalingConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTimeAndHorizontalScalingConfig` <a name="PutTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig"></a>

```go
func PutTimeAndHorizontalScalingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndHorizontalScalingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeAndVerticalScalingConfig` <a name="PutTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig"></a>

```go
func PutTimeAndVerticalScalingConfig(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.putTimeAndVerticalScalingConfig.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetScheduleType` <a name="ResetScheduleType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetScheduleType"></a>

```go
func ResetScheduleType()
```

##### `ResetTimeAndHorizontalScalingConfig` <a name="ResetTimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndHorizontalScalingConfig"></a>

```go
func ResetTimeAndHorizontalScalingConfig()
```

##### `ResetTimeAndVerticalScalingConfig` <a name="ResetTimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.resetTimeAndVerticalScalingConfig"></a>

```go
func ResetTimeAndVerticalScalingConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig">TimeAndHorizontalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig">TimeAndVerticalScalingConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleTypeInput">ScheduleTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfigInput">TimeAndHorizontalScalingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfigInput">TimeAndVerticalScalingConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType">ScheduleType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TimeAndHorizontalScalingConfig`<sup>Required</sup> <a name="TimeAndHorizontalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfig"></a>

```go
func TimeAndHorizontalScalingConfig() BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList</a>

---

##### `TimeAndVerticalScalingConfig`<sup>Required</sup> <a name="TimeAndVerticalScalingConfig" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfig"></a>

```go
func TimeAndVerticalScalingConfig() BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList">BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList</a>

---

##### `ScheduleTypeInput`<sup>Optional</sup> <a name="ScheduleTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleTypeInput"></a>

```go
func ScheduleTypeInput() *string
```

- *Type:* *string

---

##### `TimeAndHorizontalScalingConfigInput`<sup>Optional</sup> <a name="TimeAndHorizontalScalingConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndHorizontalScalingConfigInput"></a>

```go
func TimeAndHorizontalScalingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TimeAndVerticalScalingConfigInput`<sup>Optional</sup> <a name="TimeAndVerticalScalingConfigInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.timeAndVerticalScalingConfigInput"></a>

```go
func TimeAndVerticalScalingConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ScheduleType`<sup>Required</sup> <a name="ScheduleType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.scheduleType"></a>

```go
func ScheduleType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get"></a>

```go
func Get(index *f64) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTargetNodeCount">ResetTargetNodeCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTimeRecurrence">ResetTimeRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetNodeCount` <a name="ResetTargetNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTargetNodeCount"></a>

```go
func ResetTargetNodeCount()
```

##### `ResetTimeRecurrence` <a name="ResetTimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.resetTimeRecurrence"></a>

```go
func ResetTimeRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCountInput">TargetNodeCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrenceInput">TimeRecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount">TargetNodeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetNodeCountInput`<sup>Optional</sup> <a name="TargetNodeCountInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCountInput"></a>

```go
func TargetNodeCountInput() *f64
```

- *Type:* *f64

---

##### `TimeRecurrenceInput`<sup>Optional</sup> <a name="TimeRecurrenceInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrenceInput"></a>

```go
func TimeRecurrenceInput() *string
```

- *Type:* *string

---

##### `TargetNodeCount`<sup>Required</sup> <a name="TargetNodeCount" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.targetNodeCount"></a>

```go
func TargetNodeCount() *f64
```

- *Type:* *f64

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.timeRecurrence"></a>

```go
func TimeRecurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndHorizontalScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get"></a>

```go
func Get(index *f64) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference <a name="BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetMemoryPerNode">ResetTargetMemoryPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetOcpusPerNode">ResetTargetOcpusPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetShape">ResetTargetShape</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTimeRecurrence">ResetTimeRecurrence</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetMemoryPerNode` <a name="ResetTargetMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetMemoryPerNode"></a>

```go
func ResetTargetMemoryPerNode()
```

##### `ResetTargetOcpusPerNode` <a name="ResetTargetOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetOcpusPerNode"></a>

```go
func ResetTargetOcpusPerNode()
```

##### `ResetTargetShape` <a name="ResetTargetShape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTargetShape"></a>

```go
func ResetTargetShape()
```

##### `ResetTimeRecurrence` <a name="ResetTimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.resetTimeRecurrence"></a>

```go
func ResetTimeRecurrence()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNodeInput">TargetMemoryPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNodeInput">TargetOcpusPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShapeInput">TargetShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrenceInput">TimeRecurrenceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode">TargetMemoryPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode">TargetOcpusPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape">TargetShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence">TimeRecurrence</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetMemoryPerNodeInput`<sup>Optional</sup> <a name="TargetMemoryPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNodeInput"></a>

```go
func TargetMemoryPerNodeInput() *f64
```

- *Type:* *f64

---

##### `TargetOcpusPerNodeInput`<sup>Optional</sup> <a name="TargetOcpusPerNodeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNodeInput"></a>

```go
func TargetOcpusPerNodeInput() *f64
```

- *Type:* *f64

---

##### `TargetShapeInput`<sup>Optional</sup> <a name="TargetShapeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShapeInput"></a>

```go
func TargetShapeInput() *string
```

- *Type:* *string

---

##### `TimeRecurrenceInput`<sup>Optional</sup> <a name="TimeRecurrenceInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrenceInput"></a>

```go
func TimeRecurrenceInput() *string
```

- *Type:* *string

---

##### `TargetMemoryPerNode`<sup>Required</sup> <a name="TargetMemoryPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetMemoryPerNode"></a>

```go
func TargetMemoryPerNode() *f64
```

- *Type:* *f64

---

##### `TargetOcpusPerNode`<sup>Required</sup> <a name="TargetOcpusPerNode" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetOcpusPerNode"></a>

```go
func TargetOcpusPerNode() *f64
```

- *Type:* *f64

---

##### `TargetShape`<sup>Required</sup> <a name="TargetShape" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.targetShape"></a>

```go
func TargetShape() *string
```

- *Type:* *string

---

##### `TimeRecurrence`<sup>Required</sup> <a name="TimeRecurrence" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.timeRecurrence"></a>

```go
func TimeRecurrence() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyDetailsScheduleDetailsTimeAndVerticalScalingConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyOutputReference <a name="BdsAutoScalingConfigurationPolicyOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules">PutRules</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRules` <a name="PutRules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules"></a>

```go
func PutRules(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.putRules.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rules">Rules</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList">BdsAutoScalingConfigurationPolicyRulesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyTypeInput">PolicyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rulesInput">RulesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyType">PolicyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rules"></a>

```go
func Rules() BdsAutoScalingConfigurationPolicyRulesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList">BdsAutoScalingConfigurationPolicyRulesList</a>

---

##### `PolicyTypeInput`<sup>Optional</sup> <a name="PolicyTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyTypeInput"></a>

```go
func PolicyTypeInput() *string
```

- *Type:* *string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.rulesInput"></a>

```go
func RulesInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyType`<sup>Required</sup> <a name="PolicyType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.policyType"></a>

```go
func PolicyType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicy
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicy">BdsAutoScalingConfigurationPolicy</a>

---


### BdsAutoScalingConfigurationPolicyRulesList <a name="BdsAutoScalingConfigurationPolicyRulesList" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyRulesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BdsAutoScalingConfigurationPolicyRulesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get"></a>

```go
func Get(index *f64) BdsAutoScalingConfigurationPolicyRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationPolicyRulesMetricOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesMetricOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyRulesMetricOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold">PutThreshold</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutThreshold` <a name="PutThreshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold"></a>

```go
func PutThreshold(value BdsAutoScalingConfigurationPolicyRulesMetricThreshold)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.putThreshold.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold">Threshold</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricTypeInput">MetricTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.thresholdInput">ThresholdInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType">MetricType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Threshold`<sup>Required</sup> <a name="Threshold" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.threshold"></a>

```go
func Threshold() BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference</a>

---

##### `MetricTypeInput`<sup>Optional</sup> <a name="MetricTypeInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricTypeInput"></a>

```go
func MetricTypeInput() *string
```

- *Type:* *string

---

##### `ThresholdInput`<sup>Optional</sup> <a name="ThresholdInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.thresholdInput"></a>

```go
func ThresholdInput() BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---

##### `MetricType`<sup>Required</sup> <a name="MetricType" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.metricType"></a>

```go
func MetricType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

---


### BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operatorInput">OperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.valueInput">ValueInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator">Operator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value">Value</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operatorInput"></a>

```go
func OperatorInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.valueInput"></a>

```go
func ValueInput() *f64
```

- *Type:* *f64

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.operator"></a>

```go
func Operator() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.value"></a>

```go
func Value() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThresholdOutputReference.property.internalValue"></a>

```go
func InternalValue() BdsAutoScalingConfigurationPolicyRulesMetricThreshold
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricThreshold">BdsAutoScalingConfigurationPolicyRulesMetricThreshold</a>

---


### BdsAutoScalingConfigurationPolicyRulesOutputReference <a name="BdsAutoScalingConfigurationPolicyRulesOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationPolicyRulesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BdsAutoScalingConfigurationPolicyRulesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric">PutMetric</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMetric` <a name="PutMetric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric"></a>

```go
func PutMetric(value BdsAutoScalingConfigurationPolicyRulesMetric)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.putMetric.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric">Metric</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.actionInput">ActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metricInput">MetricInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.action">Action</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Metric`<sup>Required</sup> <a name="Metric" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metric"></a>

```go
func Metric() BdsAutoScalingConfigurationPolicyRulesMetricOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetricOutputReference">BdsAutoScalingConfigurationPolicyRulesMetricOutputReference</a>

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.actionInput"></a>

```go
func ActionInput() *string
```

- *Type:* *string

---

##### `MetricInput`<sup>Optional</sup> <a name="MetricInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.metricInput"></a>

```go
func MetricInput() BdsAutoScalingConfigurationPolicyRulesMetric
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesMetric">BdsAutoScalingConfigurationPolicyRulesMetric</a>

---

##### `Action`<sup>Required</sup> <a name="Action" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.action"></a>

```go
func Action() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationPolicyRulesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BdsAutoScalingConfigurationTimeoutsOutputReference <a name="BdsAutoScalingConfigurationTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/bdsautoscalingconfiguration"

bdsautoscalingconfiguration.NewBdsAutoScalingConfigurationTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BdsAutoScalingConfigurationTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.bdsAutoScalingConfiguration.BdsAutoScalingConfigurationTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



