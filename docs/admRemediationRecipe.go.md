# `admRemediationRecipe` Submodule <a name="`admRemediationRecipe` Submodule" id="rhizo-co-terraform-provider-oci.admRemediationRecipe"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AdmRemediationRecipe <a name="AdmRemediationRecipe" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe oci_adm_remediation_recipe}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipe(scope Construct, id *string, config AdmRemediationRecipeConfig) AdmRemediationRecipe
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig">AdmRemediationRecipeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration">PutDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration">PutScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration">PutVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState">ResetState</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDetectConfiguration` <a name="PutDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration"></a>

```go
func PutDetectConfiguration(value AdmRemediationRecipeDetectConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putDetectConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value AdmRemediationRecipeNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `PutScmConfiguration` <a name="PutScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration"></a>

```go
func PutScmConfiguration(value AdmRemediationRecipeScmConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putScmConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts"></a>

```go
func PutTimeouts(value AdmRemediationRecipeTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

---

##### `PutVerifyConfiguration` <a name="PutVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration"></a>

```go
func PutVerifyConfiguration(value AdmRemediationRecipeVerifyConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.putVerifyConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetId"></a>

```go
func ResetId()
```

##### `ResetState` <a name="ResetState" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetState"></a>

```go
func ResetState()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.AdmRemediationRecipe_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.AdmRemediationRecipe_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.AdmRemediationRecipe_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.AdmRemediationRecipe_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a AdmRemediationRecipe resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the AdmRemediationRecipe to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing AdmRemediationRecipe that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the AdmRemediationRecipe to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration">DetectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration">ScmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration">VerifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput">DetectConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput">IsRunTriggeredOnKbChangeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput">KnowledgeBaseIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput">ScmConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput">VerifyConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange">IsRunTriggeredOnKbChange</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state">State</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DetectConfiguration`<sup>Required</sup> <a name="DetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfiguration"></a>

```go
func DetectConfiguration() AdmRemediationRecipeDetectConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference">AdmRemediationRecipeDetectConfigurationOutputReference</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfiguration"></a>

```go
func NetworkConfiguration() AdmRemediationRecipeNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference">AdmRemediationRecipeNetworkConfigurationOutputReference</a>

---

##### `ScmConfiguration`<sup>Required</sup> <a name="ScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfiguration"></a>

```go
func ScmConfiguration() AdmRemediationRecipeScmConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference">AdmRemediationRecipeScmConfigurationOutputReference</a>

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeouts"></a>

```go
func Timeouts() AdmRemediationRecipeTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference">AdmRemediationRecipeTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VerifyConfiguration`<sup>Required</sup> <a name="VerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfiguration"></a>

```go
func VerifyConfiguration() AdmRemediationRecipeVerifyConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference">AdmRemediationRecipeVerifyConfigurationOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DetectConfigurationInput`<sup>Optional</sup> <a name="DetectConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.detectConfigurationInput"></a>

```go
func DetectConfigurationInput() AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `IsRunTriggeredOnKbChangeInput`<sup>Optional</sup> <a name="IsRunTriggeredOnKbChangeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChangeInput"></a>

```go
func IsRunTriggeredOnKbChangeInput() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseIdInput`<sup>Optional</sup> <a name="KnowledgeBaseIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseIdInput"></a>

```go
func KnowledgeBaseIdInput() *string
```

- *Type:* *string

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---

##### `ScmConfigurationInput`<sup>Optional</sup> <a name="ScmConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.scmConfigurationInput"></a>

```go
func ScmConfigurationInput() AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VerifyConfigurationInput`<sup>Optional</sup> <a name="VerifyConfigurationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.verifyConfigurationInput"></a>

```go
func VerifyConfigurationInput() AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRunTriggeredOnKbChange`<sup>Required</sup> <a name="IsRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.isRunTriggeredOnKbChange"></a>

```go
func IsRunTriggeredOnKbChange() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.knowledgeBaseId"></a>

```go
func KnowledgeBaseId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipe.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### AdmRemediationRecipeConfig <a name="AdmRemediationRecipeConfig" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	DetectConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration,
	IsRunTriggeredOnKbChange: interface{},
	KnowledgeBaseId: *string,
	NetworkConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration,
	ScmConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration,
	VerifyConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	State: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.admRemediationRecipe.AdmRemediationRecipeTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration">DetectConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | detect_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange">IsRunTriggeredOnKbChange</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId">KnowledgeBaseId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration">ScmConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | scm_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration">VerifyConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | verify_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state">State</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#compartment_id AdmRemediationRecipe#compartment_id}.

---

##### `DetectConfiguration`<sup>Required</sup> <a name="DetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.detectConfiguration"></a>

```go
DetectConfiguration AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

detect_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#detect_configuration AdmRemediationRecipe#detect_configuration}

---

##### `IsRunTriggeredOnKbChange`<sup>Required</sup> <a name="IsRunTriggeredOnKbChange" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.isRunTriggeredOnKbChange"></a>

```go
IsRunTriggeredOnKbChange interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_run_triggered_on_kb_change AdmRemediationRecipe#is_run_triggered_on_kb_change}.

---

##### `KnowledgeBaseId`<sup>Required</sup> <a name="KnowledgeBaseId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.knowledgeBaseId"></a>

```go
KnowledgeBaseId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#knowledge_base_id AdmRemediationRecipe#knowledge_base_id}.

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.networkConfiguration"></a>

```go
NetworkConfiguration AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#network_configuration AdmRemediationRecipe#network_configuration}

---

##### `ScmConfiguration`<sup>Required</sup> <a name="ScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.scmConfiguration"></a>

```go
ScmConfiguration AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

scm_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_configuration AdmRemediationRecipe#scm_configuration}

---

##### `VerifyConfiguration`<sup>Required</sup> <a name="VerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.verifyConfiguration"></a>

```go
VerifyConfiguration AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

verify_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#verify_configuration AdmRemediationRecipe#verify_configuration}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#defined_tags AdmRemediationRecipe#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#display_name AdmRemediationRecipe#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#freeform_tags AdmRemediationRecipe#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#id AdmRemediationRecipe#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `State`<sup>Optional</sup> <a name="State" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.state"></a>

```go
State *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#state AdmRemediationRecipe#state}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeConfig.property.timeouts"></a>

```go
Timeouts AdmRemediationRecipeTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts">AdmRemediationRecipeTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#timeouts AdmRemediationRecipe#timeouts}

---

### AdmRemediationRecipeDetectConfiguration <a name="AdmRemediationRecipeDetectConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeDetectConfiguration {
	Exclusions: *[]*string,
	MaxPermissibleCvssV2Score: *f64,
	MaxPermissibleCvssV3Score: *f64,
	MaxPermissibleSeverity: *string,
	UpgradePolicy: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score">MaxPermissibleCvssV2Score</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score">MaxPermissibleCvssV3Score</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity">MaxPermissibleSeverity</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy">UpgradePolicy</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}. |

---

##### `Exclusions`<sup>Optional</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.exclusions"></a>

```go
Exclusions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#exclusions AdmRemediationRecipe#exclusions}.

---

##### `MaxPermissibleCvssV2Score`<sup>Optional</sup> <a name="MaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV2Score"></a>

```go
MaxPermissibleCvssV2Score *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v2score AdmRemediationRecipe#max_permissible_cvss_v2score}.

---

##### `MaxPermissibleCvssV3Score`<sup>Optional</sup> <a name="MaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleCvssV3Score"></a>

```go
MaxPermissibleCvssV3Score *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_cvss_v3score AdmRemediationRecipe#max_permissible_cvss_v3score}.

---

##### `MaxPermissibleSeverity`<sup>Optional</sup> <a name="MaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.maxPermissibleSeverity"></a>

```go
MaxPermissibleSeverity *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#max_permissible_severity AdmRemediationRecipe#max_permissible_severity}.

---

##### `UpgradePolicy`<sup>Optional</sup> <a name="UpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration.property.upgradePolicy"></a>

```go
UpgradePolicy *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#upgrade_policy AdmRemediationRecipe#upgrade_policy}.

---

### AdmRemediationRecipeNetworkConfiguration <a name="AdmRemediationRecipeNetworkConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeNetworkConfiguration {
	SubnetId: *string,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#subnet_id AdmRemediationRecipe#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#nsg_ids AdmRemediationRecipe#nsg_ids}.

---

### AdmRemediationRecipeScmConfiguration <a name="AdmRemediationRecipeScmConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeScmConfiguration {
	Branch: *string,
	IsAutomergeEnabled: interface{},
	ScmType: *string,
	BuildFileLocation: *string,
	ExternalScmType: *string,
	OciCodeRepositoryId: *string,
	PatSecretId: *string,
	RepositoryUrl: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch">Branch</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled">IsAutomergeEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType">ScmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation">BuildFileLocation</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType">ExternalScmType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId">OciCodeRepositoryId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId">PatSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.branch"></a>

```go
Branch *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#branch AdmRemediationRecipe#branch}.

---

##### `IsAutomergeEnabled`<sup>Required</sup> <a name="IsAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.isAutomergeEnabled"></a>

```go
IsAutomergeEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#is_automerge_enabled AdmRemediationRecipe#is_automerge_enabled}.

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.scmType"></a>

```go
ScmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#scm_type AdmRemediationRecipe#scm_type}.

---

##### `BuildFileLocation`<sup>Optional</sup> <a name="BuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.buildFileLocation"></a>

```go
BuildFileLocation *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_file_location AdmRemediationRecipe#build_file_location}.

---

##### `ExternalScmType`<sup>Optional</sup> <a name="ExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.externalScmType"></a>

```go
ExternalScmType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#external_scm_type AdmRemediationRecipe#external_scm_type}.

---

##### `OciCodeRepositoryId`<sup>Optional</sup> <a name="OciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.ociCodeRepositoryId"></a>

```go
OciCodeRepositoryId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#oci_code_repository_id AdmRemediationRecipe#oci_code_repository_id}.

---

##### `PatSecretId`<sup>Optional</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.patSecretId"></a>

```go
PatSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

### AdmRemediationRecipeTimeouts <a name="AdmRemediationRecipeTimeouts" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#create AdmRemediationRecipe#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#delete AdmRemediationRecipe#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#update AdmRemediationRecipe#update}.

---

### AdmRemediationRecipeVerifyConfiguration <a name="AdmRemediationRecipeVerifyConfiguration" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

&admremediationrecipe.AdmRemediationRecipeVerifyConfiguration {
	BuildServiceType: *string,
	AdditionalParameters: *map[string]*string,
	JenkinsUrl: *string,
	JobName: *string,
	PatSecretId: *string,
	PipelineId: *string,
	RepositoryUrl: *string,
	TriggerSecretId: *string,
	Username: *string,
	WorkflowName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType">BuildServiceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl">JenkinsUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName">JobName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId">PatSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId">PipelineId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId">TriggerSecretId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName">WorkflowName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}. |

---

##### `BuildServiceType`<sup>Required</sup> <a name="BuildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.buildServiceType"></a>

```go
BuildServiceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#build_service_type AdmRemediationRecipe#build_service_type}.

---

##### `AdditionalParameters`<sup>Optional</sup> <a name="AdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.additionalParameters"></a>

```go
AdditionalParameters *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#additional_parameters AdmRemediationRecipe#additional_parameters}.

---

##### `JenkinsUrl`<sup>Optional</sup> <a name="JenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jenkinsUrl"></a>

```go
JenkinsUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#jenkins_url AdmRemediationRecipe#jenkins_url}.

---

##### `JobName`<sup>Optional</sup> <a name="JobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.jobName"></a>

```go
JobName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#job_name AdmRemediationRecipe#job_name}.

---

##### `PatSecretId`<sup>Optional</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.patSecretId"></a>

```go
PatSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pat_secret_id AdmRemediationRecipe#pat_secret_id}.

---

##### `PipelineId`<sup>Optional</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.pipelineId"></a>

```go
PipelineId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#pipeline_id AdmRemediationRecipe#pipeline_id}.

---

##### `RepositoryUrl`<sup>Optional</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.repositoryUrl"></a>

```go
RepositoryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#repository_url AdmRemediationRecipe#repository_url}.

---

##### `TriggerSecretId`<sup>Optional</sup> <a name="TriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.triggerSecretId"></a>

```go
TriggerSecretId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#trigger_secret_id AdmRemediationRecipe#trigger_secret_id}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#username AdmRemediationRecipe#username}.

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration.property.workflowName"></a>

```go
WorkflowName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/adm_remediation_recipe#workflow_name AdmRemediationRecipe#workflow_name}.

---

## Classes <a name="Classes" id="Classes"></a>

### AdmRemediationRecipeDetectConfigurationOutputReference <a name="AdmRemediationRecipeDetectConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipeDetectConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdmRemediationRecipeDetectConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions">ResetExclusions</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score">ResetMaxPermissibleCvssV2Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score">ResetMaxPermissibleCvssV3Score</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity">ResetMaxPermissibleSeverity</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy">ResetUpgradePolicy</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExclusions` <a name="ResetExclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetExclusions"></a>

```go
func ResetExclusions()
```

##### `ResetMaxPermissibleCvssV2Score` <a name="ResetMaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV2Score"></a>

```go
func ResetMaxPermissibleCvssV2Score()
```

##### `ResetMaxPermissibleCvssV3Score` <a name="ResetMaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleCvssV3Score"></a>

```go
func ResetMaxPermissibleCvssV3Score()
```

##### `ResetMaxPermissibleSeverity` <a name="ResetMaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetMaxPermissibleSeverity"></a>

```go
func ResetMaxPermissibleSeverity()
```

##### `ResetUpgradePolicy` <a name="ResetUpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.resetUpgradePolicy"></a>

```go
func ResetUpgradePolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput">ExclusionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput">MaxPermissibleCvssV2ScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput">MaxPermissibleCvssV3ScoreInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput">MaxPermissibleSeverityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput">UpgradePolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions">Exclusions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score">MaxPermissibleCvssV2Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score">MaxPermissibleCvssV3Score</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity">MaxPermissibleSeverity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy">UpgradePolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExclusionsInput`<sup>Optional</sup> <a name="ExclusionsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusionsInput"></a>

```go
func ExclusionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPermissibleCvssV2ScoreInput`<sup>Optional</sup> <a name="MaxPermissibleCvssV2ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2ScoreInput"></a>

```go
func MaxPermissibleCvssV2ScoreInput() *f64
```

- *Type:* *f64

---

##### `MaxPermissibleCvssV3ScoreInput`<sup>Optional</sup> <a name="MaxPermissibleCvssV3ScoreInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3ScoreInput"></a>

```go
func MaxPermissibleCvssV3ScoreInput() *f64
```

- *Type:* *f64

---

##### `MaxPermissibleSeverityInput`<sup>Optional</sup> <a name="MaxPermissibleSeverityInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverityInput"></a>

```go
func MaxPermissibleSeverityInput() *string
```

- *Type:* *string

---

##### `UpgradePolicyInput`<sup>Optional</sup> <a name="UpgradePolicyInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicyInput"></a>

```go
func UpgradePolicyInput() *string
```

- *Type:* *string

---

##### `Exclusions`<sup>Required</sup> <a name="Exclusions" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.exclusions"></a>

```go
func Exclusions() *[]*string
```

- *Type:* *[]*string

---

##### `MaxPermissibleCvssV2Score`<sup>Required</sup> <a name="MaxPermissibleCvssV2Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV2Score"></a>

```go
func MaxPermissibleCvssV2Score() *f64
```

- *Type:* *f64

---

##### `MaxPermissibleCvssV3Score`<sup>Required</sup> <a name="MaxPermissibleCvssV3Score" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleCvssV3Score"></a>

```go
func MaxPermissibleCvssV3Score() *f64
```

- *Type:* *f64

---

##### `MaxPermissibleSeverity`<sup>Required</sup> <a name="MaxPermissibleSeverity" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.maxPermissibleSeverity"></a>

```go
func MaxPermissibleSeverity() *string
```

- *Type:* *string

---

##### `UpgradePolicy`<sup>Required</sup> <a name="UpgradePolicy" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.upgradePolicy"></a>

```go
func UpgradePolicy() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AdmRemediationRecipeDetectConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeDetectConfiguration">AdmRemediationRecipeDetectConfiguration</a>

---


### AdmRemediationRecipeNetworkConfigurationOutputReference <a name="AdmRemediationRecipeNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipeNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdmRemediationRecipeNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AdmRemediationRecipeNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeNetworkConfiguration">AdmRemediationRecipeNetworkConfiguration</a>

---


### AdmRemediationRecipeScmConfigurationOutputReference <a name="AdmRemediationRecipeScmConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipeScmConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdmRemediationRecipeScmConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation">ResetBuildFileLocation</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType">ResetExternalScmType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId">ResetOciCodeRepositoryId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId">ResetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBuildFileLocation` <a name="ResetBuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetBuildFileLocation"></a>

```go
func ResetBuildFileLocation()
```

##### `ResetExternalScmType` <a name="ResetExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetExternalScmType"></a>

```go
func ResetExternalScmType()
```

##### `ResetOciCodeRepositoryId` <a name="ResetOciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetOciCodeRepositoryId"></a>

```go
func ResetOciCodeRepositoryId()
```

##### `ResetPatSecretId` <a name="ResetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetPatSecretId"></a>

```go
func ResetPatSecretId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetRepositoryUrl"></a>

```go
func ResetRepositoryUrl()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput">BranchInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput">BuildFileLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput">ExternalScmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput">IsAutomergeEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput">OciCodeRepositoryIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput">PatSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput">ScmTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch">Branch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation">BuildFileLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType">ExternalScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled">IsAutomergeEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId">OciCodeRepositoryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId">PatSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType">ScmType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchInput`<sup>Optional</sup> <a name="BranchInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branchInput"></a>

```go
func BranchInput() *string
```

- *Type:* *string

---

##### `BuildFileLocationInput`<sup>Optional</sup> <a name="BuildFileLocationInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocationInput"></a>

```go
func BuildFileLocationInput() *string
```

- *Type:* *string

---

##### `ExternalScmTypeInput`<sup>Optional</sup> <a name="ExternalScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmTypeInput"></a>

```go
func ExternalScmTypeInput() *string
```

- *Type:* *string

---

##### `IsAutomergeEnabledInput`<sup>Optional</sup> <a name="IsAutomergeEnabledInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabledInput"></a>

```go
func IsAutomergeEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `OciCodeRepositoryIdInput`<sup>Optional</sup> <a name="OciCodeRepositoryIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryIdInput"></a>

```go
func OciCodeRepositoryIdInput() *string
```

- *Type:* *string

---

##### `PatSecretIdInput`<sup>Optional</sup> <a name="PatSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretIdInput"></a>

```go
func PatSecretIdInput() *string
```

- *Type:* *string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `ScmTypeInput`<sup>Optional</sup> <a name="ScmTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmTypeInput"></a>

```go
func ScmTypeInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Branch`<sup>Required</sup> <a name="Branch" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.branch"></a>

```go
func Branch() *string
```

- *Type:* *string

---

##### `BuildFileLocation`<sup>Required</sup> <a name="BuildFileLocation" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.buildFileLocation"></a>

```go
func BuildFileLocation() *string
```

- *Type:* *string

---

##### `ExternalScmType`<sup>Required</sup> <a name="ExternalScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.externalScmType"></a>

```go
func ExternalScmType() *string
```

- *Type:* *string

---

##### `IsAutomergeEnabled`<sup>Required</sup> <a name="IsAutomergeEnabled" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.isAutomergeEnabled"></a>

```go
func IsAutomergeEnabled() interface{}
```

- *Type:* interface{}

---

##### `OciCodeRepositoryId`<sup>Required</sup> <a name="OciCodeRepositoryId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.ociCodeRepositoryId"></a>

```go
func OciCodeRepositoryId() *string
```

- *Type:* *string

---

##### `PatSecretId`<sup>Required</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.patSecretId"></a>

```go
func PatSecretId() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `ScmType`<sup>Required</sup> <a name="ScmType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.scmType"></a>

```go
func ScmType() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AdmRemediationRecipeScmConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeScmConfiguration">AdmRemediationRecipeScmConfiguration</a>

---


### AdmRemediationRecipeTimeoutsOutputReference <a name="AdmRemediationRecipeTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipeTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdmRemediationRecipeTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### AdmRemediationRecipeVerifyConfigurationOutputReference <a name="AdmRemediationRecipeVerifyConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/admremediationrecipe"

admremediationrecipe.NewAdmRemediationRecipeVerifyConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) AdmRemediationRecipeVerifyConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters">ResetAdditionalParameters</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl">ResetJenkinsUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName">ResetJobName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId">ResetPatSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId">ResetPipelineId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl">ResetRepositoryUrl</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId">ResetTriggerSecretId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdditionalParameters` <a name="ResetAdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetAdditionalParameters"></a>

```go
func ResetAdditionalParameters()
```

##### `ResetJenkinsUrl` <a name="ResetJenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJenkinsUrl"></a>

```go
func ResetJenkinsUrl()
```

##### `ResetJobName` <a name="ResetJobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetJobName"></a>

```go
func ResetJobName()
```

##### `ResetPatSecretId` <a name="ResetPatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPatSecretId"></a>

```go
func ResetPatSecretId()
```

##### `ResetPipelineId` <a name="ResetPipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetPipelineId"></a>

```go
func ResetPipelineId()
```

##### `ResetRepositoryUrl` <a name="ResetRepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetRepositoryUrl"></a>

```go
func ResetRepositoryUrl()
```

##### `ResetTriggerSecretId` <a name="ResetTriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetTriggerSecretId"></a>

```go
func ResetTriggerSecretId()
```

##### `ResetUsername` <a name="ResetUsername" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetUsername"></a>

```go
func ResetUsername()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.resetWorkflowName"></a>

```go
func ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput">AdditionalParametersInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput">BuildServiceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput">JenkinsUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput">JobNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput">PatSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput">PipelineIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput">RepositoryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput">TriggerSecretIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters">AdditionalParameters</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType">BuildServiceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl">JenkinsUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName">JobName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId">PatSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId">PipelineId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl">RepositoryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId">TriggerSecretId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName">WorkflowName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalParametersInput`<sup>Optional</sup> <a name="AdditionalParametersInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParametersInput"></a>

```go
func AdditionalParametersInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildServiceTypeInput`<sup>Optional</sup> <a name="BuildServiceTypeInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceTypeInput"></a>

```go
func BuildServiceTypeInput() *string
```

- *Type:* *string

---

##### `JenkinsUrlInput`<sup>Optional</sup> <a name="JenkinsUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrlInput"></a>

```go
func JenkinsUrlInput() *string
```

- *Type:* *string

---

##### `JobNameInput`<sup>Optional</sup> <a name="JobNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobNameInput"></a>

```go
func JobNameInput() *string
```

- *Type:* *string

---

##### `PatSecretIdInput`<sup>Optional</sup> <a name="PatSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretIdInput"></a>

```go
func PatSecretIdInput() *string
```

- *Type:* *string

---

##### `PipelineIdInput`<sup>Optional</sup> <a name="PipelineIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineIdInput"></a>

```go
func PipelineIdInput() *string
```

- *Type:* *string

---

##### `RepositoryUrlInput`<sup>Optional</sup> <a name="RepositoryUrlInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrlInput"></a>

```go
func RepositoryUrlInput() *string
```

- *Type:* *string

---

##### `TriggerSecretIdInput`<sup>Optional</sup> <a name="TriggerSecretIdInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretIdInput"></a>

```go
func TriggerSecretIdInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowNameInput"></a>

```go
func WorkflowNameInput() *string
```

- *Type:* *string

---

##### `AdditionalParameters`<sup>Required</sup> <a name="AdditionalParameters" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.additionalParameters"></a>

```go
func AdditionalParameters() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `BuildServiceType`<sup>Required</sup> <a name="BuildServiceType" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.buildServiceType"></a>

```go
func BuildServiceType() *string
```

- *Type:* *string

---

##### `JenkinsUrl`<sup>Required</sup> <a name="JenkinsUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jenkinsUrl"></a>

```go
func JenkinsUrl() *string
```

- *Type:* *string

---

##### `JobName`<sup>Required</sup> <a name="JobName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.jobName"></a>

```go
func JobName() *string
```

- *Type:* *string

---

##### `PatSecretId`<sup>Required</sup> <a name="PatSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.patSecretId"></a>

```go
func PatSecretId() *string
```

- *Type:* *string

---

##### `PipelineId`<sup>Required</sup> <a name="PipelineId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.pipelineId"></a>

```go
func PipelineId() *string
```

- *Type:* *string

---

##### `RepositoryUrl`<sup>Required</sup> <a name="RepositoryUrl" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.repositoryUrl"></a>

```go
func RepositoryUrl() *string
```

- *Type:* *string

---

##### `TriggerSecretId`<sup>Required</sup> <a name="TriggerSecretId" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.triggerSecretId"></a>

```go
func TriggerSecretId() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.workflowName"></a>

```go
func WorkflowName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() AdmRemediationRecipeVerifyConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.admRemediationRecipe.AdmRemediationRecipeVerifyConfiguration">AdmRemediationRecipeVerifyConfiguration</a>

---



