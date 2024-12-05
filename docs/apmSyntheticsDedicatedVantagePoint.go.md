# `apmSyntheticsDedicatedVantagePoint` Submodule <a name="`apmSyntheticsDedicatedVantagePoint` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsDedicatedVantagePoint <a name="ApmSyntheticsDedicatedVantagePoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point oci_apm_synthetics_dedicated_vantage_point}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.NewApmSyntheticsDedicatedVantagePoint(scope Construct, id *string, config ApmSyntheticsDedicatedVantagePointConfig) ApmSyntheticsDedicatedVantagePoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig">ApmSyntheticsDedicatedVantagePointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig">ApmSyntheticsDedicatedVantagePointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails">PutDvpStackDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDvpStackDetails` <a name="PutDvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails"></a>

```go
func PutDvpStackDetails(value ApmSyntheticsDedicatedVantagePointDvpStackDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putDvpStackDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts"></a>

```go
func PutTimeouts(value ApmSyntheticsDedicatedVantagePointTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetId"></a>

```go
func ResetId()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApmSyntheticsDedicatedVantagePoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApmSyntheticsDedicatedVantagePoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApmSyntheticsDedicatedVantagePoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsDedicatedVantagePoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails">DvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap">MonitorStatusCountMap</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput">DvpStackDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region">Region</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DvpStackDetails`<sup>Required</sup> <a name="DvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetails"></a>

```go
func DvpStackDetails() ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference">ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference</a>

---

##### `MonitorStatusCountMap`<sup>Required</sup> <a name="MonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.monitorStatusCountMap"></a>

```go
func MonitorStatusCountMap() ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList</a>

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeouts"></a>

```go
func Timeouts() ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference">ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DvpStackDetailsInput`<sup>Optional</sup> <a name="DvpStackDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.dvpStackDetailsInput"></a>

```go
func DvpStackDetailsInput() ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsDedicatedVantagePointConfig <a name="ApmSyntheticsDedicatedVantagePointConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

&apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	DisplayName: *string,
	DvpStackDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails,
	Region: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails">DvpStackDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | dvp_stack_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region">Region</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#apm_domain_id ApmSyntheticsDedicatedVantagePoint#apm_domain_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#display_name ApmSyntheticsDedicatedVantagePoint#display_name}.

---

##### `DvpStackDetails`<sup>Required</sup> <a name="DvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.dvpStackDetails"></a>

```go
DvpStackDetails ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

dvp_stack_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_details ApmSyntheticsDedicatedVantagePoint#dvp_stack_details}

---

##### `Region`<sup>Required</sup> <a name="Region" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#region ApmSyntheticsDedicatedVantagePoint#region}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#defined_tags ApmSyntheticsDedicatedVantagePoint#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#freeform_tags ApmSyntheticsDedicatedVantagePoint#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#id ApmSyntheticsDedicatedVantagePoint#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#status ApmSyntheticsDedicatedVantagePoint#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointConfig.property.timeouts"></a>

```go
Timeouts ApmSyntheticsDedicatedVantagePointTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts">ApmSyntheticsDedicatedVantagePointTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#timeouts ApmSyntheticsDedicatedVantagePoint#timeouts}

---

### ApmSyntheticsDedicatedVantagePointDvpStackDetails <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

&apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails {
	DvpStackId: *string,
	DvpStackType: *string,
	DvpStreamId: *string,
	DvpVersion: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId">DvpStackId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType">DvpStackType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId">DvpStreamId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion">DvpVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}. |

---

##### `DvpStackId`<sup>Required</sup> <a name="DvpStackId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackId"></a>

```go
DvpStackId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_id ApmSyntheticsDedicatedVantagePoint#dvp_stack_id}.

---

##### `DvpStackType`<sup>Required</sup> <a name="DvpStackType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStackType"></a>

```go
DvpStackType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stack_type ApmSyntheticsDedicatedVantagePoint#dvp_stack_type}.

---

##### `DvpStreamId`<sup>Required</sup> <a name="DvpStreamId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpStreamId"></a>

```go
DvpStreamId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_stream_id ApmSyntheticsDedicatedVantagePoint#dvp_stream_id}.

---

##### `DvpVersion`<sup>Required</sup> <a name="DvpVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails.property.dvpVersion"></a>

```go
DvpVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#dvp_version ApmSyntheticsDedicatedVantagePoint#dvp_version}.

---

### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

&apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap {

}
```


### ApmSyntheticsDedicatedVantagePointTimeouts <a name="ApmSyntheticsDedicatedVantagePointTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

&apmsyntheticsdedicatedvantagepoint.ApmSyntheticsDedicatedVantagePointTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#create ApmSyntheticsDedicatedVantagePoint#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#delete ApmSyntheticsDedicatedVantagePoint#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_dedicated_vantage_point#update ApmSyntheticsDedicatedVantagePoint#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference <a name="ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.NewApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput">DvpStackIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput">DvpStackTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput">DvpStreamIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput">DvpVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId">DvpStackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType">DvpStackType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId">DvpStreamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion">DvpVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DvpStackIdInput`<sup>Optional</sup> <a name="DvpStackIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackIdInput"></a>

```go
func DvpStackIdInput() *string
```

- *Type:* *string

---

##### `DvpStackTypeInput`<sup>Optional</sup> <a name="DvpStackTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackTypeInput"></a>

```go
func DvpStackTypeInput() *string
```

- *Type:* *string

---

##### `DvpStreamIdInput`<sup>Optional</sup> <a name="DvpStreamIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamIdInput"></a>

```go
func DvpStreamIdInput() *string
```

- *Type:* *string

---

##### `DvpVersionInput`<sup>Optional</sup> <a name="DvpVersionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersionInput"></a>

```go
func DvpVersionInput() *string
```

- *Type:* *string

---

##### `DvpStackId`<sup>Required</sup> <a name="DvpStackId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackId"></a>

```go
func DvpStackId() *string
```

- *Type:* *string

---

##### `DvpStackType`<sup>Required</sup> <a name="DvpStackType" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStackType"></a>

```go
func DvpStackType() *string
```

- *Type:* *string

---

##### `DvpStreamId`<sup>Required</sup> <a name="DvpStreamId" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpStreamId"></a>

```go
func DvpStreamId() *string
```

- *Type:* *string

---

##### `DvpVersion`<sup>Required</sup> <a name="DvpVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.dvpVersion"></a>

```go
func DvpVersion() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApmSyntheticsDedicatedVantagePointDvpStackDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointDvpStackDetails">ApmSyntheticsDedicatedVantagePointDvpStackDetails</a>

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.NewApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get"></a>

```go
func Get(index *f64) ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference <a name="ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.NewApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled">Disabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled">Enabled</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid">Invalid</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total">Total</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.disabled"></a>

```go
func Disabled() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.enabled"></a>

```go
func Enabled() *f64
```

- *Type:* *f64

---

##### `Invalid`<sup>Required</sup> <a name="Invalid" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.invalid"></a>

```go
func Invalid() *f64
```

- *Type:* *f64

---

##### `Total`<sup>Required</sup> <a name="Total" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.total"></a>

```go
func Total() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMapOutputReference.property.internalValue"></a>

```go
func InternalValue() ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap">ApmSyntheticsDedicatedVantagePointMonitorStatusCountMap</a>

---


### ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference <a name="ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsdedicatedvantagepoint"

apmsyntheticsdedicatedvantagepoint.NewApmSyntheticsDedicatedVantagePointTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsDedicatedVantagePoint.ApmSyntheticsDedicatedVantagePointTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



