# `ocvpEsxiHost` Submodule <a name="`ocvpEsxiHost` Submodule" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpEsxiHost <a name="OcvpEsxiHost" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host oci_ocvp_esxi_host}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.NewOcvpEsxiHost(scope Construct, id *string, config OcvpEsxiHostConfig) OcvpEsxiHost
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig">OcvpEsxiHostConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId">ResetBillingDonorHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId">ResetClusterId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain">ResetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku">ResetCurrentSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion">ResetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId">ResetFailedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount">ResetHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName">ResetHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku">ResetNextSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId">ResetNonUpgradedEsxiHostId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId">ResetSddcId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts"></a>

```go
func PutTimeouts(value OcvpEsxiHostTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

---

##### `ResetBillingDonorHostId` <a name="ResetBillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetBillingDonorHostId"></a>

```go
func ResetBillingDonorHostId()
```

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetClusterId` <a name="ResetClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetClusterId"></a>

```go
func ResetClusterId()
```

##### `ResetComputeAvailabilityDomain` <a name="ResetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetComputeAvailabilityDomain"></a>

```go
func ResetComputeAvailabilityDomain()
```

##### `ResetCurrentSku` <a name="ResetCurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetCurrentSku"></a>

```go
func ResetCurrentSku()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEsxiSoftwareVersion` <a name="ResetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetEsxiSoftwareVersion"></a>

```go
func ResetEsxiSoftwareVersion()
```

##### `ResetFailedEsxiHostId` <a name="ResetFailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFailedEsxiHostId"></a>

```go
func ResetFailedEsxiHostId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHostOcpuCount` <a name="ResetHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostOcpuCount"></a>

```go
func ResetHostOcpuCount()
```

##### `ResetHostShapeName` <a name="ResetHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetHostShapeName"></a>

```go
func ResetHostShapeName()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetId"></a>

```go
func ResetId()
```

##### `ResetNextSku` <a name="ResetNextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNextSku"></a>

```go
func ResetNextSku()
```

##### `ResetNonUpgradedEsxiHostId` <a name="ResetNonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetNonUpgradedEsxiHostId"></a>

```go
func ResetNonUpgradedEsxiHostId()
```

##### `ResetSddcId` <a name="ResetSddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetSddcId"></a>

```go
func ResetSddcId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.OcvpEsxiHost_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.OcvpEsxiHost_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.OcvpEsxiHost_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.OcvpEsxiHost_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OcvpEsxiHost resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OcvpEsxiHost to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OcvpEsxiHost that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OcvpEsxiHost to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate">BillingContractEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId">ComputeInstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment">CurrentCommitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate">GracePeriodEndDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress">IsBillingContinuationInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress">IsBillingSwappingInProgress</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment">NextCommitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId">ReplacementEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId">SwapBillingHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId">UpgradedReplacementEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput">BillingDonorHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput">CurrentSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput">EsxiSoftwareVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput">FailedEsxiHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput">HostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput">HostShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput">NextSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput">NonUpgradedEsxiHostIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput">SddcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku">CurrentSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount">HostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName">HostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku">NextSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId">SddcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingContractEndDate`<sup>Required</sup> <a name="BillingContractEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingContractEndDate"></a>

```go
func BillingContractEndDate() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeInstanceId`<sup>Required</sup> <a name="ComputeInstanceId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeInstanceId"></a>

```go
func ComputeInstanceId() *string
```

- *Type:* *string

---

##### `CurrentCommitment`<sup>Required</sup> <a name="CurrentCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentCommitment"></a>

```go
func CurrentCommitment() *string
```

- *Type:* *string

---

##### `GracePeriodEndDate`<sup>Required</sup> <a name="GracePeriodEndDate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.gracePeriodEndDate"></a>

```go
func GracePeriodEndDate() *string
```

- *Type:* *string

---

##### `IsBillingContinuationInProgress`<sup>Required</sup> <a name="IsBillingContinuationInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingContinuationInProgress"></a>

```go
func IsBillingContinuationInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsBillingSwappingInProgress`<sup>Required</sup> <a name="IsBillingSwappingInProgress" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.isBillingSwappingInProgress"></a>

```go
func IsBillingSwappingInProgress() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NextCommitment`<sup>Required</sup> <a name="NextCommitment" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextCommitment"></a>

```go
func NextCommitment() *string
```

- *Type:* *string

---

##### `ReplacementEsxiHostId`<sup>Required</sup> <a name="ReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.replacementEsxiHostId"></a>

```go
func ReplacementEsxiHostId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SwapBillingHostId`<sup>Required</sup> <a name="SwapBillingHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.swapBillingHostId"></a>

```go
func SwapBillingHostId() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeouts"></a>

```go
func Timeouts() OcvpEsxiHostTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference">OcvpEsxiHostTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpgradedReplacementEsxiHostId`<sup>Required</sup> <a name="UpgradedReplacementEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.upgradedReplacementEsxiHostId"></a>

```go
func UpgradedReplacementEsxiHostId() *string
```

- *Type:* *string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.vmwareSoftwareVersion"></a>

```go
func VmwareSoftwareVersion() *string
```

- *Type:* *string

---

##### `BillingDonorHostIdInput`<sup>Optional</sup> <a name="BillingDonorHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostIdInput"></a>

```go
func BillingDonorHostIdInput() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomainInput"></a>

```go
func ComputeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CurrentSkuInput`<sup>Optional</sup> <a name="CurrentSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSkuInput"></a>

```go
func CurrentSkuInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EsxiSoftwareVersionInput`<sup>Optional</sup> <a name="EsxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersionInput"></a>

```go
func EsxiSoftwareVersionInput() *string
```

- *Type:* *string

---

##### `FailedEsxiHostIdInput`<sup>Optional</sup> <a name="FailedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostIdInput"></a>

```go
func FailedEsxiHostIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostOcpuCountInput`<sup>Optional</sup> <a name="HostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCountInput"></a>

```go
func HostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `HostShapeNameInput`<sup>Optional</sup> <a name="HostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeNameInput"></a>

```go
func HostShapeNameInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NextSkuInput`<sup>Optional</sup> <a name="NextSkuInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSkuInput"></a>

```go
func NextSkuInput() *string
```

- *Type:* *string

---

##### `NonUpgradedEsxiHostIdInput`<sup>Optional</sup> <a name="NonUpgradedEsxiHostIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostIdInput"></a>

```go
func NonUpgradedEsxiHostIdInput() *string
```

- *Type:* *string

---

##### `SddcIdInput`<sup>Optional</sup> <a name="SddcIdInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcIdInput"></a>

```go
func SddcIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `BillingDonorHostId`<sup>Required</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.billingDonorHostId"></a>

```go
func BillingDonorHostId() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.computeAvailabilityDomain"></a>

```go
func ComputeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `CurrentSku`<sup>Required</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.currentSku"></a>

```go
func CurrentSku() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.esxiSoftwareVersion"></a>

```go
func EsxiSoftwareVersion() *string
```

- *Type:* *string

---

##### `FailedEsxiHostId`<sup>Required</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.failedEsxiHostId"></a>

```go
func FailedEsxiHostId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HostOcpuCount`<sup>Required</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostOcpuCount"></a>

```go
func HostOcpuCount() *f64
```

- *Type:* *f64

---

##### `HostShapeName`<sup>Required</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.hostShapeName"></a>

```go
func HostShapeName() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NextSku`<sup>Required</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nextSku"></a>

```go
func NextSku() *string
```

- *Type:* *string

---

##### `NonUpgradedEsxiHostId`<sup>Required</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.nonUpgradedEsxiHostId"></a>

```go
func NonUpgradedEsxiHostId() *string
```

- *Type:* *string

---

##### `SddcId`<sup>Required</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.sddcId"></a>

```go
func SddcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHost.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpEsxiHostConfig <a name="OcvpEsxiHostConfig" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

&ocvpesxihost.OcvpEsxiHostConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	BillingDonorHostId: *string,
	CapacityReservationId: *string,
	ClusterId: *string,
	ComputeAvailabilityDomain: *string,
	CurrentSku: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	EsxiSoftwareVersion: *string,
	FailedEsxiHostId: *string,
	FreeformTags: *map[string]*string,
	HostOcpuCount: *f64,
	HostShapeName: *string,
	Id: *string,
	NextSku: *string,
	NonUpgradedEsxiHostId: *string,
	SddcId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.ocvpEsxiHost.OcvpEsxiHostTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId">BillingDonorHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku">CurrentSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId">FailedEsxiHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount">HostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName">HostShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku">NextSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId">NonUpgradedEsxiHostId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId">SddcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BillingDonorHostId`<sup>Optional</sup> <a name="BillingDonorHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.billingDonorHostId"></a>

```go
BillingDonorHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#billing_donor_host_id OcvpEsxiHost#billing_donor_host_id}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#capacity_reservation_id OcvpEsxiHost#capacity_reservation_id}.

---

##### `ClusterId`<sup>Optional</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#cluster_id OcvpEsxiHost#cluster_id}.

---

##### `ComputeAvailabilityDomain`<sup>Optional</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.computeAvailabilityDomain"></a>

```go
ComputeAvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#compute_availability_domain OcvpEsxiHost#compute_availability_domain}.

---

##### `CurrentSku`<sup>Optional</sup> <a name="CurrentSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.currentSku"></a>

```go
CurrentSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#current_sku OcvpEsxiHost#current_sku}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#defined_tags OcvpEsxiHost#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#display_name OcvpEsxiHost#display_name}.

---

##### `EsxiSoftwareVersion`<sup>Optional</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.esxiSoftwareVersion"></a>

```go
EsxiSoftwareVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#esxi_software_version OcvpEsxiHost#esxi_software_version}.

---

##### `FailedEsxiHostId`<sup>Optional</sup> <a name="FailedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.failedEsxiHostId"></a>

```go
FailedEsxiHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#failed_esxi_host_id OcvpEsxiHost#failed_esxi_host_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#freeform_tags OcvpEsxiHost#freeform_tags}.

---

##### `HostOcpuCount`<sup>Optional</sup> <a name="HostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostOcpuCount"></a>

```go
HostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_ocpu_count OcvpEsxiHost#host_ocpu_count}.

---

##### `HostShapeName`<sup>Optional</sup> <a name="HostShapeName" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.hostShapeName"></a>

```go
HostShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#host_shape_name OcvpEsxiHost#host_shape_name}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#id OcvpEsxiHost#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NextSku`<sup>Optional</sup> <a name="NextSku" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nextSku"></a>

```go
NextSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#next_sku OcvpEsxiHost#next_sku}.

---

##### `NonUpgradedEsxiHostId`<sup>Optional</sup> <a name="NonUpgradedEsxiHostId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.nonUpgradedEsxiHostId"></a>

```go
NonUpgradedEsxiHostId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#non_upgraded_esxi_host_id OcvpEsxiHost#non_upgraded_esxi_host_id}.

---

##### `SddcId`<sup>Optional</sup> <a name="SddcId" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.sddcId"></a>

```go
SddcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#sddc_id OcvpEsxiHost#sddc_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostConfig.property.timeouts"></a>

```go
Timeouts OcvpEsxiHostTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts">OcvpEsxiHostTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#timeouts OcvpEsxiHost#timeouts}

---

### OcvpEsxiHostTimeouts <a name="OcvpEsxiHostTimeouts" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

&ocvpesxihost.OcvpEsxiHostTimeouts {
	Create: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_esxi_host#create OcvpEsxiHost#create}.

---

## Classes <a name="Classes" id="Classes"></a>

### OcvpEsxiHostTimeoutsOutputReference <a name="OcvpEsxiHostTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpesxihost"

ocvpesxihost.NewOcvpEsxiHostTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OcvpEsxiHostTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpEsxiHost.OcvpEsxiHostTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



