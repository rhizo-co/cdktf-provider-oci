# `dataSafeSdmMaskingPolicyDifference` Submodule <a name="`dataSafeSdmMaskingPolicyDifference` Submodule" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataSafeSdmMaskingPolicyDifference <a name="DataSafeSdmMaskingPolicyDifference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference oci_data_safe_sdm_masking_policy_difference}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.NewDataSafeSdmMaskingPolicyDifference(scope Construct, id *string, config DataSafeSdmMaskingPolicyDifferenceConfig) DataSafeSdmMaskingPolicyDifference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig">DataSafeSdmMaskingPolicyDifferenceConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType">ResetDifferenceType</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts"></a>

```go
func PutTimeouts(value DataSafeSdmMaskingPolicyDifferenceTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDifferenceType` <a name="ResetDifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDifferenceType"></a>

```go
func ResetDifferenceType()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetId"></a>

```go
func ResetId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifference_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifference_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifference_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifference_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a DataSafeSdmMaskingPolicyDifference resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataSafeSdmMaskingPolicyDifference to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataSafeSdmMaskingPolicyDifference that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the DataSafeSdmMaskingPolicyDifference to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId">SensitiveDataModelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted">TimeCreationStarted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput">DifferenceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput">MaskingPolicyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType">DifferenceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SensitiveDataModelId`<sup>Required</sup> <a name="SensitiveDataModelId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.sensitiveDataModelId"></a>

```go
func SensitiveDataModelId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeCreationStarted`<sup>Required</sup> <a name="TimeCreationStarted" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeCreationStarted"></a>

```go
func TimeCreationStarted() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeouts"></a>

```go
func Timeouts() DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference">DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference</a>

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DifferenceTypeInput`<sup>Optional</sup> <a name="DifferenceTypeInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceTypeInput"></a>

```go
func DifferenceTypeInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `MaskingPolicyIdInput`<sup>Optional</sup> <a name="MaskingPolicyIdInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyIdInput"></a>

```go
func MaskingPolicyIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DifferenceType`<sup>Required</sup> <a name="DifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.differenceType"></a>

```go
func DifferenceType() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.maskingPolicyId"></a>

```go
func MaskingPolicyId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifference.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataSafeSdmMaskingPolicyDifferenceConfig <a name="DataSafeSdmMaskingPolicyDifferenceConfig" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

&datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifferenceConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	MaskingPolicyId: *string,
	DefinedTags: *map[string]*string,
	DifferenceType: *string,
	DisplayName: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId">MaskingPolicyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType">DifferenceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#compartment_id DataSafeSdmMaskingPolicyDifference#compartment_id}.

---

##### `MaskingPolicyId`<sup>Required</sup> <a name="MaskingPolicyId" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.maskingPolicyId"></a>

```go
MaskingPolicyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#masking_policy_id DataSafeSdmMaskingPolicyDifference#masking_policy_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#defined_tags DataSafeSdmMaskingPolicyDifference#defined_tags}.

---

##### `DifferenceType`<sup>Optional</sup> <a name="DifferenceType" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.differenceType"></a>

```go
DifferenceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#difference_type DataSafeSdmMaskingPolicyDifference#difference_type}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#display_name DataSafeSdmMaskingPolicyDifference#display_name}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#freeform_tags DataSafeSdmMaskingPolicyDifference#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#id DataSafeSdmMaskingPolicyDifference#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceConfig.property.timeouts"></a>

```go
Timeouts DataSafeSdmMaskingPolicyDifferenceTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts">DataSafeSdmMaskingPolicyDifferenceTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#timeouts DataSafeSdmMaskingPolicyDifference#timeouts}

---

### DataSafeSdmMaskingPolicyDifferenceTimeouts <a name="DataSafeSdmMaskingPolicyDifferenceTimeouts" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

&datasafesdmmaskingpolicydifference.DataSafeSdmMaskingPolicyDifferenceTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#create DataSafeSdmMaskingPolicyDifference#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#delete DataSafeSdmMaskingPolicyDifference#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/data_safe_sdm_masking_policy_difference#update DataSafeSdmMaskingPolicyDifference#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference <a name="DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/datasafesdmmaskingpolicydifference"

datasafesdmmaskingpolicydifference.NewDataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.dataSafeSdmMaskingPolicyDifference.DataSafeSdmMaskingPolicyDifferenceTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



