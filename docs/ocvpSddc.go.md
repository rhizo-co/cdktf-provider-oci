# `ocvpSddc` Submodule <a name="`ocvpSddc` Submodule" id="rhizo-co-terraform-provider-oci.ocvpSddc"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OcvpSddc <a name="OcvpSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc oci_ocvp_sddc}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddc(scope Construct, id *string, config OcvpSddcConfig) OcvpSddc
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig">OcvpSddcConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores">PutDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration">PutInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain">ResetComputeAvailabilityDomain</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores">ResetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount">ResetEsxiHostsCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion">ResetEsxiSoftwareVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction">ResetHcxAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId">ResetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration">ResetInitialConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount">ResetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku">ResetInitialSku</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix">ResetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled">ResetIsHcxEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled">ResetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc">ResetIsSingleHostSddc</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId">ResetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId">ResetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId">ResetNsxEdgeVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId">ResetNsxVtepVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId">ResetProvisioningSubnetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId">ResetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus">ResetRefreshHcxLicenseStatus</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId">ResetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys">ResetReservingHcxOnPremiseLicenseKeys</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId">ResetVmotionVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId">ResetVsanVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId">ResetVsphereVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr">ResetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDatastores` <a name="PutDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores"></a>

```go
func PutDatastores(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putDatastores.parameter.value"></a>

- *Type:* interface{}

---

##### `PutInitialConfiguration` <a name="PutInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration"></a>

```go
func PutInitialConfiguration(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putInitialConfiguration.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts"></a>

```go
func PutTimeouts(value OcvpSddcTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetComputeAvailabilityDomain` <a name="ResetComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetComputeAvailabilityDomain"></a>

```go
func ResetComputeAvailabilityDomain()
```

##### `ResetDatastores` <a name="ResetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDatastores"></a>

```go
func ResetDatastores()
```

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetEsxiHostsCount` <a name="ResetEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiHostsCount"></a>

```go
func ResetEsxiHostsCount()
```

##### `ResetEsxiSoftwareVersion` <a name="ResetEsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetEsxiSoftwareVersion"></a>

```go
func ResetEsxiSoftwareVersion()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetHcxAction` <a name="ResetHcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxAction"></a>

```go
func ResetHcxAction()
```

##### `ResetHcxVlanId` <a name="ResetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetHcxVlanId"></a>

```go
func ResetHcxVlanId()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialConfiguration` <a name="ResetInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialConfiguration"></a>

```go
func ResetInitialConfiguration()
```

##### `ResetInitialHostOcpuCount` <a name="ResetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostOcpuCount"></a>

```go
func ResetInitialHostOcpuCount()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialHostShapeName"></a>

```go
func ResetInitialHostShapeName()
```

##### `ResetInitialSku` <a name="ResetInitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInitialSku"></a>

```go
func ResetInitialSku()
```

##### `ResetInstanceDisplayNamePrefix` <a name="ResetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetInstanceDisplayNamePrefix"></a>

```go
func ResetInstanceDisplayNamePrefix()
```

##### `ResetIsHcxEnabled` <a name="ResetIsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsHcxEnabled"></a>

```go
func ResetIsHcxEnabled()
```

##### `ResetIsShieldedInstanceEnabled` <a name="ResetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsShieldedInstanceEnabled"></a>

```go
func ResetIsShieldedInstanceEnabled()
```

##### `ResetIsSingleHostSddc` <a name="ResetIsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetIsSingleHostSddc"></a>

```go
func ResetIsSingleHostSddc()
```

##### `ResetNsxEdgeUplink1VlanId` <a name="ResetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink1VlanId"></a>

```go
func ResetNsxEdgeUplink1VlanId()
```

##### `ResetNsxEdgeUplink2VlanId` <a name="ResetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeUplink2VlanId"></a>

```go
func ResetNsxEdgeUplink2VlanId()
```

##### `ResetNsxEdgeVtepVlanId` <a name="ResetNsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxEdgeVtepVlanId"></a>

```go
func ResetNsxEdgeVtepVlanId()
```

##### `ResetNsxVtepVlanId` <a name="ResetNsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetNsxVtepVlanId"></a>

```go
func ResetNsxVtepVlanId()
```

##### `ResetProvisioningSubnetId` <a name="ResetProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningSubnetId"></a>

```go
func ResetProvisioningSubnetId()
```

##### `ResetProvisioningVlanId` <a name="ResetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetProvisioningVlanId"></a>

```go
func ResetProvisioningVlanId()
```

##### `ResetRefreshHcxLicenseStatus` <a name="ResetRefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetRefreshHcxLicenseStatus"></a>

```go
func ResetRefreshHcxLicenseStatus()
```

##### `ResetReplicationVlanId` <a name="ResetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReplicationVlanId"></a>

```go
func ResetReplicationVlanId()
```

##### `ResetReservingHcxOnPremiseLicenseKeys` <a name="ResetReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetReservingHcxOnPremiseLicenseKeys"></a>

```go
func ResetReservingHcxOnPremiseLicenseKeys()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVmotionVlanId` <a name="ResetVmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVmotionVlanId"></a>

```go
func ResetVmotionVlanId()
```

##### `ResetVsanVlanId` <a name="ResetVsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsanVlanId"></a>

```go
func ResetVsanVlanId()
```

##### `ResetVsphereVlanId` <a name="ResetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetVsphereVlanId"></a>

```go
func ResetVsphereVlanId()
```

##### `ResetWorkloadNetworkCidr` <a name="ResetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.resetWorkloadNetworkCidr"></a>

```go
func ResetWorkloadNetworkCidr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.OcvpSddc_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.OcvpSddc_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.OcvpSddc_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.OcvpSddc_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a OcvpSddc resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the OcvpSddc to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing OcvpSddc that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the OcvpSddc to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount">ClustersCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn">HcxFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword">HcxInitialPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode">HcxMode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey">HcxOnPremKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses">HcxOnPremLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId">HcxPrivateIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration">InitialConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled">IsHcxEnterpriseEnabled</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade">IsHcxPendingDowngrade</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId">NsxEdgeUplinkIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn">NsxManagerFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword">NsxManagerInitialPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId">NsxManagerPrivateIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername">NsxManagerUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName">NsxOverlaySegmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd">TimeHcxBillingCycleEnd</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated">TimeHcxLicenseStatusUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses">UpgradeLicenses</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn">VcenterFqdn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword">VcenterInitialPassword</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId">VcenterPrivateIpId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername">VcenterUsername</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide">VsphereUpgradeGuide</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects">VsphereUpgradeObjects</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput">DatastoresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput">EsxiHostsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput">EsxiSoftwareVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput">HcxActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput">HcxVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput">InitialConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput">InitialHostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput">InitialSkuInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput">InstanceDisplayNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput">IsHcxEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput">IsShieldedInstanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput">IsSingleHostSddcInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput">NsxEdgeUplink1VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput">NsxEdgeUplink2VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput">NsxEdgeVtepVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput">NsxVtepVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput">ProvisioningSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput">ProvisioningVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput">RefreshHcxLicenseStatusInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput">ReplicationVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput">ReservingHcxOnPremiseLicenseKeysInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput">SshAuthorizedKeysInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput">VmotionVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput">VmwareSoftwareVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput">VsanVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput">VsphereVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput">WorkloadNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction">HcxAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId">HcxVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku">InitialSku</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId">ReplicationVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId">VmotionVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId">VsanVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId">VsphereVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.actualEsxiHostsCount"></a>

```go
func ActualEsxiHostsCount() *f64
```

- *Type:* *f64

---

##### `ClustersCount`<sup>Required</sup> <a name="ClustersCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.clustersCount"></a>

```go
func ClustersCount() *f64
```

- *Type:* *f64

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastores"></a>

```go
func Datastores() OcvpSddcDatastoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList">OcvpSddcDatastoresList</a>

---

##### `HcxFqdn`<sup>Required</sup> <a name="HcxFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxFqdn"></a>

```go
func HcxFqdn() *string
```

- *Type:* *string

---

##### `HcxInitialPassword`<sup>Required</sup> <a name="HcxInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxInitialPassword"></a>

```go
func HcxInitialPassword() *string
```

- *Type:* *string

---

##### `HcxMode`<sup>Required</sup> <a name="HcxMode" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxMode"></a>

```go
func HcxMode() *string
```

- *Type:* *string

---

##### `HcxOnPremKey`<sup>Required</sup> <a name="HcxOnPremKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremKey"></a>

```go
func HcxOnPremKey() *string
```

- *Type:* *string

---

##### `HcxOnPremLicenses`<sup>Required</sup> <a name="HcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxOnPremLicenses"></a>

```go
func HcxOnPremLicenses() OcvpSddcHcxOnPremLicensesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList">OcvpSddcHcxOnPremLicensesList</a>

---

##### `HcxPrivateIpId`<sup>Required</sup> <a name="HcxPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxPrivateIpId"></a>

```go
func HcxPrivateIpId() *string
```

- *Type:* *string

---

##### `InitialConfiguration`<sup>Required</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfiguration"></a>

```go
func InitialConfiguration() OcvpSddcInitialConfigurationList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList">OcvpSddcInitialConfigurationList</a>

---

##### `IsHcxEnterpriseEnabled`<sup>Required</sup> <a name="IsHcxEnterpriseEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnterpriseEnabled"></a>

```go
func IsHcxEnterpriseEnabled() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `IsHcxPendingDowngrade`<sup>Required</sup> <a name="IsHcxPendingDowngrade" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxPendingDowngrade"></a>

```go
func IsHcxPendingDowngrade() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NsxEdgeUplinkIpId`<sup>Required</sup> <a name="NsxEdgeUplinkIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplinkIpId"></a>

```go
func NsxEdgeUplinkIpId() *string
```

- *Type:* *string

---

##### `NsxManagerFqdn`<sup>Required</sup> <a name="NsxManagerFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerFqdn"></a>

```go
func NsxManagerFqdn() *string
```

- *Type:* *string

---

##### `NsxManagerInitialPassword`<sup>Required</sup> <a name="NsxManagerInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerInitialPassword"></a>

```go
func NsxManagerInitialPassword() *string
```

- *Type:* *string

---

##### `NsxManagerPrivateIpId`<sup>Required</sup> <a name="NsxManagerPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerPrivateIpId"></a>

```go
func NsxManagerPrivateIpId() *string
```

- *Type:* *string

---

##### `NsxManagerUsername`<sup>Required</sup> <a name="NsxManagerUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxManagerUsername"></a>

```go
func NsxManagerUsername() *string
```

- *Type:* *string

---

##### `NsxOverlaySegmentName`<sup>Required</sup> <a name="NsxOverlaySegmentName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxOverlaySegmentName"></a>

```go
func NsxOverlaySegmentName() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `TimeHcxBillingCycleEnd`<sup>Required</sup> <a name="TimeHcxBillingCycleEnd" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxBillingCycleEnd"></a>

```go
func TimeHcxBillingCycleEnd() *string
```

- *Type:* *string

---

##### `TimeHcxLicenseStatusUpdated`<sup>Required</sup> <a name="TimeHcxLicenseStatusUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeHcxLicenseStatusUpdated"></a>

```go
func TimeHcxLicenseStatusUpdated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeouts"></a>

```go
func Timeouts() OcvpSddcTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference">OcvpSddcTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `UpgradeLicenses`<sup>Required</sup> <a name="UpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.upgradeLicenses"></a>

```go
func UpgradeLicenses() OcvpSddcUpgradeLicensesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList">OcvpSddcUpgradeLicensesList</a>

---

##### `VcenterFqdn`<sup>Required</sup> <a name="VcenterFqdn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterFqdn"></a>

```go
func VcenterFqdn() *string
```

- *Type:* *string

---

##### `VcenterInitialPassword`<sup>Required</sup> <a name="VcenterInitialPassword" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterInitialPassword"></a>

```go
func VcenterInitialPassword() *string
```

- *Type:* *string

---

##### `VcenterPrivateIpId`<sup>Required</sup> <a name="VcenterPrivateIpId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterPrivateIpId"></a>

```go
func VcenterPrivateIpId() *string
```

- *Type:* *string

---

##### `VcenterUsername`<sup>Required</sup> <a name="VcenterUsername" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vcenterUsername"></a>

```go
func VcenterUsername() *string
```

- *Type:* *string

---

##### `VsphereUpgradeGuide`<sup>Required</sup> <a name="VsphereUpgradeGuide" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeGuide"></a>

```go
func VsphereUpgradeGuide() *string
```

- *Type:* *string

---

##### `VsphereUpgradeObjects`<sup>Required</sup> <a name="VsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereUpgradeObjects"></a>

```go
func VsphereUpgradeObjects() OcvpSddcVsphereUpgradeObjectsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList">OcvpSddcVsphereUpgradeObjectsList</a>

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomainInput"></a>

```go
func ComputeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `DatastoresInput`<sup>Optional</sup> <a name="DatastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.datastoresInput"></a>

```go
func DatastoresInput() interface{}
```

- *Type:* interface{}

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EsxiHostsCountInput`<sup>Optional</sup> <a name="EsxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCountInput"></a>

```go
func EsxiHostsCountInput() *f64
```

- *Type:* *f64

---

##### `EsxiSoftwareVersionInput`<sup>Optional</sup> <a name="EsxiSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersionInput"></a>

```go
func EsxiSoftwareVersionInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HcxActionInput`<sup>Optional</sup> <a name="HcxActionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxActionInput"></a>

```go
func HcxActionInput() *string
```

- *Type:* *string

---

##### `HcxVlanIdInput`<sup>Optional</sup> <a name="HcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanIdInput"></a>

```go
func HcxVlanIdInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialConfigurationInput`<sup>Optional</sup> <a name="InitialConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialConfigurationInput"></a>

```go
func InitialConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InitialHostOcpuCountInput`<sup>Optional</sup> <a name="InitialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCountInput"></a>

```go
func InitialHostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeNameInput"></a>

```go
func InitialHostShapeNameInput() *string
```

- *Type:* *string

---

##### `InitialSkuInput`<sup>Optional</sup> <a name="InitialSkuInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSkuInput"></a>

```go
func InitialSkuInput() *string
```

- *Type:* *string

---

##### `InstanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="InstanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefixInput"></a>

```go
func InstanceDisplayNamePrefixInput() *string
```

- *Type:* *string

---

##### `IsHcxEnabledInput`<sup>Optional</sup> <a name="IsHcxEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabledInput"></a>

```go
func IsHcxEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="IsShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabledInput"></a>

```go
func IsShieldedInstanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsSingleHostSddcInput`<sup>Optional</sup> <a name="IsSingleHostSddcInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddcInput"></a>

```go
func IsSingleHostSddcInput() interface{}
```

- *Type:* interface{}

---

##### `NsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanIdInput"></a>

```go
func NsxEdgeUplink1VlanIdInput() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanIdInput"></a>

```go
func NsxEdgeUplink2VlanIdInput() *string
```

- *Type:* *string

---

##### `NsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="NsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanIdInput"></a>

```go
func NsxEdgeVtepVlanIdInput() *string
```

- *Type:* *string

---

##### `NsxVtepVlanIdInput`<sup>Optional</sup> <a name="NsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanIdInput"></a>

```go
func NsxVtepVlanIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningSubnetIdInput`<sup>Optional</sup> <a name="ProvisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetIdInput"></a>

```go
func ProvisioningSubnetIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningVlanIdInput`<sup>Optional</sup> <a name="ProvisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanIdInput"></a>

```go
func ProvisioningVlanIdInput() *string
```

- *Type:* *string

---

##### `RefreshHcxLicenseStatusInput`<sup>Optional</sup> <a name="RefreshHcxLicenseStatusInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatusInput"></a>

```go
func RefreshHcxLicenseStatusInput() interface{}
```

- *Type:* interface{}

---

##### `ReplicationVlanIdInput`<sup>Optional</sup> <a name="ReplicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanIdInput"></a>

```go
func ReplicationVlanIdInput() *string
```

- *Type:* *string

---

##### `ReservingHcxOnPremiseLicenseKeysInput`<sup>Optional</sup> <a name="ReservingHcxOnPremiseLicenseKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeysInput"></a>

```go
func ReservingHcxOnPremiseLicenseKeysInput() *[]*string
```

- *Type:* *[]*string

---

##### `SshAuthorizedKeysInput`<sup>Optional</sup> <a name="SshAuthorizedKeysInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeysInput"></a>

```go
func SshAuthorizedKeysInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VmotionVlanIdInput`<sup>Optional</sup> <a name="VmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanIdInput"></a>

```go
func VmotionVlanIdInput() *string
```

- *Type:* *string

---

##### `VmwareSoftwareVersionInput`<sup>Optional</sup> <a name="VmwareSoftwareVersionInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersionInput"></a>

```go
func VmwareSoftwareVersionInput() *string
```

- *Type:* *string

---

##### `VsanVlanIdInput`<sup>Optional</sup> <a name="VsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanIdInput"></a>

```go
func VsanVlanIdInput() *string
```

- *Type:* *string

---

##### `VsphereVlanIdInput`<sup>Optional</sup> <a name="VsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanIdInput"></a>

```go
func VsphereVlanIdInput() *string
```

- *Type:* *string

---

##### `WorkloadNetworkCidrInput`<sup>Optional</sup> <a name="WorkloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidrInput"></a>

```go
func WorkloadNetworkCidrInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.computeAvailabilityDomain"></a>

```go
func ComputeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiHostsCount"></a>

```go
func EsxiHostsCount() *f64
```

- *Type:* *f64

---

##### `EsxiSoftwareVersion`<sup>Required</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.esxiSoftwareVersion"></a>

```go
func EsxiSoftwareVersion() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `HcxAction`<sup>Required</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxAction"></a>

```go
func HcxAction() *string
```

- *Type:* *string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.hcxVlanId"></a>

```go
func HcxVlanId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostOcpuCount"></a>

```go
func InitialHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialHostShapeName"></a>

```go
func InitialHostShapeName() *string
```

- *Type:* *string

---

##### `InitialSku`<sup>Required</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.initialSku"></a>

```go
func InitialSku() *string
```

- *Type:* *string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.instanceDisplayNamePrefix"></a>

```go
func InstanceDisplayNamePrefix() *string
```

- *Type:* *string

---

##### `IsHcxEnabled`<sup>Required</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isHcxEnabled"></a>

```go
func IsHcxEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isShieldedInstanceEnabled"></a>

```go
func IsShieldedInstanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsSingleHostSddc`<sup>Required</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.isSingleHostSddc"></a>

```go
func IsSingleHostSddc() interface{}
```

- *Type:* interface{}

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink1VlanId"></a>

```go
func NsxEdgeUplink1VlanId() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeUplink2VlanId"></a>

```go
func NsxEdgeUplink2VlanId() *string
```

- *Type:* *string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxEdgeVtepVlanId"></a>

```go
func NsxEdgeVtepVlanId() *string
```

- *Type:* *string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.nsxVtepVlanId"></a>

```go
func NsxVtepVlanId() *string
```

- *Type:* *string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningSubnetId"></a>

```go
func ProvisioningSubnetId() *string
```

- *Type:* *string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.provisioningVlanId"></a>

```go
func ProvisioningVlanId() *string
```

- *Type:* *string

---

##### `RefreshHcxLicenseStatus`<sup>Required</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.refreshHcxLicenseStatus"></a>

```go
func RefreshHcxLicenseStatus() interface{}
```

- *Type:* interface{}

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.replicationVlanId"></a>

```go
func ReplicationVlanId() *string
```

- *Type:* *string

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Required</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.reservingHcxOnPremiseLicenseKeys"></a>

```go
func ReservingHcxOnPremiseLicenseKeys() *[]*string
```

- *Type:* *[]*string

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.sshAuthorizedKeys"></a>

```go
func SshAuthorizedKeys() *string
```

- *Type:* *string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmotionVlanId"></a>

```go
func VmotionVlanId() *string
```

- *Type:* *string

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vmwareSoftwareVersion"></a>

```go
func VmwareSoftwareVersion() *string
```

- *Type:* *string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsanVlanId"></a>

```go
func VsanVlanId() *string
```

- *Type:* *string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.vsphereVlanId"></a>

```go
func VsphereVlanId() *string
```

- *Type:* *string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.workloadNetworkCidr"></a>

```go
func WorkloadNetworkCidr() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddc.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### OcvpSddcConfig <a name="OcvpSddcConfig" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	CompartmentId: *string,
	SshAuthorizedKeys: *string,
	VmwareSoftwareVersion: *string,
	CapacityReservationId: *string,
	ComputeAvailabilityDomain: *string,
	Datastores: interface{},
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	EsxiHostsCount: *f64,
	EsxiSoftwareVersion: *string,
	FreeformTags: *map[string]*string,
	HcxAction: *string,
	HcxVlanId: *string,
	Id: *string,
	InitialConfiguration: interface{},
	InitialHostOcpuCount: *f64,
	InitialHostShapeName: *string,
	InitialSku: *string,
	InstanceDisplayNamePrefix: *string,
	IsHcxEnabled: interface{},
	IsShieldedInstanceEnabled: interface{},
	IsSingleHostSddc: interface{},
	NsxEdgeUplink1VlanId: *string,
	NsxEdgeUplink2VlanId: *string,
	NsxEdgeVtepVlanId: *string,
	NsxVtepVlanId: *string,
	ProvisioningSubnetId: *string,
	ProvisioningVlanId: *string,
	RefreshHcxLicenseStatus: interface{},
	ReplicationVlanId: *string,
	ReservingHcxOnPremiseLicenseKeys: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.ocvpSddc.OcvpSddcTimeouts,
	VmotionVlanId: *string,
	VsanVlanId: *string,
	VsphereVlanId: *string,
	WorkloadNetworkCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys">SshAuthorizedKeys</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion">VmwareSoftwareVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores">Datastores</a></code> | <code>interface{}</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion">EsxiSoftwareVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction">HcxAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId">HcxVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration">InitialConfiguration</a></code> | <code>interface{}</code> | initial_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku">InitialSku</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled">IsHcxEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc">IsSingleHostSddc</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus">RefreshHcxLicenseStatus</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId">ReplicationVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys">ReservingHcxOnPremiseLicenseKeys</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId">VmotionVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId">VsanVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId">VsphereVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compartment_id OcvpSddc#compartment_id}.

---

##### `SshAuthorizedKeys`<sup>Required</sup> <a name="SshAuthorizedKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.sshAuthorizedKeys"></a>

```go
SshAuthorizedKeys *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#ssh_authorized_keys OcvpSddc#ssh_authorized_keys}.

---

##### `VmwareSoftwareVersion`<sup>Required</sup> <a name="VmwareSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmwareSoftwareVersion"></a>

```go
VmwareSoftwareVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmware_software_version OcvpSddc#vmware_software_version}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `ComputeAvailabilityDomain`<sup>Optional</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.computeAvailabilityDomain"></a>

```go
ComputeAvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `Datastores`<sup>Optional</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.datastores"></a>

```go
Datastores interface{}
```

- *Type:* interface{}

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#defined_tags OcvpSddc#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `EsxiHostsCount`<sup>Optional</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiHostsCount"></a>

```go
EsxiHostsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `EsxiSoftwareVersion`<sup>Optional</sup> <a name="EsxiSoftwareVersion" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.esxiSoftwareVersion"></a>

```go
EsxiSoftwareVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_software_version OcvpSddc#esxi_software_version}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#freeform_tags OcvpSddc#freeform_tags}.

---

##### `HcxAction`<sup>Optional</sup> <a name="HcxAction" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxAction"></a>

```go
HcxAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_action OcvpSddc#hcx_action}.

---

##### `HcxVlanId`<sup>Optional</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.hcxVlanId"></a>

```go
HcxVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#id OcvpSddc#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialConfiguration`<sup>Optional</sup> <a name="InitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialConfiguration"></a>

```go
InitialConfiguration interface{}
```

- *Type:* interface{}

initial_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_configuration OcvpSddc#initial_configuration}

---

##### `InitialHostOcpuCount`<sup>Optional</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostOcpuCount"></a>

```go
InitialHostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialHostShapeName"></a>

```go
InitialHostShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `InitialSku`<sup>Optional</sup> <a name="InitialSku" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.initialSku"></a>

```go
InitialSku *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_sku OcvpSddc#initial_sku}.

---

##### `InstanceDisplayNamePrefix`<sup>Optional</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.instanceDisplayNamePrefix"></a>

```go
InstanceDisplayNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `IsHcxEnabled`<sup>Optional</sup> <a name="IsHcxEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isHcxEnabled"></a>

```go
IsHcxEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_hcx_enabled OcvpSddc#is_hcx_enabled}.

---

##### `IsShieldedInstanceEnabled`<sup>Optional</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isShieldedInstanceEnabled"></a>

```go
IsShieldedInstanceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `IsSingleHostSddc`<sup>Optional</sup> <a name="IsSingleHostSddc" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.isSingleHostSddc"></a>

```go
IsSingleHostSddc interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_single_host_sddc OcvpSddc#is_single_host_sddc}.

---

##### `NsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink1VlanId"></a>

```go
NsxEdgeUplink1VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `NsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeUplink2VlanId"></a>

```go
NsxEdgeUplink2VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `NsxEdgeVtepVlanId`<sup>Optional</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxEdgeVtepVlanId"></a>

```go
NsxEdgeVtepVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `NsxVtepVlanId`<sup>Optional</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.nsxVtepVlanId"></a>

```go
NsxVtepVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `ProvisioningSubnetId`<sup>Optional</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningSubnetId"></a>

```go
ProvisioningSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `ProvisioningVlanId`<sup>Optional</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.provisioningVlanId"></a>

```go
ProvisioningVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `RefreshHcxLicenseStatus`<sup>Optional</sup> <a name="RefreshHcxLicenseStatus" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.refreshHcxLicenseStatus"></a>

```go
RefreshHcxLicenseStatus interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#refresh_hcx_license_status OcvpSddc#refresh_hcx_license_status}.

---

##### `ReplicationVlanId`<sup>Optional</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.replicationVlanId"></a>

```go
ReplicationVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `ReservingHcxOnPremiseLicenseKeys`<sup>Optional</sup> <a name="ReservingHcxOnPremiseLicenseKeys" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.reservingHcxOnPremiseLicenseKeys"></a>

```go
ReservingHcxOnPremiseLicenseKeys *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#reserving_hcx_on_premise_license_keys OcvpSddc#reserving_hcx_on_premise_license_keys}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.timeouts"></a>

```go
Timeouts OcvpSddcTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts">OcvpSddcTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#timeouts OcvpSddc#timeouts}

---

##### `VmotionVlanId`<sup>Optional</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vmotionVlanId"></a>

```go
VmotionVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `VsanVlanId`<sup>Optional</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsanVlanId"></a>

```go
VsanVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `VsphereVlanId`<sup>Optional</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.vsphereVlanId"></a>

```go
VsphereVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

##### `WorkloadNetworkCidr`<sup>Optional</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcConfig.property.workloadNetworkCidr"></a>

```go
WorkloadNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcDatastores <a name="OcvpSddcDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcDatastores {
	BlockVolumeIds: *[]*string,
	DatastoreType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType">DatastoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.blockVolumeIds"></a>

```go
BlockVolumeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastores.property.datastoreType"></a>

```go
DatastoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcHcxOnPremLicenses <a name="OcvpSddcHcxOnPremLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcHcxOnPremLicenses {

}
```


### OcvpSddcInitialConfiguration <a name="OcvpSddcInitialConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcInitialConfiguration {
	InitialClusterConfigurations: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code>interface{}</code> | initial_cluster_configurations block. |

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfiguration.property.initialClusterConfigurations"></a>

```go
InitialClusterConfigurations interface{}
```

- *Type:* interface{}

initial_cluster_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_cluster_configurations OcvpSddc#initial_cluster_configurations}

---

### OcvpSddcInitialConfigurationInitialClusterConfigurations <a name="OcvpSddcInitialConfigurationInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcInitialConfigurationInitialClusterConfigurations {
	ComputeAvailabilityDomain: *string,
	EsxiHostsCount: *f64,
	VsphereType: *string,
	CapacityReservationId: *string,
	Datastores: interface{},
	DisplayName: *string,
	InitialCommitment: *string,
	InitialHostOcpuCount: *f64,
	InitialHostShapeName: *string,
	InstanceDisplayNamePrefix: *string,
	IsShieldedInstanceEnabled: interface{},
	NetworkConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration,
	WorkloadNetworkCidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType">VsphereType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores">Datastores</a></code> | <code>interface{}</code> | datastores block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment">InitialCommitment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | network_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}. |

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.computeAvailabilityDomain"></a>

```go
ComputeAvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#compute_availability_domain OcvpSddc#compute_availability_domain}.

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.esxiHostsCount"></a>

```go
EsxiHostsCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#esxi_hosts_count OcvpSddc#esxi_hosts_count}.

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.vsphereType"></a>

```go
VsphereType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_type OcvpSddc#vsphere_type}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#capacity_reservation_id OcvpSddc#capacity_reservation_id}.

---

##### `Datastores`<sup>Optional</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.datastores"></a>

```go
Datastores interface{}
```

- *Type:* interface{}

datastores block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastores OcvpSddc#datastores}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#display_name OcvpSddc#display_name}.

---

##### `InitialCommitment`<sup>Optional</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialCommitment"></a>

```go
InitialCommitment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_commitment OcvpSddc#initial_commitment}.

---

##### `InitialHostOcpuCount`<sup>Optional</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostOcpuCount"></a>

```go
InitialHostOcpuCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_ocpu_count OcvpSddc#initial_host_ocpu_count}.

---

##### `InitialHostShapeName`<sup>Optional</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.initialHostShapeName"></a>

```go
InitialHostShapeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#initial_host_shape_name OcvpSddc#initial_host_shape_name}.

---

##### `InstanceDisplayNamePrefix`<sup>Optional</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.instanceDisplayNamePrefix"></a>

```go
InstanceDisplayNamePrefix *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#instance_display_name_prefix OcvpSddc#instance_display_name_prefix}.

---

##### `IsShieldedInstanceEnabled`<sup>Optional</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.isShieldedInstanceEnabled"></a>

```go
IsShieldedInstanceEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#is_shielded_instance_enabled OcvpSddc#is_shielded_instance_enabled}.

---

##### `NetworkConfiguration`<sup>Optional</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.networkConfiguration"></a>

```go
NetworkConfiguration OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

network_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#network_configuration OcvpSddc#network_configuration}

---

##### `WorkloadNetworkCidr`<sup>Optional</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurations.property.workloadNetworkCidr"></a>

```go
WorkloadNetworkCidr *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#workload_network_cidr OcvpSddc#workload_network_cidr}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores {
	BlockVolumeIds: *[]*string,
	DatastoreType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType">DatastoreType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}. |

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.blockVolumeIds"></a>

```go
BlockVolumeIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#block_volume_ids OcvpSddc#block_volume_ids}.

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastores.property.datastoreType"></a>

```go
DatastoreType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#datastore_type OcvpSddc#datastore_type}.

---

### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration {
	NsxEdgeVtepVlanId: *string,
	NsxVtepVlanId: *string,
	ProvisioningSubnetId: *string,
	VmotionVlanId: *string,
	VsanVlanId: *string,
	HcxVlanId: *string,
	NsxEdgeUplink1VlanId: *string,
	NsxEdgeUplink2VlanId: *string,
	ProvisioningVlanId: *string,
	ReplicationVlanId: *string,
	VsphereVlanId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId">VmotionVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId">VsanVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId">HcxVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId">ReplicationVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId">VsphereVlanId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}. |

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeVtepVlanId"></a>

```go
NsxEdgeVtepVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_vtep_vlan_id OcvpSddc#nsx_edge_vtep_vlan_id}.

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxVtepVlanId"></a>

```go
NsxVtepVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_vtep_vlan_id OcvpSddc#nsx_vtep_vlan_id}.

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningSubnetId"></a>

```go
ProvisioningSubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_subnet_id OcvpSddc#provisioning_subnet_id}.

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vmotionVlanId"></a>

```go
VmotionVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vmotion_vlan_id OcvpSddc#vmotion_vlan_id}.

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsanVlanId"></a>

```go
VsanVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsan_vlan_id OcvpSddc#vsan_vlan_id}.

---

##### `HcxVlanId`<sup>Optional</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.hcxVlanId"></a>

```go
HcxVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#hcx_vlan_id OcvpSddc#hcx_vlan_id}.

---

##### `NsxEdgeUplink1VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink1VlanId"></a>

```go
NsxEdgeUplink1VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink1vlan_id OcvpSddc#nsx_edge_uplink1vlan_id}.

---

##### `NsxEdgeUplink2VlanId`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.nsxEdgeUplink2VlanId"></a>

```go
NsxEdgeUplink2VlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#nsx_edge_uplink2vlan_id OcvpSddc#nsx_edge_uplink2vlan_id}.

---

##### `ProvisioningVlanId`<sup>Optional</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.provisioningVlanId"></a>

```go
ProvisioningVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#provisioning_vlan_id OcvpSddc#provisioning_vlan_id}.

---

##### `ReplicationVlanId`<sup>Optional</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.replicationVlanId"></a>

```go
ReplicationVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#replication_vlan_id OcvpSddc#replication_vlan_id}.

---

##### `VsphereVlanId`<sup>Optional</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration.property.vsphereVlanId"></a>

```go
VsphereVlanId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#vsphere_vlan_id OcvpSddc#vsphere_vlan_id}.

---

### OcvpSddcTimeouts <a name="OcvpSddcTimeouts" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#create OcvpSddc#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#delete OcvpSddc#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/ocvp_sddc#update OcvpSddc#update}.

---

### OcvpSddcUpgradeLicenses <a name="OcvpSddcUpgradeLicenses" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcUpgradeLicenses {

}
```


### OcvpSddcVsphereUpgradeObjects <a name="OcvpSddcVsphereUpgradeObjects" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

&ocvpsddc.OcvpSddcVsphereUpgradeObjects {

}
```


## Classes <a name="Classes" id="Classes"></a>

### OcvpSddcDatastoresList <a name="OcvpSddcDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcDatastoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcDatastoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get"></a>

```go
func Get(index *f64) OcvpSddcDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcDatastoresOutputReference <a name="OcvpSddcDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcDatastoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcDatastoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity">Capacity</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput">BlockVolumeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput">DatastoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Capacity`<sup>Required</sup> <a name="Capacity" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.capacity"></a>

```go
func Capacity() *f64
```

- *Type:* *f64

---

##### `BlockVolumeIdsInput`<sup>Optional</sup> <a name="BlockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```go
func BlockVolumeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatastoreTypeInput`<sup>Optional</sup> <a name="DatastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreTypeInput"></a>

```go
func DatastoreTypeInput() *string
```

- *Type:* *string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.blockVolumeIds"></a>

```go
func BlockVolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.datastoreType"></a>

```go
func DatastoreType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcDatastoresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcHcxOnPremLicensesList <a name="OcvpSddcHcxOnPremLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcHcxOnPremLicensesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcHcxOnPremLicensesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get"></a>

```go
func Get(index *f64) OcvpSddcHcxOnPremLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OcvpSddcHcxOnPremLicensesOutputReference <a name="OcvpSddcHcxOnPremLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcHcxOnPremLicensesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcHcxOnPremLicensesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey">ActivationKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName">SystemName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActivationKey`<sup>Required</sup> <a name="ActivationKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.activationKey"></a>

```go
func ActivationKey() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `SystemName`<sup>Required</sup> <a name="SystemName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.systemName"></a>

```go
func SystemName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicensesOutputReference.property.internalValue"></a>

```go
func InternalValue() OcvpSddcHcxOnPremLicenses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcHcxOnPremLicenses">OcvpSddcHcxOnPremLicenses</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get"></a>

```go
func Get(index *f64) OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput">BlockVolumeIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput">DatastoreTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds">BlockVolumeIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType">DatastoreType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BlockVolumeIdsInput`<sup>Optional</sup> <a name="BlockVolumeIdsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIdsInput"></a>

```go
func BlockVolumeIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DatastoreTypeInput`<sup>Optional</sup> <a name="DatastoreTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreTypeInput"></a>

```go
func DatastoreTypeInput() *string
```

- *Type:* *string

---

##### `BlockVolumeIds`<sup>Required</sup> <a name="BlockVolumeIds" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.blockVolumeIds"></a>

```go
func BlockVolumeIds() *[]*string
```

- *Type:* *[]*string

---

##### `DatastoreType`<sup>Required</sup> <a name="DatastoreType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.datastoreType"></a>

```go
func DatastoreType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsList <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationInitialClusterConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcInitialConfigurationInitialClusterConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get"></a>

```go
func Get(index *f64) OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId">ResetHcxVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId">ResetNsxEdgeUplink1VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId">ResetNsxEdgeUplink2VlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId">ResetProvisioningVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId">ResetReplicationVlanId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId">ResetVsphereVlanId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHcxVlanId` <a name="ResetHcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetHcxVlanId"></a>

```go
func ResetHcxVlanId()
```

##### `ResetNsxEdgeUplink1VlanId` <a name="ResetNsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink1VlanId"></a>

```go
func ResetNsxEdgeUplink1VlanId()
```

##### `ResetNsxEdgeUplink2VlanId` <a name="ResetNsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetNsxEdgeUplink2VlanId"></a>

```go
func ResetNsxEdgeUplink2VlanId()
```

##### `ResetProvisioningVlanId` <a name="ResetProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetProvisioningVlanId"></a>

```go
func ResetProvisioningVlanId()
```

##### `ResetReplicationVlanId` <a name="ResetReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetReplicationVlanId"></a>

```go
func ResetReplicationVlanId()
```

##### `ResetVsphereVlanId` <a name="ResetVsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.resetVsphereVlanId"></a>

```go
func ResetVsphereVlanId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput">HcxVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput">NsxEdgeUplink1VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput">NsxEdgeUplink2VlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput">NsxEdgeVtepVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput">NsxVtepVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput">ProvisioningSubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput">ProvisioningVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput">ReplicationVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput">VmotionVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput">VsanVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput">VsphereVlanIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId">HcxVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId">NsxEdgeUplink1VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId">NsxEdgeUplink2VlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId">NsxEdgeVtepVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId">NsxVtepVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId">ProvisioningSubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId">ProvisioningVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId">ReplicationVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId">VmotionVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId">VsanVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId">VsphereVlanId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HcxVlanIdInput`<sup>Optional</sup> <a name="HcxVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanIdInput"></a>

```go
func HcxVlanIdInput() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink1VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink1VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanIdInput"></a>

```go
func NsxEdgeUplink1VlanIdInput() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink2VlanIdInput`<sup>Optional</sup> <a name="NsxEdgeUplink2VlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanIdInput"></a>

```go
func NsxEdgeUplink2VlanIdInput() *string
```

- *Type:* *string

---

##### `NsxEdgeVtepVlanIdInput`<sup>Optional</sup> <a name="NsxEdgeVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanIdInput"></a>

```go
func NsxEdgeVtepVlanIdInput() *string
```

- *Type:* *string

---

##### `NsxVtepVlanIdInput`<sup>Optional</sup> <a name="NsxVtepVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanIdInput"></a>

```go
func NsxVtepVlanIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningSubnetIdInput`<sup>Optional</sup> <a name="ProvisioningSubnetIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetIdInput"></a>

```go
func ProvisioningSubnetIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningVlanIdInput`<sup>Optional</sup> <a name="ProvisioningVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanIdInput"></a>

```go
func ProvisioningVlanIdInput() *string
```

- *Type:* *string

---

##### `ReplicationVlanIdInput`<sup>Optional</sup> <a name="ReplicationVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanIdInput"></a>

```go
func ReplicationVlanIdInput() *string
```

- *Type:* *string

---

##### `VmotionVlanIdInput`<sup>Optional</sup> <a name="VmotionVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanIdInput"></a>

```go
func VmotionVlanIdInput() *string
```

- *Type:* *string

---

##### `VsanVlanIdInput`<sup>Optional</sup> <a name="VsanVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanIdInput"></a>

```go
func VsanVlanIdInput() *string
```

- *Type:* *string

---

##### `VsphereVlanIdInput`<sup>Optional</sup> <a name="VsphereVlanIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanIdInput"></a>

```go
func VsphereVlanIdInput() *string
```

- *Type:* *string

---

##### `HcxVlanId`<sup>Required</sup> <a name="HcxVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.hcxVlanId"></a>

```go
func HcxVlanId() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink1VlanId`<sup>Required</sup> <a name="NsxEdgeUplink1VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink1VlanId"></a>

```go
func NsxEdgeUplink1VlanId() *string
```

- *Type:* *string

---

##### `NsxEdgeUplink2VlanId`<sup>Required</sup> <a name="NsxEdgeUplink2VlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeUplink2VlanId"></a>

```go
func NsxEdgeUplink2VlanId() *string
```

- *Type:* *string

---

##### `NsxEdgeVtepVlanId`<sup>Required</sup> <a name="NsxEdgeVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxEdgeVtepVlanId"></a>

```go
func NsxEdgeVtepVlanId() *string
```

- *Type:* *string

---

##### `NsxVtepVlanId`<sup>Required</sup> <a name="NsxVtepVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.nsxVtepVlanId"></a>

```go
func NsxVtepVlanId() *string
```

- *Type:* *string

---

##### `ProvisioningSubnetId`<sup>Required</sup> <a name="ProvisioningSubnetId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningSubnetId"></a>

```go
func ProvisioningSubnetId() *string
```

- *Type:* *string

---

##### `ProvisioningVlanId`<sup>Required</sup> <a name="ProvisioningVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.provisioningVlanId"></a>

```go
func ProvisioningVlanId() *string
```

- *Type:* *string

---

##### `ReplicationVlanId`<sup>Required</sup> <a name="ReplicationVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.replicationVlanId"></a>

```go
func ReplicationVlanId() *string
```

- *Type:* *string

---

##### `VmotionVlanId`<sup>Required</sup> <a name="VmotionVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vmotionVlanId"></a>

```go
func VmotionVlanId() *string
```

- *Type:* *string

---

##### `VsanVlanId`<sup>Required</sup> <a name="VsanVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsanVlanId"></a>

```go
func VsanVlanId() *string
```

- *Type:* *string

---

##### `VsphereVlanId`<sup>Required</sup> <a name="VsphereVlanId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.vsphereVlanId"></a>

```go
func VsphereVlanId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---


### OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference <a name="OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores">PutDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration">PutNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores">ResetDatastores</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment">ResetInitialCommitment</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount">ResetInitialHostOcpuCount</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName">ResetInitialHostShapeName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix">ResetInstanceDisplayNamePrefix</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled">ResetIsShieldedInstanceEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration">ResetNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr">ResetWorkloadNetworkCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutDatastores` <a name="PutDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores"></a>

```go
func PutDatastores(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putDatastores.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNetworkConfiguration` <a name="PutNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration"></a>

```go
func PutNetworkConfiguration(value OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.putNetworkConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetDatastores` <a name="ResetDatastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDatastores"></a>

```go
func ResetDatastores()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetInitialCommitment` <a name="ResetInitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialCommitment"></a>

```go
func ResetInitialCommitment()
```

##### `ResetInitialHostOcpuCount` <a name="ResetInitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostOcpuCount"></a>

```go
func ResetInitialHostOcpuCount()
```

##### `ResetInitialHostShapeName` <a name="ResetInitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInitialHostShapeName"></a>

```go
func ResetInitialHostShapeName()
```

##### `ResetInstanceDisplayNamePrefix` <a name="ResetInstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetInstanceDisplayNamePrefix"></a>

```go
func ResetInstanceDisplayNamePrefix()
```

##### `ResetIsShieldedInstanceEnabled` <a name="ResetIsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetIsShieldedInstanceEnabled"></a>

```go
func ResetIsShieldedInstanceEnabled()
```

##### `ResetNetworkConfiguration` <a name="ResetNetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetNetworkConfiguration"></a>

```go
func ResetNetworkConfiguration()
```

##### `ResetWorkloadNetworkCidr` <a name="ResetWorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.resetWorkloadNetworkCidr"></a>

```go
func ResetWorkloadNetworkCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount">ActualEsxiHostsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores">Datastores</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration">NetworkConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput">ComputeAvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput">DatastoresInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput">EsxiHostsCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput">InitialCommitmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput">InitialHostOcpuCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput">InitialHostShapeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput">InstanceDisplayNamePrefixInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput">IsShieldedInstanceEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput">NetworkConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput">VsphereTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput">WorkloadNetworkCidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain">ComputeAvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount">EsxiHostsCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment">InitialCommitment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount">InitialHostOcpuCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName">InitialHostShapeName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix">InstanceDisplayNamePrefix</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled">IsShieldedInstanceEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType">VsphereType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr">WorkloadNetworkCidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ActualEsxiHostsCount`<sup>Required</sup> <a name="ActualEsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.actualEsxiHostsCount"></a>

```go
func ActualEsxiHostsCount() *f64
```

- *Type:* *f64

---

##### `Datastores`<sup>Required</sup> <a name="Datastores" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastores"></a>

```go
func Datastores() OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList">OcvpSddcInitialConfigurationInitialClusterConfigurationsDatastoresList</a>

---

##### `NetworkConfiguration`<sup>Required</sup> <a name="NetworkConfiguration" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfiguration"></a>

```go
func NetworkConfiguration() OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfigurationOutputReference</a>

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomainInput`<sup>Optional</sup> <a name="ComputeAvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomainInput"></a>

```go
func ComputeAvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `DatastoresInput`<sup>Optional</sup> <a name="DatastoresInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.datastoresInput"></a>

```go
func DatastoresInput() interface{}
```

- *Type:* interface{}

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `EsxiHostsCountInput`<sup>Optional</sup> <a name="EsxiHostsCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCountInput"></a>

```go
func EsxiHostsCountInput() *f64
```

- *Type:* *f64

---

##### `InitialCommitmentInput`<sup>Optional</sup> <a name="InitialCommitmentInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitmentInput"></a>

```go
func InitialCommitmentInput() *string
```

- *Type:* *string

---

##### `InitialHostOcpuCountInput`<sup>Optional</sup> <a name="InitialHostOcpuCountInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCountInput"></a>

```go
func InitialHostOcpuCountInput() *f64
```

- *Type:* *f64

---

##### `InitialHostShapeNameInput`<sup>Optional</sup> <a name="InitialHostShapeNameInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeNameInput"></a>

```go
func InitialHostShapeNameInput() *string
```

- *Type:* *string

---

##### `InstanceDisplayNamePrefixInput`<sup>Optional</sup> <a name="InstanceDisplayNamePrefixInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefixInput"></a>

```go
func InstanceDisplayNamePrefixInput() *string
```

- *Type:* *string

---

##### `IsShieldedInstanceEnabledInput`<sup>Optional</sup> <a name="IsShieldedInstanceEnabledInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabledInput"></a>

```go
func IsShieldedInstanceEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NetworkConfigurationInput`<sup>Optional</sup> <a name="NetworkConfigurationInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.networkConfigurationInput"></a>

```go
func NetworkConfigurationInput() OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration">OcvpSddcInitialConfigurationInitialClusterConfigurationsNetworkConfiguration</a>

---

##### `VsphereTypeInput`<sup>Optional</sup> <a name="VsphereTypeInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereTypeInput"></a>

```go
func VsphereTypeInput() *string
```

- *Type:* *string

---

##### `WorkloadNetworkCidrInput`<sup>Optional</sup> <a name="WorkloadNetworkCidrInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidrInput"></a>

```go
func WorkloadNetworkCidrInput() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `ComputeAvailabilityDomain`<sup>Required</sup> <a name="ComputeAvailabilityDomain" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.computeAvailabilityDomain"></a>

```go
func ComputeAvailabilityDomain() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `EsxiHostsCount`<sup>Required</sup> <a name="EsxiHostsCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.esxiHostsCount"></a>

```go
func EsxiHostsCount() *f64
```

- *Type:* *f64

---

##### `InitialCommitment`<sup>Required</sup> <a name="InitialCommitment" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialCommitment"></a>

```go
func InitialCommitment() *string
```

- *Type:* *string

---

##### `InitialHostOcpuCount`<sup>Required</sup> <a name="InitialHostOcpuCount" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostOcpuCount"></a>

```go
func InitialHostOcpuCount() *f64
```

- *Type:* *f64

---

##### `InitialHostShapeName`<sup>Required</sup> <a name="InitialHostShapeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.initialHostShapeName"></a>

```go
func InitialHostShapeName() *string
```

- *Type:* *string

---

##### `InstanceDisplayNamePrefix`<sup>Required</sup> <a name="InstanceDisplayNamePrefix" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.instanceDisplayNamePrefix"></a>

```go
func InstanceDisplayNamePrefix() *string
```

- *Type:* *string

---

##### `IsShieldedInstanceEnabled`<sup>Required</sup> <a name="IsShieldedInstanceEnabled" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.isShieldedInstanceEnabled"></a>

```go
func IsShieldedInstanceEnabled() interface{}
```

- *Type:* interface{}

---

##### `VsphereType`<sup>Required</sup> <a name="VsphereType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.vsphereType"></a>

```go
func VsphereType() *string
```

- *Type:* *string

---

##### `WorkloadNetworkCidr`<sup>Required</sup> <a name="WorkloadNetworkCidr" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.workloadNetworkCidr"></a>

```go
func WorkloadNetworkCidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcInitialConfigurationList <a name="OcvpSddcInitialConfigurationList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcInitialConfigurationList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get"></a>

```go
func Get(index *f64) OcvpSddcInitialConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcInitialConfigurationOutputReference <a name="OcvpSddcInitialConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcInitialConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcInitialConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations">PutInitialClusterConfigurations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInitialClusterConfigurations` <a name="PutInitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations"></a>

```go
func PutInitialClusterConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.putInitialClusterConfigurations.parameter.value"></a>

- *Type:* interface{}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations">InitialClusterConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput">InitialClusterConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InitialClusterConfigurations`<sup>Required</sup> <a name="InitialClusterConfigurations" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurations"></a>

```go
func InitialClusterConfigurations() OcvpSddcInitialConfigurationInitialClusterConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationInitialClusterConfigurationsList">OcvpSddcInitialConfigurationInitialClusterConfigurationsList</a>

---

##### `InitialClusterConfigurationsInput`<sup>Optional</sup> <a name="InitialClusterConfigurationsInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.initialClusterConfigurationsInput"></a>

```go
func InitialClusterConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcInitialConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcTimeoutsOutputReference <a name="OcvpSddcTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) OcvpSddcTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### OcvpSddcUpgradeLicensesList <a name="OcvpSddcUpgradeLicensesList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcUpgradeLicensesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcUpgradeLicensesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get"></a>

```go
func Get(index *f64) OcvpSddcUpgradeLicensesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OcvpSddcUpgradeLicensesOutputReference <a name="OcvpSddcUpgradeLicensesOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcUpgradeLicensesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcUpgradeLicensesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey">LicenseKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType">LicenseType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `LicenseKey`<sup>Required</sup> <a name="LicenseKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseKey"></a>

```go
func LicenseKey() *string
```

- *Type:* *string

---

##### `LicenseType`<sup>Required</sup> <a name="LicenseType" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.licenseType"></a>

```go
func LicenseType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicensesOutputReference.property.internalValue"></a>

```go
func InternalValue() OcvpSddcUpgradeLicenses
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcUpgradeLicenses">OcvpSddcUpgradeLicenses</a>

---


### OcvpSddcVsphereUpgradeObjectsList <a name="OcvpSddcVsphereUpgradeObjectsList" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcVsphereUpgradeObjectsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) OcvpSddcVsphereUpgradeObjectsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get"></a>

```go
func Get(index *f64) OcvpSddcVsphereUpgradeObjectsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### OcvpSddcVsphereUpgradeObjectsOutputReference <a name="OcvpSddcVsphereUpgradeObjectsOutputReference" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/ocvpsddc"

ocvpsddc.NewOcvpSddcVsphereUpgradeObjectsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) OcvpSddcVsphereUpgradeObjectsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink">DownloadLink</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription">LinkDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DownloadLink`<sup>Required</sup> <a name="DownloadLink" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.downloadLink"></a>

```go
func DownloadLink() *string
```

- *Type:* *string

---

##### `LinkDescription`<sup>Required</sup> <a name="LinkDescription" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.linkDescription"></a>

```go
func LinkDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjectsOutputReference.property.internalValue"></a>

```go
func InternalValue() OcvpSddcVsphereUpgradeObjects
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.ocvpSddc.OcvpSddcVsphereUpgradeObjects">OcvpSddcVsphereUpgradeObjects</a>

---



