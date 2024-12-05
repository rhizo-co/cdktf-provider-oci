# `containerengineNodePool` Submodule <a name="`containerengineNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineNodePool <a name="ContainerengineNodePool" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool oci_containerengine_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePool(scope Construct, id *string, config ContainerengineNodePoolConfig) ContainerengineNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig">ContainerengineNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig">ContainerengineNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels">PutInitialNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails">PutNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings">PutNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails">PutNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig">PutNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails">PutNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels">ResetInitialNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion">ResetKubernetesVersion</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails">ResetNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings">ResetNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId">ResetNodeImageId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName">ResetNodeImageName</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata">ResetNodeMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails">ResetNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig">ResetNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails">ResetNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet">ResetQuantityPerSubnet</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey">ResetSshPublicKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds">ResetSubnetIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitialNodeLabels` <a name="PutInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels"></a>

```go
func PutInitialNodeLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putInitialNodeLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutNodeConfigDetails` <a name="PutNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails"></a>

```go
func PutNodeConfigDetails(value ContainerengineNodePoolNodeConfigDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeConfigDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---

##### `PutNodeEvictionNodePoolSettings` <a name="PutNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings"></a>

```go
func PutNodeEvictionNodePoolSettings(value ContainerengineNodePoolNodeEvictionNodePoolSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeEvictionNodePoolSettings.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---

##### `PutNodePoolCyclingDetails` <a name="PutNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails"></a>

```go
func PutNodePoolCyclingDetails(value ContainerengineNodePoolNodePoolCyclingDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodePoolCyclingDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---

##### `PutNodeShapeConfig` <a name="PutNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig"></a>

```go
func PutNodeShapeConfig(value ContainerengineNodePoolNodeShapeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeShapeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---

##### `PutNodeSourceDetails` <a name="PutNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails"></a>

```go
func PutNodeSourceDetails(value ContainerengineNodePoolNodeSourceDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putNodeSourceDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts"></a>

```go
func PutTimeouts(value ContainerengineNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialNodeLabels` <a name="ResetInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetInitialNodeLabels"></a>

```go
func ResetInitialNodeLabels()
```

##### `ResetKubernetesVersion` <a name="ResetKubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetKubernetesVersion"></a>

```go
func ResetKubernetesVersion()
```

##### `ResetNodeConfigDetails` <a name="ResetNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeConfigDetails"></a>

```go
func ResetNodeConfigDetails()
```

##### `ResetNodeEvictionNodePoolSettings` <a name="ResetNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeEvictionNodePoolSettings"></a>

```go
func ResetNodeEvictionNodePoolSettings()
```

##### `ResetNodeImageId` <a name="ResetNodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageId"></a>

```go
func ResetNodeImageId()
```

##### `ResetNodeImageName` <a name="ResetNodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeImageName"></a>

```go
func ResetNodeImageName()
```

##### `ResetNodeMetadata` <a name="ResetNodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeMetadata"></a>

```go
func ResetNodeMetadata()
```

##### `ResetNodePoolCyclingDetails` <a name="ResetNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodePoolCyclingDetails"></a>

```go
func ResetNodePoolCyclingDetails()
```

##### `ResetNodeShapeConfig` <a name="ResetNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeShapeConfig"></a>

```go
func ResetNodeShapeConfig()
```

##### `ResetNodeSourceDetails` <a name="ResetNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetNodeSourceDetails"></a>

```go
func ResetNodeSourceDetails()
```

##### `ResetQuantityPerSubnet` <a name="ResetQuantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetQuantityPerSubnet"></a>

```go
func ResetQuantityPerSubnet()
```

##### `ResetSshPublicKey` <a name="ResetSshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSshPublicKey"></a>

```go
func ResetSshPublicKey()
```

##### `ResetSubnetIds` <a name="ResetSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetSubnetIds"></a>

```go
func ResetSubnetIds()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.ContainerengineNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.ContainerengineNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.ContainerengineNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.ContainerengineNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerengineNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerengineNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerengineNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels">InitialNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails">NodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings">NodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails">NodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes">Nodes</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig">NodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource">NodeSource</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails">NodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput">InitialNodeLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput">KubernetesVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput">NodeConfigDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput">NodeEvictionNodePoolSettingsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput">NodeImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput">NodeImageNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput">NodeMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput">NodePoolCyclingDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput">NodeShapeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput">NodeShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput">NodeSourceDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput">QuantityPerSubnetInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput">SshPublicKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId">NodeImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName">NodeImageName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata">NodeMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape">NodeShape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet">QuantityPerSubnet</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InitialNodeLabels`<sup>Required</sup> <a name="InitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabels"></a>

```go
func InitialNodeLabels() ContainerengineNodePoolInitialNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList">ContainerengineNodePoolInitialNodeLabelsList</a>

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `NodeConfigDetails`<sup>Required</sup> <a name="NodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetails"></a>

```go
func NodeConfigDetails() ContainerengineNodePoolNodeConfigDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsOutputReference</a>

---

##### `NodeEvictionNodePoolSettings`<sup>Required</sup> <a name="NodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettings"></a>

```go
func NodeEvictionNodePoolSettings() ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference">ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference</a>

---

##### `NodePoolCyclingDetails`<sup>Required</sup> <a name="NodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetails"></a>

```go
func NodePoolCyclingDetails() ContainerengineNodePoolNodePoolCyclingDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference">ContainerengineNodePoolNodePoolCyclingDetailsOutputReference</a>

---

##### `Nodes`<sup>Required</sup> <a name="Nodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodes"></a>

```go
func Nodes() ContainerengineNodePoolNodesList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList">ContainerengineNodePoolNodesList</a>

---

##### `NodeShapeConfig`<sup>Required</sup> <a name="NodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfig"></a>

```go
func NodeShapeConfig() ContainerengineNodePoolNodeShapeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference">ContainerengineNodePoolNodeShapeConfigOutputReference</a>

---

##### `NodeSource`<sup>Required</sup> <a name="NodeSource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSource"></a>

```go
func NodeSource() ContainerengineNodePoolNodeSourceList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList">ContainerengineNodePoolNodeSourceList</a>

---

##### `NodeSourceDetails`<sup>Required</sup> <a name="NodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetails"></a>

```go
func NodeSourceDetails() ContainerengineNodePoolNodeSourceDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference">ContainerengineNodePoolNodeSourceDetailsOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeouts"></a>

```go
func Timeouts() ContainerengineNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference">ContainerengineNodePoolTimeoutsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialNodeLabelsInput`<sup>Optional</sup> <a name="InitialNodeLabelsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.initialNodeLabelsInput"></a>

```go
func InitialNodeLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `KubernetesVersionInput`<sup>Optional</sup> <a name="KubernetesVersionInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersionInput"></a>

```go
func KubernetesVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `NodeConfigDetailsInput`<sup>Optional</sup> <a name="NodeConfigDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeConfigDetailsInput"></a>

```go
func NodeConfigDetailsInput() ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---

##### `NodeEvictionNodePoolSettingsInput`<sup>Optional</sup> <a name="NodeEvictionNodePoolSettingsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeEvictionNodePoolSettingsInput"></a>

```go
func NodeEvictionNodePoolSettingsInput() ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---

##### `NodeImageIdInput`<sup>Optional</sup> <a name="NodeImageIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageIdInput"></a>

```go
func NodeImageIdInput() *string
```

- *Type:* *string

---

##### `NodeImageNameInput`<sup>Optional</sup> <a name="NodeImageNameInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageNameInput"></a>

```go
func NodeImageNameInput() *string
```

- *Type:* *string

---

##### `NodeMetadataInput`<sup>Optional</sup> <a name="NodeMetadataInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadataInput"></a>

```go
func NodeMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodePoolCyclingDetailsInput`<sup>Optional</sup> <a name="NodePoolCyclingDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodePoolCyclingDetailsInput"></a>

```go
func NodePoolCyclingDetailsInput() ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---

##### `NodeShapeConfigInput`<sup>Optional</sup> <a name="NodeShapeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeConfigInput"></a>

```go
func NodeShapeConfigInput() ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---

##### `NodeShapeInput`<sup>Optional</sup> <a name="NodeShapeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShapeInput"></a>

```go
func NodeShapeInput() *string
```

- *Type:* *string

---

##### `NodeSourceDetailsInput`<sup>Optional</sup> <a name="NodeSourceDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeSourceDetailsInput"></a>

```go
func NodeSourceDetailsInput() ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---

##### `QuantityPerSubnetInput`<sup>Optional</sup> <a name="QuantityPerSubnetInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnetInput"></a>

```go
func QuantityPerSubnetInput() *f64
```

- *Type:* *f64

---

##### `SshPublicKeyInput`<sup>Optional</sup> <a name="SshPublicKeyInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKeyInput"></a>

```go
func SshPublicKeyInput() *string
```

- *Type:* *string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodeImageId`<sup>Required</sup> <a name="NodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageId"></a>

```go
func NodeImageId() *string
```

- *Type:* *string

---

##### `NodeImageName`<sup>Required</sup> <a name="NodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeImageName"></a>

```go
func NodeImageName() *string
```

- *Type:* *string

---

##### `NodeMetadata`<sup>Required</sup> <a name="NodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeMetadata"></a>

```go
func NodeMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `NodeShape`<sup>Required</sup> <a name="NodeShape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.nodeShape"></a>

```go
func NodeShape() *string
```

- *Type:* *string

---

##### `QuantityPerSubnet`<sup>Required</sup> <a name="QuantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.quantityPerSubnet"></a>

```go
func QuantityPerSubnet() *f64
```

- *Type:* *f64

---

##### `SshPublicKey`<sup>Required</sup> <a name="SshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.sshPublicKey"></a>

```go
func SshPublicKey() *string
```

- *Type:* *string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineNodePoolConfig <a name="ContainerengineNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	CompartmentId: *string,
	Name: *string,
	NodeShape: *string,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InitialNodeLabels: interface{},
	KubernetesVersion: *string,
	NodeConfigDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails,
	NodeEvictionNodePoolSettings: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings,
	NodeImageId: *string,
	NodeImageName: *string,
	NodeMetadata: *map[string]*string,
	NodePoolCyclingDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails,
	NodeShapeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig,
	NodeSourceDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails,
	QuantityPerSubnet: *f64,
	SshPublicKey: *string,
	SubnetIds: *[]*string,
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolTimeouts,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape">NodeShape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels">InitialNodeLabels</a></code> | <code>interface{}</code> | initial_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails">NodeConfigDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | node_config_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings">NodeEvictionNodePoolSettings</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | node_eviction_node_pool_settings block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId">NodeImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName">NodeImageName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata">NodeMetadata</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails">NodePoolCyclingDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | node_pool_cycling_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig">NodeShapeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | node_shape_config block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails">NodeSourceDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | node_source_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet">QuantityPerSubnet</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey">SshPublicKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a></code> | timeouts block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cluster_id ContainerengineNodePool#cluster_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#compartment_id ContainerengineNodePool#compartment_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#name ContainerengineNodePool#name}.

---

##### `NodeShape`<sup>Required</sup> <a name="NodeShape" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShape"></a>

```go
NodeShape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape ContainerengineNodePool#node_shape}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#id ContainerengineNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialNodeLabels`<sup>Optional</sup> <a name="InitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.initialNodeLabels"></a>

```go
InitialNodeLabels interface{}
```

- *Type:* interface{}

initial_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#initial_node_labels ContainerengineNodePool#initial_node_labels}

---

##### `KubernetesVersion`<sup>Optional</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.kubernetesVersion"></a>

```go
KubernetesVersion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kubernetes_version ContainerengineNodePool#kubernetes_version}.

---

##### `NodeConfigDetails`<sup>Optional</sup> <a name="NodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeConfigDetails"></a>

```go
NodeConfigDetails ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

node_config_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_config_details ContainerengineNodePool#node_config_details}

---

##### `NodeEvictionNodePoolSettings`<sup>Optional</sup> <a name="NodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeEvictionNodePoolSettings"></a>

```go
NodeEvictionNodePoolSettings ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

node_eviction_node_pool_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_eviction_node_pool_settings ContainerengineNodePool#node_eviction_node_pool_settings}

---

##### `NodeImageId`<sup>Optional</sup> <a name="NodeImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageId"></a>

```go
NodeImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_id ContainerengineNodePool#node_image_id}.

---

##### `NodeImageName`<sup>Optional</sup> <a name="NodeImageName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeImageName"></a>

```go
NodeImageName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_image_name ContainerengineNodePool#node_image_name}.

---

##### `NodeMetadata`<sup>Optional</sup> <a name="NodeMetadata" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeMetadata"></a>

```go
NodeMetadata *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_metadata ContainerengineNodePool#node_metadata}.

---

##### `NodePoolCyclingDetails`<sup>Optional</sup> <a name="NodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodePoolCyclingDetails"></a>

```go
NodePoolCyclingDetails ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

node_pool_cycling_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_cycling_details ContainerengineNodePool#node_pool_cycling_details}

---

##### `NodeShapeConfig`<sup>Optional</sup> <a name="NodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeShapeConfig"></a>

```go
NodeShapeConfig ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

node_shape_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_shape_config ContainerengineNodePool#node_shape_config}

---

##### `NodeSourceDetails`<sup>Optional</sup> <a name="NodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.nodeSourceDetails"></a>

```go
NodeSourceDetails ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

node_source_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_source_details ContainerengineNodePool#node_source_details}

---

##### `QuantityPerSubnet`<sup>Optional</sup> <a name="QuantityPerSubnet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.quantityPerSubnet"></a>

```go
QuantityPerSubnet *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#quantity_per_subnet ContainerengineNodePool#quantity_per_subnet}.

---

##### `SshPublicKey`<sup>Optional</sup> <a name="SshPublicKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.sshPublicKey"></a>

```go
SshPublicKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ssh_public_key ContainerengineNodePool#ssh_public_key}.

---

##### `SubnetIds`<sup>Optional</sup> <a name="SubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_ids ContainerengineNodePool#subnet_ids}.

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolConfig.property.timeouts"></a>

```go
Timeouts ContainerengineNodePoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts">ContainerengineNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#timeouts ContainerengineNodePool#timeouts}

---

### ContainerengineNodePoolInitialNodeLabels <a name="ContainerengineNodePoolInitialNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolInitialNodeLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#key ContainerengineNodePool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#value ContainerengineNodePool#value}.

---

### ContainerengineNodePoolNodeConfigDetails <a name="ContainerengineNodePoolNodeConfigDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeConfigDetails {
	PlacementConfigs: interface{},
	Size: *f64,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	IsPvEncryptionInTransitEnabled: interface{},
	KmsKeyId: *string,
	NodePoolPodNetworkOptionDetails: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs">PlacementConfigs</a></code> | <code>interface{}</code> | placement_configs block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails">NodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | node_pool_pod_network_option_details block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}. |

---

##### `PlacementConfigs`<sup>Required</sup> <a name="PlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.placementConfigs"></a>

```go
PlacementConfigs interface{}
```

- *Type:* interface{}

placement_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#placement_configs ContainerengineNodePool#placement_configs}

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#size ContainerengineNodePool#size}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#defined_tags ContainerengineNodePool#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#freeform_tags ContainerengineNodePool#freeform_tags}.

---

##### `IsPvEncryptionInTransitEnabled`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.isPvEncryptionInTransitEnabled"></a>

```go
IsPvEncryptionInTransitEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_pv_encryption_in_transit_enabled ContainerengineNodePool#is_pv_encryption_in_transit_enabled}.

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#kms_key_id ContainerengineNodePool#kms_key_id}.

---

##### `NodePoolPodNetworkOptionDetails`<sup>Optional</sup> <a name="NodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nodePoolPodNetworkOptionDetails"></a>

```go
NodePoolPodNetworkOptionDetails ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

node_pool_pod_network_option_details block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#node_pool_pod_network_option_details ContainerengineNodePool#node_pool_pod_network_option_details}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#nsg_ids ContainerengineNodePool#nsg_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails {
	CniType: *string,
	MaxPodsPerNode: *f64,
	PodNsgIds: *[]*string,
	PodSubnetIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType">CniType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds">PodNsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds">PodSubnetIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}. |

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.cniType"></a>

```go
CniType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#cni_type ContainerengineNodePool#cni_type}.

---

##### `MaxPodsPerNode`<sup>Optional</sup> <a name="MaxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.maxPodsPerNode"></a>

```go
MaxPodsPerNode *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#max_pods_per_node ContainerengineNodePool#max_pods_per_node}.

---

##### `PodNsgIds`<sup>Optional</sup> <a name="PodNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podNsgIds"></a>

```go
PodNsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_nsg_ids ContainerengineNodePool#pod_nsg_ids}.

---

##### `PodSubnetIds`<sup>Optional</sup> <a name="PodSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails.property.podSubnetIds"></a>

```go
PodSubnetIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#pod_subnet_ids ContainerengineNodePool#pod_subnet_ids}.

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigs <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs {
	AvailabilityDomain: *string,
	SubnetId: *string,
	CapacityReservationId: *string,
	FaultDomains: *[]*string,
	PreemptibleNodeConfig: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig">PreemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | preemptible_node_config block. |

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#availability_domain ContainerengineNodePool#availability_domain}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#subnet_id ContainerengineNodePool#subnet_id}.

---

##### `CapacityReservationId`<sup>Optional</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.capacityReservationId"></a>

```go
CapacityReservationId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#capacity_reservation_id ContainerengineNodePool#capacity_reservation_id}.

---

##### `FaultDomains`<sup>Optional</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.faultDomains"></a>

```go
FaultDomains *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#fault_domains ContainerengineNodePool#fault_domains}.

---

##### `PreemptibleNodeConfig`<sup>Optional</sup> <a name="PreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigs.property.preemptibleNodeConfig"></a>

```go
PreemptibleNodeConfig ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

preemptible_node_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemptible_node_config ContainerengineNodePool#preemptible_node_config}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig {
	PreemptionAction: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | preemption_action block. |

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig.property.preemptionAction"></a>

```go
PreemptionAction ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

preemption_action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#preemption_action ContainerengineNodePool#preemption_action}

---

### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction {
	Type: *string,
	IsPreserveBootVolume: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type">Type</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume">IsPreserveBootVolume</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.type"></a>

```go
Type *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#type ContainerengineNodePool#type}.

---

##### `IsPreserveBootVolume`<sup>Optional</sup> <a name="IsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction.property.isPreserveBootVolume"></a>

```go
IsPreserveBootVolume interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_preserve_boot_volume ContainerengineNodePool#is_preserve_boot_volume}.

---

### ContainerengineNodePoolNodeEvictionNodePoolSettings <a name="ContainerengineNodePoolNodeEvictionNodePoolSettings" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeEvictionNodePoolSettings {
	EvictionGraceDuration: *string,
	IsForceDeleteAfterGraceDuration: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration">EvictionGraceDuration</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration">IsForceDeleteAfterGraceDuration</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}. |

---

##### `EvictionGraceDuration`<sup>Optional</sup> <a name="EvictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.evictionGraceDuration"></a>

```go
EvictionGraceDuration *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#eviction_grace_duration ContainerengineNodePool#eviction_grace_duration}.

---

##### `IsForceDeleteAfterGraceDuration`<sup>Optional</sup> <a name="IsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings.property.isForceDeleteAfterGraceDuration"></a>

```go
IsForceDeleteAfterGraceDuration interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_force_delete_after_grace_duration ContainerengineNodePool#is_force_delete_after_grace_duration}.

---

### ContainerengineNodePoolNodePoolCyclingDetails <a name="ContainerengineNodePoolNodePoolCyclingDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodePoolCyclingDetails {
	IsNodeCyclingEnabled: interface{},
	MaximumSurge: *string,
	MaximumUnavailable: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled">IsNodeCyclingEnabled</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge">MaximumSurge</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable">MaximumUnavailable</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}. |

---

##### `IsNodeCyclingEnabled`<sup>Optional</sup> <a name="IsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.isNodeCyclingEnabled"></a>

```go
IsNodeCyclingEnabled interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#is_node_cycling_enabled ContainerengineNodePool#is_node_cycling_enabled}.

---

##### `MaximumSurge`<sup>Optional</sup> <a name="MaximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumSurge"></a>

```go
MaximumSurge *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_surge ContainerengineNodePool#maximum_surge}.

---

##### `MaximumUnavailable`<sup>Optional</sup> <a name="MaximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails.property.maximumUnavailable"></a>

```go
MaximumUnavailable *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#maximum_unavailable ContainerengineNodePool#maximum_unavailable}.

---

### ContainerengineNodePoolNodes <a name="ContainerengineNodePoolNodes" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodes {

}
```


### ContainerengineNodePoolNodesError <a name="ContainerengineNodePoolNodesError" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodesError {

}
```


### ContainerengineNodePoolNodeShapeConfig <a name="ContainerengineNodePoolNodeShapeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeShapeConfig {
	MemoryInGbs: *f64,
	Ocpus: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus">Ocpus</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}. |

---

##### `MemoryInGbs`<sup>Optional</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.memoryInGbs"></a>

```go
MemoryInGbs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#memory_in_gbs ContainerengineNodePool#memory_in_gbs}.

---

##### `Ocpus`<sup>Optional</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig.property.ocpus"></a>

```go
Ocpus *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#ocpus ContainerengineNodePool#ocpus}.

---

### ContainerengineNodePoolNodeSource <a name="ContainerengineNodePoolNodeSource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeSource {

}
```


### ContainerengineNodePoolNodeSourceDetails <a name="ContainerengineNodePoolNodeSourceDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolNodeSourceDetails {
	ImageId: *string,
	SourceType: *string,
	BootVolumeSizeInGbs: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId">ImageId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType">SourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}. |

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.imageId"></a>

```go
ImageId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#image_id ContainerengineNodePool#image_id}.

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.sourceType"></a>

```go
SourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#source_type ContainerengineNodePool#source_type}.

---

##### `BootVolumeSizeInGbs`<sup>Optional</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails.property.bootVolumeSizeInGbs"></a>

```go
BootVolumeSizeInGbs *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#boot_volume_size_in_gbs ContainerengineNodePool#boot_volume_size_in_gbs}.

---

### ContainerengineNodePoolTimeouts <a name="ContainerengineNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

&containerenginenodepool.ContainerengineNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#create ContainerengineNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#delete ContainerengineNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_node_pool#update ContainerengineNodePool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineNodePoolInitialNodeLabelsList <a name="ContainerengineNodePoolInitialNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolInitialNodeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineNodePoolInitialNodeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get"></a>

```go
func Get(index *f64) ContainerengineNodePoolInitialNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineNodePoolInitialNodeLabelsOutputReference <a name="ContainerengineNodePoolInitialNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolInitialNodeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineNodePoolInitialNodeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolInitialNodeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode">ResetMaxPodsPerNode</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds">ResetPodNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds">ResetPodSubnetIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMaxPodsPerNode` <a name="ResetMaxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetMaxPodsPerNode"></a>

```go
func ResetMaxPodsPerNode()
```

##### `ResetPodNsgIds` <a name="ResetPodNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodNsgIds"></a>

```go
func ResetPodNsgIds()
```

##### `ResetPodSubnetIds` <a name="ResetPodSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.resetPodSubnetIds"></a>

```go
func ResetPodSubnetIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput">CniTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput">MaxPodsPerNodeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput">PodNsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput">PodSubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType">CniType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode">MaxPodsPerNode</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds">PodNsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds">PodSubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CniTypeInput`<sup>Optional</sup> <a name="CniTypeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniTypeInput"></a>

```go
func CniTypeInput() *string
```

- *Type:* *string

---

##### `MaxPodsPerNodeInput`<sup>Optional</sup> <a name="MaxPodsPerNodeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNodeInput"></a>

```go
func MaxPodsPerNodeInput() *f64
```

- *Type:* *f64

---

##### `PodNsgIdsInput`<sup>Optional</sup> <a name="PodNsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIdsInput"></a>

```go
func PodNsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PodSubnetIdsInput`<sup>Optional</sup> <a name="PodSubnetIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIdsInput"></a>

```go
func PodSubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `CniType`<sup>Required</sup> <a name="CniType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.cniType"></a>

```go
func CniType() *string
```

- *Type:* *string

---

##### `MaxPodsPerNode`<sup>Required</sup> <a name="MaxPodsPerNode" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.maxPodsPerNode"></a>

```go
func MaxPodsPerNode() *f64
```

- *Type:* *f64

---

##### `PodNsgIds`<sup>Required</sup> <a name="PodNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podNsgIds"></a>

```go
func PodNsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `PodSubnetIds`<sup>Required</sup> <a name="PodSubnetIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.podSubnetIds"></a>

```go
func PodSubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeConfigDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails">PutNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs">PutPlacementConfigs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled">ResetIsPvEncryptionInTransitEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails">ResetNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutNodePoolPodNetworkOptionDetails` <a name="PutNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails"></a>

```go
func PutNodePoolPodNetworkOptionDetails(value ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putNodePoolPodNetworkOptionDetails.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---

##### `PutPlacementConfigs` <a name="PutPlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs"></a>

```go
func PutPlacementConfigs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.putPlacementConfigs.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetIsPvEncryptionInTransitEnabled` <a name="ResetIsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetIsPvEncryptionInTransitEnabled"></a>

```go
func ResetIsPvEncryptionInTransitEnabled()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetNodePoolPodNetworkOptionDetails` <a name="ResetNodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNodePoolPodNetworkOptionDetails"></a>

```go
func ResetNodePoolPodNetworkOptionDetails()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails">NodePoolPodNetworkOptionDetails</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs">PlacementConfigs</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput">IsPvEncryptionInTransitEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput">NodePoolPodNetworkOptionDetailsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput">PlacementConfigsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled">IsPvEncryptionInTransitEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size">Size</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NodePoolPodNetworkOptionDetails`<sup>Required</sup> <a name="NodePoolPodNetworkOptionDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetails"></a>

```go
func NodePoolPodNetworkOptionDetails() ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetailsOutputReference</a>

---

##### `PlacementConfigs`<sup>Required</sup> <a name="PlacementConfigs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigs"></a>

```go
func PlacementConfigs() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList</a>

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsPvEncryptionInTransitEnabledInput`<sup>Optional</sup> <a name="IsPvEncryptionInTransitEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabledInput"></a>

```go
func IsPvEncryptionInTransitEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NodePoolPodNetworkOptionDetailsInput`<sup>Optional</sup> <a name="NodePoolPodNetworkOptionDetailsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nodePoolPodNetworkOptionDetailsInput"></a>

```go
func NodePoolPodNetworkOptionDetailsInput() ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails">ContainerengineNodePoolNodeConfigDetailsNodePoolPodNetworkOptionDetails</a>

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlacementConfigsInput`<sup>Optional</sup> <a name="PlacementConfigsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.placementConfigsInput"></a>

```go
func PlacementConfigsInput() interface{}
```

- *Type:* interface{}

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IsPvEncryptionInTransitEnabled`<sup>Required</sup> <a name="IsPvEncryptionInTransitEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.isPvEncryptionInTransitEnabled"></a>

```go
func IsPvEncryptionInTransitEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeConfigDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetails">ContainerengineNodePoolNodeConfigDetails</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsPlacementConfigsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get"></a>

```go
func Get(index *f64) ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig">PutPreemptibleNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId">ResetCapacityReservationId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains">ResetFaultDomains</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig">ResetPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreemptibleNodeConfig` <a name="PutPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig"></a>

```go
func PutPreemptibleNodeConfig(value ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.putPreemptibleNodeConfig.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---

##### `ResetCapacityReservationId` <a name="ResetCapacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetCapacityReservationId"></a>

```go
func ResetCapacityReservationId()
```

##### `ResetFaultDomains` <a name="ResetFaultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetFaultDomains"></a>

```go
func ResetFaultDomains()
```

##### `ResetPreemptibleNodeConfig` <a name="ResetPreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.resetPreemptibleNodeConfig"></a>

```go
func ResetPreemptibleNodeConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig">PreemptibleNodeConfig</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput">CapacityReservationIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput">FaultDomainsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput">PreemptibleNodeConfigInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId">CapacityReservationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains">FaultDomains</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptibleNodeConfig`<sup>Required</sup> <a name="PreemptibleNodeConfig" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfig"></a>

```go
func PreemptibleNodeConfig() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference</a>

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `CapacityReservationIdInput`<sup>Optional</sup> <a name="CapacityReservationIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationIdInput"></a>

```go
func CapacityReservationIdInput() *string
```

- *Type:* *string

---

##### `FaultDomainsInput`<sup>Optional</sup> <a name="FaultDomainsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomainsInput"></a>

```go
func FaultDomainsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PreemptibleNodeConfigInput`<sup>Optional</sup> <a name="PreemptibleNodeConfigInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.preemptibleNodeConfigInput"></a>

```go
func PreemptibleNodeConfigInput() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `CapacityReservationId`<sup>Required</sup> <a name="CapacityReservationId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.capacityReservationId"></a>

```go
func CapacityReservationId() *string
```

- *Type:* *string

---

##### `FaultDomains`<sup>Required</sup> <a name="FaultDomains" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.faultDomains"></a>

```go
func FaultDomains() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction">PutPreemptionAction</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPreemptionAction` <a name="PutPreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction"></a>

```go
func PutPreemptionAction(value ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.putPreemptionAction.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction">PreemptionAction</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput">PreemptionActionInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PreemptionAction`<sup>Required</sup> <a name="PreemptionAction" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionAction"></a>

```go
func PreemptionAction() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference</a>

---

##### `PreemptionActionInput`<sup>Optional</sup> <a name="PreemptionActionInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.preemptionActionInput"></a>

```go
func PreemptionActionInput() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfig</a>

---


### ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference <a name="ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume">ResetIsPreserveBootVolume</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsPreserveBootVolume` <a name="ResetIsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.resetIsPreserveBootVolume"></a>

```go
func ResetIsPreserveBootVolume()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput">IsPreserveBootVolumeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume">IsPreserveBootVolume</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsPreserveBootVolumeInput`<sup>Optional</sup> <a name="IsPreserveBootVolumeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolumeInput"></a>

```go
func IsPreserveBootVolumeInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `IsPreserveBootVolume`<sup>Required</sup> <a name="IsPreserveBootVolume" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.isPreserveBootVolume"></a>

```go
func IsPreserveBootVolume() interface{}
```

- *Type:* interface{}

---

##### `Type`<sup>Required</sup> <a name="Type" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionActionOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction">ContainerengineNodePoolNodeConfigDetailsPlacementConfigsPreemptibleNodeConfigPreemptionAction</a>

---


### ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference <a name="ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration">ResetEvictionGraceDuration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration">ResetIsForceDeleteAfterGraceDuration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEvictionGraceDuration` <a name="ResetEvictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetEvictionGraceDuration"></a>

```go
func ResetEvictionGraceDuration()
```

##### `ResetIsForceDeleteAfterGraceDuration` <a name="ResetIsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.resetIsForceDeleteAfterGraceDuration"></a>

```go
func ResetIsForceDeleteAfterGraceDuration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput">EvictionGraceDurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput">IsForceDeleteAfterGraceDurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration">EvictionGraceDuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration">IsForceDeleteAfterGraceDuration</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EvictionGraceDurationInput`<sup>Optional</sup> <a name="EvictionGraceDurationInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDurationInput"></a>

```go
func EvictionGraceDurationInput() *string
```

- *Type:* *string

---

##### `IsForceDeleteAfterGraceDurationInput`<sup>Optional</sup> <a name="IsForceDeleteAfterGraceDurationInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDurationInput"></a>

```go
func IsForceDeleteAfterGraceDurationInput() interface{}
```

- *Type:* interface{}

---

##### `EvictionGraceDuration`<sup>Required</sup> <a name="EvictionGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.evictionGraceDuration"></a>

```go
func EvictionGraceDuration() *string
```

- *Type:* *string

---

##### `IsForceDeleteAfterGraceDuration`<sup>Required</sup> <a name="IsForceDeleteAfterGraceDuration" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.isForceDeleteAfterGraceDuration"></a>

```go
func IsForceDeleteAfterGraceDuration() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeEvictionNodePoolSettings
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeEvictionNodePoolSettings">ContainerengineNodePoolNodeEvictionNodePoolSettings</a>

---


### ContainerengineNodePoolNodePoolCyclingDetailsOutputReference <a name="ContainerengineNodePoolNodePoolCyclingDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodePoolCyclingDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodePoolCyclingDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled">ResetIsNodeCyclingEnabled</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge">ResetMaximumSurge</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable">ResetMaximumUnavailable</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsNodeCyclingEnabled` <a name="ResetIsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetIsNodeCyclingEnabled"></a>

```go
func ResetIsNodeCyclingEnabled()
```

##### `ResetMaximumSurge` <a name="ResetMaximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumSurge"></a>

```go
func ResetMaximumSurge()
```

##### `ResetMaximumUnavailable` <a name="ResetMaximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.resetMaximumUnavailable"></a>

```go
func ResetMaximumUnavailable()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput">IsNodeCyclingEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput">MaximumSurgeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput">MaximumUnavailableInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled">IsNodeCyclingEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge">MaximumSurge</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable">MaximumUnavailable</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsNodeCyclingEnabledInput`<sup>Optional</sup> <a name="IsNodeCyclingEnabledInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabledInput"></a>

```go
func IsNodeCyclingEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `MaximumSurgeInput`<sup>Optional</sup> <a name="MaximumSurgeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurgeInput"></a>

```go
func MaximumSurgeInput() *string
```

- *Type:* *string

---

##### `MaximumUnavailableInput`<sup>Optional</sup> <a name="MaximumUnavailableInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailableInput"></a>

```go
func MaximumUnavailableInput() *string
```

- *Type:* *string

---

##### `IsNodeCyclingEnabled`<sup>Required</sup> <a name="IsNodeCyclingEnabled" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.isNodeCyclingEnabled"></a>

```go
func IsNodeCyclingEnabled() interface{}
```

- *Type:* interface{}

---

##### `MaximumSurge`<sup>Required</sup> <a name="MaximumSurge" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumSurge"></a>

```go
func MaximumSurge() *string
```

- *Type:* *string

---

##### `MaximumUnavailable`<sup>Required</sup> <a name="MaximumUnavailable" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.maximumUnavailable"></a>

```go
func MaximumUnavailable() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodePoolCyclingDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodePoolCyclingDetails">ContainerengineNodePoolNodePoolCyclingDetails</a>

---


### ContainerengineNodePoolNodesErrorList <a name="ContainerengineNodePoolNodesErrorList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodesErrorList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineNodePoolNodesErrorList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get"></a>

```go
func Get(index *f64) ContainerengineNodePoolNodesErrorOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ContainerengineNodePoolNodesErrorOutputReference <a name="ContainerengineNodePoolNodesErrorOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodesErrorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineNodePoolNodesErrorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code">Code</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Code`<sup>Required</sup> <a name="Code" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.code"></a>

```go
func Code() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodesError
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesError">ContainerengineNodePoolNodesError</a>

---


### ContainerengineNodePoolNodeShapeConfigOutputReference <a name="ContainerengineNodePoolNodeShapeConfigOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeShapeConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeShapeConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs">ResetMemoryInGbs</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus">ResetOcpus</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMemoryInGbs` <a name="ResetMemoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetMemoryInGbs"></a>

```go
func ResetMemoryInGbs()
```

##### `ResetOcpus` <a name="ResetOcpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.resetOcpus"></a>

```go
func ResetOcpus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput">MemoryInGbsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput">OcpusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs">MemoryInGbs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus">Ocpus</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MemoryInGbsInput`<sup>Optional</sup> <a name="MemoryInGbsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbsInput"></a>

```go
func MemoryInGbsInput() *f64
```

- *Type:* *f64

---

##### `OcpusInput`<sup>Optional</sup> <a name="OcpusInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpusInput"></a>

```go
func OcpusInput() *f64
```

- *Type:* *f64

---

##### `MemoryInGbs`<sup>Required</sup> <a name="MemoryInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.memoryInGbs"></a>

```go
func MemoryInGbs() *f64
```

- *Type:* *f64

---

##### `Ocpus`<sup>Required</sup> <a name="Ocpus" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.ocpus"></a>

```go
func Ocpus() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeShapeConfig
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeShapeConfig">ContainerengineNodePoolNodeShapeConfig</a>

---


### ContainerengineNodePoolNodesList <a name="ContainerengineNodePoolNodesList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineNodePoolNodesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get"></a>

```go
func Get(index *f64) ContainerengineNodePoolNodesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ContainerengineNodePoolNodeSourceDetailsOutputReference <a name="ContainerengineNodePoolNodeSourceDetailsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeSourceDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolNodeSourceDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs">ResetBootVolumeSizeInGbs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBootVolumeSizeInGbs` <a name="ResetBootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.resetBootVolumeSizeInGbs"></a>

```go
func ResetBootVolumeSizeInGbs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput">BootVolumeSizeInGbsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput">ImageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput">SourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs">BootVolumeSizeInGbs</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BootVolumeSizeInGbsInput`<sup>Optional</sup> <a name="BootVolumeSizeInGbsInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbsInput"></a>

```go
func BootVolumeSizeInGbsInput() *string
```

- *Type:* *string

---

##### `ImageIdInput`<sup>Optional</sup> <a name="ImageIdInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageIdInput"></a>

```go
func ImageIdInput() *string
```

- *Type:* *string

---

##### `SourceTypeInput`<sup>Optional</sup> <a name="SourceTypeInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceTypeInput"></a>

```go
func SourceTypeInput() *string
```

- *Type:* *string

---

##### `BootVolumeSizeInGbs`<sup>Required</sup> <a name="BootVolumeSizeInGbs" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.bootVolumeSizeInGbs"></a>

```go
func BootVolumeSizeInGbs() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeSourceDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceDetails">ContainerengineNodePoolNodeSourceDetails</a>

---


### ContainerengineNodePoolNodeSourceList <a name="ContainerengineNodePoolNodeSourceList" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeSourceList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineNodePoolNodeSourceList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get"></a>

```go
func Get(index *f64) ContainerengineNodePoolNodeSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### ContainerengineNodePoolNodeSourceOutputReference <a name="ContainerengineNodePoolNodeSourceOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodeSourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineNodePoolNodeSourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId">ImageId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName">SourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType">SourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ImageId`<sup>Required</sup> <a name="ImageId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.imageId"></a>

```go
func ImageId() *string
```

- *Type:* *string

---

##### `SourceName`<sup>Required</sup> <a name="SourceName" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceName"></a>

```go
func SourceName() *string
```

- *Type:* *string

---

##### `SourceType`<sup>Required</sup> <a name="SourceType" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.sourceType"></a>

```go
func SourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSourceOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodeSource
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodeSource">ContainerengineNodePoolNodeSource</a>

---


### ContainerengineNodePoolNodesOutputReference <a name="ContainerengineNodePoolNodesOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolNodesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineNodePoolNodesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags">DefinedTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error">Error</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags">FreeformTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId">NodePoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp">PrivateIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp">PublicIp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.definedTags"></a>

```go
func DefinedTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Error`<sup>Required</sup> <a name="Error" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.error"></a>

```go
func Error() ContainerengineNodePoolNodesErrorList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesErrorList">ContainerengineNodePoolNodesErrorList</a>

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.freeformTags"></a>

```go
func FreeformTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `NodePoolId`<sup>Required</sup> <a name="NodePoolId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.nodePoolId"></a>

```go
func NodePoolId() *string
```

- *Type:* *string

---

##### `PrivateIp`<sup>Required</sup> <a name="PrivateIp" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.privateIp"></a>

```go
func PrivateIp() *string
```

- *Type:* *string

---

##### `PublicIp`<sup>Required</sup> <a name="PublicIp" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.publicIp"></a>

```go
func PublicIp() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodesOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineNodePoolNodes
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolNodes">ContainerengineNodePoolNodes</a>

---


### ContainerengineNodePoolTimeoutsOutputReference <a name="ContainerengineNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginenodepool"

containerenginenodepool.NewContainerengineNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineNodePool.ContainerengineNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



