# `apmSyntheticsOnPremiseVantagePointWorker` Submodule <a name="`apmSyntheticsOnPremiseVantagePointWorker` Submodule" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApmSyntheticsOnPremiseVantagePointWorker <a name="ApmSyntheticsOnPremiseVantagePointWorker" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker oci_apm_synthetics_on_premise_vantage_point_worker}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorker(scope Construct, id *string, config ApmSyntheticsOnPremiseVantagePointWorkerConfig) ApmSyntheticsOnPremiseVantagePointWorker
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig">ApmSyntheticsOnPremiseVantagePointWorkerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig">ApmSyntheticsOnPremiseVantagePointWorkerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails">ResetConfigurationDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority">ResetPriority</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus">ResetStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType">ResetWorkerType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts"></a>

```go
func PutTimeouts(value ApmSyntheticsOnPremiseVantagePointWorkerTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

---

##### `ResetConfigurationDetails` <a name="ResetConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetConfigurationDetails"></a>

```go
func ResetConfigurationDetails()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetId"></a>

```go
func ResetId()
```

##### `ResetPriority` <a name="ResetPriority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetPriority"></a>

```go
func ResetPriority()
```

##### `ResetStatus` <a name="ResetStatus" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetStatus"></a>

```go
func ResetStatus()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetWorkerType` <a name="ResetWorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.resetWorkerType"></a>

```go
func ResetWorkerType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorker_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorker_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorker_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorker_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ApmSyntheticsOnPremiseVantagePointWorker resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ApmSyntheticsOnPremiseVantagePointWorker to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ApmSyntheticsOnPremiseVantagePointWorker that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ApmSyntheticsOnPremiseVantagePointWorker to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo">GeoInfo</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo">IdentityInfo</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList">MonitorList</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId">OpvpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName">OpvpName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId">RuntimeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp">TimeLastSyncUp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails">VersionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput">ApmDomainIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput">ConfigurationDetailsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput">OnPremiseVantagePointIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput">PriorityInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput">ResourcePrincipalTokenPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput">WorkerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails">ConfigurationDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId">OnPremiseVantagePointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority">Priority</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey">ResourcePrincipalTokenPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType">WorkerType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `GeoInfo`<sup>Required</sup> <a name="GeoInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.geoInfo"></a>

```go
func GeoInfo() *string
```

- *Type:* *string

---

##### `IdentityInfo`<sup>Required</sup> <a name="IdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.identityInfo"></a>

```go
func IdentityInfo() ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList</a>

---

##### `MonitorList`<sup>Required</sup> <a name="MonitorList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.monitorList"></a>

```go
func MonitorList() ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList</a>

---

##### `OpvpId`<sup>Required</sup> <a name="OpvpId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpId"></a>

```go
func OpvpId() *string
```

- *Type:* *string

---

##### `OpvpName`<sup>Required</sup> <a name="OpvpName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.opvpName"></a>

```go
func OpvpName() *string
```

- *Type:* *string

---

##### `RuntimeId`<sup>Required</sup> <a name="RuntimeId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.runtimeId"></a>

```go
func RuntimeId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeLastSyncUp`<sup>Required</sup> <a name="TimeLastSyncUp" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeLastSyncUp"></a>

```go
func TimeLastSyncUp() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeouts"></a>

```go
func Timeouts() ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference">ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VersionDetails`<sup>Required</sup> <a name="VersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionDetails"></a>

```go
func VersionDetails() ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList</a>

---

##### `ApmDomainIdInput`<sup>Optional</sup> <a name="ApmDomainIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainIdInput"></a>

```go
func ApmDomainIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationDetailsInput`<sup>Optional</sup> <a name="ConfigurationDetailsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetailsInput"></a>

```go
func ConfigurationDetailsInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OnPremiseVantagePointIdInput`<sup>Optional</sup> <a name="OnPremiseVantagePointIdInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointIdInput"></a>

```go
func OnPremiseVantagePointIdInput() *string
```

- *Type:* *string

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priorityInput"></a>

```go
func PriorityInput() *f64
```

- *Type:* *f64

---

##### `ResourcePrincipalTokenPublicKeyInput`<sup>Optional</sup> <a name="ResourcePrincipalTokenPublicKeyInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKeyInput"></a>

```go
func ResourcePrincipalTokenPublicKeyInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `WorkerTypeInput`<sup>Optional</sup> <a name="WorkerTypeInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerTypeInput"></a>

```go
func WorkerTypeInput() *string
```

- *Type:* *string

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.apmDomainId"></a>

```go
func ApmDomainId() *string
```

- *Type:* *string

---

##### `ConfigurationDetails`<sup>Required</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.configurationDetails"></a>

```go
func ConfigurationDetails() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OnPremiseVantagePointId`<sup>Required</sup> <a name="OnPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.onPremiseVantagePointId"></a>

```go
func OnPremiseVantagePointId() *string
```

- *Type:* *string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.priority"></a>

```go
func Priority() *f64
```

- *Type:* *f64

---

##### `ResourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="ResourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.resourcePrincipalTokenPublicKey"></a>

```go
func ResourcePrincipalTokenPublicKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `WorkerType`<sup>Required</sup> <a name="WorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.workerType"></a>

```go
func WorkerType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorker.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerConfig <a name="ApmSyntheticsOnPremiseVantagePointWorkerConfig" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

&apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorkerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ApmDomainId: *string,
	Name: *string,
	OnPremiseVantagePointId: *string,
	ResourcePrincipalTokenPublicKey: *string,
	Version: *string,
	ConfigurationDetails: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	Priority: *f64,
	Status: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts,
	WorkerType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId">ApmDomainId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId">OnPremiseVantagePointId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey">ResourcePrincipalTokenPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version">Version</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails">ConfigurationDetails</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority">Priority</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status">Status</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType">WorkerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ApmDomainId`<sup>Required</sup> <a name="ApmDomainId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.apmDomainId"></a>

```go
ApmDomainId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#apm_domain_id ApmSyntheticsOnPremiseVantagePointWorker#apm_domain_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#name ApmSyntheticsOnPremiseVantagePointWorker#name}.

---

##### `OnPremiseVantagePointId`<sup>Required</sup> <a name="OnPremiseVantagePointId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.onPremiseVantagePointId"></a>

```go
OnPremiseVantagePointId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#on_premise_vantage_point_id ApmSyntheticsOnPremiseVantagePointWorker#on_premise_vantage_point_id}.

---

##### `ResourcePrincipalTokenPublicKey`<sup>Required</sup> <a name="ResourcePrincipalTokenPublicKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.resourcePrincipalTokenPublicKey"></a>

```go
ResourcePrincipalTokenPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#resource_principal_token_public_key ApmSyntheticsOnPremiseVantagePointWorker#resource_principal_token_public_key}.

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#version ApmSyntheticsOnPremiseVantagePointWorker#version}.

---

##### `ConfigurationDetails`<sup>Optional</sup> <a name="ConfigurationDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.configurationDetails"></a>

```go
ConfigurationDetails *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#configuration_details ApmSyntheticsOnPremiseVantagePointWorker#configuration_details}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#defined_tags ApmSyntheticsOnPremiseVantagePointWorker#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#freeform_tags ApmSyntheticsOnPremiseVantagePointWorker#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#id ApmSyntheticsOnPremiseVantagePointWorker#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Priority`<sup>Optional</sup> <a name="Priority" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.priority"></a>

```go
Priority *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#priority ApmSyntheticsOnPremiseVantagePointWorker#priority}.

---

##### `Status`<sup>Optional</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.status"></a>

```go
Status *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#status ApmSyntheticsOnPremiseVantagePointWorker#status}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.timeouts"></a>

```go
Timeouts ApmSyntheticsOnPremiseVantagePointWorkerTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts">ApmSyntheticsOnPremiseVantagePointWorkerTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#timeouts ApmSyntheticsOnPremiseVantagePointWorker#timeouts}

---

##### `WorkerType`<sup>Optional</sup> <a name="WorkerType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerConfig.property.workerType"></a>

```go
WorkerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#worker_type ApmSyntheticsOnPremiseVantagePointWorker#worker_type}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

&apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo {

}
```


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

&apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct {

}
```


### ApmSyntheticsOnPremiseVantagePointWorkerTimeouts <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeouts" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

&apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#create ApmSyntheticsOnPremiseVantagePointWorker#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#delete ApmSyntheticsOnPremiseVantagePointWorker#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/apm_synthetics_on_premise_vantage_point_worker#update ApmSyntheticsOnPremiseVantagePointWorker#update}.

---

### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

&apmsyntheticsonpremisevantagepointworker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get"></a>

```go
func Get(index *f64) ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId">ApmShortId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint">CollectorEndPoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApmShortId`<sup>Required</sup> <a name="ApmShortId" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.apmShortId"></a>

```go
func ApmShortId() *string
```

- *Type:* *string

---

##### `CollectorEndPoint`<sup>Required</sup> <a name="CollectorEndPoint" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.collectorEndPoint"></a>

```go
func CollectorEndPoint() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo">ApmSyntheticsOnPremiseVantagePointWorkerIdentityInfo</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get"></a>

```go
func Get(index *f64) ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow">IsRunNow</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType">MonitorType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned">TimeAssigned</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IsRunNow`<sup>Required</sup> <a name="IsRunNow" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.isRunNow"></a>

```go
func IsRunNow() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `MonitorType`<sup>Required</sup> <a name="MonitorType" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.monitorType"></a>

```go
func MonitorType() *string
```

- *Type:* *string

---

##### `TimeAssigned`<sup>Required</sup> <a name="TimeAssigned" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.timeAssigned"></a>

```go
func TimeAssigned() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStructOutputReference.property.internalValue"></a>

```go
func InternalValue() ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct">ApmSyntheticsOnPremiseVantagePointWorkerMonitorListStruct</a>

---


### ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get"></a>

```go
func Get(index *f64) ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference <a name="ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/apmsyntheticsonpremisevantagepointworker"

apmsyntheticsonpremisevantagepointworker.NewApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion">LatestVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion">MinSupportedVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version">Version</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.latestVersion"></a>

```go
func LatestVersion() *string
```

- *Type:* *string

---

##### `MinSupportedVersion`<sup>Required</sup> <a name="MinSupportedVersion" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.minSupportedVersion"></a>

```go
func MinSupportedVersion() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.apmSyntheticsOnPremiseVantagePointWorker.ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails">ApmSyntheticsOnPremiseVantagePointWorkerVersionDetails</a>

---



