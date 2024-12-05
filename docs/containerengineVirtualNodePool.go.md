# `containerengineVirtualNodePool` Submodule <a name="`containerengineVirtualNodePool` Submodule" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ContainerengineVirtualNodePool <a name="ContainerengineVirtualNodePool" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool oci_containerengine_virtual_node_pool}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePool(scope Construct, id *string, config ContainerengineVirtualNodePoolConfig) ContainerengineVirtualNodePool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.config">config</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig">ContainerengineVirtualNodePoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.Initializer.parameter.config"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig">ContainerengineVirtualNodePoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels">PutInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations">PutPlacementConfigurations</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration">PutPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints">PutTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts">PutTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags">PutVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels">ResetInitialVirtualNodeLabels</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds">ResetNsgIds</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints">ResetTaints</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts">ResetTimeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags">ResetVirtualNodeTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `AddOverride` <a name="AddOverride" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.importFrom.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutInitialVirtualNodeLabels` <a name="PutInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels"></a>

```go
func PutInitialVirtualNodeLabels(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putInitialVirtualNodeLabels.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPlacementConfigurations` <a name="PutPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations"></a>

```go
func PutPlacementConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPlacementConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPodConfiguration` <a name="PutPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration"></a>

```go
func PutPodConfiguration(value ContainerengineVirtualNodePoolPodConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putPodConfiguration.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `PutTaints` <a name="PutTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints"></a>

```go
func PutTaints(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTaints.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTimeouts` <a name="PutTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts"></a>

```go
func PutTimeouts(value ContainerengineVirtualNodePoolTimeouts)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

---

##### `PutVirtualNodeTags` <a name="PutVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags"></a>

```go
func PutVirtualNodeTags(value ContainerengineVirtualNodePoolVirtualNodeTags)
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.putVirtualNodeTags.parameter.value"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```

##### `ResetId` <a name="ResetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetId"></a>

```go
func ResetId()
```

##### `ResetInitialVirtualNodeLabels` <a name="ResetInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetInitialVirtualNodeLabels"></a>

```go
func ResetInitialVirtualNodeLabels()
```

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetNsgIds"></a>

```go
func ResetNsgIds()
```

##### `ResetTaints` <a name="ResetTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTaints"></a>

```go
func ResetTaints()
```

##### `ResetTimeouts` <a name="ResetTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetTimeouts"></a>

```go
func ResetTimeouts()
```

##### `ResetVirtualNodeTags` <a name="ResetVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.resetVirtualNodeTags"></a>

```go
func ResetVirtualNodeTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.ContainerengineVirtualNodePool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.ContainerengineVirtualNodePool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.ContainerengineVirtualNodePool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.ContainerengineVirtualNodePool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTF code for importing a ContainerengineVirtualNodePool resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ContainerengineVirtualNodePool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ContainerengineVirtualNodePool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

? Optional instance of the provider where the ContainerengineVirtualNodePool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels">InitialVirtualNodeLabels</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion">KubernetesVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails">LifecycleDetails</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations">PlacementConfigurations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration">PodConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags">SystemTags</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints">Taints</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated">TimeCreated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated">TimeUpdated</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags">VirtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput">ClusterIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput">CompartmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput">InitialVirtualNodeLabelsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput">PlacementConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput">PodConfigurationInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput">SizeInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput">TaintsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput">TimeoutsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput">VirtualNodeTagsInput</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId">ClusterId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size">Size</a></code> | <code>*f64</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `InitialVirtualNodeLabels`<sup>Required</sup> <a name="InitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabels"></a>

```go
func InitialVirtualNodeLabels() ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList">ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList</a>

---

##### `KubernetesVersion`<sup>Required</sup> <a name="KubernetesVersion" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.kubernetesVersion"></a>

```go
func KubernetesVersion() *string
```

- *Type:* *string

---

##### `LifecycleDetails`<sup>Required</sup> <a name="LifecycleDetails" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.lifecycleDetails"></a>

```go
func LifecycleDetails() *string
```

- *Type:* *string

---

##### `PlacementConfigurations`<sup>Required</sup> <a name="PlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurations"></a>

```go
func PlacementConfigurations() ContainerengineVirtualNodePoolPlacementConfigurationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList">ContainerengineVirtualNodePoolPlacementConfigurationsList</a>

---

##### `PodConfiguration`<sup>Required</sup> <a name="PodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfiguration"></a>

```go
func PodConfiguration() ContainerengineVirtualNodePoolPodConfigurationOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference">ContainerengineVirtualNodePoolPodConfigurationOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `SystemTags`<sup>Required</sup> <a name="SystemTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.systemTags"></a>

```go
func SystemTags() StringMap
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.StringMap

---

##### `Taints`<sup>Required</sup> <a name="Taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taints"></a>

```go
func Taints() ContainerengineVirtualNodePoolTaintsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList">ContainerengineVirtualNodePoolTaintsList</a>

---

##### `TimeCreated`<sup>Required</sup> <a name="TimeCreated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeCreated"></a>

```go
func TimeCreated() *string
```

- *Type:* *string

---

##### `Timeouts`<sup>Required</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeouts"></a>

```go
func Timeouts() ContainerengineVirtualNodePoolTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference">ContainerengineVirtualNodePoolTimeoutsOutputReference</a>

---

##### `TimeUpdated`<sup>Required</sup> <a name="TimeUpdated" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeUpdated"></a>

```go
func TimeUpdated() *string
```

- *Type:* *string

---

##### `VirtualNodeTags`<sup>Required</sup> <a name="VirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTags"></a>

```go
func VirtualNodeTags() ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference">ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference</a>

---

##### `ClusterIdInput`<sup>Optional</sup> <a name="ClusterIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterIdInput"></a>

```go
func ClusterIdInput() *string
```

- *Type:* *string

---

##### `CompartmentIdInput`<sup>Optional</sup> <a name="CompartmentIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentIdInput"></a>

```go
func CompartmentIdInput() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `InitialVirtualNodeLabelsInput`<sup>Optional</sup> <a name="InitialVirtualNodeLabelsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.initialVirtualNodeLabelsInput"></a>

```go
func InitialVirtualNodeLabelsInput() interface{}
```

- *Type:* interface{}

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PlacementConfigurationsInput`<sup>Optional</sup> <a name="PlacementConfigurationsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.placementConfigurationsInput"></a>

```go
func PlacementConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `PodConfigurationInput`<sup>Optional</sup> <a name="PodConfigurationInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.podConfigurationInput"></a>

```go
func PodConfigurationInput() ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---

##### `SizeInput`<sup>Optional</sup> <a name="SizeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.sizeInput"></a>

```go
func SizeInput() *f64
```

- *Type:* *f64

---

##### `TaintsInput`<sup>Optional</sup> <a name="TaintsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.taintsInput"></a>

```go
func TaintsInput() interface{}
```

- *Type:* interface{}

---

##### `TimeoutsInput`<sup>Optional</sup> <a name="TimeoutsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.timeoutsInput"></a>

```go
func TimeoutsInput() interface{}
```

- *Type:* interface{}

---

##### `VirtualNodeTagsInput`<sup>Optional</sup> <a name="VirtualNodeTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.virtualNodeTagsInput"></a>

```go
func VirtualNodeTagsInput() ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.clusterId"></a>

```go
func ClusterId() *string
```

- *Type:* *string

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.compartmentId"></a>

```go
func CompartmentId() *string
```

- *Type:* *string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Id`<sup>Required</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.size"></a>

```go
func Size() *f64
```

- *Type:* *f64

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ContainerengineVirtualNodePoolConfig <a name="ContainerengineVirtualNodePoolConfig" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable,
	ForEach: github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator,
	Lifecycle: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle,
	Provider: github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider,
	Provisioners: *[]interface{},
	ClusterId: *string,
	CompartmentId: *string,
	DisplayName: *string,
	PlacementConfigurations: interface{},
	PodConfiguration: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration,
	Size: *f64,
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
	Id: *string,
	InitialVirtualNodeLabels: interface{},
	NsgIds: *[]*string,
	Taints: interface{},
	Timeouts: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts,
	VirtualNodeTags: github.com/rhizo-co/cdktf-provider-oci-go/oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach">ForEach</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider">Provider</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId">ClusterId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId">CompartmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations">PlacementConfigurations</a></code> | <code>interface{}</code> | placement_configurations block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration">PodConfiguration</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | pod_configuration block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size">Size</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels">InitialVirtualNodeLabels</a></code> | <code>interface{}</code> | initial_virtual_node_labels block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints">Taints</a></code> | <code>interface{}</code> | taints block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts">Timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags">VirtualNodeTags</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | virtual_node_tags block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ClusterId`<sup>Required</sup> <a name="ClusterId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.clusterId"></a>

```go
ClusterId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#cluster_id ContainerengineVirtualNodePool#cluster_id}.

---

##### `CompartmentId`<sup>Required</sup> <a name="CompartmentId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.compartmentId"></a>

```go
CompartmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#compartment_id ContainerengineVirtualNodePool#compartment_id}.

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#display_name ContainerengineVirtualNodePool#display_name}.

---

##### `PlacementConfigurations`<sup>Required</sup> <a name="PlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.placementConfigurations"></a>

```go
PlacementConfigurations interface{}
```

- *Type:* interface{}

placement_configurations block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#placement_configurations ContainerengineVirtualNodePool#placement_configurations}

---

##### `PodConfiguration`<sup>Required</sup> <a name="PodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.podConfiguration"></a>

```go
PodConfiguration ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

pod_configuration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#pod_configuration ContainerengineVirtualNodePool#pod_configuration}

---

##### `Size`<sup>Required</sup> <a name="Size" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.size"></a>

```go
Size *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#size ContainerengineVirtualNodePool#size}.

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

##### `Id`<sup>Optional</sup> <a name="Id" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#id ContainerengineVirtualNodePool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `InitialVirtualNodeLabels`<sup>Optional</sup> <a name="InitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.initialVirtualNodeLabels"></a>

```go
InitialVirtualNodeLabels interface{}
```

- *Type:* interface{}

initial_virtual_node_labels block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#initial_virtual_node_labels ContainerengineVirtualNodePool#initial_virtual_node_labels}

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

##### `Taints`<sup>Optional</sup> <a name="Taints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.taints"></a>

```go
Taints interface{}
```

- *Type:* interface{}

taints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#taints ContainerengineVirtualNodePool#taints}

---

##### `Timeouts`<sup>Optional</sup> <a name="Timeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.timeouts"></a>

```go
Timeouts ContainerengineVirtualNodePoolTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts">ContainerengineVirtualNodePoolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#timeouts ContainerengineVirtualNodePool#timeouts}

---

##### `VirtualNodeTags`<sup>Optional</sup> <a name="VirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolConfig.property.virtualNodeTags"></a>

```go
VirtualNodeTags ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

virtual_node_tags block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#virtual_node_tags ContainerengineVirtualNodePool#virtual_node_tags}

---

### ContainerengineVirtualNodePoolInitialVirtualNodeLabels <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabels" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabels.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolPlacementConfigurations <a name="ContainerengineVirtualNodePoolPlacementConfigurations" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolPlacementConfigurations {
	AvailabilityDomain: *string,
	FaultDomain: *[]*string,
	SubnetId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain">FaultDomain</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.availabilityDomain"></a>

```go
AvailabilityDomain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#availability_domain ContainerengineVirtualNodePool#availability_domain}.

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.faultDomain"></a>

```go
FaultDomain *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#fault_domain ContainerengineVirtualNodePool#fault_domain}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurations.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

### ContainerengineVirtualNodePoolPodConfiguration <a name="ContainerengineVirtualNodePoolPodConfiguration" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolPodConfiguration {
	Shape: *string,
	SubnetId: *string,
	NsgIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape">Shape</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId">SubnetId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}. |

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.shape"></a>

```go
Shape *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#shape ContainerengineVirtualNodePool#shape}.

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#subnet_id ContainerengineVirtualNodePool#subnet_id}.

---

##### `NsgIds`<sup>Optional</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration.property.nsgIds"></a>

```go
NsgIds *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#nsg_ids ContainerengineVirtualNodePool#nsg_ids}.

---

### ContainerengineVirtualNodePoolTaints <a name="ContainerengineVirtualNodePoolTaints" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolTaints {
	Effect: *string,
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect">Effect</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}. |

---

##### `Effect`<sup>Optional</sup> <a name="Effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.effect"></a>

```go
Effect *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#effect ContainerengineVirtualNodePool#effect}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#key ContainerengineVirtualNodePool#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaints.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#value ContainerengineVirtualNodePool#value}.

---

### ContainerengineVirtualNodePoolTimeouts <a name="ContainerengineVirtualNodePoolTimeouts" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolTimeouts {
	Create: *string,
	Delete: *string,
	Update: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create">Create</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete">Delete</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update">Update</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}. |

---

##### `Create`<sup>Optional</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.create"></a>

```go
Create *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#create ContainerengineVirtualNodePool#create}.

---

##### `Delete`<sup>Optional</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.delete"></a>

```go
Delete *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#delete ContainerengineVirtualNodePool#delete}.

---

##### `Update`<sup>Optional</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeouts.property.update"></a>

```go
Update *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#update ContainerengineVirtualNodePool#update}.

---

### ContainerengineVirtualNodePoolVirtualNodeTags <a name="ContainerengineVirtualNodePoolVirtualNodeTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

&containerenginevirtualnodepool.ContainerengineVirtualNodePoolVirtualNodeTags {
	DefinedTags: *map[string]*string,
	FreeformTags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}. |

---

##### `DefinedTags`<sup>Optional</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.definedTags"></a>

```go
DefinedTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#defined_tags ContainerengineVirtualNodePool#defined_tags}.

---

##### `FreeformTags`<sup>Optional</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags.property.freeformTags"></a>

```go
FreeformTags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/containerengine_virtual_node_pool#freeform_tags ContainerengineVirtualNodePool#freeform_tags}.

---

## Classes <a name="Classes" id="Classes"></a>

### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolInitialVirtualNodeLabelsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get"></a>

```go
func Get(index *f64) ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference <a name="ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolInitialVirtualNodeLabelsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolPlacementConfigurationsList <a name="ContainerengineVirtualNodePoolPlacementConfigurationsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolPlacementConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineVirtualNodePoolPlacementConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get"></a>

```go
func Get(index *f64) ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference <a name="ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolPlacementConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput">AvailabilityDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput">FaultDomainInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain">AvailabilityDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain">FaultDomain</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AvailabilityDomainInput`<sup>Optional</sup> <a name="AvailabilityDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomainInput"></a>

```go
func AvailabilityDomainInput() *string
```

- *Type:* *string

---

##### `FaultDomainInput`<sup>Optional</sup> <a name="FaultDomainInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomainInput"></a>

```go
func FaultDomainInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `AvailabilityDomain`<sup>Required</sup> <a name="AvailabilityDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.availabilityDomain"></a>

```go
func AvailabilityDomain() *string
```

- *Type:* *string

---

##### `FaultDomain`<sup>Required</sup> <a name="FaultDomain" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.faultDomain"></a>

```go
func FaultDomain() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPlacementConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolPodConfigurationOutputReference <a name="ContainerengineVirtualNodePoolPodConfigurationOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolPodConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineVirtualNodePoolPodConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds">ResetNsgIds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetNsgIds` <a name="ResetNsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.resetNsgIds"></a>

```go
func ResetNsgIds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput">NsgIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput">ShapeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds">NsgIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape">Shape</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NsgIdsInput`<sup>Optional</sup> <a name="NsgIdsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIdsInput"></a>

```go
func NsgIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ShapeInput`<sup>Optional</sup> <a name="ShapeInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shapeInput"></a>

```go
func ShapeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `NsgIds`<sup>Required</sup> <a name="NsgIds" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.nsgIds"></a>

```go
func NsgIds() *[]*string
```

- *Type:* *[]*string

---

##### `Shape`<sup>Required</sup> <a name="Shape" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.shape"></a>

```go
func Shape() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineVirtualNodePoolPodConfiguration
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolPodConfiguration">ContainerengineVirtualNodePoolPodConfiguration</a>

---


### ContainerengineVirtualNodePoolTaintsList <a name="ContainerengineVirtualNodePoolTaintsList" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolTaintsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ContainerengineVirtualNodePoolTaintsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get"></a>

```go
func Get(index *f64) ContainerengineVirtualNodePoolTaintsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolTaintsOutputReference <a name="ContainerengineVirtualNodePoolTaintsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolTaintsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ContainerengineVirtualNodePoolTaintsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect">ResetEffect</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEffect` <a name="ResetEffect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetEffect"></a>

```go
func ResetEffect()
```

##### `ResetKey` <a name="ResetKey" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput">EffectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect">Effect</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EffectInput`<sup>Optional</sup> <a name="EffectInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effectInput"></a>

```go
func EffectInput() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Effect`<sup>Required</sup> <a name="Effect" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.effect"></a>

```go
func Effect() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTaintsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolTimeoutsOutputReference <a name="ContainerengineVirtualNodePoolTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolTimeoutsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineVirtualNodePoolTimeoutsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate">ResetCreate</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete">ResetDelete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate">ResetUpdate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCreate` <a name="ResetCreate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetCreate"></a>

```go
func ResetCreate()
```

##### `ResetDelete` <a name="ResetDelete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetDelete"></a>

```go
func ResetDelete()
```

##### `ResetUpdate` <a name="ResetUpdate" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.resetUpdate"></a>

```go
func ResetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput">CreateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput">DeleteInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput">UpdateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create">Create</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete">Delete</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update">Update</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CreateInput`<sup>Optional</sup> <a name="CreateInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.createInput"></a>

```go
func CreateInput() *string
```

- *Type:* *string

---

##### `DeleteInput`<sup>Optional</sup> <a name="DeleteInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.deleteInput"></a>

```go
func DeleteInput() *string
```

- *Type:* *string

---

##### `UpdateInput`<sup>Optional</sup> <a name="UpdateInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.updateInput"></a>

```go
func UpdateInput() *string
```

- *Type:* *string

---

##### `Create`<sup>Required</sup> <a name="Create" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.create"></a>

```go
func Create() *string
```

- *Type:* *string

---

##### `Delete`<sup>Required</sup> <a name="Delete" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.delete"></a>

```go
func Delete() *string
```

- *Type:* *string

---

##### `Update`<sup>Required</sup> <a name="Update" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.update"></a>

```go
func Update() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolTimeoutsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference <a name="ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer"></a>

```go
import "github.com/rhizo-co/cdktf-provider-oci-go/oci/containerenginevirtualnodepool"

containerenginevirtualnodepool.NewContainerengineVirtualNodePoolVirtualNodeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags">ResetDefinedTags</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags">ResetFreeformTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/hashicorp/terraform-cdk-go/cdktf.IResolveContext

---

##### `ToString` <a name="ToString" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDefinedTags` <a name="ResetDefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetDefinedTags"></a>

```go
func ResetDefinedTags()
```

##### `ResetFreeformTags` <a name="ResetFreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.resetFreeformTags"></a>

```go
func ResetFreeformTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput">DefinedTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput">FreeformTagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags">DefinedTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags">FreeformTags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DefinedTagsInput`<sup>Optional</sup> <a name="DefinedTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTagsInput"></a>

```go
func DefinedTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTagsInput`<sup>Optional</sup> <a name="FreeformTagsInput" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTagsInput"></a>

```go
func FreeformTagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `DefinedTags`<sup>Required</sup> <a name="DefinedTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.definedTags"></a>

```go
func DefinedTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `FreeformTags`<sup>Required</sup> <a name="FreeformTags" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.freeformTags"></a>

```go
func FreeformTags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() ContainerengineVirtualNodePoolVirtualNodeTags
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.containerengineVirtualNodePool.ContainerengineVirtualNodePoolVirtualNodeTags">ContainerengineVirtualNodePoolVirtualNodeTags</a>

---



