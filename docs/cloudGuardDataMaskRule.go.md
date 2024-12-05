# `cloudGuardDataMaskRule` Submodule <a name="`cloudGuardDataMaskRule` Submodule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudGuardDataMaskRule <a name="CloudGuardDataMaskRule" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule oci_cloud_guard_data_mask_rule}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.NewCloudGuardDataMaskRule(scope Construct, id *string, config CloudGuardDataMaskRuleConfig) CloudGuardDataMaskRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig">CloudGuardDataMaskRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig">CloudGuardDataMaskRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected">PutTargetSelected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus">ResetDataMaskRuleStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTargetSelected` <a name="PutTargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected"></a>

```go
func PutTargetSelected(value CloudGuardDataMaskRuleTargetSelected)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTargetSelected.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts"></a>

```go
func PutTimeouts(value CloudGuardDataMaskRuleTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

---

##### `ResetDataMaskRuleStatus` <a name="ResetDataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDataMaskRuleStatus"></a>

```go
func ResetDataMaskRuleStatus()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDescription` <a name="ResetDescription" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.CloudGuardDataMaskRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.CloudGuardDataMaskRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.CloudGuardDataMaskRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.CloudGuardDataMaskRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CloudGuardDataMaskRule resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CloudGuardDataMaskRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CloudGuardDataMaskRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CloudGuardDataMaskRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails">LifecyleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected">TargetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput">DataMaskCategoriesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput">DataMaskRuleStatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput">IamGroupIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput">TargetSelectedInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories">DataMaskCategories</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus">DataMaskRuleStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId">IamGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LifecyleDetails`<sup>Required</sup> <a name="LifecyleDetails" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.lifecyleDetails"></a>

```go
func LifecyleDetails() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TargetSelected`<sup>Required</sup> <a name="TargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelected"></a>

```go
func TargetSelected() CloudGuardDataMaskRuleTargetSelectedOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference">CloudGuardDataMaskRuleTargetSelectedOutputReference</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeouts"></a>

```go
func Timeouts() CloudGuardDataMaskRuleTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference">CloudGuardDataMaskRuleTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DataMaskCategoriesInput`<sup>Optional</sup> <a name="DataMaskCategoriesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategoriesInput"></a>

```go
func DataMaskCategoriesInput() *[]*string
```

- *Type:* *[]*string

---

##### `DataMaskRuleStatusInput`<sup>Optional</sup> <a name="DataMaskRuleStatusInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatusInput"></a>

```go
func DataMaskRuleStatusInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IamGroupIdInput`<sup>Optional</sup> <a name="IamGroupIdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupIdInput"></a>

```go
func IamGroupIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TargetSelectedInput`<sup>Optional</sup> <a name="TargetSelectedInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.targetSelectedInput"></a>

```go
func TargetSelectedInput() CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DataMaskCategories`<sup>Required</sup> <a name="DataMaskCategories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskCategories"></a>

```go
func DataMaskCategories() *[]*string
```

- *Type:* *[]*string

---

##### `DataMaskRuleStatus`<sup>Required</sup> <a name="DataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.dataMaskRuleStatus"></a>

```go
func DataMaskRuleStatus() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IamGroupId`<sup>Required</sup> <a name="IamGroupId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.iamGroupId"></a>

```go
func IamGroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CloudGuardDataMaskRuleConfig <a name="CloudGuardDataMaskRuleConfig" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

&cloudguarddatamaskrule.CloudGuardDataMaskRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DataMaskCategories: *[]*string,
	DisplayName: *string,
	IamGroupId: *string,
	TargetSelected: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected,
	DataMaskRuleStatus: *string,
	DefinedTags: *map[string]*string,
	Description: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories">DataMaskCategories</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId">IamGroupId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected">TargetSelected</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | target_selected block. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus">DataMaskRuleStatus</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#compartment_id CloudGuardDataMaskRule#compartment_id}.

---

##### `DataMaskCategories`<sup>Required</sup> <a name="DataMaskCategories" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskCategories"></a>

```go
DataMaskCategories *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_categories CloudGuardDataMaskRule#data_mask_categories}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#display_name CloudGuardDataMaskRule#display_name}.

---

##### `IamGroupId`<sup>Required</sup> <a name="IamGroupId" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.iamGroupId"></a>

```go
IamGroupId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#iam_group_id CloudGuardDataMaskRule#iam_group_id}.

---

##### `TargetSelected`<sup>Required</sup> <a name="TargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.targetSelected"></a>

```go
TargetSelected CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

target_selected block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#target_selected CloudGuardDataMaskRule#target_selected}

---

##### `DataMaskRuleStatus`<sup>Optional</sup> <a name="DataMaskRuleStatus" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.dataMaskRuleStatus"></a>

```go
DataMaskRuleStatus *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#data_mask_rule_status CloudGuardDataMaskRule#data_mask_rule_status}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#defined_tags CloudGuardDataMaskRule#defined_tags}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#description CloudGuardDataMaskRule#description}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#freeform_tags CloudGuardDataMaskRule#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#id CloudGuardDataMaskRule#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#state CloudGuardDataMaskRule#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleConfig.property.timeouts"></a>

```go
Timeouts CloudGuardDataMaskRuleTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts">CloudGuardDataMaskRuleTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#timeouts CloudGuardDataMaskRule#timeouts}

---

### CloudGuardDataMaskRuleTargetSelected <a name="CloudGuardDataMaskRuleTargetSelected" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

&cloudguarddatamaskrule.CloudGuardDataMaskRuleTargetSelected {
	Kind: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind">Kind</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values">Values</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}. |

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.kind"></a>

```go
Kind *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#kind CloudGuardDataMaskRule#kind}.

---

##### `Values`<sup>Optional</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#values CloudGuardDataMaskRule#values}.

---

### CloudGuardDataMaskRuleTimeouts <a name="CloudGuardDataMaskRuleTimeouts" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

&cloudguarddatamaskrule.CloudGuardDataMaskRuleTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#create CloudGuardDataMaskRule#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#delete CloudGuardDataMaskRule#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/cloud_guard_data_mask_rule#update CloudGuardDataMaskRule#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CloudGuardDataMaskRuleTargetSelectedOutputReference <a name="CloudGuardDataMaskRuleTargetSelectedOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.NewCloudGuardDataMaskRuleTargetSelectedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGuardDataMaskRuleTargetSelectedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetValues` <a name="ResetValues" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput">KindInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind">Kind</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KindInput`<sup>Optional</sup> <a name="KindInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kindInput"></a>

```go
func KindInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Kind`<sup>Required</sup> <a name="Kind" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.kind"></a>

```go
func Kind() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelectedOutputReference.property.internalValue"></a>

```go
func InternalValue() CloudGuardDataMaskRuleTargetSelected
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTargetSelected">CloudGuardDataMaskRuleTargetSelected</a>

---


### CloudGuardDataMaskRuleTimeoutsOutputReference <a name="CloudGuardDataMaskRuleTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/cloudguarddatamaskrule"

cloudguarddatamaskrule.NewCloudGuardDataMaskRuleTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CloudGuardDataMaskRuleTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.cloudGuardDataMaskRule.CloudGuardDataMaskRuleTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



