# `coreDrgAttachmentManagement` Submodule <a name="`coreDrgAttachmentManagement` Submodule" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CoreDrgAttachmentManagement <a name="CoreDrgAttachmentManagement" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management oci_core_drg_attachment_management}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.NewCoreDrgAttachmentManagement(scope Construct, id *string, config CoreDrgAttachmentManagementConfig) CoreDrgAttachmentManagement
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig">CoreDrgAttachmentManagementConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig">CoreDrgAttachmentManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails">PutNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId">ResetDrgRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId">ResetExportDrgRouteDistributionId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails">ResetNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger">ResetRemoveExportDrgRouteDistributionTrigger</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId">ResetVcnId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNetworkDetails` <a name="PutNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails"></a>

```go
func PutNetworkDetails(value CoreDrgAttachmentManagementNetworkDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putNetworkDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts"></a>

```go
func PutTimeouts(value CoreDrgAttachmentManagementTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetDrgRouteTableId` <a name="ResetDrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetDrgRouteTableId"></a>

```go
func ResetDrgRouteTableId()
```

##### `ResetExportDrgRouteDistributionId` <a name="ResetExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetExportDrgRouteDistributionId"></a>

```go
func ResetExportDrgRouteDistributionId()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetId"></a>

```go
func ResetId()
```

##### `ResetNetworkDetails` <a name="ResetNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkDetails"></a>

```go
func ResetNetworkDetails()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetNetworkId"></a>

```go
func ResetNetworkId()
```

##### `ResetRemoveExportDrgRouteDistributionTrigger` <a name="ResetRemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRemoveExportDrgRouteDistributionTrigger"></a>

```go
func ResetRemoveExportDrgRouteDistributionTrigger()
```

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetRouteTableId"></a>

```go
func ResetRouteTableId()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVcnId` <a name="ResetVcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.resetVcnId"></a>

```go
func ResetVcnId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.CoreDrgAttachmentManagement_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.CoreDrgAttachmentManagement_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.CoreDrgAttachmentManagement_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.CoreDrgAttachmentManagement_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a CoreDrgAttachmentManagement resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the CoreDrgAttachmentManagement to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing CoreDrgAttachmentManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the CoreDrgAttachmentManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy">IsCrossTenancy</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput">AttachmentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput">DrgIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput">DrgRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput">ExportDrgRouteDistributionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput">NetworkDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput">NetworkIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput">RemoveExportDrgRouteDistributionTriggerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput">VcnIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId">DrgId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId">NetworkId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId">VcnId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IsCrossTenancy`<sup>Required</sup> <a name="IsCrossTenancy" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.isCrossTenancy"></a>

```go
func IsCrossTenancy() IResolvable
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolvable

---

##### `NetworkDetails`<sup>Required</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetails"></a>

```go
func NetworkDetails() CoreDrgAttachmentManagementNetworkDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference">CoreDrgAttachmentManagementNetworkDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeouts"></a>

```go
func Timeouts() CoreDrgAttachmentManagementTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference">CoreDrgAttachmentManagementTimeoutsOutputReference</a>

---

##### `AttachmentTypeInput`<sup>Optional</sup> <a name="AttachmentTypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentTypeInput"></a>

```go
func AttachmentTypeInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `DrgIdInput`<sup>Optional</sup> <a name="DrgIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgIdInput"></a>

```go
func DrgIdInput() *string
```

- *Type:* *string

---

##### `DrgRouteTableIdInput`<sup>Optional</sup> <a name="DrgRouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableIdInput"></a>

```go
func DrgRouteTableIdInput() *string
```

- *Type:* *string

---

##### `ExportDrgRouteDistributionIdInput`<sup>Optional</sup> <a name="ExportDrgRouteDistributionIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionIdInput"></a>

```go
func ExportDrgRouteDistributionIdInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NetworkDetailsInput`<sup>Optional</sup> <a name="NetworkDetailsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkDetailsInput"></a>

```go
func NetworkDetailsInput() CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkIdInput"></a>

```go
func NetworkIdInput() *string
```

- *Type:* *string

---

##### `RemoveExportDrgRouteDistributionTriggerInput`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTriggerInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTriggerInput"></a>

```go
func RemoveExportDrgRouteDistributionTriggerInput() interface{}
```

- *Type:* interface{}

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VcnIdInput`<sup>Optional</sup> <a name="VcnIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnIdInput"></a>

```go
func VcnIdInput() *string
```

- *Type:* *string

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.attachmentType"></a>

```go
func AttachmentType() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgId"></a>

```go
func DrgId() *string
```

- *Type:* *string

---

##### `DrgRouteTableId`<sup>Required</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.drgRouteTableId"></a>

```go
func DrgRouteTableId() *string
```

- *Type:* *string

---

##### `ExportDrgRouteDistributionId`<sup>Required</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.exportDrgRouteDistributionId"></a>

```go
func ExportDrgRouteDistributionId() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.networkId"></a>

```go
func NetworkId() *string
```

- *Type:* *string

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Required</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.removeExportDrgRouteDistributionTrigger"></a>

```go
func RemoveExportDrgRouteDistributionTrigger() interface{}
```

- *Type:* interface{}

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `VcnId`<sup>Required</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.vcnId"></a>

```go
func VcnId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagement.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### CoreDrgAttachmentManagementConfig <a name="CoreDrgAttachmentManagementConfig" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

&coredrgattachmentmanagement.CoreDrgAttachmentManagementConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	AttachmentType: *string,
	CompartmentId: *string,
	DrgId: *string,
	DefinedTags: *map[string]*string,
	DisplayName: *string,
	DrgRouteTableId: *string,
	ExportDrgRouteDistributionId: *string,
	FreeformTags: *map[string]*string,
	Id: *string,
	NetworkDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails,
	NetworkId: *string,
	RemoveExportDrgRouteDistributionTrigger: interface{},
	RouteTableId: *string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts,
	VcnId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType">AttachmentType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId">DrgId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId">DrgRouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId">ExportDrgRouteDistributionId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails">NetworkDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | network_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId">NetworkId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger">RemoveExportDrgRouteDistributionTrigger</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId">VcnId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AttachmentType`<sup>Required</sup> <a name="AttachmentType" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.attachmentType"></a>

```go
AttachmentType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#attachment_type CoreDrgAttachmentManagement#attachment_type}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#compartment_id CoreDrgAttachmentManagement#compartment_id}.

---

##### `DrgId`<sup>Required</sup> <a name="DrgId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgId"></a>

```go
DrgId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_id CoreDrgAttachmentManagement#drg_id}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#defined_tags CoreDrgAttachmentManagement#defined_tags}.

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#display_name CoreDrgAttachmentManagement#display_name}.

---

##### `DrgRouteTableId`<sup>Optional</sup> <a name="DrgRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.drgRouteTableId"></a>

```go
DrgRouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#drg_route_table_id CoreDrgAttachmentManagement#drg_route_table_id}.

---

##### `ExportDrgRouteDistributionId`<sup>Optional</sup> <a name="ExportDrgRouteDistributionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.exportDrgRouteDistributionId"></a>

```go
ExportDrgRouteDistributionId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#export_drg_route_distribution_id CoreDrgAttachmentManagement#export_drg_route_distribution_id}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#freeform_tags CoreDrgAttachmentManagement#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `NetworkDetails`<sup>Optional</sup> <a name="NetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkDetails"></a>

```go
NetworkDetails CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

network_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_details CoreDrgAttachmentManagement#network_details}

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.networkId"></a>

```go
NetworkId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#network_id CoreDrgAttachmentManagement#network_id}.

---

##### `RemoveExportDrgRouteDistributionTrigger`<sup>Optional</sup> <a name="RemoveExportDrgRouteDistributionTrigger" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.removeExportDrgRouteDistributionTrigger"></a>

```go
RemoveExportDrgRouteDistributionTrigger interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#remove_export_drg_route_distribution_trigger CoreDrgAttachmentManagement#remove_export_drg_route_distribution_trigger}.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.timeouts"></a>

```go
Timeouts CoreDrgAttachmentManagementTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts">CoreDrgAttachmentManagementTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#timeouts CoreDrgAttachmentManagement#timeouts}

---

##### `VcnId`<sup>Optional</sup> <a name="VcnId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementConfig.property.vcnId"></a>

```go
VcnId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#vcn_id CoreDrgAttachmentManagement#vcn_id}.

---

### CoreDrgAttachmentManagementNetworkDetails <a name="CoreDrgAttachmentManagementNetworkDetails" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

&coredrgattachmentmanagement.CoreDrgAttachmentManagementNetworkDetails {
	Id: *string,
	Type: *string,
	RouteTableId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#id CoreDrgAttachmentManagement#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#type CoreDrgAttachmentManagement#type}.

---

##### `RouteTableId`<sup>Optional</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails.property.routeTableId"></a>

```go
RouteTableId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#route_table_id CoreDrgAttachmentManagement#route_table_id}.

---

### CoreDrgAttachmentManagementTimeouts <a name="CoreDrgAttachmentManagementTimeouts" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

&coredrgattachmentmanagement.CoreDrgAttachmentManagementTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#create CoreDrgAttachmentManagement#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#delete CoreDrgAttachmentManagement#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/core_drg_attachment_management#update CoreDrgAttachmentManagement#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CoreDrgAttachmentManagementNetworkDetailsOutputReference <a name="CoreDrgAttachmentManagementNetworkDetailsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.NewCoreDrgAttachmentManagementNetworkDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDrgAttachmentManagementNetworkDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId">ResetRouteTableId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRouteTableId` <a name="ResetRouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.resetRouteTableId"></a>

```go
func ResetRouteTableId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId">IpsecConnectionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput">RouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId">RouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpsecConnectionId`<sup>Required</sup> <a name="IpsecConnectionId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.ipsecConnectionId"></a>

```go
func IpsecConnectionId() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `RouteTableIdInput`<sup>Optional</sup> <a name="RouteTableIdInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableIdInput"></a>

```go
func RouteTableIdInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `RouteTableId`<sup>Required</sup> <a name="RouteTableId" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.routeTableId"></a>

```go
func RouteTableId() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() CoreDrgAttachmentManagementNetworkDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementNetworkDetails">CoreDrgAttachmentManagementNetworkDetails</a>

---


### CoreDrgAttachmentManagementTimeoutsOutputReference <a name="CoreDrgAttachmentManagementTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/coredrgattachmentmanagement"

coredrgattachmentmanagement.NewCoreDrgAttachmentManagementTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) CoreDrgAttachmentManagementTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.coreDrgAttachmentManagement.CoreDrgAttachmentManagementTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



